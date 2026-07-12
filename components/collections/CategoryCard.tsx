"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import type { CollectionCategory } from "@/data/collections";

interface CategoryCardProps {
  category: CollectionCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group h-full"
      transition={{ duration: 0.22, ease: "easeOut" }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
    >
      <Link
        className="grid h-full overflow-hidden rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.035)] text-[var(--color-cream)] shadow-[0_24px_70px_rgba(0,0,0,0.22)] transition-colors duration-200 hover:border-[rgba(212,160,60,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-dark)]"
        href={category.href}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0b0b0b]">
          <Image
            alt={`${category.title} category by Star Furniture Goa`}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            src={category.image}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),rgba(0,0,0,0.08)_58%)]"
          />
        </div>

        <div className="grid gap-3 p-5">
          <div className="flex items-start justify-between gap-4">
            <p className="section-kicker">{category.badge}</p>
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-[var(--color-gold)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.8}
            />
          </div>
          <h3 className="font-display text-[1.35rem] font-semibold leading-tight tracking-[0.04em] text-[var(--color-gold)]">
            {category.title}
          </h3>
          <p className="text-sm leading-6 text-[rgba(255,248,238,0.72)]">
            {category.description}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
