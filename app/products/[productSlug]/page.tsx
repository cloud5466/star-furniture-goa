import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumb } from "@/components/products/Breadcrumb";
import { AvailableFinishes } from "@/components/products/AvailableFinishes";
import { CustomizationOptions } from "@/components/products/CustomizationOptions";
import { ProductActions } from "@/components/products/ProductActions";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductInfo } from "@/components/products/ProductInfo";
import { RelatedCatalogues } from "@/components/products/RelatedCatalogues";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import { Specifications } from "@/components/products/Specifications";
import { contact } from "@/data/contact";
import { categoryPages } from "@/data/categoryPages";

interface ProductPageProps {
  params: Promise<{
    productSlug: string;
  }>;
}

function getProductPage(productSlug: string) {
  for (const categoryPage of categoryPages) {
    const product = categoryPage.items.find(
      (collectionProduct) => collectionProduct.slug === productSlug,
    );

    if (product) {
      return {
        product,
        categoryPage,
        relatedProducts: categoryPage.items
          .filter(
            (collectionProduct) =>
              collectionProduct.category === product.category &&
              collectionProduct.id !== product.id,
          )
          .slice(0, 4),
      };
    }
  }

  return null;
}

function createWhatsAppHref(message: string) {
  return `https://wa.me/91${contact.phoneNumbers[0]}?text=${encodeURIComponent(
    message,
  )}`;
}

function applyProductMessageTemplate({
  template,
  productName,
  category,
  productUrl,
}: {
  template: string;
  productName: string;
  category: string;
  productUrl: string;
}) {
  return template
    .replaceAll("{productName}", productName)
    .replaceAll("{category}", category)
    .replaceAll("{productUrl}", productUrl);
}

export function generateStaticParams() {
  return categoryPages.flatMap((categoryPage) =>
    categoryPage.items.map((product) => ({
      productSlug: product.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { productSlug } = await params;
  const page = getProductPage(productSlug);

  if (!page) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: page.product.name,
    description: page.product.shortDescription,
    alternates: {
      canonical: `/products/${page.product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productSlug } = await params;
  const page = getProductPage(productSlug);

  if (!page) {
    notFound();
  }

  const { product, categoryPage, relatedProducts } = page;
  const productDetail = categoryPage.productDetail;
  const productUrl = `${contact.website.href}/products/${product.slug}`;
  const bookConsultationHref = createWhatsAppHref(
    applyProductMessageTemplate({
      template: productDetail.actions.bookConsultationMessage,
      productName: product.name,
      category: product.category,
      productUrl,
    }),
  );
  const whatsappEnquiryHref = createWhatsAppHref(
    applyProductMessageTemplate({
      template: productDetail.actions.whatsappEnquiryMessage,
      productName: product.name,
      category: product.category,
      productUrl,
    }),
  );

  return (
    <>
      <Breadcrumb
        items={[
          ...categoryPage.breadcrumbs.slice(0, -1),
          {
            label: productDetail.breadcrumbParentLabel,
            href: productDetail.breadcrumbParentHref,
          },
          { label: product.name },
        ]}
      />

      <section className="bg-[var(--color-bg-dark)] px-4 pb-10 pt-4 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:pb-14 xl:px-14">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 lg:grid-cols-[minmax(0,0.96fr)_minmax(420px,0.84fr)] lg:gap-12">
          <ProductGallery images={product.gallery} />
          <div>
            <ProductInfo
              category={product.category}
              categoryLabel={productDetail.info.categoryLabel}
              name={product.name}
              shortDescription={product.shortDescription}
              tags={product.tags}
              tagsLabel={productDetail.info.tagsLabel}
            />
            <AvailableFinishes
              finishes={product.finishes}
              kicker={productDetail.finishes.kicker}
              title={productDetail.finishes.title}
            />
            <ProductActions
              bookConsultationHref={bookConsultationHref}
              bookConsultationLabel={
                productDetail.actions.bookConsultationLabel
              }
              product={product}
              whatsappEnquiryHref={whatsappEnquiryHref}
              whatsappEnquiryLabel={productDetail.actions.whatsappEnquiryLabel}
              wishlistSaveLabel={productDetail.actions.wishlistSaveLabel}
              wishlistSavedLabel={productDetail.actions.wishlistSavedLabel}
            />
          </div>
        </div>
      </section>

      <Specifications
        kicker={productDetail.specifications.kicker}
        specifications={product.specifications}
        title={productDetail.specifications.title}
      />
      <CustomizationOptions
        description={productDetail.customizations.description}
        kicker={productDetail.customizations.kicker}
        options={productDetail.customizations.options}
        title={productDetail.customizations.title}
      />
      <RelatedProducts
        detailsLabel={productDetail.relatedProducts.detailsLabel}
        featuredLabel={productDetail.relatedProducts.featuredLabel}
        kicker={productDetail.relatedProducts.kicker}
        productDetailBasePath={categoryPage.products.detailBasePath}
        products={relatedProducts}
        title={productDetail.relatedProducts.title}
      />
      <RelatedCatalogues
        buttonLabel={categoryPage.catalogues.buttonLabel}
        catalogues={categoryPage.relatedCatalogues}
        description={categoryPage.catalogues.description}
        kicker={categoryPage.catalogues.kicker}
        title={categoryPage.catalogues.title}
      />
    </>
  );
}
