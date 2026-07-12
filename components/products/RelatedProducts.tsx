import { ProductCard, type ProductCardItem } from "@/components/products/ProductCard";

interface RelatedProductsProps {
  kicker: string;
  title: string;
  products: ProductCardItem[];
  featuredLabel: string;
  detailsLabel: string;
  productDetailBasePath: string;
}

export function RelatedProducts({
  kicker,
  title,
  products,
  featuredLabel,
  detailsLabel,
  productDetailBasePath,
}: RelatedProductsProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="bg-[var(--color-bg-dark)] px-4 py-14 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:py-20 xl:px-14">
      <div className="mx-auto w-full max-w-[1280px]">
        <p className="section-kicker mb-4">{kicker}</p>
        <h2 className="font-display text-[2rem] font-semibold leading-[1.1] text-[var(--color-cream)] sm:text-[2.8rem]">
          {title}
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {products.map((product) => (
            <ProductCard
              detailsLabel={detailsLabel}
              featuredLabel={featuredLabel}
              key={product.id}
              product={product}
              productDetailBasePath={productDetailBasePath}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
