"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Heart, LogOut, UserRound } from "lucide-react";

import { AuthModal } from "@/components/auth/AuthModal";
import { routes } from "@/constants/routes";

interface AuthNavProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

function getInitials(name?: string | null) {
  if (!name) return "SF";

  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function AuthNav({ mobile = false, onNavigate }: AuthNavProps) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = session?.user;
  const isSignedIn = Boolean(user);

  if (mobile) {
    return (
      <>
        <button
          className="inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-[rgba(212,160,60,0.45)] text-sm font-semibold text-[var(--color-cream)] transition-colors duration-200 hover:border-[var(--color-gold)] hover:bg-[rgba(212,160,60,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
          onClick={() => {
            if (isSignedIn) {
              onNavigate?.();
              router.push(routes.wishlist);
              return;
            }

            setIsModalOpen(true);
          }}
          type="button"
        >
          <Heart aria-hidden="true" className="h-5 w-5" />
          Wishlist
        </button>

        {isSignedIn ? (
          <>
            <div className="rounded-[6px] border border-[rgba(212,160,60,0.28)] px-3 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[rgba(255,248,238,0.54)]">
                Signed in as
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-[var(--color-gold)]">
                {user?.name ?? "Customer"}
              </p>
            </div>
            <Link
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-[rgba(212,160,60,0.45)] text-sm font-semibold text-[var(--color-cream)] transition-colors duration-200 hover:border-[var(--color-gold)] hover:bg-[rgba(212,160,60,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
              href={routes.wishlist}
              onClick={onNavigate}
            >
              My Wishlist
            </Link>
            <button
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-[rgba(212,160,60,0.45)] text-sm font-semibold text-[var(--color-cream)] transition-colors duration-200 hover:border-[var(--color-gold)] hover:bg-[rgba(212,160,60,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
              onClick={() => {
                void signOut();
              }}
              type="button"
            >
              <LogOut aria-hidden="true" className="h-4 w-4" />
              Sign Out
            </button>
          </>
        ) : (
          <button
            className="inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-[rgba(212,160,60,0.45)] text-sm font-semibold text-[var(--color-cream)] transition-colors duration-200 hover:border-[var(--color-gold)] hover:bg-[rgba(212,160,60,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
            disabled={status === "loading"}
            onClick={() => setIsModalOpen(true)}
            type="button"
          >
            <UserRound aria-hidden="true" className="h-4 w-4" />
            Sign In
          </button>
        )}

        <AuthModal
          callbackUrl={routes.wishlist}
          guestHref={routes.wishlist}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  return (
    <>
      <button
        aria-label="Open wishlist"
        className="grid h-11 w-11 place-items-center rounded-[6px] border border-[rgba(212,160,60,0.34)] text-[var(--color-cream)] transition-all duration-200 hover:border-[var(--color-gold)] hover:bg-[rgba(212,160,60,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
        onClick={() => {
          if (isSignedIn) {
            router.push(routes.wishlist);
            return;
          }

          setIsModalOpen(true);
        }}
        type="button"
      >
        <Heart aria-hidden="true" className="h-5 w-5" strokeWidth={1.9} />
      </button>

      {isSignedIn ? (
        <div className="relative">
          <button
            aria-expanded={isDropdownOpen}
            className="inline-flex h-11 items-center gap-2 rounded-[6px] border border-[rgba(212,160,60,0.34)] px-2.5 text-[var(--color-cream)] transition-all duration-200 hover:border-[var(--color-gold)] hover:bg-[rgba(212,160,60,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
            onClick={() => setIsDropdownOpen((value) => !value)}
            type="button"
          >
            <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-full bg-[rgba(212,160,60,0.16)] text-xs font-bold text-[var(--color-gold)]">
              {user?.image ? (
                <Image alt="" className="object-cover" fill src={user.image} />
              ) : (
                getInitials(user?.name)
              )}
            </span>
            <span className="max-w-[120px] truncate text-xs font-semibold">
              {user?.name ?? "Customer"}
            </span>
          </button>

          {isDropdownOpen ? (
            <div className="absolute right-0 top-[calc(100%+0.75rem)] z-20 w-56 rounded-[8px] border border-[rgba(212,160,60,0.28)] bg-[var(--color-bg-dark)] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
              <Link
                className="block rounded-[6px] px-3 py-2 text-sm text-[var(--color-cream)] transition-colors duration-200 hover:bg-[rgba(255,248,238,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                href={routes.wishlist}
                onClick={() => setIsDropdownOpen(false)}
              >
                My Wishlist
              </Link>
              <button
                className="mt-1 flex w-full items-center gap-2 rounded-[6px] px-3 py-2 text-left text-sm text-[var(--color-cream)] transition-colors duration-200 hover:bg-[rgba(255,248,238,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                onClick={() => {
                  void signOut();
                }}
                type="button"
              >
                <LogOut aria-hidden="true" className="h-4 w-4" />
                Sign Out
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        <button
          className="inline-flex h-11 items-center justify-center gap-2 rounded-[6px] border border-[rgba(212,160,60,0.34)] px-4 text-[0.72rem] font-bold uppercase tracking-[0.11em] text-[var(--color-cream)] transition-all duration-200 hover:border-[var(--color-gold)] hover:bg-[rgba(212,160,60,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
          disabled={status === "loading"}
          onClick={() => setIsModalOpen(true)}
          type="button"
        >
          Sign In
        </button>
      )}

      <AuthModal
        callbackUrl={routes.wishlist}
        guestHref={routes.wishlist}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
