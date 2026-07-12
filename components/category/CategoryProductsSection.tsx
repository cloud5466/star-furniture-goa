"use client";

import { useMemo, useState } from "react";

import { CategoryOverview } from "@/components/category/CategoryOverview";
import { ProductGrid } from "@/components/category/ProductGrid";
import type { CategoryProductCardItem } from "@/components/category/ProductCard";

interface CategoryProductsSectionProps {
  overview: {
    kicker: string;
    title: string;
    description: string;
    filterLabel: string;
    filterCardKicker: string;
  };
  productsContent: {
    kicker: string;
    title: string;
    featuredLabel: string;
    detailsLabel: string;
    emptyMessage: string;
    loadMoreLabel: string;
    detailBasePath: string;
  };
  categories: readonly string[];
  products: CategoryProductCardItem[];
  initialVisibleCount: number;
  batchSize: number;
}

export function CategoryProductsSection({
  overview,
  productsContent,
  categories,
  products,
  initialVisibleCount,
  batchSize,
}: CategoryProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0] ?? "All");
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }

    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);

  function handleSelectCategory(category: string) {
    setSelectedCategory(category);
    setVisibleCount(initialVisibleCount);
  }

  return (
    <>
      <CategoryOverview
        categories={categories}
        description={overview.description}
        filterCardKicker={overview.filterCardKicker}
        filterLabel={overview.filterLabel}
        kicker={overview.kicker}
        onSelectCategory={handleSelectCategory}
        selectedCategory={selectedCategory}
        title={overview.title}
      />
      <ProductGrid
        batchSize={batchSize}
        detailsLabel={productsContent.detailsLabel}
        emptyMessage={productsContent.emptyMessage}
        featuredLabel={productsContent.featuredLabel}
        kicker={productsContent.kicker}
        loadMoreLabel={productsContent.loadMoreLabel}
        onLoadMore={() => {
          setVisibleCount((currentCount) => currentCount + batchSize);
        }}
        products={filteredProducts}
        productDetailBasePath={productsContent.detailBasePath}
        title={productsContent.title}
        visibleCount={visibleCount}
      />
    </>
  );
}

