import { notFound } from "next/navigation";
import { LessonCompleteButton } from "@/components/features/lesson-complete-button";
import { Card } from "@/components/ui/card";
import { lessons } from "@/lib/content";

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lesson = lessons.find((item) => item.id === id);

  if (!lesson) {
    notFound();
  }

  return (
    <Card title={lesson.title}>
      <p className="mb-3 text-sm text-slate-600 dark:text-slate-300">{lesson.summary}</p>
      <p className="mb-4 leading-7">{lesson.content}</p>
      <p className="mb-4 text-xs text-slate-500">Estimated time: {lesson.estimatedMinutes} minutes</p>
      <LessonCompleteButton lessonId={lesson.id} />
    </Card>
  );
}
