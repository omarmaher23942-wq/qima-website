"use client";

import { useLanguage } from "@/lib/language-context";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

export function WhyQima() {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 sm:py-36 bg-bg-soft border-y border-border">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20">
          <Reveal direction="left">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                {t.why.eyebrow}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-tight text-balance">
                {t.why.title}
                <br />
                <span className="text-accent">{t.why.titleAccent}</span>
              </h2>

              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                {t.why.stats.map((stat, i) => (
                  <Reveal key={i} direction="fade" delay={400 + i * 150}>
                    <div>
                      <div className="font-display text-2xl sm:text-3xl font-bold text-accent">
                        <CountUp value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="mt-1.5 text-xs text-text-mute leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {t.why.points.map((point, i) => (
              <Reveal key={i} direction="right" delay={i * 130}>
                <div className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-sm font-semibold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-base mb-1.5">
                        {point.title}
                      </h3>
                      <p className="text-sm text-text-mute leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
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