"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { LEADS_KEY, whatsappLink } from "@/lib/site";
import { Reveal } from "./Reveal";

export interface Lead {
  id: string;
  name: string;
  service: string;
  budget: string;
  contact: string;
  status: "new" | "contacted" | "won";
  at: number;
}

export function LeadForm() {
  const { t } = useLanguage();
  const f = t.aiForm.fallback;
  const [done, setDone] = useState(false);
  const [v, setV] = useState({ name: "", service: f.serviceOptions[0], budget: "", contact: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const lead: Lead = { id: crypto.randomUUID(), ...v, status: "new", at: Date.now() };
    try {
      const all: Lead[] = JSON.parse(localStorage.getItem(LEADS_KEY) || "[]");
      localStorage.setItem(LEADS_KEY, JSON.stringify([lead, ...all]));
    } catch {}
    window.open(
      whatsappLink(`${v.name} — ${v.service} — ${v.budget} — ${v.contact}`),
      "_blank",
      "noopener"
    );
    setDone(true);
  }

  const input =
    "w-full rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm outline-none focus:border-accent transition-colors";

  return (
    <section id="quick" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-xl px-6">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3 text-center">
            {t.aiForm.eyebrow}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center text-balance">
            {t.aiForm.title}
          </h2>
          <p className="mt-3 text-sm text-text-mute text-center">{t.aiForm.sub}</p>
        </Reveal>
        <Reveal delay={150}>
          {done ? (
            <div className="mt-10 glass-surface rounded-2xl p-8 text-center">
              <CheckCircle2 className="mx-auto text-accent" size={40} />
              <h3 className="mt-4 font-display text-xl font-semibold">{t.aiForm.submitted.title}</h3>
              <p className="mt-2 text-sm text-text-mute">{t.aiForm.submitted.body}</p>
              <button onClick={() => setDone(false)} className="mt-5 text-xs text-accent underline">
                {t.aiForm.restart}
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-10 glass-surface rounded-2xl p-6 sm:p-8 space-y-4">
              <label className="block text-xs text-text-mute">
                {f.name}
                <input required className={`${input} mt-1.5`} placeholder={f.namePlaceholder}
                  value={v.name} onChange={(e) => setV({ ...v, name: e.target.value })} />
              </label>
              <label className="block text-xs text-text-mute">
                {f.serviceLabel}
                <select className={`${input} mt-1.5`} value={v.service}
                  onChange={(e) => setV({ ...v, service: e.target.value })}>
                  {f.serviceOptions.map((o) => <option key={o} className="bg-bg">{o}</option>)}
                </select>
              </label>
              <label className="block text-xs text-text-mute">
                {f.budgetLabel}
                <input className={`${input} mt-1.5`} placeholder={f.budgetPlaceholder}
                  value={v.budget} onChange={(e) => setV({ ...v, budget: e.target.value })} />
              </label>
              <label className="block text-xs text-text-mute">
                {f.contactLabel}
                <input required className={`${input} mt-1.5`} placeholder={f.contactPlaceholder}
                  value={v.contact} onChange={(e) => setV({ ...v, contact: e.target.value })} />
              </label>
              <button type="submit"
                className="mercury-border shine-sweep w-full inline-flex items-center justify-center gap-2 rounded-full bg-surface px-6 py-3.5 text-sm font-semibold hover:bg-surface-high transition-colors">
                <Send size={16} /> {f.submit}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
