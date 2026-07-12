"use client";

import Image from "next/image";
import {
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/shared-ui/Button";
import { contact } from "@/data/contact";

const directionsHref = "https://maps.app.goo.gl/wE57FuAJSdDiHqr38";
const mapEmbedSrc =
  "https://www.google.com/maps?q=Star%20Furniture%20Goa%20Behind%20Apollo%20tiles%20and%20Pavers%20Kirbhat%20Nuvem%20Salcete%20Goa%20403601&output=embed";

const factoryHours = [
  "Monday to Saturday",
  "9:30 AM - 7:00 PM",
  "Call before visiting for the best consultation experience.",
] as const;

export function FactorySection() {
  const shouldReduceMotion = useReducedMotion();
  const primaryPhoneNumber = contact.phoneNumbers[0];
  const addressLine = `${contact.address.line1}, ${contact.address.line2}, ${contact.address.region}`;

  const revealProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.62, ease: "easeOut" as const },
      };

  return (
    <section
      aria-labelledby="factory-section-title"
      className="bg-[var(--color-bg-dark)] px-4 pb-16 pt-4 text-[var(--color-cream)] sm:px-6 sm:pb-20 lg:px-10 lg:pb-28 xl:px-14"
      id="visit-factory"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-8 flex items-center justify-center gap-3 text-center sm:mb-10 sm:gap-4">
          <span
            aria-hidden="true"
            className="h-px max-w-[320px] flex-1 bg-[rgba(212,160,60,0.22)]"
          />
          <h2
            className="font-display text-[1rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-gold)] sm:text-[1.18rem] lg:text-[1.45rem]"
            id="factory-section-title"
          >
            Visit Our Factory
          </h2>
          <span
            aria-hidden="true"
            className="h-px max-w-[320px] flex-1 bg-[rgba(212,160,60,0.22)]"
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-12">
          <motion.div
            className="relative overflow-hidden rounded-[8px] border border-[rgba(212,160,60,0.24)] bg-[#111] shadow-[0_28px_80px_rgba(0,0,0,0.34)]"
            {...revealProps}
          >
            <div className="relative aspect-[4/5] min-h-[430px] sm:aspect-[16/12] lg:aspect-auto lg:h-full">
              <Image
                alt="Custom furniture craftsmanship by Star Furniture Goa"
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                src="/images/categories/made-to-order-interiors.webp"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.78),rgba(0,0,0,0.16)_54%,rgba(0,0,0,0.05))]"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
              <p className="font-display text-[1.7rem] font-semibold leading-tight text-[var(--color-cream)] sm:text-[2.2rem]">
                See the craft up close.
              </p>
              <p className="mt-2 max-w-[390px] text-[0.9rem] leading-[1.7] text-[rgba(255,248,238,0.74)]">
                Discuss measurements, finishes, and ideas directly where custom
                furniture begins.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="rounded-[8px] border border-[rgba(212,160,60,0.24)] bg-[rgba(255,248,238,0.045)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-7 lg:p-8"
            {...revealProps}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 0.62, delay: 0.08, ease: "easeOut" as const }
            }
          >
            <p className="section-kicker mb-4">Factory Consultation</p>
            <h3 className="font-display text-[2.1rem] font-semibold leading-[1.08] text-[var(--color-cream)] sm:text-[3rem]">
              Plan your furniture with the people who make it.
            </h3>
            <p className="mt-5 max-w-[650px] text-[0.98rem] leading-[1.82] text-[rgba(255,248,238,0.74)] sm:text-[1.04rem]">
              Visit our factory to discuss your furniture requirements, explore
              material and finish possibilities, and experience the craftsmanship
              behind Star Furniture Goa in person.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[8px] border border-[rgba(212,160,60,0.18)] bg-[rgba(25,25,25,0.34)] p-4">
                <MapPin
                  aria-hidden="true"
                  className="mb-4 h-5 w-5 text-[var(--color-gold)]"
                  strokeWidth={1.8}
                />
                <p className="text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-[rgba(255,248,238,0.52)]">
                  Address
                </p>
                <address className="mt-2 not-italic text-[0.94rem] leading-[1.7] text-[var(--color-cream)]">
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                  <br />
                  {contact.address.region}
                </address>
              </div>

              <div className="rounded-[8px] border border-[rgba(212,160,60,0.18)] bg-[rgba(25,25,25,0.34)] p-4">
                <Clock
                  aria-hidden="true"
                  className="mb-4 h-5 w-5 text-[var(--color-gold)]"
                  strokeWidth={1.8}
                />
                <p className="text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-[rgba(255,248,238,0.52)]">
                  Opening Hours
                </p>
                <p className="mt-2 text-[0.94rem] leading-[1.7] text-[var(--color-cream)]">
                  {factoryHours[0]}
                  <br />
                  {factoryHours[1]}
                </p>
                <p className="mt-2 text-[0.82rem] leading-[1.55] text-[rgba(255,248,238,0.62)]">
                  {factoryHours[2]}
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <a href={`tel:+91${primaryPhoneNumber}`}>
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  Call Factory
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href={contact.whatsappHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={directionsHref} rel="noreferrer" target="_blank">
                  <Navigation aria-hidden="true" className="h-4 w-4" />
                  Get Directions
                </a>
              </Button>
            </div>

            <div className="mt-8 overflow-hidden rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[#111]">
              <iframe
                aria-label={`Google map showing ${addressLine}`}
                className="h-[320px] w-full border-0 grayscale-[18%] sm:h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={mapEmbedSrc}
                title="Star Furniture Goa factory location map"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
