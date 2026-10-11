"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const DOTS = Array.from({ length: 20 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: (i * 53 + 7) % 100,
  delay: (i % 7) * 0.7,
  size: 2 + (i % 3),
  violet: i % 3 === 0,
}));

const GRID =
  "[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]";

/** Fixed glass-grid background; the glow orbs drift as the page scrolls. */
export default function Background() {
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const orb1X = useTransform(scrollYProgress, [0, 1], ["0vw", "30vw"]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0vh", "60vh"]);
  const orb2X = useTransform(scrollYProgress, [0, 1], ["0vw", "-35vw"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0vh", "-45vh"]);
  const orb3Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.3, 0.9]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-onyx"
    >
      <motion.div
        style={{ y: gridY }}
        className={`absolute inset-x-0 -top-[10%] h-[130%] opacity-70 ${GRID}`}
      />

      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="absolute left-[5%] top-[5%] h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-[120px]"
      />
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="absolute right-[3%] top-[45%] h-[32rem] w-[32rem] rounded-full bg-violet-500/25 blur-[130px]"
      />
      <motion.div
        style={{ scale: orb3Scale }}
        className="absolute bottom-[-10%] left-[35%] h-[26rem] w-[26rem] rounded-full bg-indigo-500/20 blur-[120px]"
      />

      {DOTS.map((dot, i) => (
        <span
          key={i}
          className={`absolute animate-twinkle rounded-full ${
            dot.violet ? "bg-violet-400" : "bg-cyan-400"
          }`}
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: dot.size,
            height: dot.size,
            animationDelay: `${dot.delay}s`,
            boxShadow: `0 0 12px 2px ${
              dot.violet ? "rgba(139,92,246,0.7)" : "rgba(0,242,254,0.7)"
            }`,
          }}
        />
      ))}
    </div>
  );
}
