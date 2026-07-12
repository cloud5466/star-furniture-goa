export interface ProductSpecification {
  label: string;
  value: string;
}

interface SpecificationsProps {
  kicker: string;
  title: string;
  specifications: readonly ProductSpecification[];
}

export function Specifications({
  kicker,
  title,
  specifications,
}: SpecificationsProps) {
  return (
    <section className="bg-[var(--color-bg-dark)] px-4 py-14 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:py-20 xl:px-14">
      <div className="mx-auto w-full max-w-[1180px]">
        <p className="section-kicker mb-4">{kicker}</p>
        <h2 className="font-display text-[2rem] font-semibold leading-[1.1] text-[var(--color-cream)] sm:text-[2.8rem]">
          {title}
        </h2>

        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          {specifications.map((specification) => (
            <div
              className="rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.04)] p-5"
              key={specification.label}
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[rgba(255,248,238,0.52)]">
                {specification.label}
              </dt>
              <dd className="mt-2 font-display text-[1.3rem] font-semibold text-[var(--color-gold)]">
                {specification.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
