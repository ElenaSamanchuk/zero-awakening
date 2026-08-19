"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { streamers } from "@/lib/content";

export function StreamersSection() {
  return (
    <section id="streamers" className="border-y border-white/8 bg-surface py-24 sm:py-32 defer-paint">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">
              Коллаб
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Стримеры на премьере
            </h2>
            <p className="mt-4 text-muted-foreground">
              Карточки в стиле GCA Studio — наведите, чтобы увидеть цифры и роль
              в ивенте.
            </p>
          </div>
          <p className="font-mono text-sm text-neon">12 ПАРТНЁРОВ · ЭКСКЛЮЗИВ</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {streamers.map((streamer, index) => (
            <StreamerCard key={streamer.name} streamer={streamer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Streamer = (typeof streamers)[number];

function StreamerCard({
  streamer,
  index,
}: {
  streamer: Streamer;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ y: 24 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor
      className="interactive group relative overflow-hidden rounded-2xl border border-white/8 bg-surface-elevated p-6 transition-colors hover:border-neon/40"
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-neon/5 transition-transform duration-500 group-hover:scale-150" />

      <div className="flex items-start justify-between">
        <div>
          <p className="font-display text-xl font-bold">{streamer.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{streamer.role}</p>
        </div>
        <span className="rounded-full border border-neon/30 bg-neon/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-neon">
          {streamer.tag}
        </span>
      </div>

      <motion.div
        animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/8 pt-6">
          <Stat label="Twitch" value={streamer.twitch} />
          <Stat label="Пик" value={streamer.peak} />
          <Stat label="YouTube" value={streamer.youtube} />
        </div>
      </motion.div>

      <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-neon">
        {hovered ? "● LIVE на премьере" : "Наведите для статистики"}
      </p>
    </motion.article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 font-display text-lg font-bold text-neon">{value}</p>
    </div>
  );
}
