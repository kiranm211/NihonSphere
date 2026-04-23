export type JlptLevel = "N5" | "N4" | "N3" | "N2" | "N1";

export type Lesson = {
  id: string;
  level: JlptLevel;
  title: string;
  summary: string;
  content: string;
  estimatedMinutes: number;
};

export type KanjiItem = {
  id: string;
  level: JlptLevel;
  character: string;
  onyomi: string;
  kunyomi: string;
  meaning: string;
  strokeOrderHint: string;
  examples: Array<{ jp: string; en: string }>;
  srsIntervalDays: number;
};

export type VocabularyItem = {
  id: string;
  level: JlptLevel;
  word: string;
  reading: string;
  meaning: string;
};

export type QuizQuestion = {
  id: string;
  level: JlptLevel;
  type: "kanji-reading" | "vocab-meaning" | "grammar-usage";
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type LevelProgress = {
  lessonsCompleted: number;
  lessonsTotal: number;
  kanjiLearned: number;
  kanjiTotal: number;
  quizScoreAverage: number;
};
