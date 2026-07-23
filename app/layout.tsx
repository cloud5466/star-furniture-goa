import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cinzel, Poppins } from "next/font/google";

import { AuthProvider } from "@/components/auth/AuthProvider";
import { PageShell } from "@/components/layout/PageShell";
import { site } from "@/constants/site";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.websiteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.websiteUrl,
    siteName: site.name,
    images: [
      {
        url: "/images/hero/star-furniture-hero-1.webp",
        width: 1200,
        height: 630,
        alt: "Premium custom furniture by Star Furniture Goa",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/images/hero/star-furniture-hero-1.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${cinzel.variable}`}>
        <AuthProvider>
          <PageShell>{children}</PageShell>
        </AuthProvider>
      </body>
    </html>
  );
}
