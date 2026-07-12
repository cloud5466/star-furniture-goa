"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

export interface ProductFinish {
  id: string;
  name: string;
  swatch: string;
  image?: string;
}

interface AvailableFinishesProps {
  kicker: string;
  title: string;
  finishes: readonly ProductFinish[];
  onSelectFinish?: (finish: ProductFinish) => void;
}

export function AvailableFinishes({
  kicker,
  title,
  finishes,
  onSelectFinish,
}: AvailableFinishesProps) {
  const [activeFinishId, setActiveFinishId] = useState(finishes[0]?.id);
  const shouldReduceMotion = useReducedMotion();

  if (finishes.length === 0) {
    return null;
  }

  return (
    <section className="mt-5">
      <p className="section-kicker mb-2 text-[0.68rem]">{kicker}</p>
      <h2 className="font-display text-[1.35rem] font-semibold leading-tight text-[var(--color-cream)]">
        {title}
      </h2>
      <div
        aria-label={title}
        className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"
        role="group"
      >
        {finishes.map((finish) => {
          const isActive = finish.id === activeFinishId;

          return (
            <motion.button
              aria-pressed={isActive}
              className={cn(
                "rounded-[8px] border bg-[rgba(255,248,238,0.035)] p-2 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-dark)]",
                isActive
                  ? "border-[var(--color-gold)]"
                  : "border-[rgba(212,160,60,0.22)] hover:border-[rgba(212,160,60,0.58)]",
              )}
              key={finish.id}
              onClick={() => {
                setActiveFinishId(finish.id);
                onSelectFinish?.(finish);
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              type="button"
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            >
              <span
                aria-hidden="true"
                className="block h-9 rounded-[6px] border border-[rgba(255,248,238,0.16)]"
                style={{ background: finish.swatch }}
              />
              <span className="mt-2 block text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[rgba(255,248,238,0.76)]">
                {finish.name}
              </span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
