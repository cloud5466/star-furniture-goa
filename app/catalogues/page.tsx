import type { Metadata } from "next";

import { CategoryCTA } from "@/components/category/CategoryCTA";
import { CatalogueGrid } from "@/components/catalogues/CatalogueGrid";
import { FeaturedCatalogue } from "@/components/catalogues/FeaturedCatalogue";
import {
  catalogueCategories,
  catalogues,
  cataloguesPageContent,
  getFeaturedCatalogue,
} from "@/data/catalogues";

export const metadata: Metadata = {
  title: "Catalogues",
  description:
    "Download Star Furniture Goa furniture catalogues for wardrobes, TV units, beds, dining, office furniture, and modular kitchens.",
  alternates: {
    canonical: "/catalogues",
  },
};

export default function CataloguesPage() {
  const featuredCatalogue = getFeaturedCatalogue();

  return (
    <>
      <section className="bg-[var(--color-bg-dark)] px-4 pb-8 pt-12 text-[var(--color-cream)] sm:px-6 md:pt-16 lg:px-10 lg:pb-10 xl:px-14">
        <div className="mx-auto w-full max-w-[1280px]">
          <p className="section-kicker mb-4">Catalogue Library</p>
          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.04] tracking-normal text-[var(--color-cream)] sm:text-[4rem] lg:text-[5.2rem]">
            {cataloguesPageContent.header.title}
          </h1>
          <p className="mt-6 max-w-[760px] text-[1rem] leading-[1.85] text-[rgba(255,248,238,0.74)] sm:text-[1.08rem]">
            {cataloguesPageContent.header.description}
          </p>
        </div>
      </section>

      <CatalogueGrid
        catalogues={catalogues}
        categories={catalogueCategories}
        downloadLabel={cataloguesPageContent.grid.downloadLabel}
        emptyMessage={cataloguesPageContent.grid.emptyMessage}
        filterLabel={cataloguesPageContent.filters.label}
        kicker={cataloguesPageContent.grid.kicker}
        title={cataloguesPageContent.grid.title}
      />

      <FeaturedCatalogue
        buttonLabel={cataloguesPageContent.featured.buttonLabel}
        catalogue={featuredCatalogue}
        kicker={cataloguesPageContent.featured.kicker}
      />

      <CategoryCTA
        description={cataloguesPageContent.designCTA.description}
        kicker={cataloguesPageContent.designCTA.kicker}
        primaryHref={cataloguesPageContent.designCTA.primaryHref}
        primaryLabel={cataloguesPageContent.designCTA.primaryLabel}
        secondaryHref={cataloguesPageContent.designCTA.secondaryHref}
        secondaryLabel={cataloguesPageContent.designCTA.secondaryLabel}
        title={cataloguesPageContent.designCTA.title}
      />
    </>
  );
}
