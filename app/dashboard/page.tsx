"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Users, TrendingUp, CheckCircle2, Download, Trash2, ArrowLeft } from "lucide-react";
import type { Lead } from "@/components/LeadForm";
import { LEADS_KEY } from "@/lib/site";

const STATUSES: Lead["status"][] = ["new", "contacted", "won"];

export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | Lead["status"]>("all");

  useEffect(() => {
    try {
      setLeads(JSON.parse(localStorage.getItem(LEADS_KEY) || "[]"));
    } catch {}
  }, []);

  function save(next: Lead[]) {
    setLeads(next);
    localStorage.setItem(LEADS_KEY, JSON.stringify(next));
  }

  const shown = useMemo(
    () =>
      leads.filter(
        (l) =>
          (filter === "all" || l.status === filter) &&
          `${l.name} ${l.service} ${l.contact}`.toLowerCase().includes(q.toLowerCase())
      ),
    [leads, q, filter]
  );

  const won = leads.filter((l) => l.status === "won").length;
  const byService = Object.entries(
    leads.reduce<Record<string, number>>((a, l) => ((a[l.service] = (a[l.service] || 0) + 1), a), {})
  ).sort((a, b) => b[1] - a[1]);
  const max = Math.max(1, ...byService.map((s) => s[1]));

  function exportCsv() {
    const rows = [["name", "service", "budget", "contact", "status", "date"],
      ...leads.map((l) => [l.name, l.service, l.budget, l.contact, l.status, new Date(l.at).toISOString()])];
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = "qima-leads.csv";
    a.click();
  }

  const kpis = [
    { icon: Users, label: "Total leads", value: leads.length },
    { icon: TrendingUp, label: "New", value: leads.filter((l) => l.status === "new").length },
    { icon: CheckCircle2, label: "Won", value: won },
    { icon: TrendingUp, label: "Conversion", value: leads.length ? `${Math.round((won / leads.length) * 100)}%` : "0%" },
  ];

  return (
    <main className="relative z-10 mx-auto max-w-6xl px-6 py-10" dir="ltr">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-1 text-xs text-text-mute hover:text-text">
            <ArrowLeft size={14} /> Site
          </Link>
          <h1 className="font-display text-3xl font-bold mt-2">Leads Dashboard</h1>
          <p className="text-xs text-text-faint mt-1">Stored in this browser (localStorage). Connect Supabase to sync across devices.</p>
        </div>
        <button onClick={exportCsv} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs hover:border-accent">
          <Download size={14} /> Export CSV
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="glass-surface rounded-2xl p-5">
            <k.icon size={18} className="text-accent" />
            <div className="font-display text-3xl font-bold mt-3">{k.value}</div>
            <div className="text-xs text-text-mute mt-1">{k.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_2fr] gap-4 mt-4">
        <div className="glass-surface rounded-2xl p-5">
          <h2 className="font-display font-semibold mb-4 text-sm">By service</h2>
          {byService.length === 0 && <p className="text-xs text-text-faint">No data yet</p>}
          {byService.map(([s, n]) => (
            <div key={s} className="mb-3">
              <div className="flex justify-between text-xs mb-1"><span className="text-text-mute">{s}</span><span>{n}</span></div>
              <div className="h-1.5 rounded-full bg-border"><div className="h-full rounded-full bg-accent" style={{ width: `${(n / max) * 100}%` }} /></div>
            </div>
          ))}
        </div>

        <div className="glass-surface rounded-2xl p-5">
          <div className="flex flex-wrap gap-3 mb-4">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…"
              className="flex-1 min-w-[140px] rounded-full border border-border bg-transparent px-4 py-2 text-xs outline-none focus:border-accent" />
            {(["all", ...STATUSES] as const).map((s) => (
              <button key={s} onClick={() => setFilter(s)}
                className={`rounded-full px-3 py-1.5 text-xs border ${filter === s ? "bg-accent text-bg border-accent" : "border-border text-text-mute"}`}>
                {s}
              </button>
            ))}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="text-text-faint text-left">
                <tr><th className="py-2">Name</th><th>Service</th><th>Budget</th><th>Contact</th><th>Status</th><th /></tr>
              </thead>
              <tbody>
                {shown.map((l) => (
                  <tr key={l.id} className="border-t border-border/60">
                    <td className="py-3 font-medium">{l.name}</td>
                    <td className="text-text-mute">{l.service}</td>
                    <td className="text-text-mute">{l.budget || "—"}</td>
                    <td className="text-text-mute">{l.contact}</td>
                    <td>
                      <select value={l.status} onChange={(e) => save(leads.map((x) => x.id === l.id ? { ...x, status: e.target.value as Lead["status"] } : x))}
                        className="bg-bg border border-border rounded-full px-2 py-1">
                        {STATUSES.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </td>
                    <td><button aria-label="Delete" onClick={() => save(leads.filter((x) => x.id !== l.id))} className="text-text-faint hover:text-red-400"><Trash2 size={14} /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            {shown.length === 0 && <p className="text-center text-xs text-text-faint py-8">No leads match.</p>}
          </div>
        </div>
      </div>
    </main>
  );
}
