"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/content";

export function StatsSection() {
  return (
    <section id="stats" className="border-y border-white/8 bg-surface py-24 sm:py-32 defer-paint">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">
            Цифры
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Масштаб, который чувствуется
          </h2>
          <p className="mt-4 text-muted-foreground">
            Как на GCA Studio — статистика, которая продаёт масштаб ивента и
            доверие к персонажу.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-surface-elevated p-8 transition-colors hover:border-neon/30"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-neon/5 transition-transform group-hover:scale-150" />
              <p className="font-display text-5xl font-extrabold tracking-tight text-neon sm:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-snug text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
