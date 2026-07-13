"use client";

import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

const thumbnails = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  src: `/cc/thumbnails/${i + 1}.png`,
}));

export function ViewsShowcase() {
  const { lang } = useLanguage();

  const title = {
    en: "Millions of views across every platform",
    ar: "ملايين المشاهدات على كل منصة",
  };

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal direction="down">
          <div className="max-w-xl mx-auto text-center mb-14">
            <h2 className="font-display text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-balance text-cosmic-gradient">
              {title[lang]}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {thumbnails.map((thumb, i) => (
            <Reveal key={thumb.id} direction="up" delay={i * 90}>
              <div className="group relative rounded-2xl overflow-hidden border border-border bg-surface/40 backdrop-blur-sm aspect-[9/16] transition-all duration-300 hover:border-accent/40">
                <img
                  src={thumb.src}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}