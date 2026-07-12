"use client";

export interface ContactDetailsValue {
  name: string;
  phone: string;
  email: string;
}

interface ContactFormProps {
  kicker: string;
  value: ContactDetailsValue;
  onChange: (value: ContactDetailsValue) => void;
}

export function ContactForm({ kicker, value, onChange }: ContactFormProps) {
  return (
    <section className="rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.04)] p-5 sm:p-6">
      <p className="section-kicker mb-5">{kicker}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[rgba(255,248,238,0.56)]">
            Name
          </span>
          <input
            className="h-12 rounded-[6px] border border-[rgba(212,160,60,0.28)] bg-[rgba(25,25,25,0.28)] px-4 text-sm text-[var(--color-cream)] outline-none transition-colors duration-200 focus:border-[var(--color-gold)]"
            onChange={(event) => onChange({ ...value, name: event.target.value })}
            type="text"
            value={value.name}
          />
        </label>
        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[rgba(255,248,238,0.56)]">
            Phone Number
          </span>
          <input
            className="h-12 rounded-[6px] border border-[rgba(212,160,60,0.28)] bg-[rgba(25,25,25,0.28)] px-4 text-sm text-[var(--color-cream)] outline-none transition-colors duration-200 focus:border-[var(--color-gold)]"
            onChange={(event) =>
              onChange({ ...value, phone: event.target.value })
            }
            type="tel"
            value={value.phone}
          />
        </label>
        <label className="grid gap-2 sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[rgba(255,248,238,0.56)]">
            Email (Optional)
          </span>
          <input
            className="h-12 rounded-[6px] border border-[rgba(212,160,60,0.28)] bg-[rgba(25,25,25,0.28)] px-4 text-sm text-[var(--color-cream)] outline-none transition-colors duration-200 focus:border-[var(--color-gold)]"
            onChange={(event) =>
              onChange({ ...value, email: event.target.value })
            }
            type="email"
            value={value.email}
          />
        </label>
      </div>
    </section>
  );
}

