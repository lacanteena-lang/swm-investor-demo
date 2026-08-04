"use client";

import { motion } from "framer-motion";
import {
  Navigation,
  ShieldAlert,
} from "lucide-react";

export default function JourneyCards() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4">

      {/* Journey */}

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="
          rounded-[30px]
          border
          border-cyan-400/15
          bg-white/5
          p-6
          backdrop-blur-2xl
          shadow-[0_20px_40px_rgba(0,0,0,0.30)]
        "
      >
        <div className="flex justify-center">

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-cyan-500/10
            "
          >
            <Navigation
              size={30}
              className="text-cyan-300"
            />
          </div>

        </div>

        <p className="mt-6 text-center text-xs uppercase tracking-[0.30em] text-cyan-300">
          Journey
        </p>

        <p className="mt-3 text-center text-2xl font-bold text-white">
          Standby
        </p>

        <div className="mt-5 flex justify-center">

          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

        </div>

      </motion.div>

      {/* Emergency */}

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="
          rounded-[30px]
          border
          border-red-400/15
          bg-white/5
          p-6
          backdrop-blur-2xl
          shadow-[0_20px_40px_rgba(0,0,0,0.30)]
        "
      >
        <div className="flex justify-center">

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-red-500/10
            "
          >
            <ShieldAlert
              size={30}
              className="text-red-400"
            />
          </div>

        </div>

        <p className="mt-6 text-center text-xs uppercase tracking-[0.30em] text-red-300">
          Emergency
        </p>

        <p className="mt-3 text-center text-2xl font-bold text-white">
          Ready 24/7
        </p>

        <div className="mt-5 flex justify-center">

          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

        </div>

      </motion.div>

    </div>
  );
}