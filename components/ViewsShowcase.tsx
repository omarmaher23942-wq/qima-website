"use client";

import { useRef, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

const thumbnails = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  src: `/cc/thumbnails/${i + 1}.png`,
}));

export function ViewsShowcase() {
  const { lang } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStart = useRef({ pointerX: 0, scrollLeft: 0 });

  const title = {
    en: "Millions of views across different platforms",
    ar: "ملايين المشاهدات عبر مختلف المنصات",
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    function handlePointerDown(e: PointerEvent) {
      isDraggingRef.current = true;
      dragStart.current = { pointerX: e.clientX, scrollLeft: el!.scrollLeft };
      el!.setPointerCapture(e.pointerId);
      el!.style.cursor = "grabbing";
    }

    function handlePointerMove(e: PointerEvent) {
      if (!isDraggingRef.current) return;
      const delta = e.clientX - dragStart.current.pointerX;
      el!.scrollLeft = dragStart.current.scrollLeft - delta;
    }

    function handlePointerUp() {
      isDraggingRef.current = false;
      el!.style.cursor = "grab";
    }

    el.addEventListener("pointerdown", handlePointerDown);
    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerup", handlePointerUp);
    el.addEventListener("pointerleave", handlePointerUp);

    return () => {
      el.removeEventListener("pointerdown", handlePointerDown);
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerup", handlePointerUp);
      el.removeEventListener("pointerleave", handlePointerUp);
    };
  }, []);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <Reveal direction="down">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 mb-14 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-balance text-cosmic-gradient">
            {title[lang]}
          </h2>
        </div>
      </Reveal>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-bg to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-bg to-transparent pointer-events-none" />

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide cursor-grab select-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollBehavior: "auto",
          }}
        >
          <div className="flex gap-3 sm:gap-4 px-6 sm:px-10 w-max">
            {thumbnails.map((thumb) => (
              <div
                key={thumb.id}
                className="shrink-0 rounded-lg overflow-hidden border border-border bg-white/[0.04] w-[130px] sm:w-[160px] aspect-[9/16]"
              >
                <img
                  src={thumb.src}
                  alt=""
                  draggable={false}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}