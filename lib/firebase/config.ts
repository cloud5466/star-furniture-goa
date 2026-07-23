import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId,
);

export class FirebaseConfigurationError extends Error {
  constructor() {
    super("Firebase is not configured. Check the NEXT_PUBLIC_FIREBASE_* environment variables.");
    this.name = "FirebaseConfigurationError";
  }
}

export function getFirebaseApp(): FirebaseApp {
  if (!isFirebaseConfigured) {
    throw new FirebaseConfigurationError();
  }

  return getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
}
