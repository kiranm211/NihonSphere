"use client";

import { useState } from "react";
import { quizQuestions } from "@/lib/content";
import { Card } from "@/components/ui/card";

export function QuizClient() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const question = quizQuestions[index];
  const isFinished = index >= quizQuestions.length;

  if (isFinished) {
    return (
      <Card title="Quiz Results">
        <p className="text-sm text-slate-600 dark:text-slate-300">You scored {score} / {quizQuestions.length}</p>
      </Card>
    );
  }

  const showAnswer = selected !== null;
  const isCorrect = selected === question.answerIndex;

  return (
    <Card title={`Question ${index + 1} of ${quizQuestions.length}`}>
      <p className="mb-4 font-medium">{question.prompt}</p>
      <div className="space-y-2">
        {question.options.map((option, optionIndex) => (
          <button
            key={option}
            type="button"
            disabled={showAnswer}
            onClick={() => {
              setSelected(optionIndex);
              if (optionIndex === question.answerIndex) {
                setScore((current) => current + 1);
              }
            }}
            className="block w-full rounded-xl border border-slate-300 px-3 py-2 text-left text-sm hover:bg-slate-100 disabled:cursor-default dark:border-slate-700 dark:hover:bg-slate-800"
          >
            {option}
          </button>
        ))}
      </div>
      {showAnswer && (
        <div className="mt-4 space-y-2 text-sm">
          <p className={isCorrect ? "text-emerald-600" : "text-rose-600"}>{isCorrect ? "Correct" : "Not quite"}</p>
          <p className="text-slate-600 dark:text-slate-300">{question.explanation}</p>
          <button
            type="button"
            onClick={() => {
              setSelected(null);
              setIndex((current) => current + 1);
            }}
            className="rounded-lg bg-rose-500 px-3 py-2 font-medium text-white hover:bg-rose-400"
          >
            Next
          </button>
        </div>
      )}
    </Card>
  );
}
