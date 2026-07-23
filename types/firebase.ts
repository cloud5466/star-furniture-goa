import type { Timestamp } from "firebase/firestore";

export interface FirebaseUserDocument {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface FirestoreWishlistItem {
  productId: string;
  category: string;
  addedAt: Timestamp | null;
}

export interface WishlistItemInput {
  productId: string;
  category: string;
}
