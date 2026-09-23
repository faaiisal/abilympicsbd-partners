import type { Metadata, Viewport } from "next";
import "./globals.css";

/* ============================================================
   FONTS
   Use CSS stack fallbacks instead of next/font/google to avoid the
   Turbopack build-time font resolution issue while preserving the
   same design intent and typography hierarchy.
   ============================================================ */

/* ============================================================
   METADATA
   ============================================================ */

const siteUrl = "https://partners.epyra.agency";
const siteTitle = "Partner With Abilympics Bangladesh — Helsinki 2027";
const siteDescription =
  "Join Bangladesh's journey to the 11th International Abilympics in Helsinki, Finland (10–13 May 2027). Corporate, technology, media, and supporting partnership opportunities available.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s — Abilympics Bangladesh",
  },
  description: siteDescription,
  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Abilympics Bangladesh Partners",
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#006A4E", // brand-green
};

/* ============================================================
   ROOT LAYOUT
   ============================================================ */

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        {/* Material Symbols Outlined — icon font used across all components */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
