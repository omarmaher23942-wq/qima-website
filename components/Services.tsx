"use client";

import { Video, ImageIcon, PenTool } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

const icons = [Video, ImageIcon, PenTool];
const iconStyles = [
  { color: "#c9d4ca", ring: "rgba(168,181,169,0.35)" },
  { color: "#e0c58f", ring: "rgba(201,161,90,0.35)" },
  { color: "#9dc3ea", ring: "rgba(111,163,216,0.35)" },
];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal direction="up">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              {t.services.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-balance leading-tight">
              {t.services.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            const style = iconStyles[i];
            return (
              <Reveal key={i} direction="up" delay={i * 120}>
                <ServiceCard
                  Icon={Icon}
                  color={style.color}
                  ring={style.ring}
                  title={item.title}
                  desc={item.desc}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  Icon,
  color,
  ring,
  title,
  desc,
}: {
  Icon: typeof Video;
  color: string;
  ring: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="group relative rounded-2xl p-9 h-full transition-all duration-500 hover:-translate-y-1.5"
      style={{
        background: "rgba(20,30,25,0.4)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          padding: 1,
          background: `linear-gradient(130deg, ${ring} 0%, rgba(255,255,255,0.08) 45%, ${ring} 100%)`,
          backgroundSize: "220% 220%",
          animation: "service-border-flow 7s ease infinite",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div className="relative">
        <div
          className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110"
          style={{
            background: `radial-gradient(circle at 35% 30%, ${ring}, rgba(10,20,17,0.4) 75%)`,
            border: `1px solid ${ring}`,
            color,
          }}
        >
          <Icon size={22} strokeWidth={1.6} />
        </div>
        <h3 className="font-display text-lg font-semibold mb-3">{title}</h3>
        <p className="text-sm leading-relaxed text-text-mute">{desc}</p>
      </div>

      <style jsx>{`
        @keyframes service-border-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}