"use client";

import { useLanguage } from "@/lib/language-context";
import { testimonials } from "@/content/testimonials";
import { VoiceMessage } from "./VoiceMessage";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 sm:py-36 border-y border-border">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal direction="down">
          <div className="max-w-xl mx-auto text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              {t.testimonials.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-balance">
              {t.testimonials.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {testimonials.map((item, i) => (
            <Reveal key={item.id} direction="up" delay={i * 90}>
              <VoiceMessage testimonial={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}