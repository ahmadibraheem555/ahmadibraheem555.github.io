// "use client";

// import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
// import { ArrowDown, Mail } from "lucide-react";

// const CODE_LINES = [
//   { indent: 0, parts: [["text-violet-300", "const"], ["text-zinc-100", " ahmad = {"]] },
//   { indent: 1, parts: [["text-zinc-400", "role: "], ["text-cyan-300", '"Front-End Developer"'], ["text-zinc-100", ","]] },
//   { indent: 1, parts: [["text-zinc-400", "stack: "], ["text-cyan-300", '["React", "Next.js", "TypeScript"]'], ["text-zinc-100", ","]] },
//   { indent: 1, parts: [["text-zinc-400", "focus: "], ["text-cyan-300", '"AI-powered, responsive UI"'], ["text-zinc-100", ","]] },
//   { indent: 1, parts: [["text-zinc-400", "available: "], ["text-violet-300", "true"], ["text-zinc-100", ","]] },
//   { indent: 0, parts: [["text-zinc-100", "};"]] },
// ] as const;

// function TiltCard() {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
//     stiffness: 150,
//     damping: 15,
//   });
//   const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
//     stiffness: 150,
//     damping: 15,
//   });

//   function handleMove(e: React.MouseEvent<HTMLDivElement>) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     x.set((e.clientX - rect.left) / rect.width - 0.5);
//     y.set((e.clientY - rect.top) / rect.height - 0.5);
//   }

//   function reset() {
//     x.set(0);
//     y.set(0);
//   }

//   return (
//     <div
//       className="relative [perspective:1000px]"
//       onMouseMove={handleMove}
//       onMouseLeave={reset}
//     >
//       <div
//         className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-cyan-500/25 via-violet-500/15 to-transparent blur-3xl"
//         aria-hidden="true"
//       />
//       <motion.div
//         style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//         className="relative animate-float overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 shadow-2xl shadow-cyan-500/5 backdrop-blur-md"
//       >
//         <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
//           <span className="h-3 w-3 rounded-full bg-rose-400/80" />
//           <span className="h-3 w-3 rounded-full bg-amber-400/80" />
//           <span className="h-3 w-3 rounded-full bg-cyan-400/80" />
//           <span className="ml-3 text-xs text-zinc-500">about.ts</span>
//         </div>
//         <pre
//           className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm"
//           aria-label="Code snippet describing Ahmad's role, stack, and availability"
//         >
//           <code>
//             {CODE_LINES.map((line, i) => (
//               <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
//                 {line.parts.map(([cls, text], j) => (
//                   <span key={j} className={cls}>
//                     {text}
//                   </span>
//                 ))}
//               </div>
//             ))}
//             <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-cyan-400" />
//           </code>
//         </pre>
//       </motion.div>
//     </div>
//   );
// }

// export default function Hero() {
//   const { scrollY } = useScroll();
//   const cardScale = useTransform(scrollY, [0, 600], [1, 0.9]);

//   return (
//     <section
//       id="hero"
//       className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:pb-28"
//     >
//       <div
//         className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(0,242,254,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.10),transparent_50%)]"
//         aria-hidden="true"
//       />
//       <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-sm text-cyan-300">
//             <span className="relative flex h-2 w-2">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
//               <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
//             </span>
//             Available for projects
//           </span>

//           <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
//             Crafting Digital Interfaces.
//             <span className="block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
//               Bringing Code to Life.
//             </span>
//           </h1>

//           <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
//             I&apos;m Ahmad Ibraheem, a front-end developer and UI specialist. I
//             build responsive web apps, interactive AI-powered tools, and clean
//             interfaces with React, Next.js, and TypeScript.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-3">
//             <a
//               href="#projects"
//               className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-medium text-onyx transition-all hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
//             >
//               View Work
//               <ArrowDown className="h-4 w-4" />
//             </a>
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition-colors hover:border-violet-300/40 hover:bg-white/10"
//             >
//               <Mail className="h-4 w-4" />
//               Contact Me
//             </a>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           style={{ scale: cardScale }}
//           transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
//         >
//           <TiltCard />
//         </motion.div>
//       </div>
//     </section>
//   );
// }


















































"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowDown, Code2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  key: string;
  clip: string;
  subClip: string;
  kicker: string;
  title: string;
  text: string;
  lines: string[];
}

const STEPS: Step[] = [
  {
    key: "Plan",
    clip: "Planning",
    subClip: "Wireframes",
    kicker: "Step 01 / Planning",
    title: "Map it before you make it.",
    text: "Requirements, user flows, and a scope that actually fits the goal.",
    lines: ["$ define --scope", "✓ user flows mapped", "✓ components listed"],
  },
  {
    key: "Code",
    clip: "Code",
    subClip: "Components",
    kicker: "Step 02 / Code",
    title: "Write it clean.",
    text: "Typed components, predictable state, and tidy API layers.",
    lines: [
      "const App = () => {",
      "  const items = useItems();",
      "  return <Dashboard items={items} />;",
    ],
  },
  {
    key: "Build",
    clip: "Build",
    subClip: "Tests",
    kicker: "Step 03 / Build",
    title: "Make it hold up.",
    text: "Responsive layouts, tested states, and a build that stays green.",
    lines: ["$ next build", "✓ types checked", "✓ routes generated"],
  },
  {
    key: "Deploy",
    clip: "Deploy",
    subClip: "CI/CD",
    kicker: "Step 04 / Deploy",
    title: "Ship it, then improve it.",
    text: "Preview, release, and keep iterating once real users arrive.",
    lines: ["$ vercel --prod", "✓ deployed", "→ live"],
  },
];

const BARS = Array.from(
  { length: 44 },
  (_, i) => 20 + Math.round(Math.abs(Math.sin(i * 1.7) + Math.sin(i * 0.6)) * 35),
);

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

function Clip({
  label,
  index,
  progress,
  secondary = false,
}: {
  label: string;
  index: number;
  progress: MotionValue<number>;
  secondary?: boolean;
}) {
  const fill = useTransform(
    progress,
    [index / STEPS.length, (index + 1) / STEPS.length],
    [0, 1],
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-white/10 bg-white/5",
        secondary ? "h-6" : "h-9",
      )}
    >
      <motion.div
        style={{ scaleX: fill, transformOrigin: "left" }}
        className={cn(
          "absolute inset-0 bg-gradient-to-r",
          secondary
            ? "from-violet-500/45 to-cyan-400/35"
            : "from-cyan-400/75 to-violet-500/75",
        )}
      />
      <span
        className={cn(
          "relative z-10 flex h-full items-center truncate px-2.5 font-medium uppercase tracking-widest text-white",
          secondary ? "text-[8px] text-white/80" : "text-[10px]",
        )}
      >
        {label}
      </span>
    </div>
  );
}

function Bars({ className }: { className: string }) {
  return (
    <div className="flex h-full items-end gap-[3px]">
      {BARS.map((h, i) => (
        <span
          key={i}
          style={{ height: `${h}%` }}
          className={cn("flex-1 rounded-sm", className)}
        />
      ))}
    </div>
  );
}

function TimelineTrack({ progress }: { progress: MotionValue<number> }) {
  const playhead = useTransform(progress, (v) => `${clamp01(v) * 100}%`);
  const barClip = useTransform(
    progress,
    (v) => `inset(0 ${(1 - clamp01(v)) * 100}% 0 0)`,
  );

  return (
    <div className="mt-4">
      <div className="mb-2 grid grid-cols-4 gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">
        {STEPS.map((s) => (
          <span key={s.key}>{s.key}</span>
        ))}
      </div>

      <div className="relative space-y-1.5">
        <div className="grid grid-cols-4 gap-1.5">
          {STEPS.map((s, i) => (
            <Clip key={s.key} label={s.clip} index={i} progress={progress} />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {STEPS.map((s, i) => (
            <Clip
              key={s.key}
              label={s.subClip}
              index={i}
              progress={progress}
              secondary
            />
          ))}
        </div>
        <div className="relative h-9 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
          <div className="absolute inset-1.5">
            <Bars className="bg-white/10" />
          </div>
          <motion.div className="absolute inset-1.5" style={{ clipPath: barClip }}>
            <Bars className="bg-gradient-to-t from-violet-500 to-cyan-400" />
          </motion.div>
        </div>

        <motion.div
          aria-hidden="true"
          style={{ left: playhead }}
          className="pointer-events-none absolute -bottom-1 -top-2 w-px bg-cyan-300 shadow-[0_0_12px_2px_rgba(0,242,254,0.9)]"
        >
          <span className="absolute -left-[5px] -top-1 h-2.5 w-2.5 rotate-45 rounded-[2px] bg-cyan-300" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const k = reduce ? 0 : 1;
  const [step, setStep] = useState(0);

  // Scroll progress of the tall hero section (0 -> 1), smoothed with a spring.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.3,
  });

  useMotionValueEvent(progress, "change", (v) => {
    const next = Math.min(
      STEPS.length - 1,
      Math.max(0, Math.floor(clamp01(v) * STEPS.length)),
    );
    setStep((prev) => (prev === next ? prev : next));
  });

  // Scroll-driven 3D transform: upright card -> tilted in 3D space.
  const scrollRotX = useTransform(progress, [0, 1], [0, 20 * k]);
  const scrollRotY = useTransform(progress, [0, 1], [0, -24 * k]);
  const rotZ = useTransform(progress, [0, 1], [0, 3 * k]);
  const lift = useTransform(progress, [0, 1], [0, -24 * k]);
  const depth = useTransform(progress, [0, 1], [0, -60 * k]);
  const scale = useTransform(progress, [0, 1], [0.94, 1]);

  // Mouse parallax layered on top of the scroll-driven rotation.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 18 });
  const rotX = useTransform(
    [scrollRotX, smoothY],
    ([a, b]: number[]) => a - b * 8 * k,
  );
  const rotY = useTransform(
    [scrollRotY, smoothX],
    ([a, b]: number[]) => a + b * 10 * k,
  );

  // Ambient glow, specular sheen, and small UI details.
  const violetGlow = useTransform(progress, [0, 1], [0.2, 0.75]);
  const cyanGlow = useTransform(progress, [0, 1], [0.7, 0.35]);
  const sheenX = useTransform(progress, [0, 1], ["-130%", "130%"]);
  const percentText = useTransform(
    progress,
    (v) => `${Math.round(clamp01(v) * 100)}%`,
  );
  const copyY = useTransform(progress, [0, 1], [0, -30 * k]);
  const copyOpacity = useTransform(progress, [0, 0.8], [1, 0.55]);
  const cueOpacity = useTransform(progress, [0, 0.1], [1, 0]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const current = STEPS[step];

  return (
    <section id="hero" ref={sectionRef} className="relative h-[260vh]">
      <div className="sticky top-0 flex h-dvh items-center overflow-hidden px-4 pt-20 sm:px-6">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* Copy */}
          <motion.div
            style={{ y: copyY, opacity: copyOpacity }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-sm text-cyan-300 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              Available for projects
            </span>

            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Crafting Digital Interfaces.
              <span className="block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Bringing Code to Life.
              </span>
            </h1>

            <p className="mt-5 hidden max-w-xl text-lg leading-relaxed text-zinc-400 sm:block">
              I&apos;m Ahmad Ibraheem, a front-end developer and UI specialist.
              I build responsive web apps, interactive AI-powered tools, and
              clean interfaces with React, Next.js, and TypeScript.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-medium text-onyx transition-all hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/25"
              >
                View Work
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-xl transition-colors hover:border-violet-400/40 hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Scroll-driven 3D glass card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ perspective: 1400 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <motion.div
              aria-hidden="true"
              style={{ opacity: cyanGlow }}
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/35 to-transparent blur-3xl"
            />
            <motion.div
              aria-hidden="true"
              style={{ opacity: violetGlow }}
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tl from-violet-500/45 to-transparent blur-3xl"
            />

            <motion.div
              style={{
                rotateX: rotX,
                rotateY: rotY,
                rotateZ: rotZ,
                y: lift,
                z: depth,
                scale,
                transformStyle: "preserve-3d",
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-4 shadow-[0_0_80px_rgba(0,242,254,0.14)] backdrop-blur-xl sm:p-5"
            >
              {/* specular sheen that sweeps across with scroll */}
              <motion.div
                aria-hidden="true"
                style={{ x: sheenX }}
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-full -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
              />

              {/* header */}
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                    <Code2 className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                    The build timeline
                  </span>
                </div>
                <span className="font-mono text-sm font-semibold text-cyan-300">
                  0{step + 1}/0{STEPS.length}
                </span>
              </div>

              {/* step panel */}
              <div className="relative mt-4 grid gap-3 rounded-2xl border border-white/10 bg-onyx/50 p-3 sm:grid-cols-[1fr_1.1fr] sm:p-4">
                <div className="min-h-[88px] rounded-xl border border-white/10 bg-black/30 p-3 font-mono text-[11px] leading-5 text-zinc-300">
                  <div className="mb-2 flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-400/70" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                    <span className="h-2 w-2 rounded-full bg-cyan-400/70" />
                  </div>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={step}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      {current.lines.map((line, i) => (
                        <motion.div
                          key={line}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.08 * i }}
                          className={cn(
                            "whitespace-pre truncate",
                            line.startsWith("✓") && "text-cyan-300",
                            line.startsWith("→") && "text-violet-300",
                          )}
                        >
                          {line}
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex flex-col justify-center">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-300">
                        {current.kicker}
                      </p>
                      <p className="mt-1.5 font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
                        {current.title}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                        {current.text}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <TimelineTrack progress={progress} />

              <div className="mt-3 flex items-end justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                  Scroll to build the story
                </span>
                <motion.span className="font-mono text-lg font-bold text-cyan-300">
                  {percentText}
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          aria-hidden="true"
          style={{ opacity: cueOpacity }}
          className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 sm:flex"
        >
          <ArrowDown className="h-3 w-3 animate-bounce" />
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
