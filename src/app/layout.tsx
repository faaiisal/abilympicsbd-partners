import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

/* ============================================================
   FONTS
   Inter      — body, UI labels, data
   Plus Jakarta Sans — headings, display
   Both served by next/font (self-hosted, no external request)
   ============================================================ */

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

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
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable}`}
    >
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
