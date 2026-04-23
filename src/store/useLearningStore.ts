"use client";

import { create } from "zustand";

type LearningState = {
  darkMode: boolean;
  streak: number;
  lessonProgress: Record<string, boolean>;
  kanjiLearned: Record<string, boolean>;
  favorites: Record<string, boolean>;
  toggleDarkMode: () => void;
  markLessonDone: (id: string) => void;
  markKanjiLearned: (id: string) => void;
  toggleFavorite: (id: string) => void;
};

export const useLearningStore = create<LearningState>((set) => ({
  darkMode: false,
  streak: 6,
  lessonProgress: {},
  kanjiLearned: {},
  favorites: {},
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  markLessonDone: (id) =>
    set((state) => ({
      lessonProgress: { ...state.lessonProgress, [id]: true },
    })),
  markKanjiLearned: (id) =>
    set((state) => ({
      kanjiLearned: { ...state.kanjiLearned, [id]: true },
    })),
  toggleFavorite: (id) =>
    set((state) => ({
      favorites: { ...state.favorites, [id]: !state.favorites[id] },
    })),
}));
