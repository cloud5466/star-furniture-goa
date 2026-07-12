import type { Metadata } from "next";

import { CategoryGrid } from "@/components/collections/CategoryGrid";
import { CollectionSearch } from "@/components/collections/CollectionSearch";
import { CollectionsHero } from "@/components/collections/CollectionsHero";
import { DesignYourSpaceCTA } from "@/components/collections/DesignYourSpaceCTA";
import { FeaturedCategories } from "@/components/collections/FeaturedCategories";
import { ProjectsPreview } from "@/components/collections/ProjectsPreview";
import {
  collectionCategories,
  collectionsPageContent,
  completedProjectPreviews,
  featuredCategories,
} from "@/data/collections";

export const metadata: Metadata = {
  title: "Our Collections",
  description:
    "Explore custom wardrobes, modular kitchens, bedroom furniture, TV units, office furniture, and made-to-order interiors by Star Furniture Goa.",
};

export default function CollectionsPage() {
  return (
    <>
      <CollectionsHero
        description={collectionsPageContent.hero.description}
        image={collectionsPageContent.hero.image}
        kicker={collectionsPageContent.hero.kicker}
        stats={collectionsPageContent.hero.stats}
        title={collectionsPageContent.hero.title}
      />
      <CollectionSearch
        label={collectionsPageContent.search.label}
        placeholder={collectionsPageContent.search.placeholder}
      />
      <CategoryGrid
        categories={collectionCategories}
        kicker={collectionsPageContent.categories.kicker}
        title={collectionsPageContent.categories.title}
      />
      <FeaturedCategories
        categories={featuredCategories}
        kicker={collectionsPageContent.featured.kicker}
        title={collectionsPageContent.featured.title}
      />
      <ProjectsPreview
        buttonHref={collectionsPageContent.projects.buttonHref}
        buttonLabel={collectionsPageContent.projects.buttonLabel}
        description={collectionsPageContent.projects.description}
        kicker={collectionsPageContent.projects.kicker}
        projects={completedProjectPreviews}
        title={collectionsPageContent.projects.title}
      />
      <DesignYourSpaceCTA
        description={collectionsPageContent.designCTA.description}
        kicker={collectionsPageContent.designCTA.kicker}
        primaryHref={collectionsPageContent.designCTA.primaryHref}
        primaryLabel={collectionsPageContent.designCTA.primaryLabel}
        secondaryHref={collectionsPageContent.designCTA.secondaryHref}
        secondaryLabel={collectionsPageContent.designCTA.secondaryLabel}
        title={collectionsPageContent.designCTA.title}
      />
    </>
  );
}
