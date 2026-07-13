"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { videoTestimonials } from "@/content/testimonials";
import { VideoPlayer } from "./VideoPlayer";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const { t } = useLanguage();
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative py-28 sm:py-36 border-y border-border">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal direction="down">
          <div className="max-w-xl mx-auto text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              {t.testimonials.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-balance">
              {t.testimonials.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoTestimonials.map((item, i) => {
            const socials = (item as any).socials || {};
            const instagramUrl = socials.instagram;
            const tiktokUrl = socials.tiktok;
            const twitterUrl = socials.twitter || socials.x;
            const isHovered = hoveredId === item.id;

            return (
              <Reveal key={item.id} direction="up" delay={i * 90}>
                <div className="group relative rounded-2xl overflow-hidden border border-border bg-surface/40 backdrop-blur-sm">
                  <button
                    onClick={() => setExpandedVideo(item.id)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="relative block w-full aspect-[9/16] overflow-hidden"
                    aria-label={`Play video from ${item.name}`}
                  >
                    {isHovered ? (
                      <VideoPlayer
                        videoId={item.id}
                        autoplay
                        muted
                        showControls={false}
                      />
                    ) : (
                      <img
                        src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                        alt={item.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
                        isHovered ? "opacity-0" : "opacity-100 group-hover:opacity-100"
                      }`}
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm text-white">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </div>
                  </button>

                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-sm font-medium text-text">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-2">
                      {instagramUrl && (
                        <a
                          href={instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-text-mute hover:text-accent transition-colors"
                          aria-label="Instagram"
                        >
                          <InstagramIcon />
                        </a>
                      )}
                      {tiktokUrl && (
                        <a
                          href={tiktokUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-text-mute hover:text-accent transition-colors"
                          aria-label="TikTok"
                        >
                          <TikTokIcon />
                        </a>
                      )}
                      {twitterUrl && (
                        <a
                          href={twitterUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-text-mute hover:text-accent transition-colors"
                          aria-label="X (Twitter)"
                        >
                          <XIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {expandedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-10"
          onClick={() => setExpandedVideo(null)}
        >
          <div
            className="relative h-[75vh] max-h-[650px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <VideoPlayer videoId={expandedVideo} onClose={() => setExpandedVideo(null)} />
          </div>
        </div>
      )}
    </section>
  );
}

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

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}