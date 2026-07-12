import { routes } from "@/constants/routes";

export const catalogueCategories = [
  "All",
  "Wardrobes",
  "TV Units",
  "Beds",
  "Dining",
  "Office Furniture",
  "Modular Kitchens",
] as const;

export type CatalogueCategory = Exclude<
  (typeof catalogueCategories)[number],
  "All"
>;

export interface CatalogueVersion {
  version: string;
  pdf: string;
  size: string;
  updatedAt: string;
}

export interface Catalogue {
  id: string;
  slug: string;
  title: string;
  category: CatalogueCategory;
  coverImage: string;
  pdf: string;
  size: string;
  updatedAt: string;
  featured: boolean;
  versions: CatalogueVersion[];
}

export const cataloguesPageContent = {
  header: {
    title: "Catalogues",
    description:
      "Download Star Furniture Goa catalogues and browse furniture references across wardrobes, TV units, beds, dining, office furniture, and modular kitchens.",
  },
  filters: {
    label: "Catalogue categories",
  },
  featured: {
    kicker: "Featured Catalogue",
    buttonLabel: "Download Catalogue",
  },
  grid: {
    kicker: "Catalogue Library",
    title: "Download furniture catalogues.",
    downloadLabel: "Download Catalogue",
    emptyMessage: "No catalogues found for this category yet.",
  },
  designCTA: {
    kicker: "Design Your Space",
    title: "Found a catalogue direction you like?",
    description:
      "Share your preferred catalogue, measurements, finish ideas, and room requirements. The Star Furniture Goa team can help you turn a reference into a practical custom furniture plan.",
    primaryLabel: "Design Your Space",
    primaryHref: routes.designYourSpace,
    secondaryLabel: "Our Collections",
    secondaryHref: routes.collections,
  },
} as const;

export const catalogues: Catalogue[] = [
  {
    id: "wardrobe-catalogue-2026",
    slug: "wardrobe-catalogue-2026",
    title: "Premium Wardrobe Catalogue 2026",
    category: "Wardrobes",
    coverImage: "/images/catalogues/wardrobe-catalogue.webp",
    pdf: "/catalogues/wardrobe-catalogue-2026.pdf",
    size: "42 MB",
    updatedAt: "2026-06-18",
    featured: true,
    versions: [
      {
        version: "2026.1",
        pdf: "/catalogues/wardrobe-catalogue-2026.pdf",
        size: "42 MB",
        updatedAt: "2026-06-18",
      },
    ],
  },
  {
    id: "tv-units-catalogue-2026",
    slug: "tv-units-catalogue-2026",
    title: "TV Units Catalogue 2026",
    category: "TV Units",
    coverImage: "/images/catalogues/tv-units-catalogue.webp",
    pdf: "/catalogues/tv-units-catalogue-2026.pdf",
    size: "28 MB",
    updatedAt: "2026-06-12",
    featured: false,
    versions: [
      {
        version: "2026.1",
        pdf: "/catalogues/tv-units-catalogue-2026.pdf",
        size: "28 MB",
        updatedAt: "2026-06-12",
      },
    ],
  },
  {
    id: "beds-catalogue-2026",
    slug: "beds-catalogue-2026",
    title: "Beds and Bedroom Furniture Catalogue 2026",
    category: "Beds",
    coverImage: "/images/catalogues/beds-catalogue.webp",
    pdf: "/catalogues/beds-catalogue-2026.pdf",
    size: "34 MB",
    updatedAt: "2026-06-10",
    featured: false,
    versions: [
      {
        version: "2026.1",
        pdf: "/catalogues/beds-catalogue-2026.pdf",
        size: "34 MB",
        updatedAt: "2026-06-10",
      },
    ],
  },
  {
    id: "dining-catalogue-2026",
    slug: "dining-catalogue-2026",
    title: "Dining Furniture Catalogue 2026",
    category: "Dining",
    coverImage: "/images/catalogues/dining-catalogue.webp",
    pdf: "/catalogues/dining-catalogue-2026.pdf",
    size: "25 MB",
    updatedAt: "2026-05-30",
    featured: false,
    versions: [
      {
        version: "2026.1",
        pdf: "/catalogues/dining-catalogue-2026.pdf",
        size: "25 MB",
        updatedAt: "2026-05-30",
      },
    ],
  },
  {
    id: "office-furniture-catalogue-2026",
    slug: "office-furniture-catalogue-2026",
    title: "Office Furniture Catalogue 2026",
    category: "Office Furniture",
    coverImage: "/images/catalogues/office-furniture-catalogue.webp",
    pdf: "/catalogues/office-furniture-catalogue-2026.pdf",
    size: "31 MB",
    updatedAt: "2026-05-24",
    featured: false,
    versions: [
      {
        version: "2026.1",
        pdf: "/catalogues/office-furniture-catalogue-2026.pdf",
        size: "31 MB",
        updatedAt: "2026-05-24",
      },
    ],
  },
  {
    id: "modular-kitchens-catalogue-2026",
    slug: "modular-kitchens-catalogue-2026",
    title: "Modular Kitchens Catalogue 2026",
    category: "Modular Kitchens",
    coverImage: "/images/catalogues/modular-kitchens-catalogue.webp",
    pdf: "/catalogues/modular-kitchens-catalogue-2026.pdf",
    size: "28 MB",
    updatedAt: "2026-06-20",
    featured: false,
    versions: [
      {
        version: "2026.1",
        pdf: "/catalogues/modular-kitchens-catalogue-2026.pdf",
        size: "48 MB",
        updatedAt: "2026-06-20",
      },
    ],
  },
];

export function getFeaturedCatalogue() {
  return catalogues.find((catalogue) => catalogue.featured) ?? catalogues[0];
}

