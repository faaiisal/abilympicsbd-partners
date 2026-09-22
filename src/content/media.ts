import type { MediaArticle } from "@/types/content";

/**
 * Media coverage items — publications that have covered Abilympics Bangladesh.
 *
 * SOURCE: Stitch HTML (stitch-code-desktop.html, stitch-code-mobile.html)
 * The publication names "The Daily Star" and "Dhaka Tribune" appear in the Stitch HTML.
 * However, the article URLs are NOT confirmed — they are placeholders in the design.
 *
 * TODO: Provide real article URLs before Phase 7 implementation.
 * TODO: Confirm additional media coverage items beyond these 2.
 *
 * RULE: Do not invent article content or claim coverage that isn't confirmed.
 */
export const mediaArticles: MediaArticle[] = [
  {
    id: "daily-star-2023",
    publication: "The Daily Star",
    headline:
      "Bangladesh Competitors Bring Home Historic Glory from Metz Abilympics",
    excerpt:
      "High-level appreciation from across the ICT sector as youth proved vocational equality on European soil.",
    date: "April 2023",
    url: null, // TODO: Replace with confirmed article URL
    accentColor: "text-emerald-400",
  },
  {
    id: "dhaka-tribune-2023",
    publication: "Dhaka Tribune",
    headline:
      "Breaking Barriers: How Vocational Inclusion Drives Bangladesh's ESG Goals",
    excerpt:
      "Reframing corporate social investment from charity to economic enablement and certified skills excellence.",
    date: "May 2023",
    url: null, // TODO: Replace with confirmed article URL
    accentColor: "text-sky-400",
  },
];

/**
 * Social / live broadcast video configuration.
 * Source: Stitch HTML + USER-provided URLs.
 */
export const broadcastVideo = {
  /**
   * Facebook Reel for the "Follow Team Bangladesh Live" section.
   * NOTE: Facebook embed has limitations — see video strategy in migration plan.
   * The reelId is extracted from the confirmed URL.
   */
  facebook: {
    reelId: "2245506865990513",
    url: "https://www.facebook.com/reel/2245506865990513",
    title: "Follow Team Bangladesh Live — Abilympics Bangladesh Journey",
    description:
      "Stay connected with live athlete training sessions, candidate selection updates, and official press briefings across our streaming networks.",
    /** Used as fallback image when Facebook embed is unavailable */
    fallbackImage: {
      src: "/images/gallery/gallery-00.webp",
      alt: "Team Bangladesh training session preview",
    },
  },
};
