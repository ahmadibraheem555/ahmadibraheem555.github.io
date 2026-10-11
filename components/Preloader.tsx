"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

const LOAD_DURATION = 1.8; // seconds for 0% -> 100%
const HOLD_AT_100 = 300; // ms to hold on 100% before exiting

export default function Preloader() {
  const reduce = useReducedMotion();
  const [loading, setLoading] = useState(true);

  const progress = useMotionValue(0);
  const scaleX = useTransform(progress, [0, 100], [0, 1]);
  const percent = useTransform(progress, (v) => `${Math.round(v)}%`);

  // Run the 0% -> 100% count, then hand over to the exit animation.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const controls = animate(progress, 100, {
      duration: reduce ? 0.6 : LOAD_DURATION,
      ease: [0.65, 0, 0.35, 1],
      onComplete: () => {
        timer = setTimeout(() => setLoading(false), reduce ? 100 : HOLD_AT_100);
      },
    });
    return () => {
      controls.stop();
      if (timer) clearTimeout(timer);
    };
  }, [progress, reduce]);

  // Lock page scroll only while the preloader is visible.
  useEffect(() => {
    if (!loading) return;
    const html = document.documentElement;
    const prevBody = document.body.style.overflow;
    const prevHtml = html.style.overflow;
    document.body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBody;
      html.style.overflow = prevHtml;
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          role="status"
          aria-live="polite"
          aria-label="Loading Dev.Ahmad portfolio"
          initial={{ opacity: 1 }}
          exit={
            reduce
              ? { opacity: 0 }
              : { opacity: 0, scale: 1.08, filter: "blur(10px)" }
          }
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0a0d12]"
        >
          {/* ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[60%] top-[58%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[100px]"
          />

          <div className="relative flex flex-col items-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 12, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.04em" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl font-bold text-white sm:text-6xl"
              style={{
                textShadow:
                  "0 0 24px rgba(0,242,254,0.55), 0 0 64px rgba(0,242,254,0.25)",
              }}
            >
              Dev<span className="text-cyan-400">.</span>Ahmad
            </motion.h1>

            {/* glass progress bar */}
            <div
              aria-hidden="true"
              className="mt-8 h-1.5 w-56 overflow-hidden rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl sm:w-64"
            >
              <motion.div
                style={{ scaleX, transformOrigin: "left" }}
                className="h-full w-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_14px_rgba(0,242,254,0.7)]"
              />
            </div>

            <motion.span
              aria-hidden="true"
              className="mt-3 font-mono text-xs tracking-[0.25em] text-zinc-400"
            >
              {percent}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
