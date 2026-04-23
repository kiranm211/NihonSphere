"use client";

import { useLearningStore } from "@/store/useLearningStore";

export function FavoriteButton({ itemId }: { itemId: string }) {
  const isFavorite = useLearningStore((state) => Boolean(state.favorites[itemId]));
  const toggleFavorite = useLearningStore((state) => state.toggleFavorite);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(itemId)}
      className="rounded-lg border border-slate-300 px-2 py-1 text-xs hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
    >
      {isFavorite ? "★ Favorited" : "☆ Favorite"}
    </button>
  );
}
