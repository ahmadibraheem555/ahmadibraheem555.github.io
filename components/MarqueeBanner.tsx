"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface Item {
  lead?: string;
  highlight: string;
  /** Shows the glowing green "available" dot before the text. */
  available?: boolean;
  href?: string;
}

// Edit these to change what the banner says.
const ITEMS: Item[] = [
  {
    available: true,
    lead: "Available for",
    highlight: "new projects & opportunities",
  },
  { lead: "Front-end developer:", highlight: "React · Next.js · TypeScript" },
  { lead: "New:", highlight: "CodeMentor AI is live" },
  { lead: "Open to", highlight: "freelance projects" },
  { lead: "Building", highlight: "responsive web apps & AI-powered tools" },
  { highlight: "Let's talk", href: "#contact" },
];

// Seconds for one full loop of the content. Higher = slower.
const CYCLE_SECONDS = 45;

export default function MarqueeBanner() {
  const reduce = useReducedMotion();
  const x = useMotionValue("0%");
  const progress = useRef(0);
  const paused = useRef(false);

  // The track holds two identical groups, so moving by -50% loops seamlessly.
  useAnimationFrame((_, delta) => {
    if (reduce || paused.current) return;
    progress.current =
      (progress.current + delta / 1000 / CYCLE_SECONDS) % 1;
    x.set(`${-progress.current * 50}%`);
  });

  return (
    <>
      {/* Spacer so the fixed banner never covers the end of the page */}
      <div aria-hidden="true" className="h-11" />

      <div
        role="region"
        aria-label="Availability and latest updates"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        onFocus={() => (paused.current = true)}
        onBlur={() => (paused.current = false)}
        className="fixed bottom-0 left-0 right-0 z-40 overflow-hidden border-t border-cyan-500/20 bg-slate-950/80 py-2.5 backdrop-blur-md"
      >
        <motion.div style={{ x }} className="flex w-max will-change-transform">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              inert={copy === 1}
              className="flex shrink-0 items-center"
            >
              {[...ITEMS, ...ITEMS].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 whitespace-nowrap pl-6 text-sm"
                >
                  {item.available && (
                    <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.8)]" />
                    </span>
                  )}

                  {item.href ? (
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-1 font-semibold text-cyan-300 transition-colors hover:text-cyan-400"
                    >
                      {item.highlight}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="text-white">
                      {item.lead && <>{item.lead} </>}
                      <span className="font-semibold text-cyan-400">
                        {item.highlight}
                      </span>
                    </span>
                  )}

                  <Sparkles
                    className="ml-3 h-4 w-4 text-cyan-400/70"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          ))}
        </motion.div>
      </div>
    </>
  );
}
