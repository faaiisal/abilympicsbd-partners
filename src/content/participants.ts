import type { Participant } from "@/types/content";

/**
 * Confirmed participant spotlight data.
 *
 * SOURCE OF TRUTH: Stitch HTML (stitch-code-desktop.html, stitch-code-mobile.html)
 *
 * RULE: Do NOT add participants who are not confirmed in the design source.
 * Only Joshim and Jerin are confirmed. Their names, disciplines, bios, and
 * quotes come directly from the Stitch HTML — these are real content.
 *
 * Image paths are placeholders mapping to the expected asset convention:
 *   public/images/2023/joshim-2023.webp
 *   public/images/2023/jerin-2023.webp
 * These must be replaced with actual files when assets are provided.
 */
export const participants: Participant[] = [
  {
    id: "joshim",
    name: "Joshim",
    location: "Dhaka, Bangladesh",
    discipline: "Professional Technology & Digital Craftsmanship",
    bio: "A journey rooted in technical precision, continuous bootcamp training, and unyielding ambition. Joshim represents the next vanguard of Bangladeshi digital talent preparing for rigorous international evaluation.",
    quote:
      "Disability is not the definition of a person's future. Mastery in technical craft gives us an equal voice anywhere in the world.",
    sponsorCtaLabel: "Sponsor Training Gear for Joshim",
    sponsorCtaHref: "https://partners.epyra.agency",
    image: {
      src: "/images/2023/joshim-2023.webp",
      alt: "Helsinki 2027 Campaign Poster for Candidate Joshim",
      width: 400,
      height: 500,
    },
    badgeColor: "bg-emerald-100 text-brand-forest",
    quoteAccent: "border-l-brand-green",
    ctaColor: "text-brand-green hover:text-brand-green-dark",
  },
  {
    id: "jerin",
    name: "Jerin",
    location: "Bangladesh Cohort",
    discipline: "Creative Media, Office Administration & Computing",
    bio: "Demonstrating exceptional speed, layout aesthetic, and error-free execution across advanced media production suites. Jerin is preparing relentlessly to uphold Bangladesh's reputation in Helsinki.",
    quote:
      "When you focus on skill, every challenge transforms into a milestone. Representing Bangladesh makes every hour of practice worthwhile.",
    sponsorCtaLabel: "Sponsor Training Gear for Jerin",
    sponsorCtaHref: "https://partners.epyra.agency",
    image: {
      src: "/images/2023/jerin-2023.webp",
      alt: "Helsinki 2027 Campaign Poster for Candidate Jerin",
      width: 400,
      height: 500,
    },
    badgeColor: "bg-sky-100 text-sky-800",
    quoteAccent: "border-l-sky-500",
    ctaColor: "text-brand-ice hover:text-sky-700",
  },
];
