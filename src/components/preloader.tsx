"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DURATION_MS = 900;

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const started = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - started;
      const next = Math.min(100, Math.round((elapsed / DURATION_MS) * 100));

      setProgress(next);

      if (next >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 120);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#050508]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-neon">
          NEON RIFT
        </p>

        <h1 className="mt-6 font-display text-6xl font-black tracking-tighter text-foreground sm:text-8xl">
          ZERO
        </h1>

        <p className="mt-6 font-mono text-sm text-muted-foreground">
          Загрузка сигнала...
        </p>

        <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-white/10 sm:w-56">
          <div
            className="h-full bg-neon transition-[width] duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function PreloaderGate({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!ready && <Preloader onComplete={() => setReady(true)} />}
      </AnimatePresence>
      {ready ? children : null}
    </>
  );
}
