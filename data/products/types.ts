import type { Metadata } from "next";

export interface CategoryProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  gallery: ProductGalleryImage[];
  shortDescription: string;
  tags: string[];
  finishes: ProductFinish[];
  specifications: ProductSpecification[];
  featured: boolean;
}

export interface ProductGalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface ProductFinish {
  id: string;
  name: string;
  swatch: string;
  image?: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface CategoryCatalogue {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface CategoryProductData {
  slug: string;
  metadata: Metadata;
  breadcrumbs: Array<{
    label: string;
    href?: string;
  }>;
  overview: {
    kicker: string;
    title: string;
    description: string;
    filterLabel: string;
    filterCardKicker: string;
  };
  products: {
    kicker: string;
    title: string;
    featuredLabel: string;
    detailsLabel: string;
    emptyMessage: string;
    loadMoreLabel: string;
    initialVisibleCount: number;
    batchSize: number;
    detailBasePath: string;
  };
  designCTA: {
    kicker: string;
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  inspiration: {
    title: string;
    description: string;
    buttonLabel: string;
    href: string;
  };
  catalogues: {
    kicker: string;
    title: string;
    description: string;
    buttonLabel: string;
  };
  productDetail: {
    breadcrumbParentLabel: string;
    breadcrumbParentHref: string;
    info: {
      categoryLabel: string;
      tagsLabel: string;
    };
    finishes: {
      kicker: string;
      title: string;
    };
    specifications: {
      kicker: string;
      title: string;
    };
    customizations: {
      kicker: string;
      title: string;
      description: string;
      options: string[];
    };
    actions: {
      bookConsultationLabel: string;
      whatsappEnquiryLabel: string;
      wishlistSaveLabel: string;
      wishlistSavedLabel: string;
      bookConsultationMessage: string;
      whatsappEnquiryMessage: string;
    };
    relatedProducts: {
      kicker: string;
      title: string;
      detailsLabel: string;
      featuredLabel: string;
    };
  };
  categories: readonly string[];
  items: CategoryProduct[];
  relatedCatalogues: CategoryCatalogue[];
}
