import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  type Auth,
} from "firebase/auth";

import { getFirebaseApp } from "@/lib/firebase/config";

export function getFirebaseAuth(): Auth {
  return getAuth(getFirebaseApp());
}

export function configureAuthPersistence() {
  return setPersistence(getFirebaseAuth(), browserLocalPersistence);
}
