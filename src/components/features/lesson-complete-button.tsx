"use client";

import { useLearningStore } from "@/store/useLearningStore";

export function LessonCompleteButton({ lessonId }: { lessonId: string }) {
  const done = useLearningStore((state) => Boolean(state.lessonProgress[lessonId]));
  const markLessonDone = useLearningStore((state) => state.markLessonDone);

  return (
    <button
      type="button"
      onClick={() => markLessonDone(lessonId)}
      className="rounded-lg bg-rose-500 px-3 py-2 text-sm font-medium text-white hover:bg-rose-400 disabled:opacity-80"
      disabled={done}
    >
      {done ? "Completed" : "Mark lesson complete"}
    </button>
  );
}
