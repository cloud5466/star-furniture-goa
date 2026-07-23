import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumb } from "@/components/category/Breadcrumb";
import { CategoryCTA } from "@/components/category/CategoryCTA";
import { CategoryProductsSection } from "@/components/category/CategoryProductsSection";
import { InspirationCard } from "@/components/category/InspirationCard";
import { RelatedCatalogues } from "@/components/category/RelatedCatalogues";
import { categoryPages, getCategoryPage } from "@/data/categoryPages";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export function generateStaticParams() {
  return categoryPages.map((categoryPage) => ({
    category: categoryPage.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const page = getCategoryPage(category);

  if (!page) {
    return {
      title: "Collection Not Found",
    };
  }

  return {
    ...page.metadata,
    alternates: {
      canonical: `/collections/${page.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const page = getCategoryPage(category);

  if (!page) {
    notFound();
  }

  return (
    <>
      <Breadcrumb items={page.breadcrumbs} />
      <CategoryProductsSection
        batchSize={page.products.batchSize}
        categories={page.categories}
        initialVisibleCount={page.products.initialVisibleCount}
        overview={page.overview}
        products={page.items}
        productsContent={page.products}
      />
      <InspirationCard
        buttonLabel={page.inspiration.buttonLabel}
        description={page.inspiration.description}
        href={page.inspiration.href}
        title={page.inspiration.title}
      />
      <CategoryCTA
        description={page.designCTA.description}
        kicker={page.designCTA.kicker}
        primaryHref={page.designCTA.primaryHref}
        primaryLabel={page.designCTA.primaryLabel}
        secondaryHref={page.designCTA.secondaryHref}
        secondaryLabel={page.designCTA.secondaryLabel}
        title={page.designCTA.title}
      />
      <RelatedCatalogues
        buttonLabel={page.catalogues.buttonLabel}
        catalogues={page.relatedCatalogues}
        description={page.catalogues.description}
        kicker={page.catalogues.kicker}
        title={page.catalogues.title}
      />
    </>
  );
}
