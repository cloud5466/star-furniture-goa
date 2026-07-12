"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

export interface ProductGalleryImage {
  id: string;
  src: string;
  alt: string;
}

interface ProductGalleryProps {
  images: ProductGalleryImage[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [activeImageId, setActiveImageId] = useState(images[0]?.id);
  const shouldReduceMotion = useReducedMotion();
  const activeImage =
    images.find((image) => image.id === activeImageId) ?? images[0];

  if (!activeImage) {
    return null;
  }

  return (
    <div className="grid gap-3">
      <motion.div
        className="relative aspect-[16/9] overflow-hidden rounded-[8px] border border-[rgba(212,160,60,0.26)] bg-[#111] shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
        layout
      >
        <Image
          alt={activeImage.alt}
          className="object-cover"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 52vw"
          src={activeImage.src}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.38),rgba(0,0,0,0.02)_58%)]"
        />
      </motion.div>

      {images.length > 1 ? (
        <div
          aria-label="Product gallery thumbnails"
          className="grid grid-cols-3 gap-2"
          role="group"
        >
          {images.map((image) => {
            const isActive = image.id === activeImage.id;

            return (
              <motion.button
                aria-label={image.alt}
                aria-pressed={isActive}
                className={cn(
                  "relative aspect-[16/9] overflow-hidden rounded-[8px] border bg-[#111] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-dark)]",
                  isActive
                    ? "border-[var(--color-gold)]"
                    : "border-[rgba(212,160,60,0.22)] hover:border-[rgba(212,160,60,0.58)]",
                )}
                key={image.id}
                onClick={() => {
                  setActiveImageId(image.id);
                }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                type="button"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              >
                <Image
                  alt=""
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 30vw, 12vw"
                  src={image.src}
                />
              </motion.button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
