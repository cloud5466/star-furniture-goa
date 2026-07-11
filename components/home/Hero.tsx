"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const heroSlides = [
  {
    src: "/images/hero/star-furniture-hero-1.webp",
    label: "Premium Furniture",
    alt: "Premium custom furniture by Star Furniture Goa",
  },
  {
    src: "/images/hero/star-furniture-hero-2.webp",
    label: "Custom Wardrobes",
    alt: "Custom wardrobe furniture by Star Furniture Goa",
  },
  {
    src: "/images/hero/star-furniture-hero-3.webp",
    label: "Modern Kitchens",
    alt: "Modern kitchen furniture by Star Furniture Goa",
  },
  {
    src: "/images/hero/star-furniture-hero-4.webp",
    label: "Bedroom Furniture",
    alt: "Bedroom furniture by Star Furniture Goa",
  },
  {
    src: "/images/hero/star-furniture-hero-5.webp",
    label: "Office Tables",
    alt: "Office furniture table by Star Furniture Goa",
  },
  {
    src: "/images/hero/star-furniture-hero-6.webp",
    label: "TV Units",
    alt: "TV unit furniture by Star Furniture Goa",
  },
  {
    src: "/images/hero/star-furniture-hero-7.webp",
    label: "Made-to-Order Interiors",
    alt: "Made-to-order interior furniture by Star Furniture Goa",
  },
] as const;

const slideIntervalMs = 5000;

export function Hero() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const activeSlide = heroSlides[activeSlideIndex];

  const imageTransition = useMemo(
    () =>
      shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.7, ease: "easeOut" as const },
    [shouldReduceMotion],
  );

  useEffect(() => {
    if (shouldReduceMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveSlideIndex((currentIndex) =>
        currentIndex === heroSlides.length - 1 ? 0 : currentIndex + 1,
      );
    }, slideIntervalMs);

    return () => window.clearInterval(intervalId);
  }, [shouldReduceMotion]);

  return (
    <section
      aria-labelledby="home-hero-title"
      className="flex min-h-[calc(100vh-82px)] items-start bg-[var(--color-bg-dark)] px-4 pb-14 pt-12 text-[var(--color-cream)] sm:px-6 md:pt-16 lg:min-h-[calc(100vh-92px)] lg:px-10 lg:pb-20 xl:px-14"
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="mb-5 flex items-center justify-center gap-3 text-center sm:mb-8 sm:gap-4">
          <span
            aria-hidden="true"
            className="h-px max-w-[320px] flex-1 bg-[rgba(212,160,60,0.22)]"
          />
          <h1
            className="font-display text-[0.92rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-gold)] sm:text-[1.08rem] md:text-[1.22rem] lg:text-[1.42rem]"
            id="home-hero-title"
          >
            Custom furniture crafted for Goan homes
          </h1>
          <span
            aria-hidden="true"
            className="h-px max-w-[320px] flex-1 bg-[rgba(212,160,60,0.22)]"
          />
        </div>

        <div className="relative mx-auto aspect-[2076/757] w-full overflow-hidden rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[#0b0b0b] shadow-[0_28px_80px_rgba(0,0,0,0.34)]">
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0"
              exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.01 }}
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.02 }}
              key={activeSlide.src}
              transition={imageTransition}
            >
              <Image
                alt={activeSlide.alt}
                className="object-cover object-center"
                fill
                priority={activeSlideIndex === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 92vw, 1320px"
                src={activeSlide.src}
              />
            </motion.div>
          </AnimatePresence>

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82),rgba(0,0,0,0.05)_58%)]"
          />

          <motion.p
            aria-live="polite"
            className="absolute bottom-5 right-5 max-w-[78%] text-right font-display text-[1.28rem] font-semibold leading-none text-[var(--color-cream)] shadow-black drop-shadow-[0_6px_22px_rgba(0,0,0,0.5)] sm:bottom-7 sm:right-8 sm:text-[2rem] lg:bottom-9 lg:right-11 lg:text-[3rem]"
            key={activeSlide.label}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={imageTransition}
          >
            {activeSlide.label}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
