"use client";

import {
  MapPinned,
  ShieldCheck,
} from "lucide-react";

export default function HeroStats() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4">

      {/* Journey */}

      <div
        className="
          rounded-[28px]
          border
          border-white/10
          bg-white/5
          p-5
          backdrop-blur-xl
        "
      >
        <div className="flex justify-center">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-cyan-500/10
            "
          >
            <MapPinned
              size={28}
              className="text-cyan-300"
            />
          </div>

        </div>

        <p className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Journey
        </p>

        <p className="mt-2 text-center text-3xl font-bold text-white">
          Standby
        </p>

        <div className="mt-5 flex justify-center">
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>

      </div>

      {/* Emergency */}

      <div
        className="
          rounded-[28px]
          border
          border-white/10
          bg-white/5
          p-5
          backdrop-blur-xl
        "
      >
        <div className="flex justify-center">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-cyan-500/10
            "
          >
            <ShieldCheck
              size={28}
              className="text-cyan-300"
            />
          </div>

        </div>

        <p className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Emergency
        </p>

        <p className="mt-2 text-center text-3xl font-bold text-white">
          Ready 24/7
        </p>

        <div className="mt-5 flex justify-center">
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>

      </div>

    </div>
  );
}