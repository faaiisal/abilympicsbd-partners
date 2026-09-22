import Image from "next/image";
import { galleryImages } from "@/content";
import { SectionHeading } from "./SectionHeading";

const validPaths = new Set(["/images/2023/jerin-2023.webp", "/images/2023/joshim-2023.webp", "/images/2023/metz-2023-medal-01.webp", "/images/gallery/gallery-00.webp", "/images/gallery/gallery-01.webp", "/images/gallery/gallery-02.webp", "/images/gallery/gallery-03.webp", "/images/gallery/gallery-04.webp", "/images/gallery/gallery-05.webp", "/images/gallery/gallery-06.webp", "/images/gallery/gallery-07.webp", "/images/gallery/gallery-08.webp", "/images/gallery/gallery-10.webp", "/images/gallery/gallery-11.webp", "/images/gallery/gallery-12.webp", "/images/gallery/gallery-13.webp", "/images/gallery/gallery-15.webp", "/images/gallery/gallery-16.webp", "/images/institutional/csid-representative-00.webp", "/images/institutional/csid-representative-01.webp", "/images/participants/metz-2023-banner.webp"]);

export function Gallery() {
  const images = galleryImages.filter((image) => validPaths.has(image.src));
  return <section id="gallery" className="container-site scroll-mt-24 py-20 lg:py-28"><SectionHeading eyebrow="Documentary gallery" title="A record of skill, teamwork and pride." /><div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">{images.map((image) => <figure key={image.id} className="group overflow-hidden rounded-xl bg-slate-100"><Image src={image.src} alt={image.alt} width={700} height={520} className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" /><figcaption className="p-3 text-xs font-semibold text-slate-600">{image.caption}</figcaption></figure>)}</div></section>;
}
