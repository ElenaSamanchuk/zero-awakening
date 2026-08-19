"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RegisterDialog } from "@/components/register-dialog";
import { Button } from "@/components/ui/button";
import { marqueeItems, site } from "@/lib/content";
import { assetPath } from "@/lib/utils";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[110vh] flex-col justify-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="noise-overlay pointer-events-none absolute inset-0" />
      <div className="scanlines pointer-events-none absolute inset-0" />

      <motion.div
        style={{ y: yBg }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden will-change-transform"
      >
        <p className="font-display text-[28vw] font-black leading-none tracking-tighter text-white/[0.03] select-none">
          ZERO
        </p>
      </motion.div>

      <div className="pointer-events-none absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-neon/10 blur-3xl transform-gpu" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-accent-hot/10 blur-3xl transform-gpu" />

      <motion.div
        style={{ opacity, scale }}
        className="relative flex flex-1 flex-col justify-center will-change-transform"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-neon sm:text-sm">
              Премьера персонажа · {site.eventDate}
            </p>

            <motion.div style={{ y: yText }} className="will-change-transform">
              <h1 className="font-display text-[clamp(3.5rem,14vw,9rem)] font-extrabold leading-[0.85] tracking-tighter text-foreground">
                {site.name}
              </h1>
              <h2 className="mt-2 font-display text-[clamp(2rem,8vw,5rem)] font-extrabold leading-none tracking-tighter text-neon">
                {site.tagline.toUpperCase()}
              </h2>
            </motion.div>

            <p className="mt-8 max-w-xl text-lg text-muted-foreground sm:text-xl">
              Кинетичный ивент в духе{" "}
              <span className="text-foreground">bloggerconf</span> и{" "}
              <span className="text-foreground">GCA Studio</span> — scroll-story,
              коллаб-стримеры, глитч-эстетика и полное раскрытие героя NEON RIFT.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <RegisterDialog
                trigger={
                  <Button
                    size="lg"
                    className="interactive h-14 rounded-full bg-neon px-8 text-base font-bold text-primary-foreground hover:bg-neon/90 glow-neon"
                  >
                    Зарегистрироваться на премьеру
                  </Button>
                }
              />
              <a
                href="#story"
                className="interactive inline-flex h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-base font-medium backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Смотреть историю
              </a>
            </div>

            <div className="mt-16 flex flex-wrap gap-8 text-sm text-muted-foreground">
              {[
                { label: "Дата", value: site.eventDate },
                { label: "Локация", value: site.venue },
                { label: "Формат", value: site.eventCity },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-mono text-xs uppercase tracking-widest text-neon">
                    {item.label}
                  </p>
                  <p className="mt-1 font-medium text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <CharacterOrb />
        </div>
      </motion.div>

      <div className="relative mt-16 overflow-hidden border-y border-white/8 bg-surface py-4">
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="mx-8 font-display text-2xl font-bold uppercase tracking-wider text-white/20 sm:text-4xl"
            >
              {item}
              <span className="mx-8 text-neon">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CharacterOrb() {
  return (
    <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
      <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-neon/20" />
      <div className="absolute inset-4 animate-spin-reverse rounded-full border border-white/10" />
      <div className="animate-float relative h-56 w-56 overflow-hidden rounded-full border border-white/20 bg-background/50 shadow-[0_0_60px_rgba(184,255,60,0.15)] sm:h-72 sm:w-72">
        <Image
          src={assetPath("/characters/zero.png")}
          alt="ZERO"
          fill
          className="object-cover object-top"
          sizes="288px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-neon/20" />
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-neon/30 bg-background/90 px-4 py-1 font-mono text-[10px] uppercase tracking-widest text-neon backdrop-blur-sm">
        Сигнал активен
      </div>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-neon animate-pulse-glow"
          style={{
            top: `${20 + i * 25}%`,
            left: `${10 + i * 30}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}
