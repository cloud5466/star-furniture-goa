import { FirebaseError } from "firebase/app";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  writeBatch,
} from "firebase/firestore";

import { getFirebaseFirestore } from "@/lib/firebase/firestore";
import type { WishlistProduct } from "@/lib/wishlist";
import type {
  FirestoreWishlistItem,
  WishlistItemInput,
} from "@/types/firebase";

function getWishlistCollection(userId: string) {
  return collection(getFirebaseFirestore(), "users", userId, "wishlist");
}

export function subscribeToWishlist({
  userId,
  onChange,
  onError,
}: {
  userId: string;
  onChange: (items: FirestoreWishlistItem[]) => void;
  onError: (message: string) => void;
}) {
  return onSnapshot(
    getWishlistCollection(userId),
    (snapshot) => {
      onChange(
        snapshot.docs.map((wishlistDoc) => {
          const data = wishlistDoc.data();

          return {
            productId: String(data.productId ?? wishlistDoc.id),
            category: String(data.category ?? ""),
            addedAt: data.addedAt ?? null,
          };
        }),
      );
    },
    (error) => {
      onError(getWishlistErrorMessage(error));
    },
  );
}

export async function addWishlistItem({
  userId,
  item,
}: {
  userId: string;
  item: WishlistItemInput;
}) {
  await setDoc(
    doc(getWishlistCollection(userId), item.productId),
    {
      productId: item.productId,
      category: item.category,
      addedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

export async function removeWishlistItem({
  userId,
  productId,
}: {
  userId: string;
  productId: string;
}) {
  await deleteDoc(doc(getWishlistCollection(userId), productId));
}

export async function mergeGuestWishlistIntoFirestore({
  userId,
  products,
}: {
  userId: string;
  products: WishlistProduct[];
}) {
  if (products.length === 0) {
    return;
  }

  const firestore = getFirebaseFirestore();
  const batch = writeBatch(firestore);
  const uniqueProducts = new Map(
    products.map((product) => [product.id, product]),
  );

  uniqueProducts.forEach((product) => {
    batch.set(
      doc(firestore, "users", userId, "wishlist", product.id),
      {
        productId: product.id,
        category: product.category,
        addedAt: serverTimestamp(),
      },
      { merge: true },
    );
  });

  await batch.commit();
}

export function getWishlistErrorMessage(error: unknown) {
  if (error instanceof FirebaseError) {
    if (error.code === "unavailable") {
      return "Wishlist is temporarily unavailable. Please check your connection and try again.";
    }

    if (error.code === "permission-denied") {
      return "We could not access your wishlist. Please sign in again.";
    }
  }

  return "We could not update your wishlist. Please try again.";
}
