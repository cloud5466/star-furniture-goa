import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/shared-ui/Button";
import { contact } from "@/data/contact";

interface DesignYourSpaceCTAProps {
  kicker: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export function DesignYourSpaceCTA({
  kicker,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: DesignYourSpaceCTAProps) {
  return (
    <section className="bg-[var(--color-bg-dark)] px-4 pb-16 pt-4 text-[var(--color-cream)] sm:px-6 sm:pb-20 lg:px-10 lg:pb-28 xl:px-14">
      <div className="mx-auto w-full max-w-[1180px] overflow-hidden rounded-[8px] border border-[rgba(212,160,60,0.26)] bg-[rgba(255,248,238,0.045)] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.34)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_auto] lg:items-end">
          <div>
            <p className="section-kicker mb-4">{kicker}</p>
            <h2 className="max-w-[760px] font-display text-[2.1rem] font-semibold leading-[1.08] text-[var(--color-cream)] sm:text-[3.2rem]">
              {title}
            </h2>
            <p className="mt-5 max-w-[650px] text-[0.98rem] leading-[1.82] text-[rgba(255,248,238,0.74)] sm:text-[1.04rem]">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild className="group" size="lg">
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href={contact.whatsappHref} rel="noreferrer" target="_blank">
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
