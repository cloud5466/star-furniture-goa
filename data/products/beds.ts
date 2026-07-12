import { createCategoryProductData } from "@/data/products/createCategoryProductData";

export const bedsCategoryData = createCategoryProductData({
  slug: "beds",
  title: "Beds",
  description:
    "Explore beds and bedroom furniture planned around comfort, storage, and room proportions.",
  pinterestUrl: "https://www.pinterest.com/search/pins/?q=bed%20designs",
  productTitle: "Bed products",
  emptyMessage: "No bed products found for this category yet.",
  catalogueTitle: "Need a broader look before deciding?",
  ctaTitle: "Need bedroom furniture made for your exact room?",
});
