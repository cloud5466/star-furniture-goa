"use client";

import Link from "next/link";

import { Button } from "@/components/shared-ui/Button";
import { routes } from "@/constants/routes";

interface ErrorPageProps {
  reset: () => void;
}

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <section className="bg-[var(--color-bg-dark)] px-4 py-20 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:py-28 xl:px-14">
      <div className="mx-auto max-w-[760px] text-center">
        <p className="section-kicker mb-5">Something Went Wrong</p>
        <h1 className="font-display text-[2.8rem] font-semibold leading-[1.04] text-[var(--color-cream)] sm:text-[4.5rem]">
          We could not load this page.
        </h1>
        <p className="mx-auto mt-6 max-w-[560px] text-sm leading-7 text-[rgba(255,248,238,0.72)] sm:text-base">
          Please try again, or contact Star Furniture Goa if the issue
          continues.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button onClick={reset} size="lg" type="button">
            Try Again
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={routes.contact}>Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
