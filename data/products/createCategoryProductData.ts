import { routes } from "@/constants/routes";
import type { CategoryProductData } from "@/data/products/types";

interface CreateCategoryProductDataInput {
  slug: string;
  title: string;
  description: string;
  pinterestUrl: string;
  productTitle: string;
  emptyMessage: string;
  catalogueTitle: string;
  ctaTitle: string;
}

export function createCategoryProductData({
  slug,
  title,
  description,
  pinterestUrl,
  productTitle,
  emptyMessage,
  catalogueTitle,
  ctaTitle,
}: CreateCategoryProductDataInput): CategoryProductData {
  return {
    slug,
    metadata: {
      title,
      description,
    },
    breadcrumbs: [
      { label: "Home", href: routes.home },
      { label: "Collections", href: routes.collections },
      { label: title },
    ],
    overview: {
      kicker: "Category Overview",
      title,
      description,
      filterLabel: `${title} categories`,
      filterCardKicker: "Filter",
    },
    products: {
      kicker: "Product Collection",
      title: productTitle,
      featuredLabel: "Featured",
      detailsLabel: "View Details",
      emptyMessage,
      loadMoreLabel: "Load More",
      initialVisibleCount: 24,
      batchSize: 24,
      detailBasePath: "/products",
    },
    designCTA: {
      kicker: "Design Your Space",
      title: ctaTitle,
      description:
        "Share your room size, preferred finish direction, inspiration images, and furniture requirements. The Star Furniture Goa team can help plan a practical custom solution.",
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
      href: pinterestUrl,
    },
    catalogues: {
      kicker: `Related ${title} Catalogues`,
      title: catalogueTitle,
      description:
        "Browse catalogue previews and shortlist styles, finishes, and layouts before sharing your requirements.",
      buttonLabel: "Open Catalogue",
    },
    productDetail: {
      breadcrumbParentLabel: title,
      breadcrumbParentHref: `/collections/${slug}`,
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
          "Every furniture requirement is different. These customization options help the team plan furniture around your measurements, finish preference, and daily usage.",
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
    categories: ["All"],
    items: [],
    relatedCatalogues: [],
  };
}
