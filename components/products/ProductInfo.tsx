interface ProductInfoProps {
  name: string;
  shortDescription: string;
  category: string;
  tags: readonly string[];
  categoryLabel: string;
  tagsLabel: string;
}

export function ProductInfo({
  name,
  shortDescription,
  category,
  tags,
  categoryLabel,
  tagsLabel,
}: ProductInfoProps) {
  return (
    <div>
      <p className="section-kicker mb-4">{categoryLabel}</p>
      <h1 className="font-display text-[2.15rem] font-semibold leading-[1.05] tracking-normal text-[var(--color-cream)] sm:text-[3.05rem] lg:text-[3.8rem]">
        {name}
      </h1>
      <p className="mt-4 max-w-[650px] text-[0.96rem] leading-[1.72] text-[rgba(255,248,238,0.74)]">
        {shortDescription}
      </p>

      <div className="mt-5 grid gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[rgba(255,248,238,0.52)]">
            {categoryLabel}
          </p>
          <p className="mt-1.5 font-display text-[1.22rem] font-semibold text-[var(--color-gold)]">
            {category}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[rgba(255,248,238,0.52)]">
            {tagsLabel}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                className="rounded-full border border-[rgba(212,160,60,0.28)] bg-[rgba(255,248,238,0.04)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[rgba(255,248,238,0.76)]"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
