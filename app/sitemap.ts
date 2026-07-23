import type { MetadataRoute } from "next";

import { site } from "@/constants/site";
import { routes } from "@/constants/routes";
import { categoryPages } from "@/data/categoryPages";

const baseUrl = site.websiteUrl.replace(/\/$/, "");

function createUrl(path: string) {
  return `${baseUrl}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    routes.home,
    routes.collections,
    routes.catalogues,
    routes.contact,
    routes.designYourSpace,
  ];

  const categoryRoutes = categoryPages.map(
    (categoryPage) => `/collections/${categoryPage.slug}`,
  );

  const productRoutes = categoryPages.flatMap((categoryPage) =>
    categoryPage.items.map((product) => `/products/${product.slug}`),
  );

  return [...staticRoutes, ...categoryRoutes, ...productRoutes].map((route) => ({
    url: createUrl(route),
    lastModified: new Date(),
    changeFrequency: route === routes.home ? "weekly" : "monthly",
    priority: route === routes.home ? 1 : route.startsWith("/products") ? 0.7 : 0.8,
  }));
}
