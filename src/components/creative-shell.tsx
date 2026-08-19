"use client";

import { CustomCursor } from "@/components/custom-cursor";
import { PreloaderGate } from "@/components/preloader";

export function CreativeShell({ children }: { children: React.ReactNode }) {
  return (
    <PreloaderGate>
      <CustomCursor />
      {children}
    </PreloaderGate>
  );
}
