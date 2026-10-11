// // "use client";

// // import { useCallback, useEffect, useMemo, useState } from "react";
// // import { motion, type PanInfo } from "framer-motion";
// // import {
// //   Brain,
// //   ChevronLeft,
// //   ChevronRight,
// //   ExternalLink,
// //   Globe,
// //   Info,
// //   Pause,
// //   Play,
// // } from "lucide-react";
// // import {
// //   PROJECT_FILTERS,
// //   projects,
// //   type Project,
// //   type ProjectFilter,
// // } from "@/data/projects";
// // import { cn } from "@/lib/utils";
// // import { GithubIcon } from "./Icons";
// // import ProjectModal from "./ProjectModal";

// // interface ProjectCardProps {
// //   project: Project;
// //   offset: number;
// //   onFocusCard: () => void;
// //   onOpen: (project: Project) => void;
// // }

// // function ProjectCard({ project, offset, onFocusCard, onOpen }: ProjectCardProps) {
// //   const CategoryIcon = project.category === "AI Tools" ? Brain : Globe;
// //   const isActive = offset === 0;
// //   const distance = Math.abs(offset);

// //   return (
// //     <motion.div
// //       animate={{
// //         x: `${offset * 58}%`,
// //         rotateY: -offset * 35,
// //         scale: isActive ? 1 : 0.8,
// //         opacity: distance > 1 ? 0 : isActive ? 1 : 0.5,
// //       }}
// //       transition={{ type: "spring", stiffness: 140, damping: 20 }}
// //       style={{ zIndex: 10 - distance, transformPerspective: 1200 }}
// //       onClick={() => {
// //         if (!isActive) onFocusCard();
// //       }}
// //       inert={!isActive}
// //       aria-hidden={!isActive}
// //       className={cn(
// //         "absolute inset-0 m-auto flex h-[430px] w-[290px] flex-col overflow-hidden rounded-3xl border bg-white/[0.06] backdrop-blur-xl sm:w-[340px]",
// //         isActive
// //           ? "border-cyan-400/30 shadow-[0_0_60px_rgba(0,242,254,0.12)]"
// //           : "cursor-pointer border-white/10",
// //       )}
// //     >
// //       <div
// //         className={cn(
// //           "relative flex h-36 shrink-0 items-center justify-center bg-gradient-to-br",
// //           project.gradient,
// //         )}
// //       >
// //         <CategoryIcon className="h-12 w-12 text-white/40" aria-hidden="true" />
// //         <span className="absolute left-3 top-3 rounded-full bg-onyx/60 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
// //           {project.category}
// //         </span>
// //       </div>

// //       <div className="flex flex-1 flex-col p-5">
// //         <h3 className="font-display text-xl font-semibold text-white">
// //           {project.title}
// //           {project.titleAr && (
// //             <span dir="rtl" className="ml-2 text-base font-normal text-zinc-500">
// //               {project.titleAr}
// //             </span>
// //           )}
// //         </h3>
// //         <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">
// //           {project.description}
// //         </p>

// //         <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech stack">
// //           {project.stack.slice(0, 4).map((tech) => (
// //             <li
// //               key={tech}
// //               className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-300"
// //             >
// //               {tech}
// //             </li>
// //           ))}
// //           {project.stack.length > 4 && (
// //             <li className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-500">
// //               +{project.stack.length - 4}
// //             </li>
// //           )}
// //         </ul>

// //         <div className="mt-auto flex flex-wrap gap-2 pt-4">
// //           <a
// //             href={project.liveUrl}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-400 px-3 py-2 text-sm font-medium text-onyx transition-colors hover:bg-cyan-300"
// //           >
// //             <ExternalLink className="h-4 w-4" />
// //             Live Demo
// //           </a>
// //           <a
// //             href={project.githubUrl}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
// //           >
// //             <GithubIcon className="h-4 w-4" />
// //             View Code
// //           </a>
// //           <button
// //             type="button"
// //             onClick={() => onOpen(project)}
// //             className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-violet-300 transition-colors hover:bg-violet-400/10"
// //           >
// //             <Info className="h-4 w-4" />
// //             View Details
// //           </button>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // export default function Projects() {
// //   const [filter, setFilter] = useState<ProjectFilter>("All");
// //   const [index, setIndex] = useState(0);
// //   const [paused, setPaused] = useState(false);
// //   const [hovered, setHovered] = useState(false);
// //   const [selected, setSelected] = useState<Project | null>(null);

// //   const visible = useMemo(
// //     () =>
// //       filter === "All" ? projects : projects.filter((p) => p.category === filter),
// //     [filter],
// //   );
// //   const count = visible.length;

// //   const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
// //   const prev = useCallback(
// //     () => setIndex((i) => (i - 1 + count) % count),
// //     [count],
// //   );

// //   useEffect(() => {
// //     if (paused || hovered || selected || count < 2) return;
// //     const timer = setInterval(next, 4500);
// //     return () => clearInterval(timer);
// //   }, [paused, hovered, selected, count, next]);

// //   function changeFilter(item: ProjectFilter) {
// //     setFilter(item);
// //     setIndex(0);
// //   }

// //   function handleDragEnd(_: unknown, info: PanInfo) {
// //     if (info.offset.x < -60) next();
// //     else if (info.offset.x > 60) prev();
// //   }

// //   const half = Math.floor(count / 2);

// //   return (
// //     <section id="projects" className="px-4 py-20 sm:px-6">
// //       <div className="mx-auto max-w-6xl">
// //         <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
// //           <div className="max-w-2xl">
// //             <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
// //               Featured projects
// //             </h2>
// //             <p className="mt-3 text-zinc-400">
// //               Medical, educational, and travel products built end to end. Drag,
// //               scroll through, or tap a card to explore.
// //             </p>
// //           </div>

// //           <div
// //             role="group"
// //             aria-label="Filter projects by category"
// //             className="flex gap-1 rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl"
// //           >
// //             {PROJECT_FILTERS.map((item) => (
// //               <button
// //                 key={item}
// //                 type="button"
// //                 onClick={() => changeFilter(item)}
// //                 aria-pressed={filter === item}
// //                 className={cn(
// //                   "rounded-xl px-4 py-2 text-sm font-medium transition-colors",
// //                   filter === item
// //                     ? "bg-cyan-400 text-onyx"
// //                     : "text-zinc-400 hover:text-white",
// //                 )}
// //               >
// //                 {item}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         <div
// //           role="region"
// //           aria-roledescription="carousel"
// //           aria-label="Featured projects"
// //           className="mt-12"
// //           onMouseEnter={() => setHovered(true)}
// //           onMouseLeave={() => setHovered(false)}
// //         >
// //           <motion.div
// //             drag="x"
// //             dragConstraints={{ left: 0, right: 0 }}
// //             dragElastic={0.15}
// //             onDragEnd={handleDragEnd}
// //             className="relative h-[470px] touch-pan-y overflow-hidden"
// //           >
// //             {visible.map((project, i) => {
// //               const offset = ((i - index + count + half) % count) - half;
// //               return (
// //                 <ProjectCard
// //                   key={project.id}
// //                   project={project}
// //                   offset={offset}
// //                   onFocusCard={() => setIndex(i)}
// //                   onOpen={setSelected}
// //                 />
// //               );
// //             })}
// //           </motion.div>

// //           <div className="mt-6 flex items-center justify-center gap-3">
// //             <button
// //               type="button"
// //               onClick={prev}
// //               aria-label="Previous project"
// //               className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cyan-300 backdrop-blur-xl transition-colors hover:bg-white/10"
// //             >
// //               <ChevronLeft className="h-5 w-5" />
// //             </button>
// //             <button
// //               type="button"
// //               onClick={() => setPaused((p) => !p)}
// //               aria-label={paused ? "Resume rotation" : "Pause rotation"}
// //               className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cyan-300 backdrop-blur-xl transition-colors hover:bg-white/10"
// //             >
// //               {paused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
// //             </button>
// //             <button
// //               type="button"
// //               onClick={next}
// //               aria-label="Next project"
// //               className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cyan-300 backdrop-blur-xl transition-colors hover:bg-white/10"
// //             >
// //               <ChevronRight className="h-5 w-5" />
// //             </button>
// //           </div>

// //           <div className="mt-4 flex justify-center gap-2" aria-hidden="true">
// //             {visible.map((project, i) => (
// //               <span
// //                 key={project.id}
// //                 className={cn(
// //                   "h-1.5 rounded-full transition-all",
// //                   i === index ? "w-6 bg-cyan-400" : "w-1.5 bg-white/20",
// //                 )}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       <ProjectModal project={selected} onClose={() => setSelected(null)} />
// //     </section>
// //   );
// // }

// "use client";

// import { useCallback, useEffect, useMemo, useState } from "react";
// import { motion, type PanInfo } from "framer-motion";
// import {
//   Brain,
//   ChevronLeft,
//   ChevronRight,
//   ExternalLink,
//   Globe,
//   Info,
//   Pause,
//   Play,
// } from "lucide-react";
// import {
//   PROJECT_FILTERS,
//   projects,
//   type Project,
//   type ProjectFilter,
// } from "@/data/projects";
// import { cn } from "@/lib/utils";
// import { GithubIcon } from "./Icons";
// import ProjectModal from "./ProjectModal";

// interface ProjectCardProps {
//   project: Project;
//   offset: number;
//   onFocusCard: () => void;
//   onOpen: (project: Project) => void;
// }

// function ProjectCard({
//   project,
//   offset,
//   onFocusCard,
//   onOpen,
// }: ProjectCardProps) {
//   const CategoryIcon = project.category === "AI Tools" ? Brain : Globe;
//   const isActive = offset === 0;
//   const distance = Math.abs(offset);

//   return (
//     <motion.div
//       animate={{
//         x: `${offset * 58}%`,
//         rotateY: -offset * 35,
//         scale: isActive ? 1 : 0.8,
//         opacity: distance > 1 ? 0 : isActive ? 1 : 0.5,
//       }}
//       transition={{ type: "spring", stiffness: 140, damping: 20 }}
//       style={{ zIndex: 10 - distance, transformPerspective: 1200 }}
//       onClick={() => {
//         if (!isActive) onFocusCard();
//       }}
//       inert={!isActive}
//       aria-hidden={!isActive}
//       className={cn(
//         "absolute inset-0 m-auto flex h-[430px] w-[290px] flex-col overflow-hidden rounded-3xl border bg-white/[0.06] backdrop-blur-xl sm:w-[340px]",
//         isActive
//           ? "border-cyan-400/30 shadow-[0_0_60px_rgba(0,242,254,0.12)]"
//           : "cursor-pointer border-white/10",
//       )}
//     >
//       <div
//         className={cn(
//           "relative flex h-36 shrink-0 items-center justify-center bg-gradient-to-br",
//           project.gradient,
//         )}
//       >
//         <CategoryIcon className="h-12 w-12 text-white/40" aria-hidden="true" />
//         <span className="absolute left-3 top-3 rounded-full bg-onyx/60 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
//           {project.category}
//         </span>
//       </div>

//       <div className="flex flex-1 flex-col p-5">
//         <h3 className="font-display text-xl font-semibold text-white">
//           {project.title}
//           {project.titleAr && (
//             <span
//               dir="rtl"
//               className="ml-2 text-base font-normal text-zinc-500"
//             >
//               {project.titleAr}
//             </span>
//           )}
//         </h3>
//         <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">
//           {project.description}
//         </p>

//         <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech stack">
//           {project.stack.slice(0, 4).map((tech) => (
//             <li
//               key={tech}
//               className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-300"
//             >
//               {tech}
//             </li>
//           ))}
//           {project.stack.length > 4 && (
//             <li className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-500">
//               +{project.stack.length - 4}
//             </li>
//           )}
//         </ul>

//         <div className="mt-auto flex flex-wrap gap-2 pt-4">
//           {project.liveUrl && (
//             <a
//               href={project.liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-400 px-3 py-2 text-sm font-medium text-onyx transition-colors hover:bg-cyan-300"
//             >
//               <ExternalLink className="h-4 w-4" />
//               Live Demo
//             </a>
//           )}
//           {project.githubUrl ? (
//             <a
//               href={project.githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
//             >
//               <GithubIcon className="h-4 w-4" />
//               View Code
//             </a>
//           ) : (
//             <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-500">
//               <GithubIcon className="h-4 w-4" />
//               Private repo
//             </span>
//           )}
//           <button
//             type="button"
//             onClick={() => onOpen(project)}
//             className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-violet-300 transition-colors hover:bg-violet-400/10"
//           >
//             <Info className="h-4 w-4" />
//             View Details
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function Projects() {
//   const [filter, setFilter] = useState<ProjectFilter>("All");
//   const [index, setIndex] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const [hovered, setHovered] = useState(false);
//   const [selected, setSelected] = useState<Project | null>(null);

//   const visible = useMemo(
//     () =>
//       filter === "All"
//         ? projects
//         : projects.filter((p) => p.category === filter),
//     [filter],
//   );
//   const count = visible.length;

//   const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
//   const prev = useCallback(
//     () => setIndex((i) => (i - 1 + count) % count),
//     [count],
//   );

//   useEffect(() => {
//     if (paused || hovered || selected || count < 2) return;
//     const timer = setInterval(next, 4500);
//     return () => clearInterval(timer);
//   }, [paused, hovered, selected, count, next]);

//   function changeFilter(item: ProjectFilter) {
//     setFilter(item);
//     setIndex(0);
//   }

//   function handleDragEnd(_: unknown, info: PanInfo) {
//     if (info.offset.x < -60) next();
//     else if (info.offset.x > 60) prev();
//   }

//   const half = Math.floor(count / 2);

//   return (
//     <section id="projects" className="px-4 py-20 sm:px-6">
//       <div className="mx-auto max-w-6xl">
//         <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
//           <div className="max-w-2xl">
//             <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
//               Featured projects
//             </h2>
//             <p className="mt-3 text-zinc-400">
//               Medical, educational, and travel products built end to end. Drag,
//               scroll through, or tap a card to explore.
//             </p>
//           </div>

//           <div
//             role="group"
//             aria-label="Filter projects by category"
//             className="flex gap-1 rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl"
//           >
//             {PROJECT_FILTERS.map((item) => (
//               <button
//                 key={item}
//                 type="button"
//                 onClick={() => changeFilter(item)}
//                 aria-pressed={filter === item}
//                 className={cn(
//                   "rounded-xl px-4 py-2 text-sm font-medium transition-colors",
//                   filter === item
//                     ? "bg-cyan-400 text-onyx"
//                     : "text-zinc-400 hover:text-white",
//                 )}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div
//           role="region"
//           aria-roledescription="carousel"
//           aria-label="Featured projects"
//           className="mt-12"
//           onMouseEnter={() => setHovered(true)}
//           onMouseLeave={() => setHovered(false)}
//         >
//           <motion.div
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragElastic={0.15}
//             onDragEnd={handleDragEnd}
//             className="relative h-[470px] touch-pan-y overflow-hidden"
//           >
//             {visible.map((project, i) => {
//               const offset = ((i - index + count + half) % count) - half;
//               return (
//                 <ProjectCard
//                   key={project.id}
//                   project={project}
//                   offset={offset}
//                   onFocusCard={() => setIndex(i)}
//                   onOpen={setSelected}
//                 />
//               );
//             })}
//           </motion.div>

//           <div className="mt-6 flex items-center justify-center gap-3">
//             <button
//               type="button"
//               onClick={prev}
//               aria-label="Previous project"
//               className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cyan-300 backdrop-blur-xl transition-colors hover:bg-white/10"
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </button>
//             <button
//               type="button"
//               onClick={() => setPaused((p) => !p)}
//               aria-label={paused ? "Resume rotation" : "Pause rotation"}
//               className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cyan-300 backdrop-blur-xl transition-colors hover:bg-white/10"
//             >
//               {paused ? (
//                 <Play className="h-5 w-5" />
//               ) : (
//                 <Pause className="h-5 w-5" />
//               )}
//             </button>
//             <button
//               type="button"
//               onClick={next}
//               aria-label="Next project"
//               className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cyan-300 backdrop-blur-xl transition-colors hover:bg-white/10"
//             >
//               <ChevronRight className="h-5 w-5" />
//             </button>
//           </div>

//           <div className="mt-4 flex justify-center gap-2" aria-hidden="true">
//             {visible.map((project, i) => (
//               <span
//                 key={project.id}
//                 className={cn(
//                   "h-1.5 rounded-full transition-all",
//                   i === index ? "w-6 bg-cyan-400" : "w-1.5 bg-white/20",
//                 )}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       <ProjectModal project={selected} onClose={() => setSelected(null)} />
//     </section>
//   );
// }











"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, type PanInfo } from "framer-motion";
import {
  Brain,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Globe,
  Info,
  Pause,
  Play,
} from "lucide-react";
import {
  PROJECT_FILTERS,
  projects,
  type Project,
  type ProjectFilter,
} from "@/data/projects";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./Icons";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
  offset: number;
  onFocusCard: () => void;
  onOpen: (project: Project) => void;
}

function ProjectCard({ project, offset, onFocusCard, onOpen }: ProjectCardProps) {
  const CategoryIcon = project.category === "AI Tools" ? Brain : Globe;
  const isActive = offset === 0;
  const distance = Math.abs(offset);

  return (
    <motion.div
      animate={{
        x: `${offset * 58}%`,
        rotateY: -offset * 35,
        scale: isActive ? 1 : 0.8,
        opacity: distance > 1 ? 0 : isActive ? 1 : 0.5,
      }}
      transition={{ type: "spring", stiffness: 140, damping: 20 }}
      style={{ zIndex: 10 - distance, transformPerspective: 1200 }}
      onClick={() => {
        if (!isActive) onFocusCard();
      }}
      inert={!isActive}
      aria-hidden={!isActive}
      className={cn(
        "absolute inset-0 m-auto flex h-[446px] w-[290px] flex-col overflow-hidden rounded-3xl border bg-white/[0.06] backdrop-blur-xl sm:w-[340px]",
        isActive
          ? "border-cyan-400/30 shadow-[0_0_60px_rgba(0,242,254,0.12)]"
          : "cursor-pointer border-white/10",
      )}
    >
      <div
        className={cn(
          "relative flex h-40 shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br",
          project.gradient,
        )}
      >
        {project.image ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="absolute inset-0 h-full w-full select-none object-cover object-top"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/60 via-transparent to-transparent ring-1 ring-inset ring-white/10"
            />
          </>
        ) : (
          <CategoryIcon className="h-12 w-12 text-white/40" aria-hidden="true" />
        )}
        <span className="absolute left-3 top-3 rounded-full bg-onyx/60 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold text-white">
          {project.title}
          {project.titleAr && (
            <span dir="rtl" className="ml-2 text-base font-normal text-zinc-500">
              {project.titleAr}
            </span>
          )}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.stack.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-300"
            >
              {tech}
            </li>
          ))}
          {project.stack.length > 4 && (
            <li className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-500">
              +{project.stack.length - 4}
            </li>
          )}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {project.liveUrl && (
<a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-400 px-3 py-2 text-sm font-medium text-onyx transition-colors hover:bg-cyan-300"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
)}
          {project.githubUrl ? (
<a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <GithubIcon className="h-4 w-4" />
            View Code
          </a>
) : (
<span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-500">
<GithubIcon className="h-4 w-4" />
Private repo
</span>
)}
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-violet-300 transition-colors hover:bg-violet-400/10"
          >
            <Info className="h-4 w-4" />
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = useMemo(
    () =>
      filter === "All" ? projects : projects.filter((p) => p.category === filter),
    [filter],
  );
  const count = visible.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused || hovered || selected || count < 2) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [paused, hovered, selected, count, next]);

  function changeFilter(item: ProjectFilter) {
    setFilter(item);
    setIndex(0);
  }

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) prev();
  }

  const half = Math.floor(count / 2);

  return (
    <section id="projects" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured projects
            </h2>
            <p className="mt-3 text-zinc-400">
              Medical, educational, and travel products built end to end. Drag,
              scroll through, or tap a card to explore.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex gap-1 rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl"
          >
            {PROJECT_FILTERS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => changeFilter(item)}
                aria-pressed={filter === item}
                className={cn(
                  "rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                  filter === item
                    ? "bg-cyan-400 text-onyx"
                    : "text-zinc-400 hover:text-white",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects"
          className="mt-12"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="relative h-[470px] touch-pan-y overflow-hidden"
          >
            {visible.map((project, i) => {
              const offset = ((i - index + count + half) % count) - half;
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  offset={offset}
                  onFocusCard={() => setIndex(i)}
                  onOpen={setSelected}
                />
              );
            })}
          </motion.div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cyan-300 backdrop-blur-xl transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Resume rotation" : "Pause rotation"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cyan-300 backdrop-blur-xl transition-colors hover:bg-white/10"
            >
              {paused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cyan-300 backdrop-blur-xl transition-colors hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-2" aria-hidden="true">
            {visible.map((project, i) => (
              <span
                key={project.id}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-6 bg-cyan-400" : "w-1.5 bg-white/20",
                )}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
