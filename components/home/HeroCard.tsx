"use client";

import Image from "next/image";

export default function HeroCard() {
  return (
    <div className="relative">

      {/* Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-[-120px] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-cyan-400/12 blur-[90px]" />
      </div>

      <div className="relative flex flex-col items-center">

        <Image
          src="/images/swm-logo.png"
          alt="SWM"
          width={62}
          height={62}
          priority
          className="object-contain"
        />

        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.36em] text-cyan-300">
          PERSONAL SAFETY
        </p>

        <h1 className="mt-2 text-center text-[22px] font-bold text-white">
          You're Protected
        </h1>

        <p className="mt-2 max-w-[250px] text-center text-[12px] leading-5 text-[#AAB6C9]">
          AI-powered protection backed by your
          <br />
          Personal Safety Concierge.
        </p>

        <div className="mt-4 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2">
          <span className="text-[10px] font-semibold tracking-wide text-emerald-300">
            ● LIVE PROTECTION ACTIVE
          </span>
        </div>

      </div>

    </div>
  );
}