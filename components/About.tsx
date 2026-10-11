import { Download } from "lucide-react";
import ProfileImage from "./ProfileImage";
import Reveal from "./Reveal";

const STATS = [
  { value: "94/100", label: "Fourth year project" },
  { value: "10+", label: "Web projects" },
  { value: "AI", label: "Integrated in my tools" },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal scale>
          <ProfileImage />
        </Reveal>

        <div>
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              About me
            </h2>
            <div className="mt-6 max-w-xl space-y-4 leading-relaxed text-zinc-400">
              <p>
                I&apos;m Ahmad Ibraheem, a front-end developer who cares about
                how software feels as much as how it works. I build responsive
                interfaces with React, Next.js, and TypeScript, and I keep the
                code typed, modular, and easy to maintain.
              </p>
              <p>
                I also add AI to the products I build: a code assistant with an
                embedded editor, and a tourism guide powered by the Vercel AI
                SDK. I enjoy turning a model&apos;s output into an interface
                people can actually use.
              </p>
            </div>
            <a
              href="/cv.pdf"
              download
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 font-medium text-cyan-300 transition-colors hover:bg-cyan-400 hover:text-onyx"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {STATS.map((stat, i) => (
              <li key={stat.label}>
                <Reveal delay={0.1 * i}>
                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-xl transition-colors hover:border-violet-400/30">
                    <p className="font-display text-3xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
