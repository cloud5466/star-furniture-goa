import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/shared-ui/Button";

interface ContactCTAProps {
  title: string;
  buttonLabel: string;
  href: string;
}

export function ContactCTA({ title, buttonLabel, href }: ContactCTAProps) {
  return (
    <section className="bg-[var(--color-bg-dark)] px-4 pb-16 pt-4 text-[var(--color-cream)] sm:px-6 sm:pb-20 lg:px-10 lg:pb-28 xl:px-14">
      <div className="mx-auto w-full max-w-[1180px] rounded-[8px] border border-[rgba(212,160,60,0.26)] bg-[rgba(255,248,238,0.045)] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.3)] sm:p-8 lg:p-10">
        <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <h2 className="font-display text-[2.1rem] font-semibold leading-[1.08] text-[var(--color-cream)] sm:text-[3rem]">
            {title}
          </h2>
          <Button asChild className="group" size="lg">
            <Link href={href}>
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

