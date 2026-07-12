"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import {
  ReviewCard,
  type ReviewCardTone,
} from "@/components/reviews/ReviewCard";

const reviews = [
  {
    name: "Atika Asif",
    location: "Goa",
    rating: 5,
    review:
      "I have no words to express mine and my kids feeling to get such stunning furniture made exactly what we wanted in terms of color and design. Simple and elegant at the same time. The owner Mr. Abrar is a wonderful gentleman and the team worked with dedication and fast delivery.",
  },
  {
    name: "Caroline Ataide",
    location: "Goa",
    rating: 5,
    review:
      "Star Furniture did a fine job on my new wardrobe, bed, and drawers. They were very quick with delivery and installation. They patiently listened to all my requests and delivered exactly what I wanted. Highly recommend!",
  },
  {
    name: "Marsha Baretto",
    location: "Goa",
    rating: 5,
    review:
      "We got our altar made by Star Furniture and the craftsmanship is truly outstanding. The team was professional, patient, and very accommodating to our requirements. It has become the centerpiece of our home.",
  },
  {
    name: "Aditya Chari",
    location: "Goa",
    rating: 4,
    review:
      "I recently ordered an office table for my desk setup and the team delivered exactly what I had in mind. The delivery was smooth, punctual, and hassle-free. The build quality feels sturdy and elegant.",
  },
  {
    name: "Natasha Colimao",
    location: "Goa",
    rating: 5,
    review:
      "As a bride-to-be, I wanted every corner of my home to reflect love, care, and creativity. From my wardrobe to my dressing mirror and TV unit, everything turned out beautifully and better than I imagined.",
  },
  {
    name: "Yogitaa Raut",
    location: "Goa",
    rating: 5,
    review:
      "Star Furniture did an excellent job with our bed, wardrobe, and modular kitchen. The finishing is very neat, the quality of work is superb, and everything was delivered on time.",
  },
  {
    name: "Siddesh Karekar",
    location: "Goa",
    rating: 5,
    review:
      "Great work. Furniture installation was done as promised and delivered on time. Very reliable service. Surely recommended for all house furniture work.",
  },
  {
    name: "Arme Pereira",
    location: "Goa",
    rating: 5,
    review:
      "I recently ordered a wardrobe from Star Furniture and I am really impressed. The delivery was smooth and on time, and the wardrobe itself is excellent. Very happy with the service and the product.",
  },
  {
    name: "Nadeem Sheikh",
    location: "Goa",
    rating: 5,
    review:
      "One of the best furniture stores in Goa. Reasonably priced, best quality furniture, and very good customer service. When you speak to Abrar you feel like family. Highly recommend this place.",
  },
  {
    name: "Singhal Raikar",
    location: "Goa",
    rating: 5,
    review:
      "Loved the quality and service. They made my kitchen with a new modern look within my budget and with good quality material. Do visit Star Furniture for budget-friendly quality furniture.",
  },
  {
    name: "Milda Correia",
    location: "Goa",
    rating: 5,
    review:
      "We found the service good for the office executive table we ordered. Delivery was much faster than expected. Overall, good quality product and service. Worth the amount we paid.",
  },
  {
    name: "Gert Huysmans",
    location: "Goa",
    rating: 5,
    review: "Punctual, fine work, precise, and delivered on time as promised.",
  },
  {
    name: "Richa Shirodkar",
    location: "Goa",
    rating: 5,
    review:
      "Really satisfied with the customized wardrobe, dressing table, and TV unit. Finishing, color scheme, and service are top notch. Special thanks to the owner and staff.",
  },
] as const;

const cardTones: ReviewCardTone[] = [
  "warm-cream",
  "soft-charcoal",
  "deep-espresso",
];

const visibleReviewCount = 6;
const rotationIntervalMs = 7000;

function getVisibleReviews(startIndex: number) {
  return Array.from({ length: visibleReviewCount }, (_, index) => {
    const reviewIndex = (startIndex + index) % reviews.length;

    return {
      ...reviews[reviewIndex],
      key: `${reviews[reviewIndex].name}-${reviewIndex}`,
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
    setDirection(1);
    setStartIndex((currentIndex) => (currentIndex + 3) % reviews.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setStartIndex(
      (currentIndex) => (currentIndex - 3 + reviews.length) % reviews.length,
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
