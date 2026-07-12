"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { LoadMoreButton } from "@/components/category/LoadMoreButton";
import {
  ProductCard,
  type CategoryProductCardItem,
} from "@/components/category/ProductCard";

interface ProductGridProps {
  kicker: string;
  title: string;
  products: CategoryProductCardItem[];
  featuredLabel: string;
  detailsLabel: string;
  emptyMessage: string;
  loadMoreLabel: string;
  visibleCount: number;
  batchSize: number;
  onLoadMore: () => void;
  productDetailBasePath: string;
}

export function ProductGrid({
  kicker,
  title,
  products,
  featuredLabel,
  detailsLabel,
  emptyMessage,
  loadMoreLabel,
  visibleCount,
  batchSize,
  onLoadMore,
  productDetailBasePath,
}: ProductGridProps) {
  const shouldReduceMotion = useReducedMotion();
  const visibleProducts = products.slice(0, visibleCount);
  const remainingCount = products.length - visibleProducts.length;

  return (
    <section className="bg-[var(--color-bg-dark)] px-4 py-12 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:py-20 xl:px-14">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-8">
          <div>
            <p className="section-kicker mb-4">{kicker}</p>
            <h2 className="font-display text-[2rem] font-semibold leading-[1.08] text-[var(--color-cream)] sm:text-[3rem]">
              {title}
            </h2>
          </div>
        </div>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          layout
        >
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((product) => (
              <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.98, y: 10 }
                }
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.98, y: 12 }
                }
                key={product.id}
                layout
                transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
              >
                <ProductCard
                  detailsLabel={detailsLabel}
                  featuredLabel={featuredLabel}
                  productDetailBasePath={productDetailBasePath}
                  product={product}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {products.length === 0 ? (
          <div className="mt-8 rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.04)] px-5 py-8 text-center text-sm text-[rgba(255,248,238,0.72)]">
            {emptyMessage}
          </div>
        ) : null}

        <LoadMoreButton
          label={loadMoreLabel}
          onClick={() => {
            onLoadMore();
          }}
          remainingCount={Math.min(remainingCount, batchSize)}
        />
      </div>
    </section>
  );
}

