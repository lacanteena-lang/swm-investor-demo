"use client";

import Image from "next/image";

export default function HeroCard() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-[-110px] h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-cyan-400/12 blur-[80px]" />
      </div>

      <div className="relative flex flex-col items-center">

        {/* NEW SWM LOGO */}
        <div className="relative mt-0 h-[110px] w-[110px]">
          <Image
            src="/images/swm-3logo.png"
            alt="SWM - Stay With Me"
            fill
            priority
            sizes="110px"
            className="object-contain"
          />
        </div>

        {/* PERSONAL SAFETY */}
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-300">
          PERSONAL SAFETY
        </p>

        {/* MAIN HEADING */}
        <h1 className="mt-1 text-center text-[22px] font-bold text-white">
          You are Protected
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-1 max-w-[250px] text-center text-[12px] leading-5 text-[#D5DDEC]">
          AI-powered protection backed by your
          <br />
          Personal Safety Concierge.
        </p>

        {/* LIVE PROTECTION */}
        <div className="mt-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2">
          <span className="text-[10px] font-semibold tracking-wide text-emerald-300">
            ● LIVE PROTECTION ACTIVE
          </span>
        </div>

      </div>
    </div>
  );
}