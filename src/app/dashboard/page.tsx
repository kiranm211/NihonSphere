import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SearchPanel } from "@/components/features/search-panel";

const goals = [
  { label: "Kanji", done: 8, target: 12 },
  { label: "Vocabulary", done: 16, target: 20 },
  { label: "Lessons", done: 1, target: 2 },
];

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card title="Current Progress — N5">
        <div className="space-y-3">
          <ProgressBar value={42} />
          <p className="text-sm text-slate-600 dark:text-slate-300">42% complete · 6 day streak</p>
          <Link href="/levels/N5" className="inline-block rounded-lg bg-rose-500 px-3 py-2 text-sm font-medium text-white hover:bg-rose-400">
            Resume learning
          </Link>
        </div>
      </Card>

      <Card title="Daily Goals">
        <ul className="space-y-3 text-sm">
          {goals.map((goal) => {
            const percent = Math.round((goal.done / goal.target) * 100);
            return (
              <li key={goal.label}>
                <p className="mb-1 flex justify-between"><span>{goal.label}</span><span>{goal.done}/{goal.target}</span></p>
                <ProgressBar value={percent} />
              </li>
            );
          })}
        </ul>
      </Card>

      <Card title="Search Kanji / Vocabulary">
        <SearchPanel />
      </Card>

      <Card title="Resume Section">
        <p className="text-sm text-slate-600 dark:text-slate-300">Continue your last activity: Particle lesson and Kanji 日 review.</p>
      </Card>
    </div>
  );
}
