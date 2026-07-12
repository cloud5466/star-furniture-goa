"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/shared-ui/Button";
import { routes } from "@/constants/routes";

export function CatalogueCTA() {
  const shouldReduceMotion = useReducedMotion();

  const revealProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.32 },
        transition: { duration: 0.62, ease: "easeOut" as const },
      };

  return (
    <section
      aria-labelledby="catalogue-cta-title"
      className="overflow-hidden bg-[var(--color-bg-dark)] px-4 py-[4.5rem] text-[var(--color-cream)] sm:px-6 sm:py-20 lg:px-10 lg:py-28 xl:px-14"
    >
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.72fr)] lg:gap-16">
        <motion.div className="max-w-[680px]" {...revealProps}>
          <p className="section-kicker mb-4">Explore Our Catalogue</p>
          <h2
            className="font-display text-[2.2rem] font-semibold leading-[1.08] tracking-normal text-[var(--color-cream)] sm:text-[3rem] lg:text-[4.25rem]"
            id="catalogue-cta-title"
          >
            Browse designs before you build your space.
          </h2>
          <p className="mt-6 max-w-[570px] text-[0.98rem] leading-[1.85] text-[rgba(255,248,238,0.76)] sm:text-[1.05rem]">
            Discover curated furniture ideas, finish options, and made-to-order
            possibilities from Star Furniture Goa&apos;s catalogue library.
          </p>

          <div className="mt-8">
            <Button asChild className="group" size="lg">
              <Link href={routes.catalogues}>
                Explore Catalogues
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={1.9}
                />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="relative mx-auto w-full max-w-[430px] lg:mx-0 lg:justify-self-end"
          {...revealProps}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 0.66, delay: 0.08, ease: "easeOut" as const }
          }
        >
          <div className="absolute left-4 top-5 h-full w-full rounded-[8px] border border-[rgba(212,160,60,0.18)] bg-[rgba(255,248,238,0.05)]" />
          <div className="absolute left-8 top-10 h-full w-full rounded-[8px] border border-[rgba(212,160,60,0.12)] bg-[rgba(255,248,238,0.035)]" />

          <div className="relative overflow-hidden rounded-[8px] border border-[rgba(212,160,60,0.34)] bg-[#111] shadow-[0_30px_90px_rgba(0,0,0,0.4)]">
            <div className="relative aspect-[4/5]">
              <Image
                alt=""
                className="object-cover"
                fill
                sizes="(max-width: 768px) 86vw, 430px"
                src="/images/categories/modern-kitchens.webp"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.22)_50%,rgba(0,0,0,0.08))]" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
              <p className="font-display text-[1.55rem] font-semibold leading-tight text-[var(--color-cream)] sm:text-[1.9rem]">
                Star Furniture Goa
              </p>
              <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                Catalogue Library
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
