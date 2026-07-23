"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { useAuth } from "@/hooks/useAuth";
import {
  readGuestWishlist,
  type WishlistProduct,
  writeGuestWishlist,
} from "@/lib/wishlist";
import {
  addWishlistItem,
  removeWishlistItem,
  subscribeToWishlist,
} from "@/services/wishlist.service";
import type { FirestoreWishlistItem } from "@/types/firebase";

export function useWishlist() {
  const { user, isLoading: isAuthLoading } = useAuth();
  const [guestProducts, setGuestProducts] = useState<WishlistProduct[]>([]);
  const [firestoreItems, setFirestoreItems] = useState<FirestoreWishlistItem[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthLoading) {
      return;
    }

    setError(null);

    if (!user) {
      setGuestProducts(readGuestWishlist());
      setFirestoreItems([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    return subscribeToWishlist({
      userId: user.uid,
      onChange: (items) => {
        setFirestoreItems(items);
        setIsLoading(false);
      },
      onError: (message) => {
        setError(message);
        setIsLoading(false);
      },
    });
  }, [isAuthLoading, user]);

  const productIds = useMemo(
    () =>
      user
        ? firestoreItems.map((item) => item.productId)
        : guestProducts.map((product) => product.id),
    [firestoreItems, guestProducts, user],
  );

  const isProductSaved = useCallback(
    (productId: string) => productIds.includes(productId),
    [productIds],
  );

  const toggleProduct = useCallback(
    async (product: WishlistProduct) => {
      setError(null);
      const isSaved = isProductSaved(product.id);

      if (!user) {
        const nextGuestProducts = isSaved
          ? guestProducts.filter(
              (guestProduct) => guestProduct.id !== product.id,
            )
          : [...guestProducts, product];

        writeGuestWishlist(nextGuestProducts);
        setGuestProducts(nextGuestProducts);
        return;
      }

      try {
        if (isSaved) {
          await removeWishlistItem({
            userId: user.uid,
            productId: product.id,
          });
          return;
        }

        await addWishlistItem({
          userId: user.uid,
          item: {
            productId: product.id,
            category: product.category,
          },
        });
      } catch {
        setError("We could not update your wishlist. Please try again.");
      }
    },
    [guestProducts, isProductSaved, user],
  );

  return {
    guestProducts,
    firestoreItems,
    productIds,
    isLoading: isLoading || isAuthLoading,
    error,
    isProductSaved,
    toggleProduct,
  };
}
