"use client";

import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="relative py-28 sm:py-36 bg-bg-soft border-y border-border">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal direction="up">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              {t.process.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-balance">
              {t.process.title}
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="hidden md:block absolute top-6 start-6 bottom-6 w-px bg-border" />
          <div className="space-y-6 md:space-y-0">
            {t.process.steps.map((step, i) => (
              <Reveal key={i} direction="left" delay={i * 140}>
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
    </section>
  );
}