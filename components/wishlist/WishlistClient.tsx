"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

import { Button } from "@/components/shared-ui/Button";
import { routes } from "@/constants/routes";
import { getAllCategoryProducts } from "@/data/categoryPages";
import { useAuth } from "@/hooks/useAuth";
import { useWishlist } from "@/hooks/useWishlist";
import type { WishlistProduct } from "@/lib/wishlist";

const allProducts = getAllCategoryProducts();

function getWishlistProducts({
  guestProducts,
  productIds,
  isAuthenticated,
}: {
  guestProducts: WishlistProduct[];
  productIds: string[];
  isAuthenticated: boolean;
}) {
  if (!isAuthenticated) {
    return guestProducts;
  }

  return productIds
    .map((productId) => {
      const match = allProducts.find(
        ({ product }) => product.id === productId,
      )?.product;

      if (!match) {
        return null;
      }

      return {
        id: match.id,
        slug: match.slug,
        name: match.name,
        category: match.category,
        image: match.image,
        shortDescription: match.shortDescription,
      };
    })
    .filter((product): product is WishlistProduct => Boolean(product));
}

export function WishlistClient() {
  const { user, isAuthenticated } = useAuth();
  const { error, guestProducts, isLoading, productIds } = useWishlist();
  const products = getWishlistProducts({
    guestProducts,
    productIds,
    isAuthenticated,
  });

  return (
    <section className="bg-[var(--color-bg-dark)] px-4 pb-16 pt-4 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:pb-20 xl:px-14">
      <div className="mx-auto w-full max-w-[1280px]">
        {isAuthenticated ? (
          <div className="mb-8 rounded-[8px] border border-[rgba(212,160,60,0.24)] bg-[rgba(255,248,238,0.04)] p-4 text-sm leading-6 text-[rgba(255,248,238,0.72)]">
            Signed in as{" "}
            <span className="font-semibold text-[var(--color-gold)]">
              {user?.displayName ?? "Customer"}
            </span>
            . Wishlist items shown here are saved to your customer account.
          </div>
        ) : null}

        {error ? (
          <div className="mb-8 rounded-[8px] border border-[rgba(212,160,60,0.24)] bg-[rgba(255,248,238,0.04)] p-4 text-sm leading-6 text-[var(--color-gold)]">
            {error}
          </div>
        ) : null}

        {isLoading ? (
          <div className="rounded-[8px] border border-[rgba(212,160,60,0.24)] bg-[rgba(255,248,238,0.035)] px-6 py-12 text-center text-sm text-[rgba(255,248,238,0.68)]">
            Loading your wishlist...
          </div>
        ) : products.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                className="group overflow-hidden rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.035)]"
                key={product.id}
              >
                <Link
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                  href={`/products/${product.slug}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[rgba(255,248,238,0.06)]">
                    <Image
                      alt={product.name}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      src={product.image}
                    />
                  </div>
                  <div className="p-5">
                    <p className="section-kicker mb-2">{product.category}</p>
                    <h2 className="font-display text-2xl font-semibold text-[var(--color-cream)]">
                      {product.name}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-[rgba(255,248,238,0.68)]">
                      {product.shortDescription}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-gold)]">
                      View Details
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-[8px] border border-[rgba(212,160,60,0.24)] bg-[rgba(255,248,238,0.035)] px-6 py-12 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-[rgba(212,160,60,0.36)] text-[var(--color-gold)]">
              <Heart aria-hidden="true" className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold text-[var(--color-cream)]">
              Your wishlist is empty
            </h2>
            <p className="mx-auto mt-3 max-w-[520px] text-sm leading-6 text-[rgba(255,248,238,0.68)]">
              Save furniture pieces while browsing and return here when you are
              ready to compare designs or start a consultation.
            </p>
            <Button asChild className="mt-7" size="lg">
              <Link href={routes.collections}>Explore Collections</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
