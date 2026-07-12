import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import { Button } from "@/components/shared-ui/Button";

interface RelatedCatalogue {
  id: string;
  title: string;
  description: string;
  href: string;
}

interface RelatedCataloguesProps {
  kicker: string;
  title: string;
  description: string;
  buttonLabel: string;
  catalogues: RelatedCatalogue[];
}

export function RelatedCatalogues({
  kicker,
  title,
  description,
  buttonLabel,
  catalogues,
}: RelatedCataloguesProps) {
  return (
    <section className="bg-[var(--color-bg-dark)] px-4 py-16 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:py-20 xl:px-14">
      <div className="mx-auto grid w-full max-w-[1180px] gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-start">
        <div>
          <p className="section-kicker mb-4">{kicker}</p>
          <h2 className="font-display text-[2rem] font-semibold leading-[1.1] text-[var(--color-cream)] sm:text-[2.8rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-[620px] text-[0.98rem] leading-[1.82] text-[rgba(255,248,238,0.74)]">
            {description}
          </p>
        </div>

        <div className="grid gap-4">
          {catalogues.map((catalogue) => (
            <article
              className="rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.04)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
              key={catalogue.id}
            >
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[6px] border border-[rgba(212,160,60,0.32)] text-[var(--color-gold)]">
                  <BookOpen aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-[1.25rem] font-semibold text-[var(--color-gold)]">
                    {catalogue.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[rgba(255,248,238,0.72)]">
                    {catalogue.description}
                  </p>
                  <div className="mt-4">
                    <Button asChild size="sm" variant="outline">
                      <Link href={catalogue.href}>
                        {buttonLabel}
                        <ArrowRight aria-hidden="true" className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

