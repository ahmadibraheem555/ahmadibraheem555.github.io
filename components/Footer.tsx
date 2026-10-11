import { Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/utils";
import { GithubIcon, LinkedinIcon } from "./Icons";

const iconLink =
  "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-semibold text-white">
            Dev<span className="text-cyan-400">.</span>Ahmad
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Ahmad Ibraheem. All rights
            reserved.
          </p>
        </div>

        <ul className="flex items-center gap-3">
          <li>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={iconLink}
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconLink}
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a href={SOCIAL_LINKS.email} aria-label="Email" className={iconLink}>
              <Mail className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
