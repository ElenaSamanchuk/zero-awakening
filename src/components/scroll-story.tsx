"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { loreChapters } from "@/lib/content";

export function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="story" ref={containerRef} className="relative">
      <div className="sticky top-[var(--site-chrome-height,7.75rem)] flex h-[calc(100vh-var(--site-chrome-height,7.75rem))] items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">
            Scroll-story
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
            История ZERO раскрывается при прокрутке
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              {loreChapters.map((chapter, index) => {
                const start = index / loreChapters.length;
                const end = (index + 1) / loreChapters.length;
                return (
                  <ChapterIndicator
                    key={chapter.id}
                    chapter={chapter}
                    index={index}
                    scrollYProgress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                );
              })}
            </div>

            <div className="relative min-h-[320px]">
              {loreChapters.map((chapter, index) => {
                const start = index / loreChapters.length;
                const end = (index + 1) / loreChapters.length;
                return (
                  <ChapterPanel
                    key={chapter.id}
                    chapter={chapter}
                    scrollYProgress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: `${loreChapters.length * 60}vh` }} />
    </section>
  );
}

type Chapter = (typeof loreChapters)[number];

function ChapterIndicator({
  chapter,
  index,
  scrollYProgress,
  start,
  end,
}: {
  chapter: Chapter;
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0.3, 1, 1, 0.3],
  );
  const x = useTransform(scrollYProgress, [start, end], [0, 8]);

  return (
    <motion.div style={{ opacity, x }} className="flex items-center gap-4">
      <span
        className="font-mono text-sm font-bold"
        style={{ color: chapter.accent }}
      >
        {chapter.id}
      </span>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          {chapter.label}
        </p>
        <p className="font-display text-lg font-semibold sm:text-xl">
          {chapter.title}
        </p>
      </div>
      <div className="ml-auto hidden h-px flex-1 bg-white/10 sm:block" />
      <span className="hidden font-mono text-xs text-muted-foreground sm:block">
        0{index + 1}
      </span>
    </motion.div>
  );
}

function ChapterPanel({
  chapter,
  scrollYProgress,
  start,
  end,
}: {
  chapter: Chapter;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.08, end - 0.08, end],
    [0, 1, 1, 0],
  );
  const y = useTransform(scrollYProgress, [start, end], [40, -40]);
  const scale = useTransform(
    scrollYProgress,
    [start, start + 0.08, end - 0.08, end],
    [0.95, 1, 1, 0.95],
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center"
    >
      <div
        className="w-full rounded-3xl border p-8 sm:p-12"
        style={{
          borderColor: `${chapter.accent}33`,
          background: `linear-gradient(135deg, ${chapter.accent}08, transparent)`,
        }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: chapter.accent }}>
          {chapter.label}
        </p>
        <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
          {chapter.title}
        </h3>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {chapter.text}
        </p>
      </div>
    </motion.div>
  );
}
