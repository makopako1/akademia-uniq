"use client";

import { CalendarPlus, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCHEDULE_WEEK, SCHEDULE_MONTH } from "@/lib/site";

const TZ = "Europe/Warsaw";
const WEEKDAY: Record<string, number> = { SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6 };

const DESC_WEEKLY =
  "Cotygodniowa sesja polskiej społeczności UNIQ. Link do spotkania pojawia się na grupie Telegram UNIQ.";
const DESC_MONTHLY =
  "Comiesięczne szkolenie UNIQ na Zoomie. Link i dokładna godzina — na grupie Telegram UNIQ oraz kanale UNIQ – News.";

const pad = (n: number) => String(n).padStart(2, "0");
const fmtLocal = (d: Date) =>
  `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
const fmtDate = (d: Date) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;

/** Next date (>= now) that falls on the given weekday, at hh:mm. */
function nextWeekday(byday: string, hh: number, mm: number): Date {
  const now = new Date();
  const d = new Date(now);
  d.setHours(hh, mm, 0, 0);
  let diff = (WEEKDAY[byday] - d.getDay() + 7) % 7;
  if (diff === 0 && d.getTime() < now.getTime()) diff = 7;
  d.setDate(d.getDate() + diff);
  return d;
}

/** Next date (>= today) with the given day-of-month. */
function nextMonthday(day: number): Date {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let d = new Date(now.getFullYear(), now.getMonth(), day);
  if (d.getTime() < today.getTime()) d = new Date(now.getFullYear(), now.getMonth() + 1, day);
  return d;
}

function gcalUrl(params: Record<string, string>, dates: string, recur: string) {
  const q = [
    "action=TEMPLATE",
    ...Object.entries(params).map(([k, v]) => `${k}=${encodeURIComponent(v)}`),
    `dates=${dates}`, // keep the "/" literal — Google expects START/END
    `recur=${encodeURIComponent(recur)}`,
  ].join("&");
  return `https://calendar.google.com/calendar/render?${q}`;
}

export type CalEvent =
  | { kind: "weekly"; title: string; byday: string; time: string; durationMin: number; where: string }
  | { kind: "monthly"; title: string; day: number; where: string };

function buildGoogle(ev: CalEvent): string {
  const title = `UNIQ · ${ev.title}`;
  if (ev.kind === "weekly") {
    const [hh, mm] = ev.time.split(":").map(Number);
    const start = nextWeekday(ev.byday, hh, mm);
    const end = new Date(start.getTime() + ev.durationMin * 60000);
    return gcalUrl(
      { text: title, ctz: TZ, details: DESC_WEEKLY, location: ev.where },
      `${fmtLocal(start)}/${fmtLocal(end)}`,
      `RRULE:FREQ=WEEKLY;BYDAY=${ev.byday}`,
    );
  }
  const start = nextMonthday(ev.day);
  const end = new Date(start.getTime() + 86400000);
  return gcalUrl(
    { text: title, details: DESC_MONTHLY, location: ev.where },
    `${fmtDate(start)}/${fmtDate(end)}`,
    `RRULE:FREQ=MONTHLY;BYMONTHDAY=${ev.day}`,
  );
}

export function GCalButton({
  event,
  label = "Dodaj do kalendarza",
  className,
}: {
  event: CalEvent;
  label?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.open(buildGoogle(event), "_blank", "noopener,noreferrer")}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-3.5 py-2 text-[13px] font-medium text-muted transition hover:border-white/25 hover:text-ink",
        className,
      )}
    >
      <CalendarPlus className="h-4 w-4" />
      {label}
    </button>
  );
}

/* ---------- ICS (all events, any calendar app) ---------- */

const escIcs = (s: string) =>
  s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

function utcStamp(): string {
  const d = new Date();
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(
    d.getUTCMinutes(),
  )}${pad(d.getUTCSeconds())}Z`;
}

const VTIMEZONE = [
  "BEGIN:VTIMEZONE",
  "TZID:Europe/Warsaw",
  "BEGIN:DAYLIGHT",
  "TZOFFSETFROM:+0100",
  "TZOFFSETTO:+0200",
  "TZNAME:CEST",
  "DTSTART:19700329T020000",
  "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU",
  "END:DAYLIGHT",
  "BEGIN:STANDARD",
  "TZOFFSETFROM:+0200",
  "TZOFFSETTO:+0100",
  "TZNAME:CET",
  "DTSTART:19701025T030000",
  "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU",
  "END:STANDARD",
  "END:VTIMEZONE",
];

function buildIcs(): string {
  const stamp = utcStamp();
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//UNIQ//Akademia Startowa//PL",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Harmonogram UNIQ",
    ...VTIMEZONE,
  ];

  SCHEDULE_WEEK.forEach((w, i) => {
    const [hh, mm] = w.time.split(":").map(Number);
    const start = nextWeekday(w.byday, hh, mm);
    const end = new Date(start.getTime() + w.durationMin * 60000);
    lines.push(
      "BEGIN:VEVENT",
      `UID:uniq-week-${i}-${w.byday}@akademia.uniq`,
      `DTSTAMP:${stamp}`,
      `SUMMARY:${escIcs(`UNIQ · ${w.title}`)}`,
      `DTSTART;TZID=Europe/Warsaw:${fmtLocal(start)}`,
      `DTEND;TZID=Europe/Warsaw:${fmtLocal(end)}`,
      `RRULE:FREQ=WEEKLY;BYDAY=${w.byday}`,
      `DESCRIPTION:${escIcs(DESC_WEEKLY)}`,
      `LOCATION:${escIcs(w.where)}`,
      "END:VEVENT",
    );
  });

  SCHEDULE_MONTH.forEach((m, i) => {
    const day = parseInt(m.day, 10);
    const start = nextMonthday(day);
    const end = new Date(start.getTime() + 86400000);
    lines.push(
      "BEGIN:VEVENT",
      `UID:uniq-month-${i}-${day}@akademia.uniq`,
      `DTSTAMP:${stamp}`,
      `SUMMARY:${escIcs(`UNIQ · ${m.title}`)}`,
      `DTSTART;VALUE=DATE:${fmtDate(start)}`,
      `DTEND;VALUE=DATE:${fmtDate(end)}`,
      `RRULE:FREQ=MONTHLY;BYMONTHDAY=${day}`,
      `DESCRIPTION:${escIcs(DESC_MONTHLY)}`,
      "END:VEVENT",
    );
  });

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export function DownloadIcsButton({ className }: { className?: string }) {
  function download() {
    const blob = new Blob([buildIcs()], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "harmonogram-uniq.ics";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }
  return (
    <button
      type="button"
      onClick={download}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-ink transition hover:border-white/25",
        className,
      )}
    >
      <Download className="h-4 w-4" />
      Pobierz wszystkie (.ics)
    </button>
  );
}
