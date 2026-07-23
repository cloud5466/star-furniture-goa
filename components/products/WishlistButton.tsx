"use client";

import { Heart } from "lucide-react";

import { Button } from "@/components/shared-ui/Button";
import { useWishlist } from "@/hooks/useWishlist";
import type { WishlistProduct } from "@/lib/wishlist";

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
  const { error, isLoading, isProductSaved, toggleProduct } = useWishlist();
  const isSaved = isProductSaved(product.id);

  return (
    <div className="grid gap-2">
      <Button
        aria-pressed={isSaved}
        disabled={isLoading}
        onClick={() => {
          void toggleProduct(product);
        }}
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
      {error ? (
        <p className="text-xs leading-5 text-[var(--color-gold)]">{error}</p>
      ) : null}
    </div>
  );
}
