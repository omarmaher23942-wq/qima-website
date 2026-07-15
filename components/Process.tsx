"use client";

import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="relative py-28 sm:py-36 border-y border-border">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <Reveal direction="left">
          <div className="max-w-xl mx-auto text-center mb-20">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              {t.process.eyebrow}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-[3.25rem] font-bold text-balance">
              {t.process.title}
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="hidden md:block absolute top-8 start-8 bottom-8 w-px bg-border" />
          <div className="space-y-8 md:space-y-0">
            {t.process.steps.map((step, i) => (
              <Reveal key={i} direction="up" delay={i * 130}>
                <div className="relative flex flex-col md:flex-row md:items-start gap-5 md:gap-10 pb-8 md:pb-14 last:pb-0">
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-bg-soft font-display text-lg font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display font-semibold text-2xl mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-base text-text-mute leading-relaxed max-w-xl">
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