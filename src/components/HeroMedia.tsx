"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const VIMEO_VIDEO_URL =
  "https://player.vimeo.com/video/1229799940?autoplay=1&muted=1&loop=1&background=1&title=0&byline=0&portrait=0&badge=0&autopause=0&controls=0&dnt=1";

export function HeroMedia() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateMedia = () => {
      setShowVideo(mediaQuery.matches);
    };

    updateMedia();

    mediaQuery.addEventListener("change", updateMedia);

    return () => {
      mediaQuery.removeEventListener("change", updateMedia);
    };
  }, []);

  // Mobile: static hero image
  if (!showVideo) {
    return (
      <>
        <Image
          src="/images/gallery/gallery-16.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none absolute inset-0 -z-30 h-full w-full object-cover object-center"
        />

        {/* Mobile readability overlay */}
        <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-brand-charcoal/35 via-brand-charcoal/20 to-brand-charcoal/65" />
      </>
    );
  }

  // Desktop / tablet: Vimeo hero video
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-30 overflow-hidden">
        <iframe
          src={VIMEO_VIDEO_URL}
          title="Abilympics Helsinki 2027"
          allow="autoplay; fullscreen; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.08]"
        />
      </div>

      {/* Main cinematic overlay */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-brand-charcoal/35 via-brand-charcoal/15 to-brand-charcoal/70" />

      {/* Subtle green brand tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-green-dark/20 via-transparent to-brand-charcoal/20" />
    </>
  );
}