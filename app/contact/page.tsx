import type { Metadata } from "next";

import { Breadcrumb } from "@/components/category/Breadcrumb";
import { BusinessHours } from "@/components/contact/BusinessHours";
import {
  ContactCards,
  contactCardIcons,
} from "@/components/contact/ContactCards";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { MapSection } from "@/components/contact/MapSection";
import { VisitReasons } from "@/components/contact/VisitReasons";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Star Furniture Goa, visit the factory, get directions, or start a custom furniture project.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const addressLabel = `${contact.address.line1}, ${contact.address.line2}, ${contact.address.region}`;
  const primaryPhoneNumber = contact.phoneNumbers[0];
  const cards = [
    {
      label: contact.contactPage.cards.phoneLabel,
      value: contact.phoneNumbers.join(" / "),
      href: `tel:+91${primaryPhoneNumber}`,
      icon: contactCardIcons.phone,
    },
    {
      label: contact.contactPage.cards.whatsappLabel,
      value: `+91 ${contact.whatsappNumber}`,
      href: contact.whatsappHref,
      icon: contactCardIcons.whatsapp,
      external: true,
    },
    {
      label: contact.contactPage.cards.emailLabel,
      value: contact.email.label,
      href: contact.email.href,
      icon: contactCardIcons.email,
    },
    {
      label: contact.contactPage.cards.addressLabel,
      value: addressLabel,
      href: contact.address.href,
      icon: contactCardIcons.map,
      external: true,
    },
  ];

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="bg-[var(--color-bg-dark)] px-4 pb-8 pt-6 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:pb-10 xl:px-14">
        <div className="mx-auto w-full max-w-[1280px]">
          <p className="section-kicker mb-4">Get in Touch</p>
          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.04] tracking-normal text-[var(--color-cream)] sm:text-[4rem] lg:text-[5.2rem]">
            {contact.contactPage.header.title}
          </h1>
          <p className="mt-6 max-w-[760px] text-[1rem] leading-[1.85] text-[rgba(255,248,238,0.74)] sm:text-[1.08rem]">
            {contact.contactPage.header.description}
          </p>
        </div>
      </section>

      <ContactCards cards={cards} />

      <section className="bg-[var(--color-bg-dark)] px-4 py-10 text-[var(--color-cream)] sm:px-6 lg:px-10 lg:py-14 xl:px-14">
        <div className="mx-auto grid w-full max-w-[1280px] gap-6 lg:grid-cols-[1fr_360px]">
          <MapSection
            addressLabel={addressLabel}
            buttonLabel={contact.contactPage.map.buttonLabel}
            description={contact.contactPage.map.description}
            directionsHref={contact.googleMaps.directionsHref}
            embedSrc={contact.googleMaps.embedSrc}
            title={contact.contactPage.map.title}
          />
          <BusinessHours
            days={contact.businessHours.days}
            hours={contact.businessHours.hours}
            note={contact.businessHours.note}
            title={contact.contactPage.businessHours.title}
          />
        </div>
      </section>

      <VisitReasons
        kicker={contact.contactPage.visitReasons.kicker}
        reasons={contact.contactPage.visitReasons.reasons}
        title={contact.contactPage.visitReasons.title}
      />

      <ContactCTA
        buttonLabel={contact.contactPage.cta.buttonLabel}
        href={contact.contactPage.cta.href}
        title={contact.contactPage.cta.title}
      />
    </>
  );
}
