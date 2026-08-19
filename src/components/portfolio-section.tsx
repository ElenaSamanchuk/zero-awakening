"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/lib/content";

export function PortfolioSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="portfolio" className="py-24 sm:py-32 defer-paint">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">
            Портфолио
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Кейсы, которые задали тон
          </h2>
          <p className="mt-4 text-muted-foreground">
            Карусель проектов как на GCA — каждый кейс с охватом, пиком и
            описанием.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {portfolio.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(index)}
                className={`interactive shrink-0 rounded-2xl border px-5 py-4 text-left transition-all ${
                  active === index
                    ? "border-neon/50 bg-neon/5"
                    : "border-white/8 bg-surface hover:border-white/15"
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-neon">
                  {item.brand}
                </p>
                <p className="mt-2 font-display text-sm font-semibold leading-snug sm:text-base">
                  {item.title}
                </p>
              </button>
            ))}
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/8 bg-surface-elevated">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ x: 40 }}
                animate={{ x: 0 }}
                exit={{ x: -40 }}
                transition={{ duration: 0.35 }}
                className="flex h-full flex-col justify-between p-8 sm:p-12"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-neon">
                    {portfolio[active].brand}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-bold sm:text-4xl">
                    {portfolio[active].title}
                  </h3>
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    {portfolio[active].description}
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-8">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">Охват</p>
                    <p className="mt-1 font-display text-2xl font-bold text-neon">
                      {portfolio[active].reach}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">Пик</p>
                    <p className="mt-1 font-display text-2xl font-bold text-accent-hot">
                      {portfolio[active].peak}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-neon/5 via-transparent to-accent-hot/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
