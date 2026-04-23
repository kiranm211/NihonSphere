import Link from "next/link";
import { Card } from "@/components/ui/card";
import { levels } from "@/lib/content";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-gradient-to-r from-rose-500 to-orange-400 px-6 py-10 text-white">
        <p className="text-sm uppercase tracking-widest text-white/90">JLPT N5 → N1</p>
        <h1 className="mt-2 text-4xl font-bold">NihonSphere</h1>
        <p className="mt-3 max-w-2xl text-white/90">
          Modern Japanese learning with structured lessons, kanji SRS, quizzes, and progress tracking in one clean workspace.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/dashboard" className="rounded-lg bg-white px-4 py-2 font-semibold text-slate-900">
            Go to dashboard
          </Link>
          <Link href="/levels/N5" className="rounded-lg border border-white/70 px-4 py-2 font-semibold">
            Start N5
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card title="Structured Curriculum">
          <p className="text-sm text-slate-600 dark:text-slate-300">Level-based lessons, vocabulary, kanji, and quizzes aligned to JLPT expectations.</p>
        </Card>
        <Card title="Smart Practice">
          <p className="text-sm text-slate-600 dark:text-slate-300">Kanji review uses a lightweight spaced repetition interval to reinforce retention.</p>
        </Card>
        <Card title="Future-ready">
          <p className="text-sm text-slate-600 dark:text-slate-300">Built for scale with modular routes, API endpoints, and PostgreSQL-ready schema.</p>
        </Card>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Levels</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
          {levels.map((level) => (
            <Link
              key={level}
              href={`/levels/${level}`}
              className="rounded-xl border border-slate-200 bg-white p-4 text-center font-semibold hover:border-rose-400 dark:border-slate-800 dark:bg-slate-900"
            >
              {level}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
