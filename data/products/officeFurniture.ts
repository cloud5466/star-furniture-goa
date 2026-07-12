import { createCategoryProductData } from "@/data/products/createCategoryProductData";

export const officeFurnitureCategoryData = createCategoryProductData({
  slug: "office-furniture",
  title: "Office Furniture",
  description:
    "Explore work tables, storage, and commercial furniture made to fit daily workflows.",
  pinterestUrl:
    "https://www.pinterest.com/search/pins/?q=office%20furniture%20designs",
  productTitle: "Office furniture products",
  emptyMessage: "No office furniture products found for this category yet.",
  catalogueTitle: "Need a broader look before deciding?",
  ctaTitle: "Need office furniture planned around your workflow?",
});
