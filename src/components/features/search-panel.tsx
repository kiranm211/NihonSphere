"use client";

import { useMemo, useState } from "react";
import { kanji, vocabulary } from "@/lib/content";

export function SearchPanel() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return [];
    }

    const kanjiHits = kanji
      .filter((item) => `${item.character}${item.meaning}${item.onyomi}${item.kunyomi}`.toLowerCase().includes(q))
      .map((item) => ({ id: item.id, label: `${item.character} — ${item.meaning}` }));

    const vocabHits = vocabulary
      .filter((item) => `${item.word}${item.reading}${item.meaning}`.toLowerCase().includes(q))
      .map((item) => ({ id: item.id, label: `${item.word} (${item.reading}) — ${item.meaning}` }));

    return [...kanjiHits, ...vocabHits].slice(0, 6);
  }, [query]);

  return (
    <div className="space-y-3">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search kanji or vocabulary"
        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-rose-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
      />
      {results.length > 0 && (
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {results.map((result) => (
            <li key={result.id} className="rounded-lg bg-slate-100 px-3 py-2 dark:bg-slate-800">
              {result.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
