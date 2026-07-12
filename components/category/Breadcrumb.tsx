import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: readonly BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-[var(--color-bg-dark)] px-4 pb-4 pt-10 text-[var(--color-cream)] sm:px-6 lg:px-10 xl:px-14"
    >
      <ol className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[rgba(255,248,238,0.62)]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li className="flex items-center gap-2" key={item.label}>
              {item.href && !isLast ? (
                <Link
                  className="transition-colors duration-200 hover:text-[var(--color-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast ? (
                <ChevronRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 text-[rgba(212,160,60,0.7)]"
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

