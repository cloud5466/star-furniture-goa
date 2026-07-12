import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/shared-ui/Button";

interface InspirationCardProps {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
}

export function InspirationCard({
  title,
  description,
  buttonLabel,
  href,
}: InspirationCardProps) {
  return (
    <section className="bg-[var(--color-bg-dark)] px-4 pb-6 pt-2 text-[var(--color-cream)] sm:px-6 lg:px-10 xl:px-14">
      <div className="mx-auto w-full max-w-[1180px] rounded-[8px] border border-[rgba(212,160,60,0.24)] bg-[rgba(255,248,238,0.045)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-6 lg:p-7">
        <div className="grid gap-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
          <span className="grid h-11 w-11 place-items-center rounded-[6px] border border-[rgba(212,160,60,0.34)] text-[var(--color-gold)]">
            <Sparkles aria-hidden="true" className="h-5 w-5" />
          </span>
          <div>
            <h2 className="font-display text-[1.55rem] font-semibold leading-tight text-[var(--color-gold)] sm:text-[1.85rem]">
              {title}
            </h2>
            <p className="mt-2 max-w-[760px] text-sm leading-6 text-[rgba(255,248,238,0.74)]">
              {description}
            </p>
          </div>
          <Button asChild className="group w-full sm:w-fit" size="lg" variant="outline">
            <Link href={href} rel="noreferrer" target="_blank">
              {buttonLabel}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
