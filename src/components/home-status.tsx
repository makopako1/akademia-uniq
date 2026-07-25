"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Radio, ArrowRight, ArrowUpRight, PartyPopper, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCHEDULE_WEEK, SCHEDULE_MONTH, CHECKLIST } from "@/lib/site";
import { useChecklist } from "@/lib/use-checklist";

/* ============================================================
   Sessions (weekly + monthly) → next-session countdown
   ============================================================ */

const WEEKDAY: Record<string, number> = { SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6 };

type Sess = {
  title: string;
  presenter: string;
  where: string;
  hh: number;
  mm: number;
  durationMin: number;
  when: string;
  byday?: string;
  monthDay?: number;
  approx?: boolean;
};

const SESSIONS: Sess[] = [
  ...SCHEDULE_WEEK.map((w): Sess => {
    const [hh, mm] = w.time.split(":").map(Number);
    return {
      title: w.title,
      presenter: w.presenter,
      where: w.where,
      hh,
      mm,
      durationMin: w.durationMin,
      byday: w.byday,
      when: `${w.day} · ${w.time}`,
    };
  }),
  ...SCHEDULE_MONTH.map((m): Sess => ({
    title: m.title,
    presenter: "Zespół UNIQ + goście",
    where: "Zoom",
    hh: 20,
    mm: 0,
    durationMin: 90,
    monthDay: parseInt(m.day, 10),
    approx: true,
    when: `${m.day}. dnia miesiąca · ~20:00`,
  })),
];

function nextStart(s: Sess, now: Date): Date {
  if (s.byday) {
    const d = new Date(now);
    d.setHours(s.hh, s.mm, 0, 0);
    let diff = (WEEKDAY[s.byday] - d.getDay() + 7) % 7;
    if (diff === 0 && d.getTime() <= now.getTime()) diff = 7;
    d.setDate(d.getDate() + diff);
    return d;
  }
  const day = s.monthDay!;
  let d = new Date(now.getFullYear(), now.getMonth(), day, s.hh, s.mm, 0, 0);
  if (d.getTime() <= now.getTime()) d = new Date(now.getFullYear(), now.getMonth() + 1, day, s.hh, s.mm, 0, 0);
  return d;
}

function isLive(s: Sess, now: Date): boolean {
  if (s.byday ? now.getDay() !== WEEKDAY[s.byday] : now.getDate() !== s.monthDay) return false;
  const start = new Date(now);
  start.setHours(s.hh, s.mm, 0, 0);
  return now.getTime() >= start.getTime() && now.getTime() < start.getTime() + s.durationMin * 60000;
}

function fmt(ms: number): string {
  if (ms < 0) ms = 0;
  const t = Math.floor(ms / 1000);
  const d = Math.floor(t / 86400);
  const h = Math.floor((t % 86400) / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  if (d > 0) return `${d}d ${h}h ${m}m`;
  if (h > 0) return `${h}h ${m}m ${String(s).padStart(2, "0")}s`;
  return `${m}m ${String(s).padStart(2, "0")}s`;
}

function SessionCountdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const nowDate = new Date(now ?? 0);
  const live = now != null ? SESSIONS.find((s) => isLive(s, nowDate)) : undefined;
  let picked = live;
  let start = nowDate;
  if (!live && now != null) {
    let bestT = Infinity;
    for (const s of SESSIONS) {
      const t = nextStart(s, nowDate).getTime();
      if (t < bestT) {
        bestT = t;
        picked = s;
      }
    }
    start = new Date(bestT);
  }

  return (
    <Link
      href="/harmonogram"
      className="glass edge-highlight group flex flex-col rounded-2xl p-5 transition hover:border-white/20"
    >
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange/70" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange" />
        </span>
        <span className="eyebrow">Najbliższa sesja na żywo</span>
        <Radio className="ml-auto h-4 w-4 text-muted transition group-hover:text-ink" />
      </div>

      {picked ? (
        <div className="mt-3 flex items-end justify-between gap-3">
          <div className="min-w-0">
            <div className="truncate font-semibold text-ink">{picked.title}</div>
            <div className="mt-0.5 truncate text-sm text-muted">{picked.presenter}</div>
            <div className="mt-0.5 font-mono text-[11px] text-faint">{picked.when}</div>
          </div>
          <div className="shrink-0 text-right">
            {live ? (
              <span className="font-mono text-sm font-semibold text-orange">na żywo teraz</span>
            ) : (
              <>
                <div className="font-mono text-lg font-semibold text-chrome">za {fmt(start.getTime() - (now ?? 0))}</div>
                <div className="text-[11px] text-muted">{picked.where}</div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="mt-3 h-[52px] animate-pulse rounded-lg bg-white/[0.04]" />
      )}
    </Link>
  );
}

/* ============================================================
   Next step (based on 48h checklist progress)
   ============================================================ */

function NextStepCard() {
  const { done, ready, count, total, pct } = useChecklist();
  const next = CHECKLIST.find((i) => !done.has(i.id));

  const allDone = ready && !next;

  const body = (
    <>
      <div className="flex items-center gap-2">
        {allDone ? (
          <PartyPopper className="h-4 w-4 text-emerald" />
        ) : (
          <Compass className="h-4 w-4 text-violet" />
        )}
        <span className="eyebrow">{allDone ? "Gotowe!" : "Twój następny krok"}</span>
        <span className="ml-auto font-mono text-xs tabular-nums text-muted">
          {count}/{total}
        </span>
      </div>

      <div className="mt-3 flex-1">
        <div className="line-clamp-2 font-semibold leading-snug text-ink">
          {allDone ? "Masz solidny start — do zobaczenia na sesjach 🚀" : next?.label}
        </div>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet via-cyan to-emerald transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-ink">
          {allDone ? "Harmonogram" : "Przejdź"}
          {next?.external ? (
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          ) : (
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          )}
        </span>
      </div>
    </>
  );

  const cls = "glass edge-highlight group flex flex-col rounded-2xl p-5 transition hover:border-white/20";
  const href = allDone ? "/harmonogram" : next?.href ?? "/spolecznosc";

  if (next?.external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {body}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {body}
    </Link>
  );
}

export function HomeStatus() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <NextStepCard />
      <SessionCountdown />
    </div>
  );
}
