"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";
import { VideoPlayer } from "./VideoPlayer";
import { processSectionVideo } from "@/content/videos";

export function Process() {
  const { t } = useLanguage();
  const [hovering, setHovering] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="process" className="relative py-28 sm:py-36 border-y border-border">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal direction="left">
          <div className="max-w-xl mx-auto text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              {t.process.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-balance">
              {t.process.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal direction="left" delay={100}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => setExpanded(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setExpanded(true);
                }
              }}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="group relative block w-full max-w-sm mx-auto aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
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
                  videoId={processSectionVideo}
                  autoplay
                  muted={!expanded}
                  showControls={expanded}
                />
              ) : (
                <img
                  src={`https://i.ytimg.com/vi/${processSectionVideo}/hqdefault.jpg`}
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
            </div>
          </Reveal>

          <div className="relative">
            <div className="hidden md:block absolute top-6 start-6 bottom-6 w-px bg-border" />
            <div className="space-y-6 md:space-y-0">
              {t.process.steps.map((step, i) => (
                <Reveal key={i} direction="up" delay={200 + i * 120}>
                  <div className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-8 pb-6 md:pb-10 last:pb-0">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-bg-soft font-display text-sm font-semibold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="pt-1.5">
                      <h3 className="font-display font-semibold text-lg mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-sm text-text-mute leading-relaxed max-w-md">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
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
              videoId={processSectionVideo}
              onClose={() => setExpanded(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}