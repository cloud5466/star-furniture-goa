"use client";

interface PinterestInputProps {
  title: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function PinterestInput({
  title,
  placeholder,
  value,
  onChange,
}: PinterestInputProps) {
  return (
    <div className="rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(25,25,25,0.24)] p-4">
      <label
        className="font-display text-[1.35rem] font-semibold text-[var(--color-gold)]"
        htmlFor="pinterest-link"
      >
        {title}
      </label>
      <input
        className="mt-4 h-12 w-full rounded-[6px] border border-[rgba(212,160,60,0.28)] bg-[rgba(255,248,238,0.04)] px-4 text-sm text-[var(--color-cream)] outline-none transition-colors duration-200 placeholder:text-[rgba(255,248,238,0.42)] focus:border-[var(--color-gold)]"
        id="pinterest-link"
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type="url"
        value={value}
      />
    </div>
  );
}

