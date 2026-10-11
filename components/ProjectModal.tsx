// // "use client";

// // import { useEffect, useRef } from "react";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { Check, ExternalLink, X } from "lucide-react";
// // import type { Project } from "@/data/projects";
// // import { cn } from "@/lib/utils";
// // import { GithubIcon } from "./Icons";

// // interface ProjectModalProps {
// //   project: Project | null;
// //   onClose: () => void;
// // }

// // export default function ProjectModal({ project, onClose }: ProjectModalProps) {
// //   const closeRef = useRef<HTMLButtonElement>(null);
// //   const lastFocused = useRef<HTMLElement | null>(null);

// //   useEffect(() => {
// //     if (!project) return;

// //     lastFocused.current = document.activeElement as HTMLElement | null;
// //     closeRef.current?.focus();
// //     document.body.style.overflow = "hidden";

// //     const onKey = (e: KeyboardEvent) => {
// //       if (e.key === "Escape") onClose();
// //     };
// //     window.addEventListener("keydown", onKey);

// //     return () => {
// //       document.body.style.overflow = "";
// //       window.removeEventListener("keydown", onKey);
// //       lastFocused.current?.focus();
// //     };
// //   }, [project, onClose]);

// //   return (
// //     <AnimatePresence>
// //       {project && (
// //         <motion.div
// //           key={project.id}
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           exit={{ opacity: 0 }}
// //           transition={{ duration: 0.2 }}
// //           className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
// //           onClick={onClose}
// //         >
// //           <motion.div
// //             role="dialog"
// //             aria-modal="true"
// //             aria-labelledby="project-modal-title"
// //             initial={{ y: 40, opacity: 0 }}
// //             animate={{ y: 0, opacity: 1 }}
// //             exit={{ y: 40, opacity: 0 }}
// //             transition={{ type: "spring", damping: 28, stiffness: 300 }}
// //             onClick={(e) => e.stopPropagation()}
// //             className="relative flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-zinc-900 shadow-2xl sm:rounded-3xl"
// //           >
// //             <div
// //               className={cn(
// //                 "relative h-32 shrink-0 bg-gradient-to-br sm:h-40",
// //                 project.gradient,
// //               )}
// //             >
// //               <button
// //                 ref={closeRef}
// //                 type="button"
// //                 onClick={onClose}
// //                 aria-label="Close project details"
// //                 className="absolute right-4 top-4 rounded-full bg-onyx/60 p-2 text-white backdrop-blur transition-colors hover:bg-onyx"
// //               >
// //                 <X className="h-5 w-5" />
// //               </button>
// //               <span className="absolute bottom-4 left-6 rounded-full bg-onyx/60 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
// //                 {project.category}
// //               </span>
// //             </div>

// //             <div className="overflow-y-auto p-6 sm:p-8">
// //               <h3
// //                 id="project-modal-title"
// //                 className="font-display text-2xl font-bold text-white sm:text-3xl"
// //               >
// //                 {project.title}
// //                 {project.titleAr && (
// //                   <span dir="rtl" className="ml-3 text-xl font-normal text-zinc-500">
// //                     {project.titleAr}
// //                   </span>
// //                 )}
// //               </h3>
// //               <p className="mt-3 leading-relaxed text-zinc-300">
// //                 {project.overview}
// //               </p>

// //               <h4 className="mt-8 font-display text-sm font-semibold text-white">
// //                 Highlights
// //               </h4>
// //               <ul className="mt-3 space-y-2">
// //                 {project.highlights.map((item) => (
// //                   <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
// //                     <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
// //                     {item}
// //                   </li>
// //                 ))}
// //               </ul>

// //               <h4 className="mt-8 font-display text-sm font-semibold text-white">
// //                 Full tech stack
// //               </h4>
// //               <ul className="mt-3 flex flex-wrap gap-2">
// //                 {project.stack.map((tech) => (
// //                   <li
// //                     key={tech}
// //                     className="rounded-lg border border-violet-300/20 bg-violet-300/5 px-2.5 py-1 text-xs text-violet-200"
// //                   >
// //                     {tech}
// //                   </li>
// //                 ))}
// //               </ul>

// //               <h4 className="mt-8 font-display text-sm font-semibold text-white">
// //                 Architecture notes
// //               </h4>
// //               <ul className="mt-3 space-y-3">
// //                 {project.architectureNotes.map((note) => (
// //                   <li
// //                     key={note}
// //                     className="border-l-2 border-cyan-400/40 pl-4 text-sm leading-relaxed text-zinc-400"
// //                   >
// //                     {note}
// //                   </li>
// //                 ))}
// //               </ul>

// //               <div className="mt-8 flex flex-wrap gap-3">
// //                 <a
// //                   href={project.liveUrl}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-medium text-onyx transition-colors hover:bg-cyan-300"
// //                 >
// //                   <ExternalLink className="h-4 w-4" />
// //                   Live Demo
// //                 </a>
// //                 <a
// //                   href={project.githubUrl}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
// //                 >
// //                   <GithubIcon className="h-4 w-4" />
// //                   View Code
// //                 </a>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </motion.div>
// //       )}
// //     </AnimatePresence>
// //   );
// // }

// "use client";

// import { useEffect, useRef } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Check, ExternalLink, X } from "lucide-react";
// import type { Project } from "@/data/projects";
// import { cn } from "@/lib/utils";
// import { GithubIcon } from "./Icons";

// interface ProjectModalProps {
//   project: Project | null;
//   onClose: () => void;
// }

// export default function ProjectModal({ project, onClose }: ProjectModalProps) {
//   const closeRef = useRef<HTMLButtonElement>(null);
//   const lastFocused = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     if (!project) return;

//     lastFocused.current = document.activeElement as HTMLElement | null;
//     closeRef.current?.focus();
//     document.body.style.overflow = "hidden";

//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", onKey);

//     return () => {
//       document.body.style.overflow = "";
//       window.removeEventListener("keydown", onKey);
//       lastFocused.current?.focus();
//     };
//   }, [project, onClose]);

//   return (
//     <AnimatePresence>
//       {project && (
//         <motion.div
//           key={project.id}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.2 }}
//           className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
//           onClick={onClose}
//         >
//           <motion.div
//             role="dialog"
//             aria-modal="true"
//             aria-labelledby="project-modal-title"
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 40, opacity: 0 }}
//             transition={{ type: "spring", damping: 28, stiffness: 300 }}
//             onClick={(e) => e.stopPropagation()}
//             className="relative flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-zinc-900 shadow-2xl sm:rounded-3xl"
//           >
//             <div
//               className={cn(
//                 "relative h-32 shrink-0 bg-gradient-to-br sm:h-40",
//                 project.gradient,
//               )}
//             >
//               <button
//                 ref={closeRef}
//                 type="button"
//                 onClick={onClose}
//                 aria-label="Close project details"
//                 className="absolute right-4 top-4 rounded-full bg-onyx/60 p-2 text-white backdrop-blur transition-colors hover:bg-onyx"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//               <span className="absolute bottom-4 left-6 rounded-full bg-onyx/60 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
//                 {project.category}
//               </span>
//             </div>

//             <div className="overflow-y-auto p-6 sm:p-8">
//               <h3
//                 id="project-modal-title"
//                 className="font-display text-2xl font-bold text-white sm:text-3xl"
//               >
//                 {project.title}
//                 {project.titleAr && (
//                   <span dir="rtl" className="ml-3 text-xl font-normal text-zinc-500">
//                     {project.titleAr}
//                   </span>
//                 )}
//               </h3>
//               <p className="mt-3 leading-relaxed text-zinc-300">
//                 {project.overview}
//               </p>

//               <h4 className="mt-8 font-display text-sm font-semibold text-white">
//                 Highlights
//               </h4>
//               <ul className="mt-3 space-y-2">
//                 {project.highlights.map((item) => (
//                   <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
//                     <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>

//               <h4 className="mt-8 font-display text-sm font-semibold text-white">
//                 Full tech stack
//               </h4>
//               <ul className="mt-3 flex flex-wrap gap-2">
//                 {project.stack.map((tech) => (
//                   <li
//                     key={tech}
//                     className="rounded-lg border border-violet-300/20 bg-violet-300/5 px-2.5 py-1 text-xs text-violet-200"
//                   >
//                     {tech}
//                   </li>
//                 ))}
//               </ul>

//               <h4 className="mt-8 font-display text-sm font-semibold text-white">
//                 Architecture notes
//               </h4>
//               <ul className="mt-3 space-y-3">
//                 {project.architectureNotes.map((note) => (
//                   <li
//                     key={note}
//                     className="border-l-2 border-cyan-400/40 pl-4 text-sm leading-relaxed text-zinc-400"
//                   >
//                     {note}
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-8 flex flex-wrap gap-3">
//                 {project.liveUrl && (
// <a
//                   href={project.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-medium text-onyx transition-colors hover:bg-cyan-300"
//                 >
//                   <ExternalLink className="h-4 w-4" />
//                   Live Demo
//                 </a>
// )}
//                 {project.githubUrl ? (
// <a
//                   href={project.githubUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
//                 >
//                   <GithubIcon className="h-4 w-4" />
//                   View Code
//                 </a>
// ) : (
// <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm text-zinc-500">
// <GithubIcon className="h-4 w-4" />
// Private repository
// </span>
// )}
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ExternalLink, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    lastFocused.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      lastFocused.current?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-zinc-900 shadow-2xl sm:rounded-3xl"
          >
            <div
              className={cn(
                "relative shrink-0 overflow-hidden bg-gradient-to-br",
                project.image ? "aspect-[2/1] max-h-[38dvh]" : "h-32 sm:h-40",
                project.gradient,
              )}
            >
              {project.image && (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"
                  />
                </>
              )}
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="absolute right-4 top-4 rounded-full bg-onyx/60 p-2 text-white backdrop-blur transition-colors hover:bg-onyx"
              >
                <X className="h-5 w-5" />
              </button>
              <span className="absolute bottom-4 left-6 rounded-full bg-onyx/60 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
                {project.category}
              </span>
            </div>

            <div className="overflow-y-auto p-6 sm:p-8">
              <h3
                id="project-modal-title"
                className="font-display text-2xl font-bold text-white sm:text-3xl"
              >
                {project.title}
                {project.titleAr && (
                  <span
                    dir="rtl"
                    className="ml-3 text-xl font-normal text-zinc-500"
                  >
                    {project.titleAr}
                  </span>
                )}
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-300">
                {project.overview}
              </p>

              <h4 className="mt-8 font-display text-sm font-semibold text-white">
                Highlights
              </h4>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-zinc-300"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <h4 className="mt-8 font-display text-sm font-semibold text-white">
                Full tech stack
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-violet-300/20 bg-violet-300/5 px-2.5 py-1 text-xs text-violet-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <h4 className="mt-8 font-display text-sm font-semibold text-white">
                Architecture notes
              </h4>
              <ul className="mt-3 space-y-3">
                {project.architectureNotes.map((note) => (
                  <li
                    key={note}
                    className="border-l-2 border-cyan-400/40 pl-4 text-sm leading-relaxed text-zinc-400"
                  >
                    {note}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-medium text-onyx transition-colors hover:bg-cyan-300"
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
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    <GithubIcon className="h-4 w-4" />
                    View Code
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm text-zinc-500">
                    <GithubIcon className="h-4 w-4" />
                    Private repository
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
