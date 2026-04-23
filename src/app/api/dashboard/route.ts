import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    level: "N5",
    streak: 6,
    progress: {
      lessons: { completed: 1, total: 2 },
      kanji: { completed: 1, total: 2 },
      quizzes: { completed: 1, total: 3 },
    },
    dailyGoals: {
      kanji: { done: 8, target: 12 },
      vocab: { done: 16, target: 20 },
      lessons: { done: 1, target: 2 },
    },
    resume: {
      type: "kanji",
      id: "n5-kanji-1",
      label: "Continue reviewing 日",
    },
  });
}
