import { JlptLevel, KanjiItem, Lesson, QuizQuestion, VocabularyItem } from "@/types";

export const levels: JlptLevel[] = ["N5", "N4", "N3", "N2", "N1"];

export const lessons: Lesson[] = [
  {
    id: "n5-particles-wa-ga",
    level: "N5",
    title: "Particles は vs が",
    summary: "Understand topic vs subject marking in daily Japanese.",
    content:
      "は marks the topic, while が often marks the grammatical subject or emphasizes new information. Compare: 私は学生です vs 誰が学生ですか。",
    estimatedMinutes: 15,
  },
  {
    id: "n5-desu-masu",
    level: "N5",
    title: "です / ます Polite Form",
    summary: "Build polite present and past sentences.",
    content:
      "Use です for nouns/adjectives and ます for verbs in polite speech. Past forms: でした and ました. Negative forms: ではありません and ません.",
    estimatedMinutes: 12,
  },
];

export const kanji: KanjiItem[] = [
  {
    id: "n5-kanji-1",
    level: "N5",
    character: "日",
    onyomi: "ニチ / ジツ",
    kunyomi: "ひ / か",
    meaning: "day, sun",
    strokeOrderHint: "4 strokes (placeholder for animation)",
    examples: [
      { jp: "日本", en: "Japan" },
      { jp: "毎日勉強します。", en: "I study every day." },
    ],
    srsIntervalDays: 1,
  },
  {
    id: "n5-kanji-2",
    level: "N5",
    character: "学",
    onyomi: "ガク",
    kunyomi: "まなぶ",
    meaning: "study, learning",
    strokeOrderHint: "8 strokes (placeholder for animation)",
    examples: [
      { jp: "学生", en: "student" },
      { jp: "日本語を学びます。", en: "I learn Japanese." },
    ],
    srsIntervalDays: 2,
  },
];

export const vocabulary: VocabularyItem[] = [
  { id: "n5-vocab-1", level: "N5", word: "友達", reading: "ともだち", meaning: "friend" },
  { id: "n5-vocab-2", level: "N5", word: "学校", reading: "がっこう", meaning: "school" },
  { id: "n5-vocab-3", level: "N5", word: "食べる", reading: "たべる", meaning: "to eat" },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    level: "N5",
    type: "kanji-reading",
    prompt: "What is the reading of 学校?",
    options: ["がっこう", "がくこう", "がっこ", "こうがく"],
    answerIndex: 0,
    explanation: "学校 is read がっこう.",
  },
  {
    id: "q2",
    level: "N5",
    type: "vocab-meaning",
    prompt: "What does 友達 mean?",
    options: ["teacher", "friend", "family", "station"],
    answerIndex: 1,
    explanation: "友達 means friend.",
  },
  {
    id: "q3",
    level: "N5",
    type: "grammar-usage",
    prompt: "Choose the correct polite sentence:",
    options: ["私は学生だ。", "私は学生です。", "私は学生ます。", "私は学生ない。"],
    answerIndex: 1,
    explanation: "です is the polite copula for noun sentences.",
  },
];

export const levelMeta: Record<JlptLevel, { title: string; description: string }> = {
  N5: { title: "Foundation", description: "Essential grammar, first core kanji, and everyday vocabulary." },
  N4: { title: "Beginner+", description: "Expand grammar patterns and reading confidence." },
  N3: { title: "Intermediate", description: "Bridge everyday fluency and exam complexity." },
  N2: { title: "Upper Intermediate", description: "Master advanced comprehension and nuance." },
  N1: { title: "Advanced", description: "Refine near-native exam-level language control." },
};
