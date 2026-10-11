"use client";

import { useState } from "react";
import { UserRound } from "lucide-react";

/** Glass-framed portrait. Put your photo at public/profile.jpg. */
export default function ProfileImage() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-cyan-400/30 via-violet-500/25 to-transparent blur-2xl"
        aria-hidden="true"
      />
      <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.06] p-3 shadow-[0_0_60px_rgba(0,242,254,0.12)] backdrop-blur-xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-onyx">
          {failed ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-cyan-400/10 to-violet-500/10 px-6 text-center">
              <UserRound className="h-14 w-14 text-white/30" />
              <p className="text-sm text-zinc-400">
                Add your photo at{" "}
                <code className="text-cyan-300">public/profile.jpg</code>
              </p>
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/profile.jpg"
              alt="Portrait of Ahmad Ibraheem"
              onError={() => setFailed(true)}
              className="h-full w-full object-cover"
            />
          )}
        </div>
        <div className="mt-3 rounded-2xl border border-white/10 bg-onyx/60 px-4 py-3 backdrop-blur-xl">
          <p className="font-display font-medium text-white">Ahmad Ibraheem</p>
          <p className="text-xs text-zinc-400">Front-End Developer</p>
        </div>
      </div>
    </div>
  );
}
