import { NextResponse } from "next/server";
import { kanji, vocabulary } from "@/lib/content";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = (url.searchParams.get("q") ?? "").trim().toLowerCase();

  if (!q) {
    return NextResponse.json({ results: [] });
  }

  const results = [
    ...kanji
      .filter((item) => `${item.character}${item.meaning}${item.onyomi}${item.kunyomi}`.toLowerCase().includes(q))
      .map((item) => ({ id: item.id, type: "kanji", label: `${item.character} — ${item.meaning}` })),
    ...vocabulary
      .filter((item) => `${item.word}${item.reading}${item.meaning}`.toLowerCase().includes(q))
      .map((item) => ({ id: item.id, type: "vocab", label: `${item.word} (${item.reading}) — ${item.meaning}` })),
  ];

  return NextResponse.json({ results: results.slice(0, 10) });
}
