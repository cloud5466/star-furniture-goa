"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Armchair, Ruler, Wrench } from "lucide-react";

const aboutHighlights = [
  {
    label: "Custom measurements",
    icon: Ruler,
  },
  {
    label: "Home and office furniture",
    icon: Armchair,
  },
  {
    label: "Delivery and installation",
    icon: Wrench,
  },
] as const;

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const revealProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 26 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.28 },
        transition: { duration: 0.58, ease: "easeOut" as const },
      };

  return (
    <section
      aria-labelledby="about-star-furniture-title"
      className="flex min-h-screen items-center border-y border-[rgba(25,25,25,0.08)] bg-[var(--color-bg-light)] px-4 py-16 text-[var(--color-ink)] sm:px-6 lg:px-10 lg:py-24 xl:px-14"
      id="about-star-furniture"
    >
      <div className="mx-auto grid w-full max-w-[1180px] items-stretch gap-8 md:grid-cols-[minmax(0,1fr)_minmax(280px,390px)] lg:gap-16">
        <motion.div className="min-w-0" {...revealProps}>
          <p className="section-kicker mb-4">About Us</p>
          <h2
            className="max-w-[720px] font-display text-[2rem] font-semibold leading-[1.08] tracking-normal text-[var(--color-ink)] sm:text-[2.8rem] lg:text-[4rem]"
            id="about-star-furniture-title"
          >
            Where quality meets credibility.
          </h2>

          <div className="mt-6 grid max-w-[680px] gap-5 text-[0.96rem] leading-[1.82] text-[#3e352d] sm:text-[1.02rem] lg:text-[1.08rem]">
            <p>
              Welcome to STAR FURNITURE GOA, proudly serving customers since
              2006 and recognized as one of Goa&apos;s trusted manufacturers,
              wholesalers, and retailers of bespoke furniture.
            </p>
            <p>
              We specialize in premium engineered wood and plywood furniture for
              homes, offices, and commercial spaces, combining style,
              functionality, durability, and affordability in every piece we
              create.
            </p>
            <p>
              With years of experience and a strong commitment to craftsmanship,
              we design customized furniture solutions around your needs,
              preferences, and vision. Customer satisfaction is at the heart of
              everything we do.
            </p>
            <p>
              For complete peace of mind, we offer up to 10 years warranty on
              engineered wood furniture and up to 25 years warranty on plywood
              furniture. At STAR FURNITURE GOA, we do not just create furniture;
              we create spaces that feel like home.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto aspect-[4/5] w-full max-w-[390px] rounded-[8px] border border-[rgba(25,25,25,0.16)] bg-[linear-gradient(135deg,rgba(255,248,238,0.65),rgba(212,160,60,0.12)),var(--color-bg-light)] p-3 sm:p-4 md:mx-0"
          {...revealProps}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 0.62, delay: 0.08, ease: "easeOut" as const }
          }
        >
          <span
            aria-hidden="true"
            className="absolute bottom-[-14px] left-7 right-[-14px] top-7 rounded-[8px] border border-[rgba(212,160,60,0.45)] sm:bottom-[-18px] sm:right-[-18px]"
          />
          <div className="relative z-10 h-full overflow-hidden rounded-[6px] shadow-[0_22px_60px_rgba(25,25,25,0.16)]">
            <Image
              alt="Star Furniture Goa proprietor at the showroom"
              className="object-cover object-[51%_45%]"
              fill
              sizes="(max-width: 768px) 340px, 390px"
              src="/images/showroom/proprietor-about.png"
            />
          </div>
        </motion.div>

        <motion.div
          className="grid gap-4 md:col-span-2 md:grid-cols-3"
          {...revealProps}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 0.55, delay: 0.14, ease: "easeOut" as const }
          }
        >
          {aboutHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="flex min-h-[112px] flex-col justify-between gap-4 rounded-[8px] border border-[rgba(25,25,25,0.14)] bg-[rgba(255,248,238,0.36)] p-4"
                key={item.label}
              >
                <Icon
                  aria-hidden="true"
                  className="h-6 w-6 text-[var(--color-gold)]"
                  strokeWidth={1.8}
                />
                <p className="text-[0.9rem] font-semibold leading-[1.35] text-[#322a24]">
                  {item.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
