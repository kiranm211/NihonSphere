import { NextResponse } from "next/server";
import { quizQuestions } from "@/lib/content";

export async function GET() {
  return NextResponse.json({ questions: quizQuestions });
}
