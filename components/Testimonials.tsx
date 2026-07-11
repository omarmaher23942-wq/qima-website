"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { videoTestimonials } from "@/content/testimonials";
import { VideoPlayer } from "./VideoPlayer";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="relative py-28 sm:py-36 bg-bg-soft border-y border-border">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal direction="up">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              {t.testimonials.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-balance">
              {t.testimonials.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 sm:gap-5">
          {videoTestimonials.map((item, i) => (
            <Reveal key={item.id} direction="up" delay={i * 90}>
              <button
                onClick={() => setActiveVideo(item.id)}
                className="group flex flex-col items-center gap-3 text-center w-full"
              >
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-2 border-border group-hover:border-accent/50 transition-colors duration-300">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <span className="text-xs font-medium text-text-mute group-hover:text-text transition-colors">
                  {item.name}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-10"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative h-[75vh] max-h-[650px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <VideoPlayer videoId={activeVideo} onClose={() => setActiveVideo(null)} />
          </div>
        </div>
      )}
    </section>
  );
}