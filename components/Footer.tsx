"use client";

import { useLanguage } from "@/lib/language-context";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/201200713679",
    icon: WhatsAppIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ahmed_maher_editor/?hl=en",
    icon: InstagramIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@ahmedmaher11-18",
    icon: YouTubeIcon,
  },
];

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div className="text-center sm:text-start">
            <span className="font-display text-base font-bold">
              QIMA<span className="text-accent">.</span>
            </span>
            <p className="mt-1 text-xs text-text-faint max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-mute hover:text-accent hover:border-accent/40 transition-colors duration-200"
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-border text-center sm:text-start">
          <p className="text-xs text-text-faint">
            © {year} QIMA. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.79 14.14c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.02.24-3.44-.72-2.9-1.16-4.77-4.13-4.92-4.32-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .9 2.14.07.15.12.32.02.51-.1.19-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11 1 2.05 1.31 2.34 1.46.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.29.39-.24.65-.15.27.1 1.69.8 1.98.94.29.15.48.22.55.34.07.13.07.72-.17 1.4z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 12s0-3.5-.45-5.2a2.9 2.9 0 00-2-2C18.9 4.3 12 4.3 12 4.3s-6.9 0-8.55.5a2.9 2.9 0 00-2 2C1 8.5 1 12 1 12s0 3.5.45 5.2a2.9 2.9 0 002 2c1.65.5 8.55.5 8.55.5s6.9 0 8.55-.5a2.9 2.9 0 002-2C23 15.5 23 12 23 12z" fillOpacity="0" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.75 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}