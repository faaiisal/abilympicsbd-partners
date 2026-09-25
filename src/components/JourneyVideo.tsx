"use client";

import Image from "next/image";
import { useState } from "react";
import { broadcastVideo } from "@/content";

export function JourneyVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const video = broadcastVideo.video;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-brand-charcoal to-slate-900 text-white shadow-raised">
      <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-12">
        {/* Content */}
        <div className="space-y-4 lg:col-span-7">
          <p className="inline-flex rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-300">
            Team Bangladesh
          </p>

          <h3 className="text-2xl text-white sm:text-4xl">
            Follow Team Bangladesh
          </h3>

          <p className="text-sm leading-6 text-slate-300">
            {video.description}
          </p>

          <button
            type="button"
            onClick={handlePlay}
            aria-controls="journey-video-player"
            aria-label="Watch Team Bangladesh journey video"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-bold text-slate-900 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <span aria-hidden="true">▶</span>
            Watch Video
          </button>

          <details className="border-t border-slate-800 pt-4 text-xs text-slate-300">
            <summary className="cursor-pointer font-bold text-emerald-300">
              View text transcript and audio description
            </summary>

            <p className="mt-2 leading-6">
              Transcript summary: visual compilation of Bangladeshi contestants
              in Metz performing vocational tests, raising national flags and
              preparing for Helsinki 2027.
            </p>
          </details>
        </div>

        {/* Video */}
        <div
          id="journey-video-player"
          className="lg:col-span-5"
        >
          {isPlaying ? (
            <video
              src={video.url}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="aspect-video w-full rounded-2xl border border-white/10 bg-black object-cover"
            >
              Your browser does not support the video element.
            </video>
          ) : (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play Team Bangladesh journey video"
              className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black text-left"
            >
              <Image
                src={video.thumbnail.src}
                alt={video.thumbnail.alt}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover opacity-70 transition duration-300 group-hover:scale-105 group-hover:opacity-80"
              />

              <span className="absolute inset-0 flex items-center justify-center">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-xl text-slate-900 shadow-lg transition group-hover:scale-110"
                >
                  ▶
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}