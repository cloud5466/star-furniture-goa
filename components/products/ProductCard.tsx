"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/shared-ui/Button";

export interface ProductCardItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  shortDescription: string;
  featured: boolean;
}

interface ProductCardProps {
  product: ProductCardItem;
  featuredLabel: string;
  detailsLabel: string;
  productDetailBasePath: string;
}

export function ProductCard({
  product,
  featuredLabel,
  detailsLabel,
  productDetailBasePath,
}: ProductCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group h-full overflow-hidden rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.035)] text-[var(--color-cream)] shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
      layout
      transition={{ duration: 0.24, ease: "easeOut" }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
    >
      <div className="relative aspect-[16/11] overflow-hidden bg-[#0d0d0d]">
        <Image
          alt={`${product.name} by Star Furniture Goa`}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={product.image}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.74),rgba(0,0,0,0.08)_58%)]"
        />
        {product.featured ? (
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-[rgba(212,160,60,0.4)] bg-[rgba(25,25,25,0.72)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-gold)] backdrop-blur">
            <Star aria-hidden="true" className="h-3.5 w-3.5 fill-current" />
            {featuredLabel}
          </div>
        ) : null}
      </div>

      <div className="grid gap-3 p-5">
        <p className="section-kicker">{product.category}</p>
        <h3 className="font-display text-[1.35rem] font-semibold leading-tight tracking-[0.04em] text-[var(--color-gold)]">
          {product.name}
        </h3>
        <p className="text-sm leading-6 text-[rgba(255,248,238,0.72)]">
          {product.shortDescription}
        </p>
        <div className="pt-2">
          <Button asChild className="group/button" size="sm" variant="outline">
            <Link href={`${productDetailBasePath}/${product.slug}`}>
              {detailsLabel}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-1"
              />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
