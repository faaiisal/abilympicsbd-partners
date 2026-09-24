import type { MediaArticle } from "@/types/content";

/**
 * Media coverage items.
 *
 * RULE:
 * Only confirmed media/features should be listed here.
 */
export const mediaArticles: MediaArticle[] = [
  {
    id: "nagorik-tv-2023",
    publication: "Nagorik TV",
    headline:
      "Joshim’s Journey to the International Abilympics",
    excerpt:
      "A special television feature highlighting Joshim’s journey, determination, and experience as a member of Bangladesh’s Abilympics delegation.",
    date: "April 2023",
    url: "https://drive.google.com/drive/u/6/home",
    accentColor: "text-emerald-400",
  },
  {
    id: "international-abilympics-2023",
    publication: "International Abilympics Coverage",
    headline:
      "International Stories from Abilympics 2023",
    excerpt:
      "Stories and participant features highlighting the Abilympics community and vocational inclusion across countries.",
    date: "May 2023",
    url: "https://drive.google.com/drive/u/6/home",
    accentColor: "text-sky-400",
  },
];

/**
 * Social / live broadcast video configuration.
 */
export const broadcastVideo = {
  facebook: {
    reelId: "2245506865990513",
    url: "https://www.facebook.com/reel/2245506865990513",
    title: "Follow Team Bangladesh Live — Abilympics Bangladesh Journey",
    description:
      "Stay connected with live athlete training sessions, candidate selection updates, and official press briefings across our streaming networks.",
    fallbackImage: {
      src: "/images/gallery/gallery-16.webp",
      alt: "Team Bangladesh training session preview",
    },
  },
};