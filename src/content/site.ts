import type { SiteConfig } from "@/types/content";

/**
 * Sitewide constants — production domain, titles, brand statement, CTA.
 * Source of truth: docs/private/PROJECT-CONTEXT.md
 */
export const site: SiteConfig = {
  url: "https://partners.epyra.agency",

  title: "Partner With Abilympics Bangladesh — Helsinki 2027",

  description:
    "Join Bangladesh's journey to the 11th International Abilympics in Helsinki, Finland (10–13 May 2027). Corporate, technology, media, and supporting partnership opportunities available.",

  brandStatement: [
    "Empowering Ability.",
    "Inspiring Excellence.",
    "Representing Bangladesh.",
  ],

  mainCTA: {
    label: "Become a Partner",
    href: "https://partners.epyra.agency",
  },

  contactEmail: "secretariat@abilympicsbd.org",

  socialLinks: [],
};
