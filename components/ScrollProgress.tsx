"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { whatsappLink } from "@/lib/site";

export function ScrollProgress() {
  const { lang } = useLanguage();
  const [p, setP] = useState(0);

  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="fixed top-0 inset-x-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-accent-deep via-accent to-white/80"
        style={{ transform: `scaleX(${p})` }}
      />
      <div className="fixed bottom-5 end-5 z-40 flex flex-col gap-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={lang === "ar" ? "للأعلى" : "Back to top"}
          className={`flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/80 backdrop-blur text-text-mute hover:text-text transition-all duration-300 ${
            p > 0.15 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
          }`}
        >
          <ArrowUp size={18} />
        </button>
        <a
          href={whatsappLink(lang === "ar" ? "مرحبا قمة، عندي مشروع" : "Hi QIMA, I have a project")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 hover:scale-110 transition-transform"
        >
          <MessageCircle size={22} />
        </a>
      </div>
    </>
  );
}
