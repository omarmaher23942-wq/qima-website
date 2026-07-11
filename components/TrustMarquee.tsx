"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { trustedBrands } from "@/content/trust";

export function TrustMarquee() {
  const { t } = useLanguage();
  const doubled = [...trustedBrands, ...trustedBrands];

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden mt-4">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 mb-10 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
          {t.trust.eyebrow}
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-balance">
          {t.trust.title}
        </h2>
        <p className="mt-3 text-sm text-text-mute max-w-md mx-auto">
          {t.trust.sub}
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-bg to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-bg to-transparent" />

        <div className="flex w-max animate-marquee">
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="mx-6 flex h-28 w-56 shrink-0 items-center justify-center rounded-xl border border-border bg-white/[0.04] px-8 py-6"
            >
              <div className="relative h-full w-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  sizes="224px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}