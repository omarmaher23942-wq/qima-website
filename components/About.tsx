"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";
import { VideoPlayer } from "./VideoPlayer";
import { aboutSectionVideo } from "@/content/videos";

export function About() {
  const { t } = useLanguage();
  const [hovering, setHovering] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center md:text-start">
            <Reveal direction="fade">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                {t.about.eyebrow}
              </p>
            </Reveal>
            <Reveal direction="spring-up" delay={100} distance={35}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-balance leading-tight">
                {t.about.title}
              </h2>
            </Reveal>
            <Reveal direction="up" delay={280}>
              <p className="mt-6 text-base text-text-mute leading-relaxed">
                {t.about.body}
              </p>
            </Reveal>
          </div>

          <Reveal direction="right" delay={200}>
            <button
              onClick={() => setExpanded(true)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="group relative block w-full max-w-sm mx-auto aspect-[9/16] rounded-2xl overflow-hidden transition-all duration-500"
              style={{
                border: hovering
                  ? "1px solid rgba(168,181,169,0.5)"
                  : "1px solid rgba(168,181,169,0.12)",
                boxShadow: hovering
                  ? "0 0 30px rgba(168,181,169,0.15)"
                  : "none",
              }}
            >
              {hovering || expanded ? (
                <VideoPlayer
                  videoId={aboutSectionVideo}
                  autoplay
                  muted={!expanded}
                  showControls={expanded}
                />
              ) : (
                <img
                  src={`https://i.ytimg.com/vi/${aboutSectionVideo}/hqdefault.jpg`}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              {!hovering && !expanded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
              )}
            </button>
          </Reveal>
        </div>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-10"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative h-[85vh] max-h-[800px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <VideoPlayer
              videoId={aboutSectionVideo}
              onClose={() => setExpanded(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}