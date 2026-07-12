import { Check } from "lucide-react";

interface CustomizationOptionsProps {
  kicker: string;
  title: string;
  description: string;
  options: readonly string[];
}

export function CustomizationOptions({
  kicker,
  title,
  description,
  options,
}: CustomizationOptionsProps) {
  return (
    <section className="bg-[var(--color-bg-dark)] px-4 py-14 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:py-20 xl:px-14">
      <div className="mx-auto grid w-full max-w-[1180px] gap-8 rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.04)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-8 lg:grid-cols-[0.86fr_1fr] lg:p-10">
        <div>
          <p className="section-kicker mb-4">{kicker}</p>
          <h2 className="font-display text-[2rem] font-semibold leading-[1.1] text-[var(--color-cream)] sm:text-[2.8rem]">
            {title}
          </h2>
          <p className="mt-5 text-[0.98rem] leading-[1.82] text-[rgba(255,248,238,0.74)]">
            {description}
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {options.map((option) => (
            <li
              className="flex items-center gap-3 rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(25,25,25,0.34)] px-4 py-4 text-sm font-semibold text-[rgba(255,248,238,0.82)]"
              key={option}
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[rgba(212,160,60,0.12)] text-[var(--color-gold)]">
                <Check aria-hidden="true" className="h-4 w-4" />
              </span>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
