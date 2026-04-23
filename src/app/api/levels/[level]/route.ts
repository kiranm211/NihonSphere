import { NextResponse } from "next/server";
import { kanji, lessons, vocabulary } from "@/lib/content";

export async function GET(_: Request, { params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  const normalized = level.toUpperCase();

  return NextResponse.json({
    level: normalized,
    lessons: lessons.filter((item) => item.level === normalized),
    kanji: kanji.filter((item) => item.level === normalized),
    vocabulary: vocabulary.filter((item) => item.level === normalized),
  });
}
