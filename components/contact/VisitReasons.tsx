import { CheckCircle2 } from "lucide-react";

interface VisitReason {
  title: string;
  description: string;
}

interface VisitReasonsProps {
  kicker: string;
  title: string;
  reasons: readonly VisitReason[];
}

export function VisitReasons({ kicker, title, reasons }: VisitReasonsProps) {
  return (
    <section className="bg-[var(--color-bg-dark)] px-4 py-10 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:py-14 xl:px-14">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-8">
          <p className="section-kicker mb-4">{kicker}</p>
          <h2 className="font-display text-[2rem] font-semibold leading-[1.08] text-[var(--color-cream)] sm:text-[3rem]">
            {title}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article
              className="rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.04)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
              key={reason.title}
            >
              <CheckCircle2
                aria-hidden="true"
                className="mb-5 h-5 w-5 text-[var(--color-gold)]"
                strokeWidth={1.8}
              />
              <h3 className="font-display text-[1.35rem] font-semibold leading-tight text-[var(--color-gold)]">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[rgba(255,248,238,0.7)]">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

