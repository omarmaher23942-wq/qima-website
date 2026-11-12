import { NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";
import { db, schema } from "@/db";
import { isAdmin } from "@/lib/admin-auth";

const deny = () => NextResponse.json({ error: "unauthorized" }, { status: 401 });

export async function GET(req: Request) {
  if (!isAdmin(req)) return deny();
  const rows = await db.select().from(schema.leads).orderBy(desc(schema.leads.createdAt));
  return NextResponse.json({ leads: rows });
}

export async function PATCH(req: Request) {
  if (!isAdmin(req)) return deny();
  const { id, status } = await req.json();
  if (!["new", "contacted", "won"].includes(status)) return NextResponse.json({ error: "bad status" }, { status: 400 });
  await db.update(schema.leads).set({ status }).where(eq(schema.leads.id, Number(id)));
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  if (!isAdmin(req)) return deny();
  const { id } = await req.json();
  await db.delete(schema.leads).where(eq(schema.leads.id, Number(id)));
  return NextResponse.json({ ok: true });
}
