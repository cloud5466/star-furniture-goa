import { routes } from "@/constants/routes";
import { getFurnitureCategoryMetadata } from "@/data/categories";
import type {
  CategoryCatalogue,
  CategoryProduct,
  CategoryProductData,
  ProductFinish,
} from "@/data/products/types";

export const wardrobeCategories = [
  "All",
  "2 Door",
  "3 Door",
  "4 Door",
  "5 Door",
  "6 Door",
  "Sliding Door",
  "Customized Wardrobes",
] as const;

export type Wardrobe = CategoryProduct & {
  category: Exclude<(typeof wardrobeCategories)[number], "All">;
};

const wardrobeProductBlueprints: Array<
  Omit<Wardrobe, "id" | "slug" | "name" | "gallery" | "finishes" | "featured"> & {
    namePrefix: string;
  }
> = [
  {
    namePrefix: "Classic 2 Door Wardrobe",
    category: "2 Door",
    image: "/images/categories/custom-wardrobes.webp",
    shortDescription:
      "A compact hinged wardrobe option for guest rooms, apartments, and focused storage needs.",
    tags: ["Compact", "Hinged Doors", "Bedroom Storage"],
    specifications: [
      { label: "Door Type", value: "Hinged" },
      { label: "Configuration", value: "2 Door" },
      { label: "Material Options", value: "Engineered wood or plywood" },
      { label: "Finish Options", value: "Laminate, matte, gloss, or textured" },
    ],
  },
  {
    namePrefix: "Storage 3 Door Wardrobe",
    category: "3 Door",
    image: "/images/categories/custom-wardrobes.webp",
    shortDescription:
      "A balanced wardrobe configuration with room for hanging space, drawers, and shelves.",
    tags: ["Everyday Storage", "Hinged Doors", "Drawer Ready"],
    specifications: [
      { label: "Door Type", value: "Hinged" },
      { label: "Configuration", value: "3 Door" },
      { label: "Storage Planning", value: "Shelves, drawers, and hanging space" },
      { label: "Finish Options", value: "Laminate, matte, gloss, or textured" },
    ],
  },
  {
    namePrefix: "Family 4 Door Wardrobe",
    category: "4 Door",
    image: "/images/categories/custom-wardrobes.webp",
    shortDescription:
      "A wider wardrobe layout suited for master bedrooms and shared storage requirements.",
    tags: ["Family Storage", "Master Bedroom", "Custom Interiors"],
    specifications: [
      { label: "Door Type", value: "Hinged" },
      { label: "Configuration", value: "4 Door" },
      { label: "Storage Planning", value: "Shared storage with separate sections" },
      { label: "Material Options", value: "Engineered wood or plywood" },
    ],
  },
  {
    namePrefix: "Premium 5 Door Wardrobe",
    category: "5 Door",
    image: "/images/categories/custom-wardrobes.webp",
    shortDescription:
      "A larger wardrobe direction with extra compartments for organized everyday use.",
    tags: ["Premium Storage", "Large Layout", "Organized Interiors"],
    specifications: [
      { label: "Door Type", value: "Hinged" },
      { label: "Configuration", value: "5 Door" },
      { label: "Storage Planning", value: "Hanging, drawer, and shelf zones" },
      { label: "Hardware Options", value: "Soft-close and premium hardware available" },
    ],
  },
  {
    namePrefix: "Suite 6 Door Wardrobe",
    category: "6 Door",
    image: "/images/categories/custom-wardrobes.webp",
    shortDescription:
      "A full-wall wardrobe concept for spacious bedrooms and high-capacity storage.",
    tags: ["Full Wall", "High Capacity", "Bedroom Suite"],
    specifications: [
      { label: "Door Type", value: "Hinged" },
      { label: "Configuration", value: "6 Door" },
      { label: "Storage Planning", value: "Full-height storage with custom internals" },
      { label: "Material Options", value: "Engineered wood or plywood" },
    ],
  },
  {
    namePrefix: "Modern Sliding Door Wardrobe",
    category: "Sliding Door",
    image: "/images/categories/custom-wardrobes.webp",
    shortDescription:
      "A smooth sliding wardrobe option for rooms where swing space needs to be preserved.",
    tags: ["Sliding", "Space Saving", "Modern Bedroom"],
    specifications: [
      { label: "Door Type", value: "Sliding" },
      { label: "Configuration", value: "Sliding Door" },
      { label: "Space Planning", value: "Designed for rooms with limited swing space" },
      { label: "Finish Options", value: "Mirror, laminate, matte, or textured" },
    ],
  },
  {
    namePrefix: "Customized Wardrobe Layout",
    category: "Customized Wardrobes",
    image: "/images/categories/custom-wardrobes.webp",
    shortDescription:
      "A made-to-order wardrobe planned around measurements, finish preferences, and storage habits.",
    tags: ["Bespoke", "Made to Measure", "Custom Layout"],
    specifications: [
      { label: "Door Type", value: "Custom" },
      { label: "Configuration", value: "Customized Wardrobes" },
      { label: "Planning", value: "Built around room measurements and usage" },
      { label: "Customization", value: "Dimensions, finish, layout, and hardware" },
    ],
  },
];

const wardrobeFinishes: ProductFinish[] = [
  {
    id: "walnut-matte",
    name: "Walnut Matte",
    swatch: "#6b4328",
  },
  {
    id: "natural-oak",
    name: "Natural Oak",
    swatch: "#b88a55",
  },
  {
    id: "warm-white",
    name: "Warm White",
    swatch: "#efe7dc",
  },
  {
    id: "charcoal-grey",
    name: "Charcoal Grey",
    swatch: "#3b3b38",
  },
];

const wardrobeMetadata = getFurnitureCategoryMetadata("wardrobes");

export const wardrobePageContent: Omit<
  CategoryProductData,
  "categories" | "items" | "relatedCatalogues"
> = {
  slug: "wardrobes",
  metadata: {
    title: "Wardrobes",
    description:
      "Explore custom wardrobes by Star Furniture Goa, including sliding door, hinged door, and customized wardrobe options.",
  },
  breadcrumbs: [
    { label: "Home", href: routes.home },
    { label: "Collections", href: routes.collections },
    { label: "Wardrobes" },
  ],
  overview: {
    kicker: "Category Overview",
    title: "Wardrobes",
    description:
      "Explore made-to-measure wardrobe options for bedrooms, apartments, villas, and commercial interiors. Choose a wardrobe category below to quickly filter the collection without leaving the page.",
    filterLabel: "Wardrobe categories",
    filterCardKicker: "Filter",
  },
  products: {
    kicker: "Product Collection",
    title: "Wardrobe products",
    featuredLabel: "Featured",
    detailsLabel: "View Details",
    emptyMessage: "No wardrobe products found for this category yet.",
    loadMoreLabel: "Load More",
    initialVisibleCount: 24,
    batchSize: 24,
    detailBasePath: "/products",
  },
  designCTA: {
    kicker: "Design Your Space",
    title: "Need a wardrobe made for your exact room?",
    description:
      "Share your room size, preferred door style, finish direction, and storage needs. The Star Furniture Goa team can help plan a practical custom wardrobe.",
    primaryLabel: "Design Your Space",
    primaryHref: routes.designYourSpace,
    secondaryLabel: "View Catalogues",
    secondaryHref: routes.catalogues,
  },
  inspiration: {
    title: "Need More Inspiration?",
    description:
      "Explore hundreds of professionally designed furniture ideas on Pinterest. If you find a design you like, simply share the Pinterest link with us and we'll help you create something similar.",
    buttonLabel: "Browse Design Ideas",
    href:
      wardrobeMetadata?.pinterestUrl ??
      "https://www.pinterest.com/search/pins/?q=wardrobe%20designs",
  },
  catalogues: {
    kicker: "Related Wardrobe Catalogues",
    title: "Need a broader look before deciding?",
    description:
      "Browse wardrobe catalogue previews and shortlist styles, finishes, and layouts before sharing your requirements.",
    buttonLabel: "Open Catalogue",
  },
  productDetail: {
    breadcrumbParentLabel: "Wardrobes",
    breadcrumbParentHref: "/collections/wardrobes",
    info: {
      categoryLabel: "Category",
      tagsLabel: "Product Tags",
    },
    finishes: {
      kicker: "Available Finishes",
      title: "Choose a finish direction",
    },
    specifications: {
      kicker: "Specifications",
      title: "Product specifications",
    },
    customizations: {
      kicker: "Available Customizations",
      title: "Make it work for your exact room.",
      description:
        "Every furniture requirement is different. These customization options help the team plan a wardrobe around your measurements, finish preference, and daily storage needs.",
      options: [
        "Dimensions",
        "Finish",
        "Colour",
        "Internal Layout",
        "Hardware",
        "Accessories",
      ],
    },
    actions: {
      bookConsultationLabel: "Book a Consultation",
      whatsappEnquiryLabel: "WhatsApp Enquiry",
      wishlistSaveLabel: "Save to Wishlist",
      wishlistSavedLabel: "Saved",
      bookConsultationMessage:
        "Hello Star Furniture Goa,\n\nI would like to book a consultation regarding:\n\nProduct:\n{productName}\n\nCategory:\n{category}\n\nProduct URL:\n{productUrl}\n\nPlease let me know your available timings.\n\nThank you.",
      whatsappEnquiryMessage:
        "Hello Star Furniture Goa,\n\nI would like to know more about this product:\n\nProduct:\n{productName}\n\nCategory:\n{category}\n\nProduct URL:\n{productUrl}\n\nPlease share more details.\n\nThank you.",
    },
    relatedProducts: {
      kicker: "Related Products",
      title: "More from this category",
      detailsLabel: "View Details",
      featuredLabel: "Featured",
    },
  },
} as const;

export const wardrobes: Wardrobe[] = Array.from({ length: 42 }, (_, index) => {
  const blueprint =
    wardrobeProductBlueprints[index % wardrobeProductBlueprints.length];
  const sequence = index + 1;
  const sequenceLabel = sequence.toString().padStart(2, "0");
  const slugBase = blueprint.namePrefix
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return {
    id: `wardrobe-${sequenceLabel}`,
    slug: `${slugBase}-${sequenceLabel}`,
    name: `${blueprint.namePrefix} ${sequenceLabel}`,
    category: blueprint.category,
    image: blueprint.image,
    gallery: [
      {
        id: `wardrobe-${sequenceLabel}-primary`,
        src: blueprint.image,
        alt: `${blueprint.namePrefix} primary view`,
      },
      {
        id: `wardrobe-${sequenceLabel}-detail`,
        src: "/images/categories/bedroom-furniture.webp",
        alt: `${blueprint.namePrefix} bedroom setting view`,
      },
      {
        id: `wardrobe-${sequenceLabel}-finish`,
        src: "/images/categories/made-to-order-interiors.webp",
        alt: `${blueprint.namePrefix} finish inspiration view`,
      },
    ],
    shortDescription: blueprint.shortDescription,
    tags: blueprint.tags,
    finishes: wardrobeFinishes,
    specifications: blueprint.specifications,
    featured: sequence <= 8,
  };
});

export const wardrobeRelatedCatalogues: CategoryCatalogue[] = [
  {
    id: "premium-wardrobe-catalogue",
    title: "Premium Wardrobe Catalogue",
    description:
      "Explore wardrobe layouts, shutter directions, internal storage ideas, and finish inspiration.",
    href: routes.catalogues,
  },
  {
    id: "bedroom-furniture-catalogue",
    title: "Bedroom Furniture Catalogue",
    description:
      "View bedroom furniture references that pair well with wardrobes and storage walls.",
    href: routes.catalogues,
  },
  {
    id: "custom-storage-catalogue",
    title: "Custom Storage Catalogue",
    description:
      "Browse space-saving storage references for compact rooms and full-wall furniture planning.",
    href: routes.catalogues,
  },
];

export const wardrobesCategoryData: CategoryProductData = {
  ...wardrobePageContent,
  categories: wardrobeCategories,
  items: wardrobes,
  relatedCatalogues: wardrobeRelatedCatalogues,
};
