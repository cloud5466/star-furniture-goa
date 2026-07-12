"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

type CollectionCardProps = {
  title: string;
  image: string;
  href: string;
  subtitle?: string;
  badge?: string;
};

export function CollectionCard({
  title,
  image,
  href,
  subtitle,
  badge,
}: CollectionCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group h-full"
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <Link
        className="flex h-full flex-col overflow-hidden rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.035)] text-[var(--color-cream)] shadow-[0_24px_70px_rgba(0,0,0,0.22)] transition-colors duration-200 hover:border-[rgba(212,160,60,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-dark)]"
        href={href}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#0b0b0b]">
          <Image
            alt={`${title} collection by Star Furniture Goa`}
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.035]"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            src={image}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),rgba(0,0,0,0.06)_58%)]"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
          {badge ? <p className="section-kicker">{badge}</p> : null}
          <h3 className="font-display text-[1.28rem] font-semibold leading-tight tracking-[0.04em] text-[var(--color-gold)] sm:text-[1.5rem]">
            {title}
          </h3>
          {subtitle ? (
            <p className="text-sm leading-6 text-[rgba(255,248,238,0.72)]">
              {subtitle}
            </p>
          ) : null}
        </div>
      </Link>
    </motion.article>
  );
}
