"use client";

import { useLearningStore } from "@/store/useLearningStore";

export function ThemeToggle() {
  const darkMode = useLearningStore((state) => state.darkMode);
  const toggleDarkMode = useLearningStore((state) => state.toggleDarkMode);

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      {darkMode ? "Light" : "Dark"}
    </button>
  );
}
