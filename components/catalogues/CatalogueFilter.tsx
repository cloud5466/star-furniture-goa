"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

interface CatalogueFilterProps {
  label: string;
  categories: readonly string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CatalogueFilter({
  label,
  categories,
  selectedCategory,
  onSelectCategory,
}: CatalogueFilterProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div aria-label={label} className="flex flex-wrap gap-2" role="group">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;

        return (
          <motion.button
            aria-pressed={isSelected}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-dark)]",
              isSelected
                ? "border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-bg-dark)]"
                : "border-[rgba(212,160,60,0.28)] bg-[rgba(255,248,238,0.04)] text-[rgba(255,248,238,0.78)] hover:border-[rgba(212,160,60,0.56)] hover:text-[var(--color-cream)]",
            )}
            key={category}
            onClick={() => onSelectCategory(category)}
            transition={{ duration: 0.2, ease: "easeOut" }}
            type="button"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
          >
            {category}
          </motion.button>
        );
      })}
    </div>
  );
}

