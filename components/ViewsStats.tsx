"use client";

import { useLanguage } from "@/lib/language-context";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

const viewStats = [
  { value: 12, suffix: "M+", labelKey: "youtube" },
  { value: 45, suffix: "M+", labelKey: "reels" },
  { value: 8, suffix: "M+", labelKey: "ads" },
  { value: 200, suffix: "K+", labelKey: "engagement" },
];

export function ViewsStats() {
  const { lang } = useLanguage();

  const labels: Record<string, { en: string; ar: string }> = {
    youtube: { en: "YouTube Views", ar: "مشاهدات يوتيوب" },
    reels: { en: "Reels Views", ar: "مشاهدات ريلز" },
    ads: { en: "Ad Views", ar: "مشاهدات إعلانات" },
    engagement: { en: "Total Engagements", ar: "إجمالي التفاعلات" },
  };

  return (
    <section className="relative py-20 sm:py-28 border-y border-border">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal direction="fade">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 text-center">
            {viewStats.map((stat, i) => (
              <Reveal key={stat.labelKey} direction="up" delay={i * 120}>
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-cosmic-gradient">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-text-mute">
                    {labels[stat.labelKey][lang]}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}