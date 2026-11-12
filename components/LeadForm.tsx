"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { whatsappLink } from "@/lib/site";
import { Reveal } from "./Reveal";

export function LeadForm() {
  const { t, lang } = useLanguage();
  const [plan, setPlan] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [hp, setHp] = useState("");
  const f = t.aiForm.fallback;
  const [done, setDone] = useState(false);
  const [v, setV] = useState({ name: "", service: f.serviceOptions[0], budget: "", contact: "" });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const [, p] = await Promise.all([
      fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...v, lang, website: hp }) }).catch(() => null),
      fetch("/api/plan", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...v, lang }) }).then((r) => r.json()).catch(() => ({})),
    ]);
    setPlan(p?.plan ?? null);
    setBusy(false);
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
              {plan && <p className="mt-4 whitespace-pre-line rounded-xl border border-border p-4 text-start text-sm text-text-mute">{plan}</p>}
              <a href={whatsappLink(`${v.name} — ${v.service} — ${v.budget} — ${v.contact}`)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-whatsapp underline">WhatsApp →</a>
              <button onClick={() => setDone(false)} className="mt-5 text-xs text-accent underline">
                {t.aiForm.restart}
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-10 glass-surface rounded-2xl p-6 sm:p-8 space-y-4">
              <input tabIndex={-1} autoComplete="off" aria-hidden className="hidden" value={hp} onChange={(e) => setHp(e.target.value)} />
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
              <button type="submit" disabled={busy}
                className="mercury-border shine-sweep w-full inline-flex items-center justify-center gap-2 rounded-full bg-surface px-6 py-3.5 text-sm font-semibold hover:bg-surface-high transition-colors">
                <Send size={16} /> {busy ? "…" : f.submit}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
