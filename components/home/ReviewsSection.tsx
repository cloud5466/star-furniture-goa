"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import {
  ReviewCard,
  type ReviewCardTone,
} from "@/components/reviews/ReviewCard";
import { getFeaturedReviews } from "@/data/reviews";

const cardTones: ReviewCardTone[] = [
  "warm-cream",
  "soft-charcoal",
  "deep-espresso",
];

const visibleReviewCount = 6;
const rotationIntervalMs = 7000;
const featuredReviews = getFeaturedReviews();

function getVisibleReviews(startIndex: number) {
  if (featuredReviews.length === 0) {
    return [];
  }

  return Array.from({ length: visibleReviewCount }, (_, index) => {
    const reviewIndex = (startIndex + index) % featuredReviews.length;

    return {
      ...featuredReviews[reviewIndex],
      key: `${featuredReviews[reviewIndex].id}-${reviewIndex}`,
      tone: cardTones[index % cardTones.length],
    };
  });
}

export function ReviewsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  const visibleReviews = useMemo(
    () => getVisibleReviews(startIndex),
    [startIndex],
  );

  const goToNext = useCallback(() => {
    if (featuredReviews.length === 0) return;

    setDirection(1);
    setStartIndex(
      (currentIndex) => (currentIndex + 3) % featuredReviews.length,
    );
  }, []);

  const goToPrevious = useCallback(() => {
    if (featuredReviews.length === 0) return;

    setDirection(-1);
    setStartIndex(
      (currentIndex) =>
        (currentIndex - 3 + featuredReviews.length) % featuredReviews.length,
    );
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(goToNext, rotationIntervalMs);

    return () => window.clearInterval(intervalId);
  }, [goToNext]);

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: "easeOut" as const };

  return (
    <section
      aria-labelledby="reviews-title"
      className="bg-[var(--color-bg-dark)] px-4 py-16 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:py-24 xl:px-14"
      id="customer-reviews"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-8 flex items-center justify-center gap-3 text-center sm:mb-10 sm:gap-4">
          <span
            aria-hidden="true"
            className="h-px max-w-[320px] flex-1 bg-[rgba(212,160,60,0.22)]"
          />
          <h2
            className="font-display text-[1rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-gold)] sm:text-[1.18rem] lg:text-[1.45rem]"
            id="reviews-title"
          >
            Customer Reviews
          </h2>
          <span
            aria-hidden="true"
            className="h-px max-w-[320px] flex-1 bg-[rgba(212,160,60,0.22)]"
          />
        </div>

        <div className="mb-8 flex items-end justify-between gap-6">
          <div className="max-w-[680px]">
            <p className="font-display text-[2rem] font-semibold leading-[1.1] text-[var(--color-cream)] sm:text-[2.8rem] lg:text-[3.6rem]">
              Built on trust, finished with care.
            </p>
            <p className="mt-4 max-w-[590px] text-[0.98rem] leading-[1.8] text-[rgba(255,248,238,0.72)] sm:text-[1.04rem]">
              Real words from customers who trusted Star Furniture Goa with
              wardrobes, kitchens, office tables, beds, and made-to-order spaces.
            </p>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              aria-label="Show previous reviews"
              className="grid h-11 w-11 place-items-center rounded-[6px] border border-[rgba(212,160,60,0.36)] text-[var(--color-cream)] transition-colors duration-200 hover:border-[var(--color-gold)] hover:bg-[rgba(212,160,60,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
              onClick={goToPrevious}
              type="button"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              aria-label="Show next reviews"
              className="grid h-11 w-11 place-items-center rounded-[6px] border border-[rgba(212,160,60,0.36)] text-[var(--color-cream)] transition-colors duration-200 hover:border-[var(--color-gold)] hover:bg-[rgba(212,160,60,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
              onClick={goToNext}
              type="button"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div aria-live="polite" className="overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-7"
              drag={shouldReduceMotion ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.08}
              exit={{
                opacity: 0,
                x: shouldReduceMotion ? 0 : direction * -28,
              }}
              initial={{
                opacity: 0,
                x: shouldReduceMotion ? 0 : direction * 28,
              }}
              key={startIndex}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) {
                  goToNext();
                }

                if (info.offset.x > 60) {
                  goToPrevious();
                }
              }}
              transition={transition}
            >
              {visibleReviews.map((review) => (
                <ReviewCard
                  key={review.key}
                  location={review.location}
                  name={review.name}
                  rating={review.rating}
                  review={review.review}
                  tone={review.tone}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
