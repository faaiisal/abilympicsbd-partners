import type { GalleryImage } from "@/types/content";

/**
 * Documentary gallery images.
 *
 * SOURCE: Image paths follow the convention established in the migration plan.
 * Categories: "metz" | "participants" | "helsinki" | "institutional"
 *
 * IMPORTANT: These paths are PLACEHOLDERS pending delivery of real image assets.
 * Each item maps to the expected file location under public/images/.
 * The alt text and captions are based on Stitch HTML descriptions.
 *
 * gallery-14 is intentionally skipped — confirm with client if missing asset.
 *
 * TODO: Replace all src paths once real image assets are provided.
 * TODO: Confirm gallery-14 — either add or note intentional gap.
 */
export const galleryImages: GalleryImage[] = [
  // ─── Helsinki 2027 ───────────────────────────────────────────────────────
  {
    id: "helsinki-emblem",
    src: "/images/2027/helsinki-2027-emblem.webp",
    alt: "Official Abilympics Bangladesh 2027 Emblem",
    caption: "Official Delegation Emblem • 2027",
    category: "helsinki",
  },
  {
    id: "helsinki-poster-joshim",
    src: "/images/2023/joshim-2023.webp",
    alt: "Helsinki 2027 Campaign Poster for Candidate Joshim",
    caption: "Candidate Joshim • Helsinki 2027 Campaign",
    category: "participants",
  },
  {
    id: "helsinki-poster-jerin",
    src: "/images/2023/jerin-2023.webp",
    alt: "Helsinki 2027 Campaign Poster for Candidate Jerin",
    caption: "Candidate Jerin • Helsinki 2027 Campaign",
    category: "participants",
  },

  // ─── Metz 2023 ───────────────────────────────────────────────────────────
  {
    id: "metz-banner",
    src: "/images/participants/metz-2023-banner.webp",
    alt: "Bangladeshi flag held high on the international arena stage in Metz",
    caption: "Flag-Bearing Pride • Metz 2023",
    category: "metz",
  },
  {
    id: "metz-solidarity",
    src: "/images/2023/metz-2023-delegation-01.webp",
    alt: "South Asian delegations including Bangladesh raising national flags together in Metz arena",
    caption: "Metz Arena Solidarity • Bangladesh with international peers",
    category: "metz",
  },
  {
    id: "metz-departure",
    src: "/images/participants/metz-2023-delegation-airport.webp",
    alt: "Bangladesh delegation with official CSID departure banner at airport",
    caption: "Official Contingent Departure organized by CSID & United Action",
    category: "metz",
  },
  {
    id: "metz-medals",
    src: "/images/2023/metz-2023-medal-01.webp",
    alt: "Team Bangladesh medalists with their international medals",
    caption: "Medal Victory • Metz 2023",
    category: "metz",
  },
  {
    id: "metz-workstation",
    src: "/images/gallery/gallery-00.webp",
    alt: "Bangladeshi candidate completing rigorous word processing and data testing station in competition",
    caption: "Metz 2023 Live Workstation • Word Processing & Office Automation",
    category: "metz",
  },
  {
    id: "metz-workstation-2",
    src: "/images/gallery/gallery-01.webp",
    alt: "Competitor performing typing and word processing test",
    caption: "Word Processing • Metz 2023",
    category: "metz",
  },
  {
    id: "metz-design",
    src: "/images/gallery/gallery-02.webp",
    alt: "Competitor working on high precision graphic workstation",
    caption: "Design Trade Task • Metz 2023",
    category: "metz",
  },
  {
    id: "metz-jury",
    src: "/images/gallery/gallery-03.webp",
    alt: "Team meeting with international officials in Metz",
    caption: "Technical Jury Review • Metz 2023",
    category: "metz",
  },

  // ─── Institutional ───────────────────────────────────────────────────────
  {
    id: "csid-delegation",
    src: "/images/institutional/csid-representative-00.webp",
    alt: "Bangladeshi contingent leaders and competitors collaborating with global jury members",
    caption: "CSID and Bangladesh representatives at the 10th Abilympics in Metz",
    category: "institutional",
  },
  {
    id: "csid-collaboration",
    src: "/images/institutional/csid-representative-01.webp",
    alt: "CSID and Bangladesh lead team collaborating with IAF Officials at the 10th Abilympics in Metz",
    caption: "International Engagement • CSID with IAF Delegates",
    category: "institutional",
  },

  // ─── Gallery archive (additional images — paths TBC) ─────────────────────
  // TODO: Map gallery-04 through gallery-16 to correct categories
  // once asset descriptions are confirmed. Do not invent captions.
  {
    id: "gallery-04",
    src: "/images/gallery/gallery-04.webp",
    alt: "Abilympics Bangladesh 2023 documentary photograph",
    caption: "Metz 2023 • Documentary Archive",
    category: "metz",
  },
  {
    id: "gallery-05",
    src: "/images/gallery/gallery-05.webp",
    alt: "Abilympics Bangladesh 2023 documentary photograph",
    caption: "Metz 2023 • Documentary Archive",
    category: "metz",
  },
  {
    id: "gallery-06",
    src: "/images/gallery/gallery-06.webp",
    alt: "Abilympics Bangladesh 2023 documentary photograph",
    caption: "Metz 2023 • Documentary Archive",
    category: "metz",
  },
  {
    id: "gallery-07",
    src: "/images/gallery/gallery-07.webp",
    alt: "Abilympics Bangladesh 2023 documentary photograph",
    caption: "Metz 2023 • Documentary Archive",
    category: "metz",
  },
  {
    id: "gallery-08",
    src: "/images/gallery/gallery-08.webp",
    alt: "Abilympics Bangladesh 2023 documentary photograph",
    caption: "Metz 2023 • Documentary Archive",
    category: "metz",
  },
  {
    id: "gallery-09",
    src: "/images/gallery/gallery-09webp.webp",
    alt: "Abilympics Bangladesh 2023 documentary photograph",
    caption: "Metz 2023 • Documentary Archive",
    category: "metz",
  },
  {
    id: "gallery-10",
    src: "/images/gallery/gallery-10.webp",
    alt: "Abilympics Bangladesh 2023 documentary photograph",
    caption: "Metz 2023 • Documentary Archive",
    category: "metz",
  },
  {
    id: "gallery-11",
    src: "/images/gallery/gallery-11.webp",
    alt: "Abilympics Bangladesh 2023 documentary photograph",
    caption: "Metz 2023 • Documentary Archive",
    category: "metz",
  },
  {
    id: "gallery-12",
    src: "/images/gallery/gallery-12.webp",
    alt: "Abilympics Bangladesh 2023 documentary photograph",
    caption: "Metz 2023 • Documentary Archive",
    category: "metz",
  },
  {
    id: "gallery-13",
    src: "/images/gallery/gallery-13.webp",
    alt: "Abilympics Bangladesh 2023 documentary photograph",
    caption: "Metz 2023 • Documentary Archive",
    category: "metz",
  },
  // gallery-14: NEEDS CONTENT MAPPING — skipped until confirmed
  {
    id: "gallery-15",
    src: "/images/gallery/gallery-15.webp",
    alt: "Abilympics Bangladesh 2023 documentary photograph",
    caption: "Metz 2023 • Documentary Archive",
    category: "metz",
  },
  {
    id: "gallery-16",
    src: "/images/gallery/gallery-16.webp",
    alt: "Abilympics Bangladesh 2023 documentary photograph",
    caption: "Metz 2023 • Documentary Archive",
    category: "metz",
  },
];
