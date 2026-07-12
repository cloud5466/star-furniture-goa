"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

import { Button } from "@/components/shared-ui/Button";

interface WishlistProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  shortDescription: string;
}

interface WishlistButtonProps {
  product: WishlistProduct;
  saveLabel: string;
  savedLabel: string;
}

const wishlistStorageKey = "star-furniture-goa:wishlist";

function readWishlist(): WishlistProduct[] {
  if (typeof window === "undefined") {
    return [];
  }

  const storedWishlist = window.localStorage.getItem(wishlistStorageKey);

  if (!storedWishlist) {
    return [];
  }

  try {
    return JSON.parse(storedWishlist) as WishlistProduct[];
  } catch {
    return [];
  }
}

export function WishlistButton({
  product,
  saveLabel,
  savedLabel,
}: WishlistButtonProps) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setIsSaved(
      readWishlist().some((wishlistProduct) => wishlistProduct.id === product.id),
    );
  }, [product.id]);

  function handleToggleWishlist() {
    const currentWishlist = readWishlist();
    const nextWishlist = isSaved
      ? currentWishlist.filter(
          (wishlistProduct) => wishlistProduct.id !== product.id,
        )
      : [...currentWishlist, product];

    window.localStorage.setItem(
      wishlistStorageKey,
      JSON.stringify(nextWishlist),
    );
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
