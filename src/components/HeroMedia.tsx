"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

const VIMEO_VIDEO_URL =
  "https://player.vimeo.com/video/1230341388?autoplay=1&muted=0&loop=1&background=1&title=0&byline=0&portrait=0&badge=0&autopause=0&controls=0&dnt=1";

const MOBILE_HERO_IMAGE = "/images/gallery/gallery-16.webp";
const DESKTOP_FALLBACK_IMAGE = "/images/gallery/gallery-11.webp";

export function HeroMedia() {
  const heroMediaRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  const [showVideo, setShowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  /*
   * Detect desktop/tablet viewport.
   * Mobile never loads the Vimeo video.
   */
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

  /*
   * Initialize Vimeo Player only on desktop/tablet.
   */
  useEffect(() => {
    if (!showVideo || !iframeRef.current) {
      return;
    }

    const player = new Player(iframeRef.current);

    playerRef.current = player;

    const handleLoaded = () => {
      setVideoReady(true);
      setVideoFailed(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleError = () => {
      setVideoFailed(true);
      setVideoReady(false);
    };

    player.on("loaded", handleLoaded);
    player.on("play", handlePlay);
    player.on("pause", handlePause);
    player.on("error", handleError);

    /*
     * Try to start the video.
     *
     * Browsers may block autoplay with sound.
     * If that happens, we start muted and let the
     * user enable sound through the control.
     */
    const startVideo = async () => {
      try {
        await player.setLoop(true);
        await player.setVolume(0);
        setIsMuted(true);

        await player.play();
      } catch {
        /*
         * Autoplay was blocked.
         * Keep the video available for user interaction.
         */
      }
    };

    startVideo();

    return () => {
      player.off("loaded", handleLoaded);
      player.off("play", handlePlay);
      player.off("pause", handlePause);
      player.off("error", handleError);

      player.destroy();

      playerRef.current = null;
    };
  }, [showVideo]);

  /*
   * Pause the Vimeo video when the hero leaves the viewport.
   * Resume when the hero becomes visible again.
   */
  useEffect(() => {
    if (!showVideo || !heroMediaRef.current) {
      return;
    }

    const heroElement = heroMediaRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const player = playerRef.current;

        if (!player || !videoReady) {
          return;
        }

        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          player.play().catch(() => {
            // Browser may require user interaction.
          });
        } else {
          player.pause().catch(() => {
            // Ignore pause errors during cleanup/navigation.
          });
        }
      },
      {
        threshold: [0, 0.5, 1],
      }
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, [showVideo, videoReady]);

  /*
   * Enable / disable sound.
   *
   * This action is triggered by an actual user click,
   * so browsers are much more likely to allow audio.
   */
  const toggleSound = async () => {
    const player = playerRef.current;

    if (!player) {
      return;
    }

    try {
      if (isMuted) {
        await player.setVolume(1);
        setIsMuted(false);

        await player.play().catch(() => {
          // Ignore play rejection.
        });
      } else {
        await player.setVolume(0);
        setIsMuted(true);
      }
    } catch {
      // Ignore Vimeo control errors.
    }
  };

  /*
   * Mobile:
   * Static image only.
   */
  if (!showVideo) {
    return (
      <>
        <Image
          src={MOBILE_HERO_IMAGE}
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

  /*
   * Desktop fallback:
   * If Vimeo fails to load/play, show static image.
   */
  if (videoFailed) {
    return (
      <>
        <Image
          src={DESKTOP_FALLBACK_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none absolute inset-0 -z-30 h-full w-full object-cover object-center"
        />

        {/* Main cinematic overlay */}
        <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-brand-charcoal/35 via-brand-charcoal/15 to-brand-charcoal/70" />

        {/* Subtle green brand tint */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-green-dark/20 via-transparent to-brand-charcoal/20" />
      </>
    );
  }

  /*
   * Desktop / tablet:
   * Vimeo background video.
   */
  return (
    <div ref={heroMediaRef} className="absolute inset-0">
      <div className="pointer-events-none absolute inset-0 -z-30 overflow-hidden">
        <iframe
          ref={iframeRef}
          src={VIMEO_VIDEO_URL}
          title="Abilympics Helsinki 2027 hero video"
          allow="autoplay; fullscreen; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.08]"
        />
      </div>

      {/* Main cinematic overlay */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-brand-charcoal/35 via-brand-charcoal/15 to-brand-charcoal/70" />

      {/* Subtle green brand tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-green-dark/20 via-transparent to-brand-charcoal/20" />

      {/* Sound control */}
      {videoReady && (
        <button
          type="button"
          onClick={toggleSound}
          aria-label={isMuted ? "Turn hero video sound on" : "Mute hero video"}
          aria-pressed={!isMuted}
          className="pointer-events-auto absolute bottom-6 right-6 z-20 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/30 bg-black/40 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20"
        >
          <span aria-hidden="true">{isMuted ? "🔇" : "🔊"}</span>

          <span>{isMuted ? "Sound on" : "Mute"}</span>
        </button>
      )}
    </div>
  );
}