import { NextResponse } from "next/server";
import { db, schema } from "@/db";

const clip = (v: unknown, n: number) => String(v ?? "").trim().slice(0, n);

export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (!b) return NextResponse.json({ error: "bad request" }, { status: 400 });
  if (b.website) return NextResponse.json({ ok: true }); // honeypot
  const row = {
    name: clip(b.name, 120),
    service: clip(b.service, 160),
    budget: clip(b.budget, 120),
    contact: clip(b.contact, 200),
    message: clip(b.message, 1000),
    lang: b.lang === "ar" ? "ar" : "en",
  };
  if (!row.name || !row.contact || !row.service)
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  const [saved] = await db.insert(schema.leads).values(row).returning({ id: schema.leads.id });
  return NextResponse.json({ ok: true, id: saved.id });
}
