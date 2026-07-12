"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  label: string;
  cardKicker: string;
  categories: readonly string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({
  label,
  cardKicker,
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-label={label}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      role="group"
    >
      {categories.map((category) => {
        const isSelected = selectedCategory === category;

        return (
          <motion.button
            aria-pressed={isSelected}
            className={cn(
              "group min-h-[112px] rounded-[8px] border px-5 py-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-dark)]",
              isSelected
                ? "border-[var(--color-gold)] bg-[rgba(212,160,60,0.14)] shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
                : "border-[rgba(212,160,60,0.24)] bg-[rgba(255,248,238,0.04)] hover:border-[rgba(212,160,60,0.58)] hover:bg-[rgba(255,248,238,0.06)]",
            )}
            key={category}
            onClick={() => onSelectCategory(category)}
            transition={{ duration: 0.22, ease: "easeOut" }}
            type="button"
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
          >
            <span className="section-kicker block text-[0.68rem]">
              {cardKicker}
            </span>
            <span
              className={cn(
                "mt-3 block font-display text-[1.35rem] font-semibold leading-tight transition-colors duration-200",
                isSelected
                  ? "text-[var(--color-gold)]"
                  : "text-[var(--color-cream)] group-hover:text-[var(--color-gold)]",
              )}
            >
              {category}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}

