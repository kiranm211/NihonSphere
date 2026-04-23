import Link from "next/link";
import { notFound } from "next/navigation";
import { FavoriteButton } from "@/components/features/favorite-button";
import { Card } from "@/components/ui/card";
import { kanji, lessons, levelMeta, levels, vocabulary } from "@/lib/content";
import { JlptLevel } from "@/types";

export default async function LevelPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  const normalized = level.toUpperCase() as JlptLevel;

  if (!levels.includes(normalized)) {
    notFound();
  }

  const lessonItems = lessons.filter((item) => item.level === normalized);
  const kanjiItems = kanji.filter((item) => item.level === normalized);
  const vocabItems = vocabulary.filter((item) => item.level === normalized);

  return (
    <div className="space-y-4">
      <header>
        <p className="text-sm text-rose-500">{normalized}</p>
        <h1 className="text-3xl font-bold">{levelMeta[normalized].title}</h1>
        <p className="text-slate-600 dark:text-slate-300">{levelMeta[normalized].description}</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <Card title="Lessons">
          <ul className="space-y-2 text-sm">
            {lessonItems.length === 0 ? <li>Content coming soon.</li> : lessonItems.map((lesson) => (
              <li key={lesson.id} className="flex items-center justify-between rounded-lg bg-slate-100 p-2 dark:bg-slate-800">
                <Link href={`/lessons/${lesson.id}`} className="font-medium hover:text-rose-500">{lesson.title}</Link>
                <FavoriteButton itemId={lesson.id} />
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Kanji">
          <ul className="space-y-2 text-sm">
            {kanjiItems.length === 0 ? <li>Content coming soon.</li> : kanjiItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between rounded-lg bg-slate-100 p-2 dark:bg-slate-800">
                <Link href={`/kanji/${item.id}`} className="font-medium hover:text-rose-500">{item.character} · {item.meaning}</Link>
                <FavoriteButton itemId={item.id} />
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card title="Vocabulary">
        <ul className="space-y-2 text-sm">
          {vocabItems.length === 0 ? <li>Content coming soon.</li> : vocabItems.map((item) => (
            <li key={item.id} className="rounded-lg bg-slate-100 p-2 dark:bg-slate-800">{item.word} ({item.reading}) — {item.meaning}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
