import { createCategoryProductData } from "@/data/products/createCategoryProductData";

export const diningCategoryData = createCategoryProductData({
  slug: "dining",
  title: "Dining",
  description:
    "Explore dining furniture and storage for warm, practical family spaces.",
  pinterestUrl:
    "https://www.pinterest.com/search/pins/?q=dining%20furniture%20designs",
  productTitle: "Dining products",
  emptyMessage: "No dining products found for this category yet.",
  catalogueTitle: "Need a broader look before deciding?",
  ctaTitle: "Need dining furniture planned around your home?",
});
