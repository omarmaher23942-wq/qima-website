"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";
import type { Testimonial } from "@/content/testimonials";

interface VoiceMessageProps {
  testimonial: Testimonial;
}

const BAR_COUNT = 40;

export function VoiceMessage({ testimonial }: VoiceMessageProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? audio.currentTime / audio.duration : 0);
    };
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // Pause any other voice message currently playing on the page.
      document.querySelectorAll("audio").forEach((el) => {
        if (el !== audio) el.pause();
      });
      audio.play();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const onSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * duration;
  }, [duration]);

  function formatTime(t: number) {
    if (!isFinite(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  const activeBars = Math.round(progress * BAR_COUNT);

  // استخراج روابط شبكات التواصل الاجتماعي بأمان تام لتفادي مشاكل الـ Types
  const socials = (testimonial as any).socials || {};
  const instagramUrl = socials.instagram;
  const tiktokUrl = socials.tiktok;

  return (
    <div className="voice-message-card group relative rounded-2xl overflow-hidden border border-border bg-surface-high/60 backdrop-blur-sm p-4 transition-all duration-300 hover:border-accent/40">
      <audio ref={audioRef} src={testimonial.audio} preload="metadata" />

      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden border-2 border-accent/30">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>

        {/* Play button + waveform */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-bg transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              {isPlaying ? (
                <Pause size={16} fill="currentColor" />
              ) : (
                <Play size={16} fill="currentColor" className="ml-0.5" />
              )}
            </button>

            <div
              onClick={onSeek}
              className="flex-1 flex items-center gap-[2px] h-8 cursor-pointer"
            >
              {Array.from({ length: BAR_COUNT }).map((_, i) => {
                const seed = (i * 37) % 17;
                const height = 25 + seed * 4.2;
                const isActive = i < activeBars;
                return (
                  <span
                    key={i}
                    className="flex-1 rounded-full transition-colors duration-150"
                    style={{
                      height: `${Math.min(height, 100)}%`,
                      backgroundColor: isActive
                        ? "var(--qima-accent)"
                        : "var(--qima-border)",
                    }}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between mt-1.5 pl-12">
            <span className="text-[11px] text-text-faint tabular-nums">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>

      {/* Name + socials */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/60">
        <span className="text-sm font-medium text-text">
          {testimonial.name}
        </span>
        {socials && (
          <div className="flex items-center gap-2.5">
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-text-mute hover:text-accent transition-colors"
              >
                <InstagramIcon />
              </a>
            )}
            {tiktokUrl && (
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-text-mute hover:text-accent transition-colors"
              >
                <TikTokIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// أيقونات SVG مستقلة وآمنة تماماً للملف
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}