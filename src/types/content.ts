/**
 * Shared TypeScript interfaces for all content data.
 * These types describe the shape of data in src/content/*.ts files.
 */

// ─── Site & Event ──────────────────────────────────────────────────────────

export interface SiteConfig {
  url: string;
  title: string;
  description: string;
  brandStatement: string[];
  mainCTA: { label: string; href: string };
  contactEmail: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  href: string;
  label: string;
}

export interface EventConfig {
  name: string;
  edition: number;
  year: number;
  /** ISO 8601 with Helsinki timezone offset +03:00 */
  startDateTime: string;
  endDateTime: string;
  venue: string;
  location: string;
  country: string;
  metz2023: Metz2023Config;
}

export interface Metz2023Config {
  edition: number;
  year: number;
  location: string;
  country: string;
  delegationSize: number;
  participantCount: number;
  medalCount: number;
  medalType: string;
  disciplines: string[];
}

// ─── Statistics ─────────────────────────────────────────────────────────────

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  /** Tailwind text color class for the value (e.g. "text-emerald-400") */
  color: string;
}

// ─── Participants ─────────────────────────────────────────────────────────

export interface Participant {
  id: string;
  name: string;
  location: string;
  discipline: string;
  bio: string;
  quote: string;
  sponsorCtaLabel: string;
  sponsorCtaHref: string;
  image: ImageAsset;
  /** Tailwind classes for the "Featured Candidate" badge */
  badgeColor: string;
  /** Tailwind class for the blockquote left border accent */
  quoteAccent: string;
  /** Tailwind class for the sponsor CTA link text */
  ctaColor: string;
}

// ─── Partnership ─────────────────────────────────────────────────────────

export interface PartnershipPillar {
  id: string;
  label: string;
  description: string;
  /** Lucide icon name */
  icon: string;
  /** Tailwind icon container background class */
  iconBg: string;
  /** Tailwind icon text color class */
  iconColor: string;
}

export interface ImpactCategory {
  number: number;
  label: string;
  /** Lucide icon name */
  icon: string;
  /** Tailwind icon text color class */
  iconColor: string;
}

export type PartnershipTierId =
  | "official"
  | "corporate"
  | "technology"
  | "media"
  | "supporting"
  | "direct";

export interface PartnershipTier {
  id: PartnershipTierId;
  name: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
  ctaHref: string;
  /** Whether this tier renders with the highlighted/featured styling */
  isHighlighted: boolean;
  /** Tailwind border color class for hover state on dark cards */
  hoverBorder?: string;
}

// ─── Gallery ─────────────────────────────────────────────────────────────

export type GalleryCategory =
  | "all"
  | "metz"
  | "participants"
  | "helsinki"
  | "institutional";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategory, "all">;
}

// ─── Media Coverage ───────────────────────────────────────────────────────

export interface MediaArticle {
  id: string;
  publication: string;
  headline: string;
  excerpt: string;
  /** Display date string (e.g. "April 2023") */
  date: string;
  /** External link to the article. null when URL not yet confirmed. */
  url: string | null;
  /** Tailwind text color class for the publication name */
  accentColor: string;
}

// ─── Stories ─────────────────────────────────────────────────────────────

export interface StoryCard {
  id: string;
  category: string;
  /** Tailwind text color class for the category label */
  categoryColor: string;
  headline: string;
  image: ImageAsset;
  /** External or internal link. null when content not yet available. */
  href: string | null;
}

// ─── FAQ ─────────────────────────────────────────────────────────────────

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// ─── Shared primitives ───────────────────────────────────────────────────

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
