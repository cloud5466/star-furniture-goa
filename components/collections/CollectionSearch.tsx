import { Search } from "lucide-react";

interface CollectionSearchProps {
  label: string;
  placeholder: string;
}

export function CollectionSearch({ label, placeholder }: CollectionSearchProps) {
  return (
    <section className="bg-[var(--color-bg-dark)] px-4 py-6 text-[var(--color-cream)] sm:px-6 lg:px-10 xl:px-14">
      <div className="mx-auto w-full max-w-[920px]">
        <div
          aria-label={label}
          className="flex min-h-14 items-center gap-3 rounded-[8px] border border-[rgba(212,160,60,0.28)] bg-[rgba(255,248,238,0.055)] px-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)] focus-within:border-[var(--color-gold)]"
          role="search"
        >
          <Search
            aria-hidden="true"
            className="h-5 w-5 shrink-0 text-[var(--color-gold)]"
            strokeWidth={1.8}
          />
          <label className="sr-only" htmlFor="collections-search">
            {label}
          </label>
          <input
            className="h-14 min-w-0 flex-1 bg-transparent text-[0.96rem] text-[var(--color-cream)] outline-none placeholder:text-[rgba(255,248,238,0.48)]"
            id="collections-search"
            name="collectionSearch"
            placeholder={placeholder}
            type="search"
          />
        </div>
      </div>
    </section>
  );
}
