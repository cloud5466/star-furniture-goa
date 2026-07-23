import type { Metadata } from "next";

import { Breadcrumb } from "@/components/category/Breadcrumb";
import { DesignYourSpaceForm } from "@/components/design/DesignYourSpaceForm";
import { designYourSpaceContent } from "@/data/designYourSpace";

export const metadata: Metadata = {
  title: "Design Your Space",
  description:
    "Start a custom furniture project with Star Furniture Goa by sharing your furniture category, inspiration, room details, and contact information.",
  alternates: {
    canonical: "/design-your-space",
  },
};

export default function DesignYourSpacePage() {
  return (
    <>
      <Breadcrumb items={designYourSpaceContent.breadcrumbs} />
      <section className="bg-[var(--color-bg-dark)] px-4 pb-8 pt-6 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:pb-10 xl:px-14">
        <div className="mx-auto w-full max-w-[1280px]">
          <p className="section-kicker mb-4">Custom Furniture</p>
          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.04] tracking-normal text-[var(--color-cream)] sm:text-[4rem] lg:text-[5.2rem]">
            {designYourSpaceContent.header.title}
          </h1>
          <p className="mt-6 max-w-[760px] text-[1rem] leading-[1.85] text-[rgba(255,248,238,0.74)] sm:text-[1.08rem]">
            {designYourSpaceContent.header.description}
          </p>
        </div>
      </section>
      <DesignYourSpaceForm content={designYourSpaceContent} />
    </>
  );
}
