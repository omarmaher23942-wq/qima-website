"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { videos } from "@/content/videos";
import { VideoPlayer } from "./VideoPlayer";
import { Reveal } from "./Reveal";

export function WorkGallery() {
  const { t, lang } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal direction="up">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              {t.work.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-balance">
              {t.work.title}
            </h2>
          </div>
        </Reveal>

        <div className="columns-2 sm:columns-4 lg:columns-5 gap-3 [column-fill:_balance] max-w-4xl mx-auto">
          {videos.map((video, i) => (
            <Reveal key={`${video.id}-${i}`} direction="up" delay={(i % 6) * 80}>
              <button
                onClick={() => setActiveVideo(video.id)}
                className="group relative mb-4 block w-full overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-accent/50 break-inside-avoid aspect-[9/16]"
              >
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title[lang]}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3.5 text-start">
                  <p className="text-xs font-medium text-white leading-snug">
                    {video.title[lang]}
                  </p>
                </div>
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
            className="relative h-[85vh] max-h-[800px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <VideoPlayer videoId={activeVideo} onClose={() => setActiveVideo(null)} />
          </div>
        </div>
      )}
    </section>
  );
}