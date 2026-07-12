"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import type { FeaturedCategory } from "@/data/collections";

interface FeaturedCategoriesProps {
  kicker: string;
  title: string;
  categories: FeaturedCategory[];
}

export function FeaturedCategories({
  kicker,
  title,
  categories,
}: FeaturedCategoriesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[var(--color-bg-dark)] px-4 py-16 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:py-24 xl:px-14">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-8 flex items-center justify-center gap-3 text-center sm:mb-10 sm:gap-4">
          <span
            aria-hidden="true"
            className="h-px max-w-[320px] flex-1 bg-[rgba(212,160,60,0.22)]"
          />
          <div>
            <p className="section-kicker">{kicker}</p>
            <h2 className="mt-3 font-display text-[1.7rem] font-semibold leading-tight text-[var(--color-cream)] sm:text-[2.3rem]">
              {title}
            </h2>
          </div>
          <span
            aria-hidden="true"
            className="h-px max-w-[320px] flex-1 bg-[rgba(212,160,60,0.22)]"
          />
        </div>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-7">
          {categories.map((category, index) => (
            <motion.article
              className={index === 0 ? "group lg:col-span-2" : "group"}
              key={category.id}
              transition={{ duration: 0.22, ease: "easeOut" }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            >
              <Link
                className="grid h-full overflow-hidden rounded-[8px] border border-[rgba(212,160,60,0.24)] bg-[rgba(255,248,238,0.045)] text-[var(--color-cream)] shadow-[0_24px_70px_rgba(0,0,0,0.24)] transition-colors duration-200 hover:border-[rgba(212,160,60,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-dark)]"
                href={category.href}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
                  <Image
                    alt={`${category.title} featured category by Star Furniture Goa`}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 1024px) 100vw, 33vw"
                    }
                    src={category.image}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),rgba(0,0,0,0.08)_62%)]"
                  />
                </div>

                <div className="grid gap-3 p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <p className="section-kicker">{category.badge}</p>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-[var(--color-gold)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.8}
                    />
                  </div>
                  <h3 className="font-display text-[1.45rem] font-semibold leading-tight tracking-[0.04em] text-[var(--color-gold)] sm:text-[1.8rem]">
                    {category.title}
                  </h3>
                  <p className="max-w-[680px] text-sm leading-6 text-[rgba(255,248,238,0.72)]">
                    {category.subtitle}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
