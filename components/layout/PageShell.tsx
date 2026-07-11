import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-[var(--color-bg-dark)] text-[var(--color-cream)]">
      <Header />
      <main className="min-h-[60vh] flex-1">{children}</main>
      <Footer />
    </div>
  );
}
