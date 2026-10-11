// "use client";

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { ClipboardList, Code2, PenTool, Rocket, type LucideIcon } from "lucide-react";
// import { cn } from "@/lib/utils";

// interface Step {
//   title: string;
//   summary: string;
//   icon: LucideIcon;
//   points: string[];
// }

// const STEPS: Step[] = [
//   {
//     title: "Planning & Requirements",
//     summary: "Understand the problem before touching the code.",
//     icon: ClipboardList,
//     points: [
//       "Clarify goals, users, and scope",
//       "Turn requirements into a clear feature list",
//       "Agree on priorities and a realistic timeline",
//     ],
//   },
//   {
//     title: "UI/UX & Prototyping",
//     summary: "Shape the experience before building it.",
//     icon: PenTool,
//     points: [
//       "Sketch flows and wireframes",
//       "Design responsive layouts, mobile first",
//       "Validate the prototype before development",
//     ],
//   },
//   {
//     title: "Clean Code & State Management",
//     summary: "Readable, typed code that is easy to extend.",
//     icon: Code2,
//     points: [
//       "Typed, reusable components with TypeScript",
//       "Predictable state with Redux Toolkit where it fits",
//       "Clean API layers with Axios and REST endpoints",
//     ],
//   },
//   {
//     title: "Testing & Deployment",
//     summary: "Ship with confidence, then keep improving.",
//     icon: Rocket,
//     points: [
//       "Check behavior across devices and browsers",
//       "Fix accessibility and performance issues",
//       "Deploy to Vercel or Netlify with a smooth release flow",
//     ],
//   },
// ];

// export default function Process() {
//   const [active, setActive] = useState(0);

//   return (
//     <section id="process" className="px-4 py-20 sm:px-6">
//       <div className="mx-auto max-w-6xl">
//         <div className="max-w-2xl">
//           <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
//             How I work
//           </h2>
//           <p className="mt-3 text-zinc-400">
//             Four steps from idea to a deployed product. Select a step to see
//             what it involves.
//           </p>
//         </div>

//         <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {STEPS.map((step, i) => {
//             const isActive = active === i;
//             const Icon = step.icon;
//             return (
//               <motion.li
//                 key={step.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-60px" }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//               >
//                 <button
//                   type="button"
//                   onClick={() => setActive(i)}
//                   onMouseEnter={() => setActive(i)}
//                   aria-expanded={isActive}
//                   className={cn(
//                     "group flex h-full w-full flex-col rounded-3xl border p-6 text-left backdrop-blur transition-all duration-300",
//                     isActive
//                       ? "border-cyan-400/40 bg-cyan-400/[0.07] shadow-lg shadow-cyan-500/5"
//                       : "border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-white/20",
//                   )}
//                 >
//                   <div className="flex items-center justify-between">
//                     <span
//                       className={cn(
//                         "flex h-11 w-11 items-center justify-center rounded-xl transition-colors",
//                         isActive
//                           ? "bg-cyan-400 text-onyx"
//                           : "bg-white/10 text-cyan-300",
//                       )}
//                     >
//                       <Icon className="h-5 w-5" />
//                     </span>
//                     <span className="font-display text-sm text-zinc-500">
//                       Step {i + 1}
//                     </span>
//                   </div>

//                   <h3 className="mt-5 font-display text-lg font-semibold text-white">
//                     {step.title}
//                   </h3>
//                   <p className="mt-1.5 text-sm text-zinc-400">{step.summary}</p>

//                   <AnimatePresence initial={false}>
//                     {isActive && (
//                       <motion.ul
//                         key="points"
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.25 }}
//                         className="mt-4 space-y-2 overflow-hidden text-sm text-zinc-300"
//                       >
//                         {step.points.map((point) => (
//                           <li key={point} className="flex gap-2">
//                             <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" />
//                             {point}
//                           </li>
//                         ))}
//                       </motion.ul>
//                     )}
//                   </AnimatePresence>
//                 </button>
//               </motion.li>
//             );
//           })}
//         </ol>
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ClipboardList,
  Code2,
  PenTool,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  summary: string;
  icon: LucideIcon;
  points: string[];
  code: string;
  accent: string;
}

const STEPS: Step[] = [
  {
    title: "Planning & Requirements",
    summary: "Understand the problem before touching the code.",
    icon: ClipboardList,
    code: "01 / PLAN",
    accent: "from-cyan-300 to-cyan-500",
    points: [
      "Clarify goals, users, and scope",
      "Turn requirements into a clear feature list",
      "Agree on priorities and a realistic timeline",
    ],
  },
  {
    title: "UI/UX & Prototyping",
    summary: "Shape the experience before building it.",
    icon: PenTool,
    code: "02 / DESIGN",
    accent: "from-cyan-200 to-sky-500",
    points: [
      "Sketch flows and wireframes",
      "Design responsive layouts, mobile first",
      "Validate the prototype before development",
    ],
  },
  {
    title: "Clean Code & State Management",
    summary: "Readable, typed code that is easy to extend.",
    icon: Code2,
    code: "03 / BUILD",
    accent: "from-sky-300 to-cyan-500",
    points: [
      "Typed, reusable components with TypeScript",
      "Predictable state with Redux Toolkit where it fits",
      "Clean API layers with Axios and REST endpoints",
    ],
  },
  {
    title: "Testing & Deployment",
    summary: "Ship with confidence, then keep improving.",
    icon: Rocket,
    code: "04 / SHIP",
    accent: "from-cyan-300 to-teal-400",
    points: [
      "Check behavior across devices and browsers",
      "Fix accessibility and performance issues",
      "Deploy to Vercel or Netlify with a smooth release flow",
    ],
  },
];

function getCardPosition(index: number, activeIndex: number) {
  const offset = index - activeIndex;

  // الكارت الحالي في المنتصف
  if (offset === 0) {
    return {
      x: 0,
      y: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      opacity: 1,
      zIndex: 40,
    };
  }

  // الكارت التالي يظهر على اليمين
  if (offset === 1) {
    return {
      x: 285,
      y: 20,
      rotateY: -16,
      rotateZ: 2,
      scale: 0.86,
      opacity: 0.5,
      zIndex: 30,
    };
  }

  // الكارت الذي بعده يظهر أبعد على اليمين
  if (offset === 2) {
    return {
      x: 500,
      y: 42,
      rotateY: -22,
      rotateZ: 3,
      scale: 0.72,
      opacity: 0.2,
      zIndex: 20,
    };
  }

  // الكارت السابق ينتقل إلى اليسار
  if (offset === -1) {
    return {
      x: -285,
      y: 20,
      rotateY: 16,
      rotateZ: -2,
      scale: 0.86,
      opacity: 0.3,
      zIndex: 25,
    };
  }

  // الكروت السابقة تختفي خارج المشهد
  return {
    x: -500,
    y: 42,
    rotateY: 22,
    rotateZ: -3,
    scale: 0.72,
    opacity: 0,
    zIndex: 10,
  };
}

export default function Process() {
  const [active, setActive] = useState(0);

  /**
   * تشغيل تلقائي من الكارت الأول إلى الكارت الرابع.
   * يتوقف عند الكارت الأخير ولا يعيد الحركة بشكل دائري.
   */
  useEffect(() => {
    if (active >= STEPS.length - 1) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActive((current) =>
        Math.min(current + 1, STEPS.length - 1),
      );
    }, 2800);

    return () => {
      window.clearTimeout(timer);
    };
  }, [active]);

  const activeStep = STEPS[active];
  const ActiveIcon = activeStep.icon;

  return (
    <section
      id="process"
      className="relative flex min-h-screen items-center overflow-hidden px-4 py-16 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.045] blur-[100px]" />

        <div className="absolute left-[8%] top-[22%] h-px w-[84%] rotate-[10deg] bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent" />

        <div className="absolute left-[12%] top-[68%] h-px w-[76%] -rotate-[12deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        {[...Array(10)].map((_, index) => (
          <span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-cyan-300/40"
            style={{
              left: `${8 + ((index * 23) % 84)}%`,
              top: `${10 + ((index * 29) % 76)}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-200/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00f2fe]" />
            Process / Workflow
          </div>

          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            How I work
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            Four steps from idea to a deployed product.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-10 h-[32rem] max-w-6xl [perspective:1600px] sm:mt-14">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent" />

          <div className="absolute left-1/2 top-1/2 h-[24rem] w-[min(86vw,32rem)] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const position = getCardPosition(index, active);

              return (
                <motion.article
                  key={step.title}
                  initial={false}
                  animate={{
                    x: position.x,
                    y: position.y,
                    rotateY: position.rotateY,
                    rotateZ: position.rotateZ,
                    scale: position.scale,
                    opacity: position.opacity,
                  }}
                  transition={{
                    type: "tween",
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    zIndex: position.zIndex,
                    transformStyle: "preserve-3d",
                    willChange: "transform, opacity",
                  }}
                  className="absolute inset-0"
                >
                  <div
                    className={cn(
                      "group relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] border p-6 text-left backdrop-blur-xl sm:p-8",
                      active === index
                        ? "border-cyan-300/45 bg-[#07161a]/95 shadow-[0_0_55px_rgba(0,242,254,0.14)]"
                        : "border-white/10 bg-white/[0.045]",
                    )}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(0,242,254,0.12),transparent_42%)]" />

                    <div className="relative flex items-start justify-between">
                      <div
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-2xl border transition-colors duration-500",
                          active === index
                            ? "border-cyan-200/50 bg-[#00f2fe] text-[#031014] shadow-[0_0_22px_rgba(0,242,254,0.4)]"
                            : "border-white/10 bg-white/[0.08] text-cyan-200",
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="text-right">
                        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-200/70">
                          {step.code}
                        </div>

                        <div className="mt-1 font-display text-4xl font-bold text-white/[0.08]">
                          0{index + 1}
                        </div>
                      </div>
                    </div>

                    <div className="relative mt-auto">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="h-px w-8 bg-cyan-300/70" />

                        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                          Current module
                        </span>
                      </div>

                      <h3 className="max-w-[90%] font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-[90%] text-sm leading-6 text-zinc-400">
                        {step.summary}
                      </p>

                      <AnimatePresence initial={false} mode="wait">
                        {active === index && (
                          <motion.ul
                            key={step.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.35 }}
                            className="mt-5 space-y-2.5"
                          >
                            {step.points.map((point) => (
                              <li
                                key={point}
                                className="flex gap-2.5 text-xs leading-5 text-zinc-300 sm:text-sm"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00f2fe] shadow-[0_0_7px_rgba(0,242,254,0.8)]" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="relative mt-6 rounded-xl border border-white/10 bg-black/20 p-3">
                      <div className="mb-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                        <span>timeline.playhead</span>

                        <span className="text-cyan-200/80">
                          step_{String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="relative h-2 overflow-hidden rounded-full bg-white/[0.08]">
                        <motion.div
                          className={cn(
                            "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r",
                            step.accent,
                          )}
                          animate={{
                            width: active === index ? "100%" : "18%",
                            opacity: active === index ? 1 : 0.25,
                          }}
                          transition={{
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>

                      <div className="mt-2 flex justify-between font-mono text-[9px] text-zinc-600">
                        <span>00:00</span>

                        <span>
                          00:{String((index + 1) * 15).padStart(2, "0")}
                        </span>

                        <span>END</span>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/[0.04]" />
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="absolute bottom-0 left-1/2 w-[min(86vw,32rem)] -translate-x-1/2">
            <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              <span>Workflow progress</span>

              <span className="text-cyan-200/80">
                0{active + 1} / 0{STEPS.length}
              </span>
            </div>

            <div className="relative h-px bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#00f2fe]"
                animate={{
                  width: `${((active + 1) / STEPS.length) * 100}%`,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  boxShadow: "0 0 20px rgba(0,242,254,0.75)",
                }}
              />

              <div className="absolute -top-1.5 left-0 right-0 flex justify-between">
                {STEPS.map((step, index) => (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Show step ${index + 1}: ${step.title}`}
                    aria-current={active === index ? "step" : undefined}
                    className={cn(
                      "h-3 w-3 rounded-full border transition-all duration-300",
                      active === index
                        ? "scale-125 border-cyan-100 bg-[#00f2fe] shadow-[0_0_13px_rgba(0,242,254,0.9)]"
                        : "border-white/20 bg-[#10191c] hover:border-cyan-300/70 hover:bg-cyan-300/30",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          key={activeStep.title}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-auto mt-7 flex items-center justify-center gap-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500"
        >
          <ActiveIcon className="h-3.5 w-3.5 text-cyan-300" />

          <span>
            Active layer:{" "}
            <span className="text-cyan-200/80">{activeStep.code}</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
