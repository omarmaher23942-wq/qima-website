"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

export function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-20 sm:py-28 border-y border-border">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3 text-center">{t.faq.eyebrow}</p>
          <h2 className="font-display text-3xl font-bold text-center text-balance mb-10">{t.faq.title}</h2>
        </Reveal>
        <div className="space-y-3">
          {t.faq.items.map((it, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="glass-surface rounded-2xl">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-center justify-between gap-4 p-5 text-start font-medium"
                >
                  {it.q}
                  <Plus size={18} className={`shrink-0 text-accent transition-transform duration-300 ${open === i ? "rotate-45" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden px-5 text-sm text-text-mute leading-relaxed">
                    <span className="block pb-5">{it.a}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
