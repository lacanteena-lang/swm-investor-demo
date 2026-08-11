"use client";

import { motion } from "framer-motion";
import {
  MapPinned,
  ShieldCheck,
} from "lucide-react";

export default function HeroStats() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-5">

      {/* Protected Journey */}

      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
        className="
          rounded-[30px]
          border
          border-cyan-400/10
          bg-white/5
          p-6
          backdrop-blur-2xl
        "
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10">

          <MapPinned
            size={30}
            className="text-cyan-300"
          />

        </div>

        <p className="mt-5 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
          Protected Journey
        </p>

        <h3 className="mt-3 text-center text-xl font-bold text-white">
          Ready
        </h3>

        <p className="mt-2 text-center text-sm text-white/60">
          Start protected travel anytime.
        </p>

        <div className="mt-5 flex justify-center">

          <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">

            <div className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-xs font-medium text-emerald-300">
              Available
            </span>

          </div>

        </div>

      </motion.div>

      {/* Emergency SOS */}

      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
        className="
          rounded-[30px]
          border
          border-red-400/10
          bg-white/5
          p-6
          backdrop-blur-2xl
        "
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">

          <ShieldCheck
            size={30}
            className="text-red-300"
          />

        </div>

        <p className="mt-5 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-red-300">
          Emergency SOS
        </p>

        <h3 className="mt-3 text-center text-xl font-bold text-white">
          Ready 24/7
        </h3>

        <p className="mt-2 text-center text-sm text-white/60">
          Instant AI and Concierge response.
        </p>

        <div className="mt-5 flex justify-center">

          <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">

            <div className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-xs font-medium text-emerald-300">
              Available
            </span>

          </div>

        </div>

      </motion.div>

    </div>
  );
}