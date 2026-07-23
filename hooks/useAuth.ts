"use client";

import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { clearGuestWishlist, readGuestWishlist } from "@/lib/wishlist";
import {
  getAuthErrorMessage,
  signInWithGoogle as signInWithGoogleService,
  signOutUser,
  subscribeToAuthState,
} from "@/services/auth.service";
import { mergeGuestWishlistIntoFirestore } from "@/services/wishlist.service";
import type { AppUser } from "@/types/user";

interface AuthContextValue {
  user: AppUser | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function FirebaseAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      return subscribeToAuthState({
        onChange: (nextUser) => {
          setUser(nextUser);
          setIsLoading(false);

          if (!nextUser) {
            return;
          }

          const guestWishlist = readGuestWishlist();

          if (guestWishlist.length === 0) {
            return;
          }

          void mergeGuestWishlistIntoFirestore({
            userId: nextUser.uid,
            products: guestWishlist,
          })
            .then(() => {
              clearGuestWishlist();
            })
            .catch(() => {
              setError(
                "You are signed in, but we could not merge your guest wishlist. Please try again.",
              );
            });
        },
        onError: (message) => {
          setError(message);
          setIsLoading(false);
        },
      });
    } catch (subscribeError) {
      setError(getAuthErrorMessage(subscribeError));
      setIsLoading(false);
      return undefined;
    }
  }, []);

  const signInWithGoogle = useCallback(async () => {
    setError(null);

    try {
      await signInWithGoogleService();
    } catch (signInError) {
      setError(getAuthErrorMessage(signInError));
      throw signInError;
    }
  }, []);

  const signOut = useCallback(async () => {
    setError(null);

    try {
      await signOutUser();
    } catch (signOutError) {
      setError(getAuthErrorMessage(signOutError));
      throw signOutError;
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isLoading,
      error,
      isAuthenticated: Boolean(user),
      signInWithGoogle,
      signOut,
      clearError: () => setError(null),
    }),
    [error, isLoading, signInWithGoogle, signOut, user],
  );

  return createElement(AuthContext.Provider, { value }, children);
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside FirebaseAuthProvider.");
  }

  return context;
}
