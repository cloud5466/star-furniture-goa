import { Clock } from "lucide-react";

interface BusinessHoursProps {
  title: string;
  days: string;
  hours: string;
  note: string;
}

export function BusinessHours({ title, days, hours, note }: BusinessHoursProps) {
  return (
    <article className="rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.04)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-6">
      <Clock
        aria-hidden="true"
        className="mb-5 h-5 w-5 text-[var(--color-gold)]"
        strokeWidth={1.8}
      />
      <p className="section-kicker mb-3">{title}</p>
      <p className="font-display text-[1.45rem] font-semibold text-[var(--color-cream)]">
        {days}
      </p>
      <p className="mt-2 text-sm leading-6 text-[rgba(255,248,238,0.78)]">
        {hours}
      </p>
      <p className="mt-3 text-xs leading-5 text-[rgba(255,248,238,0.58)]">
        {note}
      </p>
    </article>
  );
}

