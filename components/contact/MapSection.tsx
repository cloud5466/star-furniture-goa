import { Navigation } from "lucide-react";

import { Button } from "@/components/shared-ui/Button";

interface MapSectionProps {
  title: string;
  description: string;
  addressLabel: string;
  embedSrc: string;
  directionsHref: string;
  buttonLabel: string;
}

export function MapSection({
  title,
  description,
  addressLabel,
  embedSrc,
  directionsHref,
  buttonLabel,
}: MapSectionProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-stretch">
      <div className="rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.04)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-6 lg:p-8">
        <p className="section-kicker mb-4">Factory Location</p>
        <h2 className="font-display text-[2rem] font-semibold leading-[1.08] text-[var(--color-cream)] sm:text-[3rem]">
          {title}
        </h2>
        <p className="mt-5 max-w-[620px] text-[0.98rem] leading-[1.82] text-[rgba(255,248,238,0.74)]">
          {description}
        </p>
        <div className="mt-7">
          <Button asChild size="lg">
            <a href={directionsHref} rel="noreferrer" target="_blank">
              <Navigation aria-hidden="true" className="h-4 w-4" />
              {buttonLabel}
            </a>
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[#111] shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
        <iframe
          aria-label={`Google map showing ${addressLabel}`}
          className="h-[320px] w-full border-0 grayscale-[18%] sm:h-[400px] lg:h-full lg:min-h-[380px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={embedSrc}
          title="Star Furniture Goa location map"
        />
      </div>
    </div>
  );
}
