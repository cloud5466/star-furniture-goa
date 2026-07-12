import { routes } from "@/constants/routes";

export interface CollectionCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  badge: string;
}

export interface FeaturedCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  badge: string;
}

export interface CompletedProjectPreview {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  size: "standard" | "wide" | "tall";
}

export const collectionsPageContent = {
  hero: {
    kicker: "Our Collections",
    title: "Find the furniture category your space needs.",
    description:
      "Browse Star Furniture Goa's main furniture categories and step into dedicated collection pages for wardrobes, TV units, beds, dining, kitchens, office furniture, and custom-made interiors.",
    image: {
      src: "/images/categories/modern-kitchens.webp",
      alt: "Premium modular kitchen furniture by Star Furniture Goa",
    },
    stats: [
      "Custom sizes",
      "Premium finishes",
      "Factory-made in Goa",
    ],
  },
  search: {
    label: "Search collections",
    placeholder: "Search wardrobes, kitchens, TV units...",
  },
  categories: {
    kicker: "Browse by Category",
    title: "Choose the collection you want to explore.",
  },
  featured: {
    kicker: "Featured Categories",
    title: "Popular starting points for custom furniture.",
  },
  projects: {
    kicker: "Recently Completed Projects",
    title: "Real furniture made for real homes.",
    description:
      "A small preview of completed customer work, shared as inspiration before the full projects experience is built.",
    buttonLabel: "View More Projects",
    buttonHref: "/collections#recent-projects",
  },
  designCTA: {
    kicker: "Design Your Space",
    title: "Have a room in mind? Let us plan it with you.",
    description:
      "Share your measurements, preferred materials, inspiration images, and furniture requirements. Our team can help turn the idea into a practical custom solution.",
    primaryLabel: "Design Your Space",
    primaryHref: routes.designYourSpace,
    secondaryLabel: "Explore Catalogues",
    secondaryHref: routes.catalogues,
  },
} as const;

export const collectionCategories: CollectionCategory[] = [
  {
    id: "wardrobes",
    title: "Wardrobes",
    description: "Sliding, hinged, and made-to-measure storage for bedrooms.",
    image: "/images/categories/custom-wardrobes.webp",
    href: "/collections/wardrobes",
    badge: "Storage",
  },
  {
    id: "tv-units",
    title: "TV Units",
    description: "Entertainment walls and storage designed for living rooms.",
    image: "/images/categories/tv-units.webp",
    href: "/collections/tv-units",
    badge: "Living",
  },
  {
    id: "beds",
    title: "Beds",
    description: "Bedroom furniture built around comfort, storage, and proportion.",
    image: "/images/categories/bedroom-furniture.webp",
    href: "/collections/beds",
    badge: "Bedroom",
  },
  {
    id: "dining",
    title: "Dining",
    description: "Dining storage, counters, and furniture for warm family spaces.",
    image: "/images/categories/made-to-order-interiors.webp",
    href: "/collections/dining",
    badge: "Dining",
  },
  {
    id: "modular-kitchens",
    title: "Modular Kitchens",
    description: "Functional kitchen layouts with premium finishes and utility.",
    image: "/images/categories/modern-kitchens.webp",
    href: "/collections/modular-kitchens",
    badge: "Kitchen",
  },
  {
    id: "office-furniture",
    title: "Office Furniture",
    description: "Work tables, storage, and commercial furniture made to fit.",
    image: "/images/categories/office-furniture.webp",
    href: "/collections/office-furniture",
    badge: "Workspace",
  },
  {
    id: "custom-furniture",
    title: "Custom Furniture",
    description: "Made-to-order furniture built around your space and routine.",
    image: "/images/categories/made-to-order-interiors.webp",
    href: "/collections/custom-furniture",
    badge: "Bespoke",
  },
];

export const featuredCategories: FeaturedCategory[] = [
  {
    id: "premium-sliding-wardrobes",
    title: "Premium Sliding Wardrobes",
    subtitle:
      "Space-saving wardrobe systems with clean shutters, mirrors, drawers, and internal storage planning.",
    image: "/images/categories/custom-wardrobes.webp",
    href: "/collections/wardrobes",
    badge: "Wardrobes",
  },
  {
    id: "modern-modular-kitchens",
    title: "Modern Modular Kitchens",
    subtitle:
      "Custom kitchen furniture designed around workflow, storage, finishes, and daily cooking comfort.",
    image: "/images/categories/modern-kitchens.webp",
    href: "/collections/modular-kitchens",
    badge: "Kitchens",
  },
  {
    id: "calm-bedroom-furniture",
    title: "Custom Beds and Bedroom Furniture",
    subtitle:
      "Beds, side units, dressers, and storage furniture for warm, practical bedroom spaces.",
    image: "/images/categories/bedroom-furniture.webp",
    href: "/collections/beds",
    badge: "Bedroom",
  },
  {
    id: "living-room-tv-units",
    title: "Living Room TV Units",
    subtitle:
      "Entertainment units with proportioned display space, hidden wiring, storage, and wall panel options.",
    image: "/images/categories/tv-units.webp",
    href: "/collections/tv-units",
    badge: "Living",
  },
];

export const completedProjectPreviews: CompletedProjectPreview[] = [
  {
    id: "kitchen-storage-wall",
    title: "Warm kitchen storage",
    description: "A practical modular kitchen direction with warm finishes.",
    image: "/images/categories/modern-kitchens.webp",
    alt: "Modern kitchen storage inspiration by Star Furniture Goa",
    size: "wide",
  },
  {
    id: "wardrobe-suite",
    title: "Wardrobe suite",
    description: "A clean wardrobe layout with custom storage planning.",
    image: "/images/categories/custom-wardrobes.webp",
    alt: "Custom wardrobe inspiration by Star Furniture Goa",
    size: "tall",
  },
  {
    id: "bedroom-calm",
    title: "Calm bedroom setup",
    description: "A bedroom furniture setup designed for everyday comfort.",
    image: "/images/categories/bedroom-furniture.webp",
    alt: "Bedroom furniture inspiration by Star Furniture Goa",
    size: "standard",
  },
  {
    id: "office-focus",
    title: "Focused workspace",
    description: "A compact office furniture direction for productive work.",
    image: "/images/categories/office-furniture.webp",
    alt: "Office furniture inspiration by Star Furniture Goa",
    size: "standard",
  },
  {
    id: "living-tv-wall",
    title: "Living room TV wall",
    description: "A TV unit concept with display, storage, and proportion.",
    image: "/images/categories/tv-units.webp",
    alt: "TV unit inspiration by Star Furniture Goa",
    size: "wide",
  },
];
