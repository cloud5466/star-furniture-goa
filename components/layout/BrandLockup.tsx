import Link from "next/link";
import { Armchair, Star } from "lucide-react";

import { site } from "@/constants/site";
import { cn } from "@/lib/utils";

type BrandLockupProps = {
  className?: string;
  compact?: boolean;
};

export function BrandLockup({ className, compact = false }: BrandLockupProps) {
  return (
    <Link
      aria-label={`${site.name} home`}
      className={cn(
        "group flex min-w-0 items-center gap-3 text-left",
        compact ? "gap-2" : "gap-3 sm:gap-4",
        className,
      )}
      href="/"
    >
      <span
        aria-hidden="true"
        className={cn(
          "relative grid shrink-0 place-items-center rounded-[6px] border border-[rgba(212,160,60,0.45)] bg-[rgba(212,160,60,0.08)] text-[var(--color-gold)] shadow-[0_14px_34px_rgba(0,0,0,0.28)] transition-colors duration-200 group-hover:border-[rgba(212,160,60,0.75)]",
          compact ? "h-11 w-11" : "h-14 w-14 sm:h-16 sm:w-16",
        )}
      >
        <Star
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-[58%] -translate-y-[58%]",
            compact ? "h-8 w-8" : "h-10 w-10 sm:h-12 sm:w-12",
          )}
          strokeWidth={1.7}
        />
        <Armchair
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-[18%] translate-y-[4%]",
            compact ? "h-5 w-5" : "h-6 w-6 sm:h-7 sm:w-7",
          )}
          strokeWidth={2}
        />
      </span>

      <span className="min-w-0">
        <span
          className={cn(
            "block font-display font-semibold leading-none tracking-[0.04em] text-[var(--color-gold)]",
            compact
              ? "text-[1rem]"
              : "text-[1.12rem] sm:text-[1.35rem] lg:text-[1.7rem]",
          )}
        >
          {site.displayName}
        </span>
        {!compact ? (
          <span className="mt-1 flex items-center gap-2 text-[0.68rem] italic leading-none text-[rgba(255,248,238,0.84)] sm:text-[0.78rem]">
            <span className="h-px w-8 bg-[var(--color-gold)] sm:w-12" />
            <span className="truncate">{site.tagline}</span>
            <span className="hidden h-px w-8 bg-[var(--color-gold)] sm:block sm:w-12" />
          </span>
        ) : null}
      </span>
    </Link>
  );
}
