import { createCategoryProductData } from "@/data/products/createCategoryProductData";

export const customFurnitureCategoryData = createCategoryProductData({
  slug: "custom-furniture",
  title: "Custom Furniture",
  description:
    "Explore made-to-order furniture built around measurements, lifestyle, and finish preferences.",
  pinterestUrl:
    "https://www.pinterest.com/search/pins/?q=custom%20furniture%20designs",
  productTitle: "Custom furniture products",
  emptyMessage: "No custom furniture products found for this category yet.",
  catalogueTitle: "Need a broader look before deciding?",
  ctaTitle: "Need a custom furniture solution for your space?",
});
