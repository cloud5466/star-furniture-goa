import { CategoryCard } from "@/components/collections/CategoryCard";
import type { CollectionCategory } from "@/data/collections";

interface CategoryGridProps {
  kicker: string;
  title: string;
  categories: CollectionCategory[];
}

export function CategoryGrid({ kicker, title, categories }: CategoryGridProps) {
  return (
    <section className="bg-[var(--color-bg-dark)] px-4 py-16 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:py-24 xl:px-14">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-8 flex items-center justify-center gap-3 text-center sm:mb-10 sm:gap-4">
          <span
            aria-hidden="true"
            className="h-px max-w-[320px] flex-1 bg-[rgba(212,160,60,0.22)]"
          />
          <div>
            <p className="section-kicker">{kicker}</p>
            <h2 className="mt-3 font-display text-[1.7rem] font-semibold leading-tight text-[var(--color-cream)] sm:text-[2.3rem]">
              {title}
            </h2>
          </div>
          <span
            aria-hidden="true"
            className="h-px max-w-[320px] flex-1 bg-[rgba(212,160,60,0.22)]"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {categories.map((category) => (
            <CategoryCard category={category} key={category.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
