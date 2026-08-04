"use client";

import { MapPinned, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export default function JourneyEmergencyCards() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4">

      {/* Journey */}

      <motion.div
        whileTap={{ scale: 0.98 }}
        className="
          rounded-[26px]
          border
          border-cyan-400/15
          bg-white/5
          p-5
          backdrop-blur-xl
        "
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15">
          <MapPinned
            size={24}
            className="text-cyan-300"
          />
        </div>

        <p className="text-lg font-semibold text-white">
          Journey
        </p>

        <p className="mt-1 text-sm text-white/60">
          Ready
        </p>
      </motion.div>

      {/* Emergency */}

      <motion.div
        whileTap={{ scale: 0.98 }}
        className="
          rounded-[26px]
          border
          border-red-400/15
          bg-white/5
          p-5
          backdrop-blur-xl
        "
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/15">
          <ShieldAlert
            size={24}
            className="text-red-300"
          />
        </div>

        <p className="text-lg font-semibold text-white">
          Emergency
        </p>

        <p className="mt-1 text-sm text-white/60">
          Ready
        </p>
      </motion.div>

    </div>
  );
}