import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(req: Request) {
  const key = process.env.Groq_API_KEY || process.env.GROQ_API_KEY;
  const { service, budget, lang } = await req.json().catch(() => ({}));
  if (!key || !service) return NextResponse.json({ plan: null });
  try {
    const groq = new Groq({ apiKey: key });
    const r = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      max_tokens: 900,
      messages: [
        { role: "system", content: `You are QIMA, a video editing/thumbnail/script agency. Reply in ${lang === "ar" ? "Egyptian Arabic" : "English"}. Give a 3-bullet starter plan (max 60 words total). No prices promises.` },
        { role: "user", content: `Service: ${String(service).slice(0, 160)}. Budget: ${String(budget || "n/a").slice(0, 100)}.` },
      ],
    });
    return NextResponse.json({ plan: r.choices[0]?.message?.content ?? null });
  } catch {
    return NextResponse.json({ plan: null });
  }
}
