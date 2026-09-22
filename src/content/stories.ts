import type { StoryCard } from "@/types/content";

/**
 * Journey story cards — used in the Stories section (mobile-primary, also shown on desktop
 * within the media/live section).
 *
 * SOURCE: Stitch HTML (stitch-code-mobile.html — StoriesSection)
 * The story headlines appear in the approved design, but story URLs are placeholders.
 *
 * TODO: Provide real story URLs or blog post links before Phase 7 implementation.
 * TODO: Confirm which gallery images should be used as story thumbnails.
 * TODO: If stories are to be real blog posts, confirm the CMS or content source.
 *
 * RULE: Do not invent story narratives beyond the headlines present in the design.
 */
export const stories: StoryCard[] = [
  {
    id: "story-journey-squad",
    category: "Roadmap 2027",
    categoryColor: "text-brand-green",
    headline: "The Journey to Helsinki: Building Our Long-Term Squad",
    image: {
      src: "/images/participants/metz-2023-banner.webp",
      alt: "Bangladesh delegation flag-bearer on stage at Metz",
      width: 80,
      height: 80,
    },
    href: null, // TODO: Replace with confirmed story URL
  },
  {
    id: "story-digital-labs",
    category: "Vocational Test",
    categoryColor: "text-brand-ice",
    headline: "Excellence Through Practice: Inside the Digital Labs",
    image: {
      src: "/images/gallery/gallery-01.webp",
      alt: "Competitor working on desktop setup in training lab",
      width: 80,
      height: 80,
    },
    href: null, // TODO: Replace with confirmed story URL
  },
  {
    id: "story-team-unity",
    category: "Global Fellowship",
    categoryColor: "text-purple-700",
    headline: "Inside Team Bangladesh: Unity in Vocational Diversity",
    image: {
      src: "/images/2023/metz-2023-delegation-01.webp",
      alt: "Team Bangladesh celebrating together at Metz",
      width: 80,
      height: 80,
    },
    href: null, // TODO: Replace with confirmed story URL
  },
];
