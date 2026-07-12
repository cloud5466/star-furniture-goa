"use client";

interface RequirementsFormProps {
  kicker: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function RequirementsForm({
  kicker,
  placeholder,
  value,
  onChange,
}: RequirementsFormProps) {
  return (
    <section className="rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.04)] p-5 sm:p-6">
      <label className="section-kicker mb-3 block" htmlFor="requirements">
        {kicker}
      </label>
      <textarea
        className="min-h-[150px] w-full resize-y rounded-[6px] border border-[rgba(212,160,60,0.28)] bg-[rgba(25,25,25,0.28)] p-4 text-sm leading-6 text-[var(--color-cream)] outline-none transition-colors duration-200 placeholder:text-[rgba(255,248,238,0.42)] focus:border-[var(--color-gold)]"
        id="requirements"
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </section>
  );
}

