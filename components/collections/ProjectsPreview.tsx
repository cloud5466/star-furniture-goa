"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/shared-ui/Button";
import type { CompletedProjectPreview } from "@/data/collections";
import { cn } from "@/lib/utils";

interface ProjectsPreviewProps {
  kicker: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  projects: CompletedProjectPreview[];
}

const sizeClasses: Record<CompletedProjectPreview["size"], string> = {
  standard: "md:col-span-1 md:row-span-1",
  wide: "md:col-span-2 md:row-span-1",
  tall: "md:col-span-1 md:row-span-2",
};

export function ProjectsPreview({
  kicker,
  title,
  description,
  buttonLabel,
  buttonHref,
  projects,
}: ProjectsPreviewProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="bg-[var(--color-bg-dark)] px-4 py-16 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:py-24 xl:px-14"
      id="recent-projects"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <p className="section-kicker mb-4">{kicker}</p>
            <h2 className="font-display text-[2rem] font-semibold leading-[1.08] text-[var(--color-cream)] sm:text-[3rem]">
              {title}
            </h2>
          </div>
          <div className="max-w-[650px] lg:justify-self-end">
            <p className="text-[0.98rem] leading-[1.82] text-[rgba(255,248,238,0.74)]">
              {description}
            </p>
            <div className="mt-5">
              <Button asChild className="group" size="lg" variant="outline">
                <Link href={buttonHref}>
                  {buttonLabel}
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid auto-rows-[220px] gap-5 md:grid-cols-3 md:auto-rows-[250px] lg:gap-7">
          {projects.map((project, index) => (
            <motion.figure
              className={cn(
                "group relative overflow-hidden rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[#111] shadow-[0_24px_70px_rgba(0,0,0,0.22)]",
                sizeClasses[project.size],
              )}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
              key={project.id}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.46,
                delay: shouldReduceMotion ? 0 : index * 0.04,
              }}
              viewport={{ once: true, amount: 0.24 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Image
                alt={project.alt}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                src={project.image}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82),rgba(0,0,0,0.05)_62%)]"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-display text-[1.25rem] font-semibold text-[var(--color-cream)]">
                  {project.title}
                </p>
                <p className="mt-2 max-w-[420px] text-sm leading-6 text-[rgba(255,248,238,0.72)]">
                  {project.description}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
