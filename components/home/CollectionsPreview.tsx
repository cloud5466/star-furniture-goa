import { CollectionCard } from "@/components/collections/CollectionCard";

const previewCollections = [
  {
    title: "Custom Wardrobes",
    image: "/images/categories/custom-wardrobes.webp",
    href: "/collections/wardrobes",
    subtitle: "Tailored storage designed around finish, measurement, and everyday use.",
    badge: "Storage",
  },
  {
    title: "Modern Kitchens",
    image: "/images/categories/modern-kitchens.webp",
    href: "/collections/modular-kitchens",
    subtitle: "Functional kitchen furniture with premium finishes and practical layouts.",
    badge: "Kitchen",
  },
  {
    title: "Bedroom Furniture",
    image: "/images/categories/bedroom-furniture.webp",
    href: "/collections/bedroom-furniture",
    subtitle: "Beds, dressing units, and storage crafted for calm everyday comfort.",
    badge: "Bedroom",
  },
  {
    title: "Office Furniture",
    image: "/images/categories/office-furniture.webp",
    href: "/collections/office-furniture",
    subtitle: "Work-focused tables and storage for homes, studios, and commercial spaces.",
    badge: "Workspace",
  },
  {
    title: "TV Units",
    image: "/images/categories/tv-units.webp",
    href: "/collections/tv-units",
    subtitle: "Clean entertainment units built for display, storage, and proportion.",
    badge: "Living",
  },
  {
    title: "Made-to-Order Interiors",
    image: "/images/categories/made-to-order-interiors.webp",
    href: "/collections/custom-furniture",
    subtitle: "Custom furniture concepts manufactured to suit your measurements and vision.",
    badge: "Custom",
  },
] as const;

export function CollectionsPreview() {
  return (
    <section
      aria-labelledby="collections-preview-title"
      className="bg-[var(--color-bg-dark)] px-4 py-16 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:py-24 xl:px-14"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-8 flex items-center justify-center gap-3 text-center sm:mb-10 sm:gap-4">
          <span
            aria-hidden="true"
            className="h-px max-w-[320px] flex-1 bg-[rgba(212,160,60,0.22)]"
          />
          <h2
            className="font-display text-[1rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-gold)] sm:text-[1.18rem] lg:text-[1.45rem]"
            id="collections-preview-title"
          >
            Crafted for Every Space
          </h2>
          <span
            aria-hidden="true"
            className="h-px max-w-[320px] flex-1 bg-[rgba(212,160,60,0.22)]"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {previewCollections.map((collection) => (
            <CollectionCard
              badge={collection.badge}
              href={collection.href}
              image={collection.image}
              key={collection.href}
              subtitle={collection.subtitle}
              title={collection.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
