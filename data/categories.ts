export interface FurnitureCategoryMetadata {
  slug: string;
  title: string;
  description: string;
  pinterestUrl: string;
  heroImage: {
    src: string;
    alt: string;
  };
}

export const furnitureCategories: FurnitureCategoryMetadata[] = [
  {
    slug: "wardrobes",
    title: "Wardrobes",
    description:
      "Made-to-measure wardrobes for bedrooms, apartments, villas, and commercial interiors.",
    pinterestUrl: "https://www.pinterest.com/search/pins/?q=wardrobe%20designs",
    heroImage: {
      src: "/images/categories/custom-wardrobes.webp",
      alt: "Custom wardrobe furniture by Star Furniture Goa",
    },
  },
  {
    slug: "tv-units",
    title: "TV Units",
    description:
      "Entertainment walls and TV units designed for living rooms and media spaces.",
    pinterestUrl: "https://www.pinterest.com/search/pins/?q=tv%20unit%20designs",
    heroImage: {
      src: "/images/categories/tv-units.webp",
      alt: "TV unit furniture by Star Furniture Goa",
    },
  },
  {
    slug: "beds",
    title: "Beds",
    description:
      "Bedroom furniture planned around comfort, storage, and room proportions.",
    pinterestUrl: "https://www.pinterest.com/search/pins/?q=bed%20designs",
    heroImage: {
      src: "/images/categories/bedroom-furniture.webp",
      alt: "Bedroom furniture by Star Furniture Goa",
    },
  },
  {
    slug: "dining",
    title: "Dining",
    description:
      "Dining furniture and storage for warm, practical family spaces.",
    pinterestUrl:
      "https://www.pinterest.com/search/pins/?q=dining%20furniture%20designs",
    heroImage: {
      src: "/images/categories/made-to-order-interiors.webp",
      alt: "Dining furniture by Star Furniture Goa",
    },
  },
  {
    slug: "office-furniture",
    title: "Office Furniture",
    description:
      "Work tables, storage, and commercial furniture made to fit daily workflows.",
    pinterestUrl:
      "https://www.pinterest.com/search/pins/?q=office%20furniture%20designs",
    heroImage: {
      src: "/images/categories/office-furniture.webp",
      alt: "Office furniture by Star Furniture Goa",
    },
  },
  {
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    description:
      "Kitchen furniture designed around workflow, storage, finishes, and utility.",
    pinterestUrl:
      "https://www.pinterest.com/search/pins/?q=modular%20kitchen%20designs",
    heroImage: {
      src: "/images/categories/modern-kitchens.webp",
      alt: "Modular kitchen furniture by Star Furniture Goa",
    },
  },
  {
    slug: "custom-furniture",
    title: "Custom Furniture",
    description:
      "Made-to-order furniture built around measurements, lifestyle, and finish preferences.",
    pinterestUrl:
      "https://www.pinterest.com/search/pins/?q=custom%20furniture%20designs",
    heroImage: {
      src: "/images/categories/made-to-order-interiors.webp",
      alt: "Custom furniture by Star Furniture Goa",
    },
  },
];

export function getFurnitureCategoryMetadata(slug: string) {
  return furnitureCategories.find((category) => category.slug === slug);
}
