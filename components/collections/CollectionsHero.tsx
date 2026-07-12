"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

interface CollectionsHeroProps {
  kicker: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  stats: readonly string[];
}

export function CollectionsHero({
  kicker,
  title,
  description,
  image,
  stats,
}: CollectionsHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const revealProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.62, ease: "easeOut" as const },
      };

  return (
    <section className="bg-[var(--color-bg-dark)] px-4 pb-12 pt-12 text-[var(--color-cream)] sm:px-6 md:pt-16 lg:px-10 lg:pb-16 xl:px-14">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(420px,0.72fr)] lg:gap-16">
        <motion.div {...revealProps}>
          <p className="section-kicker mb-4">{kicker}</p>
          <h1 className="max-w-[760px] font-display text-[2.45rem] font-semibold leading-[1.05] tracking-normal text-[var(--color-cream)] sm:text-[3.8rem] lg:text-[5rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-[650px] text-[1rem] leading-[1.85] text-[rgba(255,248,238,0.74)] sm:text-[1.08rem]">
            {description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                className="rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.045)] px-4 py-3"
                key={stat}
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-gold)]">
                  {stat}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:justify-self-end"
          {...revealProps}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 0.66, delay: 0.08, ease: "easeOut" as const }
          }
        >
          <div className="absolute left-5 top-5 h-full w-full rounded-[8px] border border-[rgba(212,160,60,0.18)] bg-[rgba(255,248,238,0.04)]" />
          <div className="relative overflow-hidden rounded-[8px] border border-[rgba(212,160,60,0.28)] bg-[#111] shadow-[0_30px_90px_rgba(0,0,0,0.42)]">
            <div className="relative aspect-[4/5]">
              <Image
                alt={image.alt}
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 520px"
                src={image.src}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.76),rgba(0,0,0,0.06)_58%)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
