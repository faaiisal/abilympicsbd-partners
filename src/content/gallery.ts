import type { GalleryImage } from "@/types/content";

/**
 * Documentary gallery images.
 *
 * Categories:
 * - "metz"        → Metz 2023 documentary images
 * - "participants" → Bangladesh participant/candidate stories
 * - "helsinki"    → Helsinki 2027 images
 *
 * Total:
 * - Metz 2023: 6 images
 * - Participants: 3 images
 * - Helsinki 2027: 3 images
 * - Total: 12 images
 */

export const galleryImages: GalleryImage[] = [
  // ─── Helsinki 2027 ───────────────────────────────────────────────────────
  {
    id: "helsinki-2027-01",
    src: "/images/2027/helsinki-2027-01.webp",
    alt: "Abilympics Helsinki 2027",
    caption: "Helsinki 2027 • International Abilympics",
    category: "helsinki",
  },
  {
    id: "helsinki-2027-02",
    src: "/images/2027/helsinki-2027-02.webp",
    alt: "Abilympics Helsinki 2027 event",
    caption: "Helsinki 2027 • The Road Ahead",
    category: "helsinki",
  },
  {
    id: "helsinki-2027-03",
    src: "/images/2027/helsinki-2027-03.webp",
    alt: "Abilympics Helsinki 2027",
    caption: "Helsinki 2027 • Empowering Ability",
    category: "helsinki",
  },

  // ─── Participants ────────────────────────────────────────────────────────
  {
    id: "helsinki-poster-joshim",
    src: "/images/2023/joshim-2023.webp",
    alt: "Candidate Joshim representing Bangladesh on the road to Helsinki 2027",
    caption: "Candidate Joshim • Metz 2023",
    category: "participants",
  },
  {
    id: "helsinki-poster-jerin",
    src: "/images/2023/jerin-2023.webp",
    alt: "Candidate Jerin representing Bangladesh on the road to Helsinki 2027",
    caption: "Candidate Jerin • Metz 2023",
    category: "participants",
  },
    {
    id: "helsinki-poster-wheelchair",
    src: "/images/gallery/gallery-10.webp",
    alt: "Candidate Jerin representing Bangladesh on the road to Helsinki 2027",
    caption: "Candidate Jerin • Metz 2023",
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
    src: "/images/gallery/gallery-03.webp",
    alt: "South Asian delegations including Bangladesh raising national flags together in Metz arena",
    caption: "Metz Arena Solidarity • Bangladesh with international peers",
    category: "metz",
  },
  {
    id: "metz-departure",
    src: "/images/gallery/gallery-02.webp",
    alt: "Bangladesh delegation with official CSID departure banner at airport",
    caption: "Official Contingent Departure • Metz 2023",
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
    alt: "Bangladeshi candidate completing a word processing and data testing task during competition",
    caption: "Live Workstation • Metz 2023",
    category: "metz",
  },
  {
    id: "metz-workstation-2",
    src: "/images/gallery/gallery-01.webp",
    alt: "Competitor performing a typing and word processing test",
    caption: "Word Processing • Metz 2023",
    category: "metz",
  },
];