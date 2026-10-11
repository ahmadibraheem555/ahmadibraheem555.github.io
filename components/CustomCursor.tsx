"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

type Mode = "default" | "hover" | "text";

// Elements that should make the cursor react (clickable things and cards).
const HOVER_SELECTOR =
  'a[href], button:not(:disabled), [role="button"], summary, label[for], .cursor-pointer, [data-cursor="hover"]';

// Text fields keep the native I-beam cursor, so the custom one hides there.
const TEXT_SELECTOR = 'input, textarea, select, [contenteditable="true"]';

// Hides the native cursor only while the custom one is active.
const CURSOR_CSS = `
html.has-custom-cursor, html.has-custom-cursor * { cursor: none !important; }
html.has-custom-cursor input,
html.has-custom-cursor textarea,
html.has-custom-cursor select,
html.has-custom-cursor [contenteditable="true"] { cursor: auto !important; }
`;

export default function CustomCursor() {
  const reduce = useReducedMotion();

  // Only enable on devices with a real mouse (no phones or tablets).
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<Mode>("default");
  const [pressed, setPressed] = useState(false);
  const seen = useRef(false);

  // Dot follows instantly, ring follows with spring lag.
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const spring = reduce
    ? { stiffness: 1000, damping: 80, mass: 0.1 }
    : { stiffness: 150, damping: 17, mass: 0.7 };
  const ringX = useSpring(x, spring);
  const ringY = useSpring(y, spring);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      if (!seen.current) {
        // First move: place the ring under the pointer instead of flying in.
        ringX.jump(e.clientX);
        ringY.jump(e.clientY);
        seen.current = true;
      }
      setVisible(true);

      const target = e.target;
      if (!(target instanceof Element)) return;
      setMode(
        target.closest(TEXT_SELECTOR)
          ? "text"
          : target.closest(HOVER_SELECTOR)
            ? "hover"
            : "default",
      );
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => {
      setVisible(false);
      setPressed(false);
    };
    const onEnter = () => setVisible(true);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("blur", onLeave);
    root.addEventListener("mouseleave", onLeave);
    root.addEventListener("mouseenter", onEnter);

    return () => {
      root.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("blur", onLeave);
      root.removeEventListener("mouseleave", onLeave);
      root.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled, x, y, ringX, ringY]);

  if (!enabled) return null;

  const shown = visible && mode !== "text";
  const hover = mode === "hover";

  return (
    <>
      <style>{CURSOR_CSS}</style>

      {/* Outer glass ring (lags behind the pointer) */}
      <motion.div
        aria-hidden="true"
        style={{ x: ringX, y: ringY, marginLeft: -20, marginTop: -20 }}
        animate={{
          scale: pressed ? 0.8 : hover ? 1.9 : 1,
          opacity: shown ? 1 : 0,
          borderColor: hover
            ? "rgba(0,242,254,0.75)"
            : "rgba(255,255,255,0.25)",
          backgroundColor: hover
            ? "rgba(0,242,254,0.12)"
            : "rgba(255,255,255,0.05)",
          boxShadow: hover
            ? "0 0 32px rgba(0,242,254,0.45), inset 0 0 14px rgba(0,242,254,0.25)"
            : "0 0 14px rgba(139,92,246,0.18)",
        }}
        transition={{
          opacity: { duration: 0.15 },
          default: { type: "spring", stiffness: 260, damping: 22 },
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full border backdrop-blur-[3px]"
      />

      {/* Inner dot (follows instantly) */}
      <motion.div
        aria-hidden="true"
        style={{ x, y, marginLeft: -4, marginTop: -4 }}
        animate={{
          scale: pressed ? 1.6 : hover ? 0.5 : 1,
          opacity: shown ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.15 },
          default: { type: "spring", stiffness: 400, damping: 25 },
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(0,242,254,0.8)]"
      />
    </>
  );
}
