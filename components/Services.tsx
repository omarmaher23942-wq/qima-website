"use client";

import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

const icons = [EditIcon, ThumbnailIcon, ScriptIcon];
const iconColors = ["text-accent bg-accent/10", "text-gold bg-gold/10", "text-blue bg-blue/10"];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal direction="up">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              {t.services.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-balance leading-tight">
              {t.services.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={i} direction="up" delay={i * 120}>
                <div className="group relative rounded-2xl border border-border bg-surface/50 p-8 h-full transition-all duration-300 hover:border-accent/40 hover:bg-surface hover:-translate-y-1">
                  <div className={`mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${iconColors[i]}`}>
                    <Icon />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-mute">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EditIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 5v14M15 5v14" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9.5h4M17 9.5h4M3 14.5h4M17 14.5h4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ThumbnailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 16l5-4 4 3 4-5 5 6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function ScriptIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M6 3h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M15 3v5h5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}