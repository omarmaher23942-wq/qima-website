"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

const sections = [
  { id: "services", key: "services" as const },
  { id: "work", key: "work" as const },
  { id: "process", key: "process" as const },
  { id: "about", key: "about" as const },
];

export function Navbar() {
  const { t, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <nav
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          borderRadius: 16,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: scrolled ? 12 : 16,
          paddingBottom: scrolled ? 12 : 16,
          transition: "padding 0.4s ease",
          background:
            "linear-gradient(180deg, rgba(12,24,21,0.7) 0%, rgba(12,24,21,0.5) 100%)",
          backdropFilter: "blur(24px) saturate(180%) brightness(1.08)",
          WebkitBackdropFilter: "blur(24px) saturate(180%) brightness(1.08)",
          border: "1px solid rgba(168,181,169,0.14)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
        }}
      >
        <div className="flex items-center justify-between">
          <a href="#top" className="relative inline-flex items-center">
            <div
              className="relative"
              style={{ height: 44, width: 130, flexShrink: 0 }}
            >
              <Image
                src="/qima_logo.png"
                alt="QIMA"
                fill
                priority
                className="object-contain"
                style={{ objectPosition: "left center" }}
              />
            </div>
          </a>

          <div className="hidden md:flex items-center gap-9">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm text-text-mute hover:text-text transition-colors duration-200"
              >
                {t.nav[s.key]}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="hidden sm:inline-flex items-center rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-text-mute hover:text-text hover:border-accent/40 transition-colors duration-200"
              aria-label="Switch language"
            >
              {t.nav.langToggle}
            </button>
            
            <a
              href="#contact"
              className="mercury-border shine-sweep hidden sm:inline-flex items-center rounded-full bg-surface px-5 py-2 text-xs font-semibold text-text hover:bg-surface-high transition-colors duration-200"
            >
              {t.nav.contact}
            </a>
            
            <button
              className="md:hidden text-text p-1.5"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                {mobileOpen ? (
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M3 6h18M3 12h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-4 pb-2 flex flex-col gap-4 border-t border-border pt-4">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-text-mute hover:text-text transition-colors"
              >
                {t.nav[s.key]}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={toggleLang}
                className="inline-flex items-center rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-text-mute"
              >
                {t.nav.langToggle}
              </button>
              
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-bg"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}