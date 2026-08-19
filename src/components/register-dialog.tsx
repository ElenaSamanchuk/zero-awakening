"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";

export function RegisterDialog({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const close = () => {
    setOpen(false);
    setSubmitted(false);
  };

  return (
    <>
      <span onClick={() => setOpen(true)} className="inline-flex cursor-pointer">
        {trigger}
      </span>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Закрыть"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={close}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-surface-elevated p-8 shadow-2xl"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h3 className="font-display text-2xl font-bold">
                  Регистрация на премьеру
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Как на bloggerconf — модальное окно с формой и ограниченным
                  предложением.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="nickname" className="text-sm font-medium">
                      Никнейм
                    </label>
                    <input
                      id="nickname"
                      required
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-neon/50"
                      placeholder="streamer_name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-neon/50"
                      placeholder="you@email.com"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-xl bg-neon py-6 font-bold text-primary-foreground hover:bg-neon/90"
                  >
                    Зарегистрироваться
                  </Button>
                </form>
              </>
            ) : (
              <div className="py-6 text-center">
                <p className="font-display text-4xl">✓</p>
                <h3 className="mt-4 font-display text-xl font-bold">
                  Вы в списке!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Напоминание придёт на {email} перед стартом {site.eventDate}.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
}
