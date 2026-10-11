"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  scale?: boolean;
}

/** Fade-in + slide-up (optionally scale) when the element scrolls into view. */
export default function Reveal({
  children,
  delay = 0,
  className,
  scale = false,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: scale ? 0.95 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
