"use client";

import { motion, useReducedMotion } from "motion/react";

import type { DesignFurnitureCategory } from "@/data/designYourSpace";
import { cn } from "@/lib/utils";

interface FurnitureSelectorProps {
  kicker: string;
  title: string;
  label: string;
  categories: readonly DesignFurnitureCategory[];
  selectedCategory: DesignFurnitureCategory;
  onSelectCategory: (category: DesignFurnitureCategory) => void;
}

export function FurnitureSelector({
  kicker,
  title,
  label,
  categories,
  selectedCategory,
  onSelectCategory,
}: FurnitureSelectorProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.04)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-6">
      <p className="section-kicker mb-3">{kicker}</p>
      <h2 className="font-display text-[1.75rem] font-semibold leading-tight text-[var(--color-cream)] sm:text-[2.2rem]">
        {title}
      </h2>
      <div
        aria-label={label}
        className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        role="group"
      >
        {categories.map((category) => {
          const isSelected = selectedCategory === category;

          return (
            <motion.button
              aria-pressed={isSelected}
              className={cn(
                "min-h-[92px] rounded-[8px] border px-4 py-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-dark)]",
                isSelected
                  ? "border-[var(--color-gold)] bg-[rgba(212,160,60,0.14)] shadow-[0_18px_44px_rgba(0,0,0,0.22)]"
                  : "border-[rgba(212,160,60,0.22)] bg-[rgba(25,25,25,0.24)] hover:border-[rgba(212,160,60,0.58)]",
              )}
              key={category}
              onClick={() => onSelectCategory(category)}
              transition={{ duration: 0.2, ease: "easeOut" }}
              type="button"
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            >
              <span
                className={cn(
                  "font-display text-[1.2rem] font-semibold leading-tight",
                  isSelected
                    ? "text-[var(--color-gold)]"
                    : "text-[var(--color-cream)]",
                )}
              >
                {category}
              </span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
