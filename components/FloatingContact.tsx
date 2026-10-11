"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, type LucideIcon } from "lucide-react";

// Your phone number in international format, digits only (no +, spaces, or leading zeros).
// Example: 963912345678  (country code 963 + number without the leading 0)
const PHONE_NUMBER = "+963997314693";

const WHATSAPP_MESSAGE =
  "Hi Ahmad, I saw your portfolio and I'd like to talk about a project.";

const digits = PHONE_NUMBER.replace(/\D/g, "");

interface Action {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
  pulse?: boolean;
}

const ACTIONS: Action[] = [
  {
    label: "Chat on WhatsApp",
    href: `https://wa.me/${digits}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    icon: MessageCircle,
    external: true,
    pulse: true,
  },
  {
    label: "Call Me",
    href: `tel:+${digits}`,
    icon: Phone,
  },
];

export default function FloatingContact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-16 right-6 z-50 flex flex-col gap-3"
    >
      {ACTIONS.map(({ label, href, icon: Icon, external, pulse }) => (
        <div key={label} className="group relative">
          {/* Tooltip */}
          <span
            role="tooltip"
            className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-full border border-white/10 bg-slate-900/80 px-3.5 py-1.5 text-sm font-medium text-white opacity-0 shadow-lg backdrop-blur-xl transition-all duration-200 group-focus-within:translate-x-0 group-focus-within:opacity-100 group-hover:translate-x-0 group-hover:opacity-100"
          >
            {label}
          </span>

          {/* Soft pulse ring */}
          {pulse && (
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-ping rounded-full bg-cyan-400/20 motion-reduce:animate-none"
            />
          )}

          <motion.a
            href={href}
            aria-label={label}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 32px rgba(0,242,254,0.55)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-900/60 text-cyan-300 shadow-[0_0_24px_rgba(0,242,254,0.25)] backdrop-blur-xl transition-colors hover:border-cyan-400/50 hover:text-cyan-400"
          >
            <Icon className="h-6 w-6" />
          </motion.a>
        </div>
      ))}
    </motion.div>
  );
}
