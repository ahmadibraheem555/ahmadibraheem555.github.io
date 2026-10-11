// import Reveal from "./Reveal";
// import { Layers, Terminal, Wrench, type LucideIcon } from "lucide-react";

// interface SkillGroup {
//   title: string;
//   icon: LucideIcon;
//   items: string[];
// }

// const SKILL_GROUPS: SkillGroup[] = [
//   {
//     title: "Languages",
//     icon: Terminal,
//     items: ["TypeScript", "JavaScript", "HTML5", "CSS3", "C++", "Python"],
//   },
//   {
//     title: "Frameworks & Libraries",
//     icon: Layers,
//     items: [
//       "React",
//       "Next.js",
//       "Redux Toolkit",
//       "React Router",
//       "Tailwind CSS",
//       "Bootstrap",
//     ],
//   },
//   {
//     title: "Tools & Deployment",
//     icon: Wrench,
//     items: ["VS Code", "Cursor", "Git", "GitHub", "Vercel", "Netlify", "Vite"],
//   },
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="px-4 py-20 sm:px-6">
//       <div className="mx-auto max-w-6xl">
//         <div className="max-w-2xl">
//           <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
//             Skills
//           </h2>
//           <p className="mt-3 text-zinc-400">
//             The languages, libraries, and tools I use every week.
//           </p>
//         </div>

//         <div className="mt-12 grid gap-6 lg:grid-cols-3">
//           {SKILL_GROUPS.map(({ title, icon: Icon, items }, i) => (
//             <Reveal
//               key={title}
//               delay={i * 0.12}
//               className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6"
//             >
//               <div className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
//                   <Icon className="h-5 w-5" />
//                 </span>
//                 <h3 className="font-display text-lg font-semibold text-white">
//                   {title}
//                 </h3>
//               </div>

//               <ul className="mt-5 grid grid-cols-2 gap-2.5">
//                 {items.map((item) => (
//                   <li
//                     key={item}
//                     className="rounded-lg border border-white/10 bg-zinc-900/60 px-3 py-2.5 text-sm text-zinc-200 transition-colors hover:border-violet-300/40 hover:text-white"
//                   >
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }









"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Braces,
  Check,
  Code2,
  Compass,
  ExternalLink,
  Github,
  Layers3,
  MousePointer2,
  Palette,
  Rocket,
  Terminal,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type SkillCategory = "Frontend" | "Languages" | "Tools";

type Skill = {
  name: string;
  category: SkillCategory;
  description: string;
  level: number;
  color: string;
  icon: string;
};

const FILTERS = ["All", "Frontend", "Languages", "Tools"] as const;

type Filter = (typeof FILTERS)[number];

const SKILLS: Skill[] = [
  {
    name: "React",
    category: "Frontend",
    description: "Component-driven interfaces",
    level: 94,
    color: "#61dafb",
    icon: "react",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "Production-ready React apps",
    level: 91,
    color: "#ffffff",
    icon: "next",
  },
  {
    name: "TypeScript",
    category: "Languages",
    description: "Typed and scalable JavaScript",
    level: 93,
    color: "#3178c6",
    icon: "typescript",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Fast, precise visual systems",
    level: 95,
    color: "#38bdf8",
    icon: "tailwind",
  },
  {
    name: "JavaScript",
    category: "Languages",
    description: "Modern web interactions",
    level: 96,
    color: "#f7df1e",
    icon: "javascript",
  },
  {
    name: "HTML5",
    category: "Languages",
    description: "Semantic web foundations",
    level: 97,
    color: "#e34f26",
    icon: "html",
  },
  {
    name: "CSS3",
    category: "Languages",
    description: "Responsive visual styling",
    level: 94,
    color: "#1572b6",
    icon: "css",
  },
  {
    name: "Redux Toolkit",
    category: "Frontend",
    description: "Predictable application state",
    level: 86,
    color: "#764abc",
    icon: "redux",
  },
  {
    name: "Git",
    category: "Tools",
    description: "Version control and collaboration",
    level: 90,
    color: "#f05032",
    icon: "git",
  },
  {
    name: "GitHub",
    category: "Tools",
    description: "Code hosting and workflows",
    level: 89,
    color: "#ffffff",
    icon: "github",
  },
  {
    name: "Vercel",
    category: "Tools",
    description: "Fast, reliable deployments",
    level: 88,
    color: "#ffffff",
    icon: "vercel",
  },
  {
    name: "VS Code",
    category: "Tools",
    description: "Daily development environment",
    level: 96,
    color: "#23a8f2",
    icon: "vscode",
  },
];

const CATEGORY_ICONS: Record<SkillCategory, LucideIcon> = {
  Frontend: Layers3,
  Languages: Braces,
  Tools: Wrench,
};

function BrandIcon({
  type,
  className,
}: {
  type: string;
  className?: string;
}) {
  const commonProps = {
    className: cn("h-7 w-7", className),
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  switch (type ) {
    case "react":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.8"
            transform="rotate(60 12 12)"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.8"
            transform="rotate(120 12 12)"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "next":
      return (
        <svg {...commonProps}>
          <path
            d="M4.5 4.5v15h3.2V10l8.2 9.5h3.6V4.5h-3.2V14L8.2 4.5H4.5Z"
            fill="currentColor"
          />
        </svg>
      );

    case "typescript":
      return (
        <svg {...commonProps}>
          <path d="M2.5 2.5h19v19h-19z" fill="currentColor" opacity=".95" />
          <path
            d="M5.4 8.1h7.2v2.2H10v7.2H7.9v-7.2H5.4V8.1Zm8.1 0h5.1v2.1h-2.9c-.7 0-1 .2-1 .6 0 .3.2.5.8.8l1 .4c1.5.7 2.2 1.5 2.2 2.9 0 1.8-1.3 2.8-3.5 2.8-1 0-2.1-.2-2.8-.6l.3-2.1c.8.4 1.6.6 2.4.6.8 0 1.3-.2 1.3-.7 0-.3-.3-.5-.9-.8l-.9-.4c-1.5-.7-2.1-1.5-2.1-2.8 0-1.7 1.2-2.8 3-2.8Z"
            fill="#07161a"
          />
        </svg>
      );

    case "javascript":
      return (
        <svg {...commonProps}>
          <path d="M2.5 2.5h19v19h-19z" fill="currentColor" />
          <path
            d="M12.6 17.7c.7.4 1.3.6 2 .6.7 0 1.1-.3 1.1-.8 0-.4-.2-.6-.9-.9l-.6-.3c-1.4-.6-2-1.4-2-2.6 0-1.6 1.2-2.7 3-2.7.9 0 1.7.2 2.3.5l-.3 1.8a4 4 0 0 0-1.8-.4c-.6 0-1 .2-1 .7 0 .3.2.5.8.8l.6.3c1.5.7 2.1 1.4 2.1 2.6 0 1.7-1.2 2.8-3.2 2.8-1.1 0-2.1-.3-2.7-.7l.6-1.7Zm-5.7-6.5h2v4.9c0 1.6-.8 2.4-2.4 2.4-.7 0-1.3-.2-1.7-.4l.3-1.7c.3.2.6.3.9.3.5 0 .9-.3.9-1v-4.5Z"
            fill="#111827"
          />
        </svg>
      );

    case "tailwind":
      return (
        <svg {...commonProps}>
          <path
            d="M12 5.5c-2.7 0-4.4 1.3-5.1 3.8.9-1.2 1.9-1.7 3.1-1.3.7.2 1.2.8 1.8 1.4.9 1 1.9 2.1 4 2.1 2.7 0 4.4-1.3 5.1-3.8-.9 1.2-1.9 1.7-3.1 1.3-.7-.2-1.2-.8-1.8-1.4-.9-1-1.9-2.1-4-2.1ZM6.9 12.5c-2.7 0-4.4 1.3-5.1 3.8.9-1.2 1.9-1.7 3.1-1.3.7.2 1.2.8 1.8 1.4.9 1 1.9 2.1 4 2.1 2.7 0 4.4-1.3 5.1-3.8-.9 1.2-1.9 1.7-3.1-1.3-.7-.2-1.2-.8-1.8-1.4-.9-1-1.9-2.1-4-2.1Z"
            fill="currentColor"
          />
        </svg>
      );

    case "html":
      return (
        <svg {...commonProps}>
          <path d="m3 2 1.7 19L12 23l7.3-2L21 2H3Z" fill="currentColor" />
          <path d="M12 5v15.7l4.5-1.3L17.6 5H12Z" fill="#07161a" opacity=".3" />
          <path
            d="M6.8 6.5h10.5l-.3 2.2H9.2l.2 2.3h7.3l-.8 6.5-3.9 1.1-3.9-1.1-.3-2.3h2.3l.1 1 1.8.5 1.8-.5.3-2.9H7.1L6.8 6.5Z"
            fill="#07161a"
          />
        </svg>
      );

    case "css":
      return (
        <svg {...commonProps}>
          <path d="m3 2 1.7 19L12 23l7.3-2L21 2H3Z" fill="currentColor" />
          <path
            d="M12 5v15.7l4.5-1.3L17.6 5H12Z"
            fill="#07161a"
            opacity=".3"
          />
          <path
            d="M6.7 6.5h10.6l-.3 2.2H9.2l.2 2.3h7.4l-.8 6.5-4 1.1-3.8-1.1-.3-2.3h2.3l.1 1 1.8.5 1.8-.5.3-2.9H7l-.3-2.3h9.1l.2-1.8H7l-.3-2.7Z"
            fill="#07161a"
          />
        </svg>
      );

    case "redux":
      return (
        <svg {...commonProps}>
          <path
            d="M16.7 15.1c-.5.8-1.3 1.5-2.3 1.9-1.2.5-2.5.5-3.8.1-1.3-.4-2.4-1.2-3.2-2.3-.8-1.1-1.2-2.4-1.1-3.7.1-1.4.7-2.6 1.7-3.6.2-.2.3-.5.2-.8a.8.8 0 0 0-1.3-.3c-1.3 1.2-2.1 2.8-2.2 4.5-.2 1.8.4 3.5 1.5 4.9 1.1 1.4 2.6 2.4 4.3 2.9 1.7.5 3.5.4 5.1-.3 1.3-.5 2.4-1.4 3.2-2.5.2-.3.2-.7-.1-.9-.6-.5-1.6-.3-2 .1ZM9 8.9c.8-.5 1.9-.7 2.9-.5 1.1.2 2 .7 2.7 1.5.8.8 1.2 1.8 1.3 2.9 0 .4.3.7.7.7h.1c.4-.1.7-.4.6-.8-.1-1.5-.8-2.9-1.9-4-1-1.1-2.4-1.8-3.9-2-1.4-.2-2.9.1-4.1.8-.3.2-.5.6-.3.9.3.6 1.2.8 1.9.5Z"
            fill="currentColor"
          />
          <circle cx="7.2" cy="6.3" r="1.35" fill="currentColor" />
          <circle cx="17.4" cy="13.8" r="1.35" fill="currentColor" />
          <circle cx="11.8" cy="18.7" r="1.35" fill="currentColor" />
        </svg>
      );

    case "git":
      return (
        <svg {...commonProps}>
          <path
            d="M20.4 11.1 12.9 3.6a1.9 1.9 0 0 0-2.7 0l-1.6 1.6 2.1 2.1a2.2 2.2 0 0 1 2.8 2.8l2 2a2.2 2.2 0 1 1-1.3 1.3l-2-2v5.2a2.2 2.2 0 1 1-1.8-.1V11a2.2 2.2 0 0 1-1.2-3.5L7 5.4l-3.4 3.4a1.9 1.9 0 0 0 0 2.7l7.5 7.5a1.9 1.9 0 0 0 2.7 0l6.6-6.6a1.9 1.9 0 0 0 0-2.7Z"
            fill="currentColor"
          />
        </svg>
      );

    case "github":
      return <Github className="h-7 w-7" />;

    case "vercel":
      return (
        <svg {...commonProps}>
          <path d="M12 4 21 20H3L12 4Z" fill="currentColor" />
        </svg>
      );

    case "vscode":
      return (
        <svg {...commonProps}>
          <path
            d="m17.7 3.1-7.8 6.2-3.5-2.7-2.2 1.3 3.7 4.1-3.7 4.1 2.2 1.3 3.5-2.7 7.8 6.2 2.3-1.2V4.3l-2.3-1.2ZM12 12l5.4-4.3v8.6L12 12Z"
            fill="currentColor"
          />
        </svg>
      );

    default:
      return <Code2 className="h-7 w-7" />;
  }
}

function SkillCard({
  skill,
  index,
  featured = false,
}: {
  skill: Skill;
  index: number;
  featured?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.045, 0.3),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{
        y: -7,
        scale: 1.018,
        transition: { duration: 0.25 },
      }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl",
        "transition-[border-color,background-color,box-shadow] duration-300",
        hovered &&
          "border-cyan-300/45 bg-cyan-300/[0.055] shadow-[0_18px_55px_rgba(0,242,254,0.12)]",
        featured && "min-h-[15.5rem] sm:p-6",
      )}
    >
      <motion.div
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.75,
        }}
        transition={{ duration: 0.35 }}
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-300/15 blur-3xl"
      />

      <motion.div
        animate={{
          opacity: hovered ? 1 : 0,
          x: hovered ? 0 : -12,
        }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute left-0 top-8 h-16 w-px bg-gradient-to-b from-transparent via-cyan-300 to-transparent"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/20"
          style={{
            color: hovered ? skill.color : "#a5f3fc",
            boxShadow: hovered
              ? `0 0 28px ${skill.color}35`
              : "0 0 0 transparent",
          }}
        >
          <BrandIcon type={skill.icon} />
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500">
            {skill.category}
          </span>

          <motion.span
            animate={{
              opacity: hovered ? 1 : 0.35,
              x: hovered ? 0 : 4,
            }}
            className="text-cyan-200"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </motion.span>
        </div>
      </div>

      <div className="relative mt-6">
        <h3 className="font-display text-xl font-semibold text-white">
          {skill.name}
        </h3>

        <p className="mt-1.5 text-xs leading-5 text-zinc-500">
          {skill.description}
        </p>
      </div>

      <div className="relative mt-6">
        <div className="mb-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
          <span>Proficiency</span>
          <span className="text-cyan-200/70">{skill.level}%</span>
        </div>

        <div className="h-1 overflow-hidden rounded-full bg-white/[0.08]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{
              duration: 0.8,
              delay: Math.min(index * 0.045, 0.3) + 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-200"
            style={{
              boxShadow: "0 0 12px rgba(0,242,254,0.65)",
            }}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/[0.035]" />
    </motion.article>
  );
}

export default function Skills() {
  const [filter, setFilter] = useState<Filter>("All");

  const filteredSkills = useMemo(() => {
    if (filter === "All") return SKILLS;

    return SKILLS.filter((skill) => skill.category === filter);
  }, [filter]);

  const featuredSkills = filteredSkills.filter((skill) =>
    ["React", "Next.js", "TypeScript", "Tailwind CSS"].includes(skill.name),
  );

  const secondarySkills = filteredSkills.filter(
    (skill) => !["React", "Next.js", "TypeScript", "Tailwind CSS"].includes(skill.name),
  );

  return (
    <section id="skills" className="relative overflow-hidden px-4 py-20 sm:px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[18%] top-[20%] h-72 w-72 rounded-full bg-cyan-400/[0.055] blur-[110px]" />
        <div className="absolute right-[8%] top-[45%] h-80 w-80 rounded-full bg-blue-500/[0.045] blur-[120px]" />

        <div className="absolute left-0 right-0 top-[18%] h-px bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent" />
        <div className="absolute left-0 right-0 top-[82%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-200/80">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00f2fe]" />
              Tech stack / 2026
            </div>

            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Skills
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              The languages, libraries, and tools I use to build fast,
              thoughtful, and reliable digital experiences.
            </p>
          </div>

          <div className="flex w-fit items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.045] p-1.5 backdrop-blur-xl">
            {FILTERS.map((item) => {
              const isActive = filter === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className="relative rounded-xl px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors sm:px-4"
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-skill-filter"
                      className="absolute inset-0 rounded-xl bg-cyan-300/[0.14] shadow-[0_0_18px_rgba(0,242,254,0.12)]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  <span
                    className={cn(
                      "relative z-10",
                      isActive ? "text-cyan-100" : "text-zinc-500 hover:text-zinc-200",
                    )}
                  >
                    {item}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <motion.div
            layout
            className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.045] p-6 backdrop-blur-xl lg:col-span-4 lg:row-span-2 lg:p-8"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                  <Terminal className="h-5 w-5" />
                </div>

                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-200/60">
                  Core stack
                </div>
              </div>

              <div className="mt-16">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Building with
                </p>

                <h3 className="mt-3 max-w-xs font-display text-3xl font-semibold leading-tight text-white">
                  Precision, motion & clean architecture.
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
                  A focused toolkit for creating polished interfaces that feel
                  as good as they perform.
                </p>
              </div>

              <div className="mt-auto pt-12">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00f2fe] shadow-[0_0_10px_rgba(0,242,254,0.9)]" />
                  System status
                  <span className="text-cyan-200/80">Operational</span>
                </div>

                <div className="mt-4 h-px bg-gradient-to-r from-cyan-300/40 via-cyan-300/10 to-transparent" />
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {featuredSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                featured
              />
            ))}
          </div>

          <motion.div
            layout
            className="grid gap-4 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4"
          >
            {secondarySkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index + featuredSkills.length}
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-5 grid gap-4 md:grid-cols-3"
        >
          {[
            {
              icon: Rocket,
              label: "Deployment ready",
              value: "Vercel / Netlify",
            },
            {
              icon: MousePointer2,
              label: "Interaction design",
              value: "Motion-first UI",
            },
            {
              icon: Check,
              label: "Workflow quality",
              value: "Clean & scalable",
            },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur-xl"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                <Icon className="h-4 w-4" />
              </span>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                  {label}
                </p>
                <p className="mt-0.5 text-sm text-zinc-300">{value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
