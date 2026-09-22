import Image from "next/image";
import { galleryImages } from "@/content";
import { SectionHeading } from "./SectionHeading";

const validPaths = new Set([
  "/images/2023/jerin-2023.webp",
  "/images/2023/joshim-2023.webp",
  "/images/2023/metz-2023-medal-01.webp",
  "/images/gallery/gallery-00.webp",
  "/images/gallery/gallery-01.webp",
  "/images/gallery/gallery-02.webp",
  "/images/gallery/gallery-03.webp",
  "/images/gallery/gallery-04.webp",
  "/images/gallery/gallery-05.webp",
  "/images/gallery/gallery-06.webp",
  "/images/gallery/gallery-07.webp",
  "/images/gallery/gallery-08.webp",
  "/images/gallery/gallery-10.webp",
  "/images/gallery/gallery-11.webp",
  "/images/gallery/gallery-12.webp",
  "/images/gallery/gallery-13.webp",
  "/images/gallery/gallery-15.webp",
  "/images/gallery/gallery-16.webp",
  "/images/institutional/csid-representative-00.webp",
  "/images/institutional/csid-representative-01.webp",
  "/images/participants/metz-2023-banner.webp",
]);

export function Gallery() {
  const images = galleryImages.filter((image) => validPaths.has(image.src));
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="scroll-mt-24 bg-slate-50 py-20 lg:py-28"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Documentary gallery"
          title="A record of skill, teamwork and pride."
          description="Explore prepared photographs from Bangladesh’s Abilympics journey and international engagement."
        />
        <h2 id="gallery-title" className="sr-only">
          Abilympics Bangladesh documentary gallery
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <figure
              key={image.id}
              className={`group overflow-hidden rounded-2xl bg-white shadow-card ${
                index % 7 === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={675}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
              />
              <figcaption className="p-3 text-xs font-semibold leading-5 text-slate-600 sm:p-4">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
