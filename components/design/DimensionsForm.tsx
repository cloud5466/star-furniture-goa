"use client";

export interface DimensionsValue {
  width: string;
  length: string;
  height: string;
}

interface DimensionsFormProps {
  kicker: string;
  helperText: string;
  value: DimensionsValue;
  onChange: (value: DimensionsValue) => void;
}

export function DimensionsForm({
  kicker,
  helperText,
  value,
  onChange,
}: DimensionsFormProps) {
  return (
    <section className="rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.04)] p-5 sm:p-6">
      <p className="section-kicker mb-3">{kicker}</p>
      <p className="text-sm leading-6 text-[rgba(255,248,238,0.68)]">
        {helperText}
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {(["width", "length", "height"] as const).map((field) => (
          <label className="grid gap-2" key={field}>
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[rgba(255,248,238,0.56)]">
              {field}
            </span>
            <input
              className="h-12 rounded-[6px] border border-[rgba(212,160,60,0.28)] bg-[rgba(25,25,25,0.28)] px-4 text-sm text-[var(--color-cream)] outline-none transition-colors duration-200 placeholder:text-[rgba(255,248,238,0.42)] focus:border-[var(--color-gold)]"
              onChange={(event) =>
                onChange({ ...value, [field]: event.target.value })
              }
              placeholder="Optional"
              type="text"
              value={value[field]}
            />
          </label>
        ))}
      </div>
    </section>
  );
}

