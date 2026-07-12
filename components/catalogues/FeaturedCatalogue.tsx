import Image from "next/image";
import { Download, Star } from "lucide-react";

import { Button } from "@/components/shared-ui/Button";
import type { Catalogue } from "@/data/catalogues";

interface FeaturedCatalogueProps {
  kicker: string;
  catalogue: Catalogue;
  buttonLabel: string;
}

export function FeaturedCatalogue({
  kicker,
  catalogue,
  buttonLabel,
}: FeaturedCatalogueProps) {
  return (
    <section className="bg-[var(--color-bg-dark)] px-4 py-12 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:py-20 xl:px-14">
      <div className="mx-auto grid w-full max-w-[1280px] overflow-hidden rounded-[8px] border border-[rgba(212,160,60,0.26)] bg-[rgba(255,248,238,0.045)] shadow-[0_30px_90px_rgba(0,0,0,0.3)] lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.7fr)]">
        <div className="relative aspect-[16/9] bg-[#111]">
          <Image
            alt={`${catalogue.title} featured cover`}
            className="object-contain p-3"
            fill
            sizes="(max-width: 1024px) 100vw, 62vw"
            src={catalogue.coverImage}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.44),rgba(0,0,0,0.02)_64%)]"
          />
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <p className="section-kicker mb-4 inline-flex items-center gap-2">
            <Star aria-hidden="true" className="h-4 w-4 fill-current" />
            {kicker}
          </p>
          <h2 className="font-display text-[2rem] font-semibold leading-[1.08] text-[var(--color-cream)] sm:text-[2.75rem]">
            {catalogue.title}
          </h2>
          <div className="mt-5 grid gap-1 text-sm leading-6 text-[rgba(255,248,238,0.74)]">
            <p>{catalogue.category}</p>
            <p>PDF &bull; {catalogue.size}</p>
            <p>Updated {catalogue.updatedAt}</p>
          </div>
          <div className="mt-7">
            <Button asChild className="group" size="lg">
              <a download href={catalogue.pdf}>
                <Download aria-hidden="true" className="h-4 w-4" />
                {buttonLabel}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
