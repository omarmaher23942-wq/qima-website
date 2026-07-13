"use client";

import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

const WHATSAPP_NUMBER = "201200713679";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 text-center">
        <Reveal direction="fade">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            {t.contact.eyebrow}
          </p>
        </Reveal>
        <Reveal direction="spring-up" delay={100} distance={55}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-balance max-w-2xl mx-auto leading-tight">
            {t.contact.title}
          </h2>
        </Reveal>
        <Reveal direction="up" delay={250}>
          <p className="mt-5 text-base text-text-mute max-w-md mx-auto leading-relaxed">
            {t.contact.sub}
          </p>
        </Reveal>
        <Reveal direction="up" delay={380}>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-sm font-semibold text-white hover:brightness-110 transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-whatsapp/20"
          >
            <WhatsAppIcon />
            {t.contact.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.79 14.14c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.02.24-3.44-.72-2.9-1.16-4.77-4.13-4.92-4.32-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .9 2.14.07.15.12.32.02.51-.1.19-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11 1 2.05 1.31 2.34 1.46.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.29.39-.24.65-.15.27.1 1.69.8 1.98.94.29.15.48.22.55.34.07.13.07.72-.17 1.4z" />
    </svg>
  );
}