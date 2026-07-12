"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { CatalogueCard } from "@/components/catalogues/CatalogueCard";
import { CatalogueFilter } from "@/components/catalogues/CatalogueFilter";
import type { Catalogue } from "@/data/catalogues";

interface CatalogueGridProps {
  categories: readonly string[];
  catalogues: Catalogue[];
  filterLabel: string;
  kicker: string;
  title: string;
  downloadLabel: string;
  emptyMessage: string;
}

export function CatalogueGrid({
  categories,
  catalogues,
  filterLabel,
  kicker,
  title,
  downloadLabel,
  emptyMessage,
}: CatalogueGridProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0] ?? "All");
  const shouldReduceMotion = useReducedMotion();

  const filteredCatalogues = useMemo(() => {
    if (selectedCategory === "All") {
      return catalogues;
    }

    return catalogues.filter(
      (catalogue) => catalogue.category === selectedCategory,
    );
  }, [catalogues, selectedCategory]);

  return (
    <section className="bg-[var(--color-bg-dark)] px-4 py-12 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:py-20 xl:px-14">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <p className="section-kicker mb-4">{kicker}</p>
            <h2 className="font-display text-[2rem] font-semibold leading-[1.08] text-[var(--color-cream)] sm:text-[3rem]">
              {title}
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <CatalogueFilter
              categories={categories}
              label={filterLabel}
              onSelectCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredCatalogues.map((catalogue) => (
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
                key={catalogue.id}
                layout
                transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
              >
                <CatalogueCard
                  catalogue={catalogue}
                  downloadLabel={downloadLabel}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCatalogues.length === 0 ? (
          <div className="mt-8 rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.04)] px-5 py-8 text-center text-sm text-[rgba(255,248,238,0.72)]">
            {emptyMessage}
          </div>
        ) : null}
      </div>
    </section>
  );
}

