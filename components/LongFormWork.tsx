"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

const LONG_FORM_VIDEO_ID = "5m0Fb2lV8tw";

export function LongFormWork() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal direction="left">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              {t.longForm.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-balance">
              {t.longForm.title}
            </h2>
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <button
            onClick={() => setExpanded(true)}
            className="group relative block w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent/50 aspect-video"
          >
            <img
              src={`https://i.ytimg.com/vi/${LONG_FORM_VIDEO_ID}/maxresdefault.jpg`}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white opacity-80 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          </button>
        </Reveal>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-10"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpanded(false)}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 2l12 12M2 14L14 2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${LONG_FORM_VIDEO_ID}?autoplay=1&rel=0`}
              title="Long-form work"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}