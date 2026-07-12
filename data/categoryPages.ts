import { bedsCategoryData } from "@/data/products/beds";
import { customFurnitureCategoryData } from "@/data/products/customFurniture";
import { diningCategoryData } from "@/data/products/dining";
import { modularKitchensCategoryData } from "@/data/products/modularKitchens";
import { officeFurnitureCategoryData } from "@/data/products/officeFurniture";
import { tvUnitsCategoryData } from "@/data/products/tvUnits";
import { wardrobesCategoryData } from "@/data/products/wardrobes";
import type { CategoryProductData } from "@/data/products/types";

export const categoryPages = [
  wardrobesCategoryData,
  tvUnitsCategoryData,
  bedsCategoryData,
  diningCategoryData,
  officeFurnitureCategoryData,
  modularKitchensCategoryData,
  customFurnitureCategoryData,
] satisfies CategoryProductData[];

export function getCategoryPage(slug: string) {
  return categoryPages.find((categoryPage) => categoryPage.slug === slug);
}

export function getAllCategoryProducts() {
  return categoryPages.flatMap((categoryPage) =>
    categoryPage.items.map((product) => ({
      product,
      categoryPage,
    })),
  );
}

