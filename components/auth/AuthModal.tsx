"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Mail, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/shared-ui/Button";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  callbackUrl?: string;
  guestHref?: string;
}

export function AuthModal({
  isOpen,
  onClose,
  callbackUrl = "/",
  guestHref,
}: AuthModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const [emailNotice, setEmailNotice] = useState(false);
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.22, ease: "easeOut" as const };

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[80] grid place-items-center px-4">
          <motion.button
            aria-label="Close sign in dialog"
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-[3px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            transition={transition}
            type="button"
          />
          <motion.div
            aria-modal="true"
            className="relative w-full max-w-[460px] rounded-[8px] border border-[rgba(212,160,60,0.32)] bg-[var(--color-bg-dark)] p-6 text-[var(--color-cream)] shadow-[0_34px_100px_rgba(0,0,0,0.55)]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            role="dialog"
            transition={transition}
          >
            <button
              aria-label="Close sign in dialog"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-[6px] border border-[rgba(212,160,60,0.28)] text-[var(--color-cream)] transition-colors duration-200 hover:border-[var(--color-gold)] hover:bg-[rgba(212,160,60,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
              onClick={onClose}
              type="button"
            >
              <X aria-hidden="true" className="h-4 w-4" />
            </button>

            <p className="section-kicker mb-4">Customer Account</p>
            <h2 className="max-w-[340px] font-display text-[2rem] font-semibold leading-[1.08] text-[var(--color-cream)]">
              Save your favourite furniture across all your devices.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[rgba(255,248,238,0.68)]">
              Sign in to keep your wishlist synced. You can also continue as a
              guest and use this device only.
            </p>

            <div className="mt-7 grid gap-3">
              <Button
                onClick={() => {
                  void signIn("google", { callbackUrl });
                }}
                size="lg"
                type="button"
              >
                <span
                  aria-hidden="true"
                  className="grid h-5 w-5 place-items-center rounded-full bg-white text-xs font-bold text-[#1f1f1f]"
                >
                  G
                </span>
                Continue with Google
              </Button>
              <Button
                onClick={() => setEmailNotice(true)}
                size="lg"
                type="button"
                variant="outline"
              >
                <Mail aria-hidden="true" className="h-4 w-4" />
                Continue with Email
              </Button>
              {guestHref ? (
                <Button asChild size="lg" variant="ghost">
                  <Link href={guestHref} onClick={onClose}>
                    Continue as Guest
                  </Link>
                </Button>
              ) : (
                <Button onClick={onClose} size="lg" type="button" variant="ghost">
                  Continue as Guest
                </Button>
              )}
            </div>

            {emailNotice ? (
              <p className="mt-4 rounded-[8px] border border-[rgba(212,160,60,0.22)] bg-[rgba(255,248,238,0.04)] p-3 text-xs leading-5 text-[rgba(255,248,238,0.68)]">
                Email sign-in is prepared in the architecture and can be enabled
                when email delivery is configured.
              </p>
            ) : null}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
