"use client";

import { CategoryFilter } from "@/components/category/CategoryFilter";

interface CategoryOverviewProps {
  kicker: string;
  title: string;
  description: string;
  filterLabel: string;
  filterCardKicker: string;
  categories: readonly string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryOverview({
  kicker,
  title,
  description,
  filterLabel,
  filterCardKicker,
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryOverviewProps) {
  return (
    <section className="bg-[var(--color-bg-dark)] px-4 pb-12 pt-6 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:pb-16 xl:px-14">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="max-w-[780px]">
          <p className="section-kicker mb-4">{kicker}</p>
          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.04] tracking-normal text-[var(--color-cream)] sm:text-[4rem] lg:text-[5.2rem]">
            {title}
          </h1>
          <p className="mt-6 text-[1rem] leading-[1.85] text-[rgba(255,248,238,0.74)] sm:text-[1.08rem]">
            {description}
          </p>
        </div>

        <div className="mt-9">
          <CategoryFilter
            categories={categories}
            cardKicker={filterCardKicker}
            label={filterLabel}
            onSelectCategory={onSelectCategory}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </section>
  );
}

