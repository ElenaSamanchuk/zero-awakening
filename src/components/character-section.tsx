"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { character } from "@/lib/content";

export function CharacterSection() {
  return (
    <section id="character" className="relative overflow-hidden py-24 sm:py-32 defer-paint">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neon/[0.02] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <CharacterVisual />

          <motion.div
            initial={{ x: 24 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">
              Персонаж
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
              {character.codename}
            </h2>
            <p className="mt-2 text-xl text-muted-foreground">{character.role}</p>

            <blockquote className="mt-8 border-l-2 border-neon pl-6 text-lg italic text-foreground/90">
              «{character.quote}»
            </blockquote>

            <p className="mt-8 leading-relaxed text-muted-foreground">
              {character.lore}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {character.traits.map((trait) => (
                <span
                  key={trait}
                  className="interactive rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition-colors hover:border-neon/40 hover:bg-neon/5"
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CharacterVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rafRef.current) return;

    const clientX = e.clientX;
    const clientY = e.clientY;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      x.set((clientX - rect.left) / rect.width - 0.5);
      y.set((clientY - rect.top) / rect.height - 0.5);
    });
  };

  const handleLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = 0;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ x: -24 }}
      whileInView={{ x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-[#08080f] shadow-[0_0_80px_rgba(184,255,60,0.08)] will-change-transform"
      >
        <Image
          src="/characters/zero.png"
          alt={`Персонаж ${character.codename}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 50vw"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/40 via-transparent to-[#050508]/20" />
        <div className="scanlines pointer-events-none absolute inset-0 opacity-20" />

        <div className="pointer-events-none absolute inset-4 rounded-2xl border border-white/10" />
        <div className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-neon/60" />
        <div className="pointer-events-none absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-neon/60" />
        <div className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-neon/60" />
        <div className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-neon/60" />

        <div className="absolute left-4 top-4 rounded-full border border-neon/30 bg-black/50 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-neon backdrop-blur-sm">
          ID: 00
        </div>

        <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground/80 backdrop-blur-sm">
          ● ONLINE
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon">
                {character.origin}
              </p>
              <p className="mt-2 font-display text-3xl font-bold">{character.codename}</p>
            </div>
            <div className="hidden text-right sm:block">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Threat lvl
              </p>
              <p className="font-display text-xl font-bold text-accent-hot">S+</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {character.traits.map((trait) => (
              <div
                key={trait}
                className="rounded-lg border border-white/10 bg-black/40 px-2 py-2 text-center backdrop-blur-sm"
              >
                <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  {trait}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border border-neon/20" />
      <div className="pointer-events-none absolute -left-6 top-1/2 hidden -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.5em] text-white/10 [writing-mode:vertical-rl] lg:block">
        NEON RIFT // CLASSIFIED
      </div>
    </motion.div>
  );
}
