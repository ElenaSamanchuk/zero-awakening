"use client";

import { memo, useEffect, useState } from "react";
import { site } from "@/lib/content";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: string): TimeLeft {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const TimerUnit = memo(function TimerUnit({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="text-center">
      <p className="font-display text-lg font-bold tabular-nums sm:text-xl">
        {String(value).padStart(2, "0")}
      </p>
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </div>
  );
});

export function CountdownBanner() {
  const [time, setTime] = useState<TimeLeft | null>(null);
  const [tickets, setTickets] = useState<number>(site.ticketsLeft);

  useEffect(() => {
    setTime(getTimeLeft(site.eventDateISO));

    const interval = window.setInterval(() => {
      setTime(getTimeLeft(site.eventDateISO));
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTickets((t) => (t > 89 ? t - 1 : t));
    }, 45000);

    return () => window.clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="border-b border-white/8 bg-neon/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-widest text-neon sm:text-xs">
          До премьеры
          <span className="mx-2 text-white/20">·</span>
          <span className="text-foreground/90">билетов: {tickets}</span>
        </p>
        <div className="flex gap-3 sm:gap-4">
          <TimerUnit label="дней" value={time.days} />
          <TimerUnit label="часов" value={time.hours} />
          <TimerUnit label="мин" value={time.minutes} />
          <TimerUnit label="сек" value={time.seconds} />
        </div>
      </div>
    </div>
  );
}
