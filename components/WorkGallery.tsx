"use client";

import { useState } from "react";
import { videos } from "@/content/videos";
import { VideoPlayer } from "./VideoPlayer";
import { Reveal } from "./Reveal";

export function WorkGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal direction="right">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              Selected Work
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-balance">
              A few of the results
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {videos.map((video, i) => (
            <Reveal key={video.id} direction="up" delay={(i % 8) * 70}>
              <button
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
                onClick={() => setActiveVideo(video.id)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent/50 aspect-[9/16]"
              >
                {hoveredVideo === video.id ? (
                  <VideoPlayer
                    videoId={video.id}
                    autoplay
                    muted
                    showControls={false}
                  />
                ) : (
                  <img
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
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