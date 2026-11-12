@AGENTS.md

# QIMA — Project Guide

Bilingual (EN/AR, RTL) marketing site for QIMA, a video editing / thumbnail / script agency.
Live: https://qima-ten.vercel.app — deployed by Vercel from `main`.

## Stack
- Next.js 16.2 (App Router, **non-standard version — read `node_modules/next/dist/docs/` before using APIs**), React 19, TypeScript strict
- Tailwind CSS v4 (`@theme inline` tokens in `app/globals.css`), GSAP (hero text), lucide-react
- Vimeo Player SDK for reels, YouTube iframe for long-form, native `<audio>` for voice testimonials
- Declared but unused so far: Supabase, Groq (planned lead form + admin dashboard)

## Layout
- `app/layout.tsx` — fonts (Space Grotesk / Inter / IBM Plex Sans Arabic), metadata, `LanguageProvider`, `CosmicBackground`
- `app/page.tsx` — section order: Navbar, Hero, Services, WorkGallery, LongFormWork, WhyQima, ViewsShowcase, TrustMarquee, Testimonials, About, Process, Contact, Footer
- `components/` — one file per section plus helpers (`Reveal`, `CountUp`, `ShatterText`, `VideoPlayer`, `VoiceMessage`)
- `content/` — all copy (`copy.ts`, EN+AR must stay in sync), `videos.ts`, `testimonials.ts`, `trust.ts`
- `lib/language-context.tsx` — `useLanguage()` gives `{ lang, dir, t, toggleLang }`; persisted in localStorage key `qima-lang`
- `public/cc/` — logos, thumbnails, testimonial avatars + voice mp3s

## Conventions
- Brand: deep green (`--qima-*` vars), silver "mercury" accents, glass surfaces. Use tokens (`bg-surface`, `text-accent`), never raw hex in new code.
- Use logical properties (`start-`/`end-`, `ms-`/`me-`) so RTL works.
- Every user-facing string goes in `content/copy.ts` in BOTH languages.
- Respect `prefers-reduced-motion`.
- Client components need `"use client"`; keep sections self-contained.

## Known issues found in analysis
- `WorkGallery` headings are hardcoded English (not in `copy.ts`)
- Video modals lack Esc-to-close, focus trap, scroll lock
- Navbar has no active-section state, no skip link, no scroll progress
- `<img>` used instead of `next/image` in LongFormWork / ViewsShowcase
- `public/` contains macOS `._*` junk files
- Metadata lacks `metadataBase`, OG image, `lang`/`dir` SSR, favicon/theme-color
- `styled-jsx` in several components (fine, but avoid in new code)
- WhatsApp number is duplicated in Contact and Footer; README mentions a different number

## Commands
```bash
npm run dev     # local dev
npm run lint
npm run build   # must pass before pushing to main
```

## Workflow
Push to `main` triggers a Vercel deploy. Run `npm run build` first.
