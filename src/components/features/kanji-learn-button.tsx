"use client";

import { useLearningStore } from "@/store/useLearningStore";

export function KanjiLearnButton({ kanjiId }: { kanjiId: string }) {
  const learned = useLearningStore((state) => Boolean(state.kanjiLearned[kanjiId]));
  const markKanjiLearned = useLearningStore((state) => state.markKanjiLearned);

  return (
    <button
      type="button"
      onClick={() => markKanjiLearned(kanjiId)}
      className="rounded-lg bg-rose-500 px-3 py-2 text-sm font-medium text-white hover:bg-rose-400 disabled:opacity-80"
      disabled={learned}
    >
      {learned ? "Learned" : "Mark as learned"}
    </button>
  );
}
