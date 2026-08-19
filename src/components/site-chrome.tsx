"use client";

import { useEffect, useRef } from "react";
import { CountdownBanner } from "@/components/countdown-banner";
import { Header } from "@/components/header";

function syncChromeHeight(el: HTMLElement) {
  document.documentElement.style.setProperty(
    "--site-chrome-height",
    `${el.offsetHeight}px`,
  );
}

export function SiteChrome() {
  const chromeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = chromeRef.current;
    if (!el) return;

    syncChromeHeight(el);

    const observer = new ResizeObserver(() => syncChromeHeight(el));
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={chromeRef}
        className="fixed inset-x-0 top-0 z-50 transform-gpu"
      >
        <Header />
        <CountdownBanner />
      </div>
      <div
        className="shrink-0"
        style={{ height: "var(--site-chrome-height, 7.75rem)" }}
        aria-hidden
      />
    </>
  );
}
