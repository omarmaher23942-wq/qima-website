"use client";

import { useLanguage } from "@/lib/language-context";
import { ShatterText } from "./ShatterText";
import { Reveal } from "./Reveal";

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-28 pb-16"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 w-full text-center">
        <Reveal direction="fade" duration={600}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6">
            {t.hero.eyebrow}
          </p>
        </Reveal>

        <h1
          key={lang}
          className="font-display text-[2.6rem] leading-[1.1] sm:text-5xl md:text-6xl font-bold text-balance"
        >
          <ShatterText
            text={`${t.hero.headline} ${t.hero.headlineAccent}`}
            accentWords={t.hero.headlineAccent.split(" ").length}
            accentClassName="text-cosmic-gradient"
          />
        </h1>

        <Reveal direction="up" delay={650} duration={800}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#work"
              className="mercury-border shine-sweep inline-flex items-center gap-2 rounded-full bg-surface px-7 py-3.5 text-sm font-semibold text-text hover:bg-surface-high transition-all duration-200"
            >
              {t.hero.ctaPrimary}
              <ArrowIcon />
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-text hover:border-accent/50 hover:bg-surface/50 transition-all duration-200"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}