import type { Metadata } from "next";

import { AboutSection } from "@/components/home/AboutSection";
import { CatalogueCTA } from "@/components/home/CatalogueCTA";
import { CollectionsPreview } from "@/components/home/CollectionsPreview";
import { FactorySection } from "@/components/home/FactorySection";
import { Hero } from "@/components/home/Hero";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CollectionsPreview />
      <AboutSection />
      <CatalogueCTA />
      <ReviewsSection />
      <FactorySection />
    </>
  );
}
