import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { AuthNav } from "@/components/auth/AuthNav";
import { primaryNavigation } from "@/constants/routes";
import { contact } from "@/data/contact";

export function Navbar() {
  return (
    <nav
      aria-label="Primary navigation"
      className="hidden items-center justify-end gap-5 lg:flex xl:gap-8"
    >
      <div className="flex items-center gap-4 xl:gap-7">
        {primaryNavigation.map((item) => (
          <Link
            className="nav-link text-[0.72rem] font-semibold uppercase tracking-[0.11em] text-[rgba(255,248,238,0.78)] transition-colors duration-200 hover:text-[var(--color-cream)] focus-visible:text-[var(--color-cream)] focus-visible:outline-none"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <AuthNav />

        <Link
          className="inline-flex h-11 items-center justify-center gap-2 rounded-[6px] bg-[var(--color-gold)] px-4 text-[0.72rem] font-bold uppercase tracking-[0.11em] text-[var(--color-bg-dark)] shadow-[0_14px_34px_rgba(212,160,60,0.18)] transition-all duration-200 hover:bg-[var(--color-gold-dark)] hover:text-[var(--color-cream)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
          href={contact.whatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
          WhatsApp
        </Link>
      </div>
    </nav>
  );
}
