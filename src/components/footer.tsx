import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-12 defer-paint">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-lg font-bold">
            {site.name}
            <span className="text-neon">.</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            NEON RIFT · Демо креативного лендинга
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 · Сделано для ивентов и продвижения персонажей
        </p>
      </div>
    </footer>
  );
}
