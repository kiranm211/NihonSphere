import { notFound } from "next/navigation";
import { KanjiLearnButton } from "@/components/features/kanji-learn-button";
import { Card } from "@/components/ui/card";
import { kanji } from "@/lib/content";

export default async function KanjiDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = kanji.find((entry) => entry.id === id);

  if (!item) {
    notFound();
  }

  return (
    <Card title={`Kanji ${item.character}`}>
      <div className="space-y-2">
        <p><span className="font-semibold">Meaning:</span> {item.meaning}</p>
        <p><span className="font-semibold">Onyomi:</span> {item.onyomi}</p>
        <p><span className="font-semibold">Kunyomi:</span> {item.kunyomi}</p>
        <p><span className="font-semibold">Stroke order:</span> {item.strokeOrderHint}</p>
        <p><span className="font-semibold">SRS interval:</span> review in {item.srsIntervalDays} day(s)</p>
      </div>
      <div className="mt-4">
        <h2 className="mb-2 text-lg font-semibold">Example sentences</h2>
        <ul className="space-y-2 text-sm">
          {item.examples.map((example) => (
            <li key={example.jp} className="rounded-lg bg-slate-100 p-2 dark:bg-slate-800">
              <p>{example.jp}</p>
              <p className="text-slate-600 dark:text-slate-300">{example.en}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <KanjiLearnButton kanjiId={item.id} />
      </div>
    </Card>
  );
}
