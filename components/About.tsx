"use client";

import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal direction="fade">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              {t.about.eyebrow}
            </p>
          </Reveal>
          <Reveal direction="up" delay={120}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-balance leading-tight">
              {t.about.title}
            </h2>
          </Reveal>
          <Reveal direction="up" delay={280}>
            <p className="mt-6 text-base text-text-mute leading-relaxed">
              {t.about.body}
            </p>
          </Reveal>
          <Reveal direction="up" delay={400}>
            <p className="mt-4 text-base text-text-mute leading-relaxed">
              {t.about.body2}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}