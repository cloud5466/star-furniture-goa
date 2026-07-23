import Link from "next/link";

import { Button } from "@/components/shared-ui/Button";
import { routes } from "@/constants/routes";

export default function NotFound() {
  return (
    <section className="bg-[var(--color-bg-dark)] px-4 py-20 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:py-28 xl:px-14">
      <div className="mx-auto max-w-[760px] text-center">
        <p className="section-kicker mb-5">Page Not Found</p>
        <h1 className="font-display text-[2.8rem] font-semibold leading-[1.04] text-[var(--color-cream)] sm:text-[4.5rem]">
          This page is not available.
        </h1>
        <p className="mx-auto mt-6 max-w-[560px] text-sm leading-7 text-[rgba(255,248,238,0.72)] sm:text-base">
          The furniture page you are looking for may have moved, or the link may
          no longer be active.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href={routes.collections}>Explore Collections</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={routes.contact}>Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
