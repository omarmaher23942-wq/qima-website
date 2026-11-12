"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Users, TrendingUp, CheckCircle2, Download, Trash2, ArrowLeft } from "lucide-react";
import type { LeadRow } from "@/db/schema";
type Lead = Omit<LeadRow, "createdAt"> & { createdAt: string };

const STATUSES = ["new", "contacted", "won"];

export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [pw, setPw] = useState("");
  const [authed, setAuthed] = useState(false);
  const [err, setErr] = useState("");
  const hdr = () => ({ "Content-Type": "application/json", Authorization: `Bearer ${sessionStorage.getItem("qima-admin") || ""}` });
  async function load() {
    const r = await fetch("/api/admin/leads", { headers: hdr() });
    if (!r.ok) { setAuthed(false); return false; }
    setLeads((await r.json()).leads); setAuthed(true); return true;
  }
  async function login(e: React.FormEvent) {
    e.preventDefault(); sessionStorage.setItem("qima-admin", pw);
    if (!(await load())) setErr("Wrong password");
  }
  async function patch(id: number, status: string) {
    setLeads((l) => l.map((x) => (x.id === id ? { ...x, status } : x)));
    await fetch("/api/admin/leads", { method: "PATCH", headers: hdr(), body: JSON.stringify({ id, status }) });
  }
  async function remove(id: number) {
    setLeads((l) => l.filter((x) => x.id !== id));
    await fetch("/api/admin/leads", { method: "DELETE", headers: hdr(), body: JSON.stringify({ id }) });
  }
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => { load(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      ...leads.map((l) => [l.name, l.service, l.budget, l.contact, l.status, l.createdAt])];
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

  if (!authed)
    return (
      <main className="relative z-10 mx-auto max-w-sm px-6 py-32" dir="ltr">
        <form onSubmit={login} className="glass-surface rounded-2xl p-8 space-y-4">
          <h1 className="font-display text-2xl font-bold">QIMA Admin</h1>
          <input type="password" autoFocus value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Password" className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-accent" />
          {err && <p className="text-xs text-red-400">{err}</p>}
          <button className="w-full rounded-full bg-accent py-3 text-sm font-semibold text-bg">Sign in</button>
        </form>
      </main>
    );

  return (
    <main className="relative z-10 mx-auto max-w-6xl px-6 py-10" dir="ltr">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-1 text-xs text-text-mute hover:text-text">
            <ArrowLeft size={14} /> Site
          </Link>
          <h1 className="font-display text-3xl font-bold mt-2">Leads Dashboard</h1>
          <p className="text-xs text-text-faint mt-1">Live data from Neon Postgres (Drizzle).</p>
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
                      <select value={l.status} onChange={(e) => patch(l.id, e.target.value)}
                        className="bg-bg border border-border rounded-full px-2 py-1">
                        {STATUSES.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </td>
                    <td><button aria-label="Delete" onClick={() => remove(l.id)} className="text-text-faint hover:text-red-400"><Trash2 size={14} /></button></td>
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
