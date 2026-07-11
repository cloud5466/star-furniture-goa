import Link from "next/link";
import type { ReactNode } from "react";
import {
  Camera,
  Globe2,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { BrandLockup } from "@/components/layout/BrandLockup";
import { footerNavigation } from "@/constants/routes";
import { site } from "@/constants/site";
import { contact } from "@/data/contact";
import { company } from "@/data/company";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(212,160,60,0.22)] bg-[var(--color-bg-dark)] text-[var(--color-cream)]">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16 xl:px-14">
        <div className="flex justify-center border-b border-[rgba(212,160,60,0.18)] pb-10 text-center">
          <BrandLockup className="justify-center" />
        </div>

        <div className="grid gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr_1fr] lg:gap-12">
          <section aria-labelledby="footer-company">
            <p className="section-kicker">Company</p>
            <h2
              className="mt-3 font-display text-2xl font-semibold tracking-[0.04em] text-[var(--color-gold)]"
              id="footer-company"
            >
              Crafted for spaces that feel like home.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[rgba(255,248,238,0.76)]">
              {company.summary}
            </p>
            <p className="mt-4 text-sm text-[rgba(255,248,238,0.72)]">
              Serving customers since {site.foundedYear}.
            </p>
          </section>

          <nav aria-label="Footer quick links">
            <p className="section-kicker">Quick Links</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm text-[rgba(255,248,238,0.78)] transition-colors duration-200 hover:text-[var(--color-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-contact">
            <p className="section-kicker">Contact</p>
            <h2 className="sr-only" id="footer-contact">
              Contact information
            </h2>

            <div className="mt-4 grid gap-4">
              <FooterContactItem icon={<Phone aria-hidden="true" />}>
                <span className="font-semibold text-[var(--color-gold)]">
                  Contact Number
                </span>
                <span>{contact.phoneNumbers.join(" / ")}</span>
              </FooterContactItem>

              <FooterContactItem icon={<Camera aria-hidden="true" />}>
                <span className="font-semibold text-[var(--color-gold)]">
                  Instagram
                </span>
                <a
                  className="transition-colors duration-200 hover:text-[var(--color-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                  href={contact.instagram.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {contact.instagram.label}
                </a>
              </FooterContactItem>

              <FooterContactItem icon={<MapPin aria-hidden="true" />}>
                <span className="font-semibold text-[var(--color-gold)]">
                  Address
                </span>
                <span>
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}, {contact.address.region}
                </span>
              </FooterContactItem>

              <FooterContactItem icon={<Globe2 aria-hidden="true" />}>
                <span className="font-semibold text-[var(--color-gold)]">
                  Website
                </span>
                <a
                  className="transition-colors duration-200 hover:text-[var(--color-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                  href={contact.website.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {contact.website.label}
                </a>
              </FooterContactItem>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-4 border-t border-[rgba(212,160,60,0.18)] pt-6 text-sm text-[rgba(255,248,238,0.68)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {site.displayName}. All rights reserved.
          </p>
          <a
            className="inline-flex items-center gap-2 text-[var(--color-gold)] transition-colors duration-200 hover:text-[var(--color-cream)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterContactItem({
  children,
  icon,
}: {
  children: ReactNode;
  icon: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--color-gold)] text-[var(--color-bg-dark)] [&_svg]:h-4 [&_svg]:w-4">
        {icon}
      </span>
      <p className="grid gap-1 text-sm leading-6 text-[rgba(255,248,238,0.78)]">
        {children}
      </p>
    </div>
  );
}
