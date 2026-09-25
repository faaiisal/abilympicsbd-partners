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
    headline: "Joshim’s Journey to the International Abilympics",
    excerpt:
      "A special television feature highlighting Joshim’s journey, determination, and experience as a member of Bangladesh’s Abilympics delegation.",
    date: "April 2023",
    url: "https://drive.google.com/drive/u/6/home",
    accentColor: "text-emerald-400",
  },
  {
    id: "international-abilympics-2023",
    publication: "International Abilympics Coverage",
    headline: "International Stories from Abilympics 2023",
    excerpt:
      "Stories and participant features highlighting the Abilympics community and vocational inclusion across countries.",
    date: "May 2023",
    url: "https://drive.google.com/drive/u/6/home",
    accentColor: "text-sky-400",
  },
];

/**
 * Journey video configuration.
 *
 * The video is hosted as a direct MP4 on media.epyra.agency.
 * The thumbnail is shown before the video is activated.
 */
export const broadcastVideo = {
  video: {
    url: "https://media.epyra.agency/videos/abilympics-bangladesh-journey.mp4",

    description:
      "Watch the latest video highlighting Team Bangladesh, their Abilympics journey, and preparations for Helsinki 2027.",

    thumbnail: {
      src: "/images/gallery/gallery-16.webp",
      alt: "Team Bangladesh preparing for Abilympics Helsinki 2027",
    },
  },
};