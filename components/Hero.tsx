"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { ShatterText } from "./ShatterText";
import { Reveal } from "./Reveal";

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-16"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 15% 10%, rgba(62,207,142,0.10) 0%, rgba(9,15,12,0) 60%), radial-gradient(50% 50% at 85% 30%, rgba(111,163,216,0.06) 0%, rgba(9,15,12,0) 70%)",
        }}
      />

      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 end-[-8%] w-[75%] max-w-[1100px] aspect-square opacity-100 pointer-events-none">
        <Image
          src="/logo.png"
          alt=""
          fill
          priority
          className="object-contain object-right"
          sizes="(min-width: 1024px) 75vw, 0px"
        />
      </div>

      <div className="lg:hidden absolute top-[4%] end-[-25%] w-[85%] max-w-[520px] aspect-square opacity-60 pointer-events-none">
        <Image
          src="/logo.png"
          alt=""
          fill
          className="object-contain object-right"
          sizes="85vw"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 w-full">
        <div className="max-w-2xl">
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
              accentClassName="text-accent"
            />
          </h1>

          <Reveal direction="up" delay={650} duration={800}>
            <p className="mt-7 text-base sm:text-lg text-text-mute max-w-xl leading-relaxed">
              {t.hero.sub}
            </p>
          </Reveal>

          <Reveal direction="up" delay={850} duration={800}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-bg hover:bg-accent-soft transition-all duration-200 hover:scale-[1.03]"
              >
                {t.hero.ctaPrimary}
                <ArrowIcon />
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-text hover:border-accent/50 hover:bg-surface/50 transition-all duration-200"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>
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