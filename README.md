# QIMA — Creative Production Agency Website

A premium, bilingual (English/Arabic) marketing website for **QIMA**, a video editing, thumbnail design, and script direction agency serving creators, brands, and companies worldwide.

**Live preview:** _deployed via Vercel — link added after deployment_

---

## About this project

This is a custom-built Next.js site designed and developed end-to-end — no templates, no site builders. Every section, animation, and content piece was built from scratch to match QIMA's brand: a deep-green, premium aesthetic with a custom-modeled 3D signature mark, word-by-word reveal animations, and a fully bilingual experience with real RTL support for Arabic (not machine-translated — every string is hand-written in both languages).

### What's built so far

- Custom glassmorphic navbar with real backdrop blur
- Hero section with a bespoke animated 3D brand mark
- Services, process, and "why QIMA" sections with scroll-triggered reveals
- A vertical video gallery (YouTube-backed, fully custom player — no visible YouTube branding, controls, or suggested videos)
- Video testimonials from real clients
- A horizontally scrolling trust bar of real client and partner logos
- Full English ⇄ Arabic language toggle with persisted preference and RTL layout switching
- Sticky WhatsApp contact button and direct WhatsApp CTA

### Coming next

- An AI-driven lead capture form (not a chatbot — a fast, sequential Q&A form written dynamically by an LLM, with an automatic fallback to a static form if the AI is unavailable)
- A password-protected admin dashboard to view, filter, and manage submitted leads
- Additional portfolio content and refinements based on client feedback

---

## Tech stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** GSAP, native scroll-triggered reveals
- **Video:** YouTube IFrame API wrapped in a fully custom player UI
- **Planned backend:** Supabase (lead storage), Groq API (AI-driven form)
- **Deployment:** Vercel

---

## Running locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

---

## Contact

Interested in working together or want a site like this built for your brand?

**Reach out directly on WhatsApp: [+20 109 432 1957](https://wa.me/201094321957)**

---

Built by Omar — full-stack developer and founder.