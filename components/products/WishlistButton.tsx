"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

import { Button } from "@/components/shared-ui/Button";
import {
  readGuestWishlist,
  type WishlistProduct,
  writeGuestWishlist,
} from "@/lib/wishlist";

interface WishlistButtonProps {
  product: WishlistProduct;
  saveLabel: string;
  savedLabel: string;
}

export function WishlistButton({
  product,
  saveLabel,
  savedLabel,
}: WishlistButtonProps) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setIsSaved(
      readGuestWishlist().some(
        (wishlistProduct) => wishlistProduct.id === product.id,
      ),
    );
  }, [product.id]);

  function handleToggleWishlist() {
    const currentWishlist = readGuestWishlist();
    const nextWishlist = isSaved
      ? currentWishlist.filter(
          (wishlistProduct) => wishlistProduct.id !== product.id,
        )
      : [...currentWishlist, product];

    writeGuestWishlist(nextWishlist);
    setIsSaved(!isSaved);
  }

  return (
    <Button
      aria-pressed={isSaved}
      onClick={handleToggleWishlist}
      size="lg"
      type="button"
      variant={isSaved ? "primary" : "outline"}
    >
      <Heart
        aria-hidden="true"
        className={isSaved ? "h-4 w-4 fill-current" : "h-4 w-4"}
      />
      {isSaved ? savedLabel : saveLabel}
    </Button>
  );
}
