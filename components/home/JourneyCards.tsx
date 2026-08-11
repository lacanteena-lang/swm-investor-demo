"use client";

import { motion } from "framer-motion";
import {
  Navigation,
  ShieldAlert,
} from "lucide-react";

export default function JourneyCards() {
  return (
    <div className="grid grid-cols-2 gap-3">

      {/* Journey */}

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="
          rounded-[24px]
          border
          border-cyan-400/15
          bg-white/5
          p-4
          backdrop-blur-2xl
          shadow-[0_12px_24px_rgba(0,0,0,0.25)]
        "
      >
        <div className="flex justify-center">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-cyan-500/10
            "
          >
            <Navigation
              size={22}
              className="text-cyan-300"
            />
          </div>

        </div>

        <p className="mt-3 text-center text-[10px] uppercase tracking-[0.24em] text-cyan-300">
          Journey
        </p>

        <p className="mt-1 text-center text-lg font-bold text-white">
          Standby
        </p>

        <div className="mt-3 flex justify-center">

          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

        </div>

      </motion.div>

      {/* Emergency */}

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="
          rounded-[24px]
          border
          border-red-400/15
          bg-white/5
          p-4
          backdrop-blur-2xl
          shadow-[0_12px_24px_rgba(0,0,0,0.25)]
        "
      >
        <div className="flex justify-center">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-red-500/10
            "
          >
            <ShieldAlert
              size={22}
              className="text-red-400"
            />
          </div>

        </div>

        <p className="mt-3 text-center text-[10px] uppercase tracking-[0.24em] text-red-300">
          Emergency
        </p>

        <p className="mt-1 text-center text-lg font-bold text-white">
          Ready 24/7
        </p>

        <div className="mt-3 flex justify-center">

          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

        </div>

      </motion.div>

    </div>
  );
}