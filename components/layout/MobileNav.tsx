"use client";

import {
  type KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Heart, Menu, MessageCircle, X } from "lucide-react";

import { BrandLockup } from "@/components/layout/BrandLockup";
import { primaryNavigation, routes } from "@/constants/routes";
import { contact } from "@/data/contact";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerTitleId = useId();
  const drawerRef = useRef<HTMLElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) {
      openButtonRef.current?.focus();
      return;
    }

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleDrawerKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key !== "Tab") return;

    const focusableElements = drawerRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    if (!focusableElements?.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  const drawerTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.32, ease: "easeOut" as const };

  return (
    <div className="lg:hidden">
      <button
        aria-controls="mobile-navigation-drawer"
        aria-expanded={isOpen}
        aria-label="Open navigation menu"
        className="grid h-11 w-11 place-items-center rounded-[6px] border border-[rgba(212,160,60,0.36)] text-[var(--color-cream)] transition-all duration-200 hover:border-[var(--color-gold)] hover:bg-[rgba(212,160,60,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
        onClick={() => setIsOpen(true)}
        ref={openButtonRef}
        type="button"
      >
        <Menu aria-hidden="true" className="h-5 w-5" strokeWidth={1.9} />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              aria-label="Close navigation menu"
              className="fixed inset-0 z-40 cursor-default bg-black/66 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={drawerTransition}
              onClick={() => setIsOpen(false)}
              type="button"
            />

            <motion.aside
              aria-labelledby={drawerTitleId}
              aria-modal="true"
              className="fixed right-0 top-0 z-50 flex h-dvh w-[min(88vw,390px)] flex-col border-l border-[rgba(212,160,60,0.28)] bg-[var(--color-bg-dark)] px-5 py-5 text-[var(--color-cream)] shadow-[-28px_0_70px_rgba(0,0,0,0.45)]"
              id="mobile-navigation-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              onKeyDown={handleDrawerKeyDown}
              ref={drawerRef}
              transition={drawerTransition}
              role="dialog"
            >
              <div className="flex items-start justify-between gap-4">
                <BrandLockup compact />
                <button
                  aria-label="Close navigation menu"
                  className="grid h-11 w-11 place-items-center rounded-[6px] border border-[rgba(212,160,60,0.36)] text-[var(--color-cream)] transition-all duration-200 hover:border-[var(--color-gold)] hover:bg-[rgba(212,160,60,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                  onClick={() => setIsOpen(false)}
                  ref={closeButtonRef}
                  type="button"
                >
                  <X aria-hidden="true" className="h-5 w-5" strokeWidth={1.9} />
                </button>
              </div>

              <h2 className="sr-only" id={drawerTitleId}>
                Mobile navigation
              </h2>

              <div className="my-8 h-px bg-[rgba(212,160,60,0.24)]" />

              <nav aria-label="Mobile navigation" className="grid gap-2">
                {primaryNavigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : 0.06 + index * 0.035,
                      duration: shouldReduceMotion ? 0 : 0.24,
                    }}
                  >
                    <Link
                      className="block rounded-[6px] border border-transparent px-3 py-3 font-display text-lg font-semibold tracking-[0.04em] text-[var(--color-cream)] transition-colors duration-200 hover:border-[rgba(212,160,60,0.32)] hover:bg-[rgba(255,248,238,0.05)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto grid gap-3 border-t border-[rgba(212,160,60,0.24)] pt-5">
                <Link
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-[rgba(212,160,60,0.45)] text-sm font-semibold text-[var(--color-cream)] transition-colors duration-200 hover:border-[var(--color-gold)] hover:bg-[rgba(212,160,60,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                  href={routes.wishlist}
                  onClick={() => setIsOpen(false)}
                >
                  <Heart aria-hidden="true" className="h-5 w-5" />
                  Wishlist
                </Link>
                <Link
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-[var(--color-gold)] text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-bg-dark)] transition-colors duration-200 hover:bg-[var(--color-gold-dark)] hover:text-[var(--color-cream)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle aria-hidden="true" className="h-5 w-5" />
                  WhatsApp Enquiry
                </Link>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
