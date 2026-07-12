import Image from "next/image";
import { Download } from "lucide-react";

import { Button } from "@/components/shared-ui/Button";
import type { Catalogue } from "@/data/catalogues";

interface CatalogueCardProps {
  catalogue: Catalogue;
  downloadLabel: string;
}

export function CatalogueCard({ catalogue, downloadLabel }: CatalogueCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.035)] text-[var(--color-cream)] shadow-[0_24px_70px_rgba(0,0,0,0.22)] transition-colors duration-200 hover:border-[rgba(212,160,60,0.55)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#111]">
        <Image
          alt={`${catalogue.title} cover`}
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.025]"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={catalogue.coverImage}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.5),rgba(0,0,0,0.02)_64%)]"
        />
      </div>

      <div className="grid flex-1 gap-3 p-5">
        <p className="section-kicker">{catalogue.category}</p>
        <h3 className="font-display text-[1.35rem] font-semibold leading-tight tracking-[0.04em] text-[var(--color-gold)]">
          {catalogue.title}
        </h3>
        <div className="grid gap-1 text-sm leading-6 text-[rgba(255,248,238,0.72)]">
          <p>PDF &bull; {catalogue.size}</p>
          <p>Updated {catalogue.updatedAt}</p>
        </div>
        <div className="mt-auto pt-2">
          <Button asChild className="group/button" size="sm" variant="outline">
            <a download href={catalogue.pdf}>
              <Download aria-hidden="true" className="h-4 w-4" />
              {downloadLabel}
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
