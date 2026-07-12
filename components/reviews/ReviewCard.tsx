"use client";

import { Quote, Star } from "lucide-react";

import { cn } from "@/lib/utils";

export type ReviewCardTone = "warm-cream" | "soft-charcoal" | "deep-espresso";

export interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
  tone?: ReviewCardTone;
}

const toneStyles: Record<ReviewCardTone, string> = {
  "warm-cream":
    "border-[rgba(25,25,25,0.14)] bg-[linear-gradient(180deg,rgba(255,248,238,0.98),rgba(242,230,216,0.94))] text-[var(--color-ink)] shadow-[0_24px_70px_rgba(0,0,0,0.22)]",
  "soft-charcoal":
    "border-[rgba(212,160,60,0.24)] bg-[linear-gradient(180deg,#252321,#1c1b1a)] text-[var(--color-cream)] shadow-[0_24px_70px_rgba(0,0,0,0.3)]",
  "deep-espresso":
    "border-[rgba(212,160,60,0.28)] bg-[linear-gradient(180deg,#2a1f18,#17110d)] text-[var(--color-cream)] shadow-[0_24px_70px_rgba(0,0,0,0.34)]",
};

const bodyToneStyles: Record<ReviewCardTone, string> = {
  "warm-cream": "text-[#3c332b]",
  "soft-charcoal": "text-[rgba(255,248,238,0.74)]",
  "deep-espresso": "text-[rgba(255,248,238,0.78)]",
};

const metaToneStyles: Record<ReviewCardTone, string> = {
  "warm-cream": "text-[#6f6254]",
  "soft-charcoal": "text-[rgba(255,248,238,0.56)]",
  "deep-espresso": "text-[rgba(255,248,238,0.58)]",
};

export function ReviewCard({
  name,
  location,
  rating,
  review,
  tone = "warm-cream",
}: ReviewCardProps) {
  const starCount = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <article
      className={cn(
        "relative mb-5 inline-block w-full break-inside-avoid overflow-hidden rounded-[8px] border p-6 text-left sm:p-7",
        toneStyles[tone],
      )}
    >
      <Quote
        aria-hidden="true"
        className="absolute right-5 top-5 h-10 w-10 text-[var(--color-gold)] opacity-20"
        strokeWidth={1.5}
      />

      <div className="relative z-10">
        <div
          aria-label={`${starCount} out of 5 stars`}
          className="mb-5 flex gap-1 text-[var(--color-gold)]"
        >
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              aria-hidden="true"
              className={cn(
                "h-3.5 w-3.5",
                index < starCount ? "fill-current" : "opacity-25",
              )}
              key={index}
              strokeWidth={1.8}
            />
          ))}
        </div>

        <p
          className={cn(
            "text-[0.95rem] leading-[1.75] sm:text-[1rem]",
            bodyToneStyles[tone],
          )}
        >
          {review}
        </p>

        <div className="mt-7 border-t border-[rgba(212,160,60,0.22)] pt-5">
          <h3 className="font-display text-[1.05rem] font-semibold leading-tight tracking-normal">
            {name}
          </h3>
          <p
            className={cn(
              "mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em]",
              metaToneStyles[tone],
            )}
          >
            {location}
          </p>
        </div>
      </div>
    </article>
  );
}
