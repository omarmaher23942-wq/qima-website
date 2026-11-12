import { timingSafeEqual } from "crypto";

export function isAdmin(req: Request) {
  const pw = process.env.ADMIN_PASSWORD;
  const got = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!pw || !got) return false;
  const a = Buffer.from(pw), b = Buffer.from(got);
  return a.length === b.length && timingSafeEqual(a, b);
}
