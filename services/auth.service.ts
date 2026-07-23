import { FirebaseError } from "firebase/app";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

import { configureAuthPersistence, getFirebaseAuth } from "@/lib/firebase/auth";
import { getFirebaseFirestore } from "@/lib/firebase/firestore";
import type { AppUser } from "@/types/user";

export function mapFirebaseUser(user: User): AppUser {
  return {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
  };
}

export async function ensureUserDocument(user: AppUser) {
  const firestore = getFirebaseFirestore();
  const userRef = doc(firestore, "users", user.uid);
  const existingUser = await getDoc(userRef);

  await setDoc(
    userRef,
    {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: existingUser.exists()
        ? existingUser.data().createdAt
        : serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

export async function signInWithGoogle() {
  await configureAuthPersistence();

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });

  const result = await signInWithPopup(getFirebaseAuth(), provider);
  const user = mapFirebaseUser(result.user);
  await ensureUserDocument(user);

  return user;
}

export async function signOutUser() {
  await signOut(getFirebaseAuth());
}

export function subscribeToAuthState({
  onChange,
  onError,
}: {
  onChange: (user: AppUser | null) => void;
  onError: (message: string) => void;
}) {
  void configureAuthPersistence().catch((error) => {
    onError(getAuthErrorMessage(error));
  });

  return onAuthStateChanged(
    getFirebaseAuth(),
    (firebaseUser) => {
      if (!firebaseUser) {
        onChange(null);
        return;
      }

      const user = mapFirebaseUser(firebaseUser);
      onChange(user);
      void ensureUserDocument(user).catch((error) => {
        onError(getAuthErrorMessage(error));
      });
    },
    (error) => {
      onError(getAuthErrorMessage(error));
    },
  );
}

export function getAuthErrorMessage(error: unknown) {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case "auth/popup-blocked":
        return "Your browser blocked the Google sign-in popup. Please allow popups and try again.";
      case "auth/popup-closed-by-user":
      case "auth/cancelled-popup-request":
        return "Google sign-in was closed before it finished.";
      case "auth/network-request-failed":
        return "Network error while signing in. Please check your connection and try again.";
      case "auth/unauthorized-domain":
        return "This domain is not authorized for Firebase sign-in.";
      case "auth/configuration-not-found":
      case "auth/invalid-api-key":
        return "Firebase sign-in is not configured correctly.";
      default:
        return "We could not complete sign-in. Please try again.";
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong. Please try again.";
}
