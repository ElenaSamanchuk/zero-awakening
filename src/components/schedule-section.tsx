"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { halls, schedule } from "@/lib/content";

export function ScheduleSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeHall, setActiveHall] = useState<string | null>(null);

  const filtered = activeHall
    ? schedule.filter((item) => item.hall === activeHall)
    : schedule;

  const activeItem = filtered[activeIndex] ?? schedule[0];

  return (
    <section id="schedule" className="py-24 sm:py-32 defer-paint">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">
              Программа
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Расписание по залам
            </h2>
            <p className="mt-4 text-muted-foreground">
              Как на bloggerconf — фильтр по залам, клик на блок, детали справа
              со спикерами.
            </p>
          </div>
        </motion.div>

        <div className="mb-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              setActiveHall(null);
              setActiveIndex(0);
            }}
            className={`interactive rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
              activeHall === null
                ? "border-neon/50 bg-neon/10 text-neon"
                : "border-white/10 text-muted-foreground hover:border-white/20"
            }`}
          >
            Все залы
          </button>
          {halls.map((hall) => (
            <button
              key={hall}
              type="button"
              onClick={() => {
                setActiveHall(hall);
                setActiveIndex(0);
              }}
              className={`interactive rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                activeHall === hall
                  ? "border-neon/50 bg-neon/10 text-neon"
                  : "border-white/10 text-muted-foreground hover:border-white/20"
              }`}
            >
              {hall}
            </button>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-3">
            {filtered.map((item, index) => (
              <button
                key={`${item.title}-${item.time}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`interactive w-full rounded-2xl border p-6 text-left transition-all ${
                  activeIndex === index
                    ? "border-neon/50 bg-neon/5"
                    : "border-white/8 bg-surface hover:border-white/15"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-sm text-neon">{item.time}</span>
                    <h3 className="mt-2 font-display text-lg font-semibold sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {item.hall}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {item.track}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/8 bg-surface-elevated">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeItem.title}-${activeIndex}`}
                initial={{ y: 12 }}
                animate={{ y: 0 }}
                exit={{ y: -12 }}
                transition={{ duration: 0.3 }}
                className="flex h-full flex-col justify-between p-8"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-mono text-sm text-neon">{activeItem.time}</p>
                    <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {activeItem.hall}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                    {activeItem.title}
                  </h3>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    {activeItem.description}
                  </p>

                  <div className="mt-8">
                    <p className="font-mono text-xs uppercase tracking-widest text-neon">
                      Спикеры
                    </p>
                    <ul className="mt-4 space-y-2">
                      {activeItem.speakers.map((speaker) => (
                        <li
                          key={speaker}
                          className="flex items-center gap-3 text-sm text-foreground/90"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                          {speaker}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Трек: {activeItem.track}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
