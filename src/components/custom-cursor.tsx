"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 35 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 35 });
  const rafRef = useRef(0);
  const pendingRef = useRef({ x: -100, y: -100, target: null as EventTarget | null });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const flush = () => {
      rafRef.current = 0;
      const { x, y, target } = pendingRef.current;
      cursorX.set(x);
      cursorY.set(y);

      if (target instanceof HTMLElement) {
        setHovering(
          !!target.closest(".interactive, a, button, [data-cursor]"),
        );
      }

      setVisible(true);
    };

    const move = (e: MouseEvent) => {
      pendingRef.current = { x: e.clientX, y: e.clientY, target: e.target };

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(flush);
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.body.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("custom-cursor-active");
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[300] hidden mix-blend-difference will-change-transform md:block"
        style={{ x: springX, y: springY }}
      >
        <motion.div
          animate={{
            width: hovering ? 48 : 12,
            height: hovering ? 48 : 12,
            x: hovering ? -24 : -6,
            y: hovering ? -24 : -6,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="rounded-full border-2 border-white bg-neon/20"
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[299] hidden will-change-transform md:block"
        style={{ x: cursorX, y: cursorY }}
      >
        <div className="h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon" />
      </motion.div>
    </>
  );
}
