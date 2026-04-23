"use client";

import { useEffect } from "react";
import { useLearningStore } from "@/store/useLearningStore";

export function ThemeProvider() {
  const darkMode = useLearningStore((state) => state.darkMode);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return null;
}
