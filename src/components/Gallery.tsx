"use client";

import Image from "next/image";
import { useState } from "react";
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
  "/images/gallery/gallery-09webp.webp",
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

const MAX_GALLERY_IMAGES = 9;

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<"all" | "metz" | "participants" | "helsinki" | "institutional">("all");
  const images = galleryImages
    .filter(
      (image) =>
        validPaths.has(image.src) &&
        (activeCategory === "all" || image.category === activeCategory),
    )
    .slice(0, MAX_GALLERY_IMAGES);
  const filters = [
    ["all", "All"],
    ["metz", "Metz 2023"],
    ["participants", "Participants"],
    ["helsinki", "Helsinki 2027"],
  ] as const;

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="scroll-mt-24 bg-slate-50 py-20 lg:py-28"
    >
      <div className="container-site">
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
          <SectionHeading
            eyebrow="Verified visual archives"
            title="Documentary Gallery"
            description="Captured moments from Metz 2023, bootcamps, and the road to Helsinki 2027."
          />
          <div className="overflow-x-auto pb-1">
            <div aria-label="Gallery category filters" className="inline-flex min-w-max gap-1 rounded-xl border border-slate-300 bg-white p-1.5 shadow-sm" role="tablist">
              {filters.map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === value}
                  aria-controls="gallery-grid"
                  onClick={() => setActiveCategory(value)}
                  className={`rounded-lg px-3 py-2 text-xs font-bold transition-colors sm:px-4 ${
                    activeCategory === value
                      ? "bg-brand-green text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <h2 id="gallery-title" className="sr-only">
          Abilympics Bangladesh documentary gallery
        </h2>
        <div id="gallery-grid" role="tabpanel" aria-live="polite" className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3 lg:gap-6">
          {images.map((image, index) => (
            <figure
              key={image.id}
              className="gallery-reveal group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"
              style={{ animationDelay: `${Math.min(index * 35, 350)}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={675}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-300 motion-safe:group-hover:scale-105"
                />
              </div>
              <figcaption className="min-h-16 p-3 text-xs font-semibold leading-5 text-slate-600 sm:p-4">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        {images.length === 0 ? (
          <p className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-600">
            No prepared images are available in this category.
          </p>
        ) : null}
      </div>
    </section>
  );
}
