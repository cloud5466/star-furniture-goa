interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  kicker: string;
  title: string;
  steps: readonly ProcessStep[];
}

export function ProcessTimeline({ kicker, title, steps }: ProcessTimelineProps) {
  return (
    <section className="rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.04)] p-5 sm:p-6">
      <p className="section-kicker mb-3">{kicker}</p>
      <h2 className="font-display text-[1.75rem] font-semibold leading-tight text-[var(--color-cream)] sm:text-[2.2rem]">
        {title}
      </h2>
      <ol className="mt-6 grid gap-4">
        {steps.map((step, index) => (
          <li className="flex gap-4" key={step.title}>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[rgba(212,160,60,0.36)] text-sm font-semibold text-[var(--color-gold)]">
              {index + 1}
            </span>
            <div>
              <h3 className="font-display text-[1.15rem] font-semibold text-[var(--color-gold)]">
                {step.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-[rgba(255,248,238,0.68)]">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

