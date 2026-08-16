"use client";

import { motion } from "framer-motion";

export default function StatusPills() {
  return (
    <div className="mt-8 space-y-4">

      {/* Concierge */}

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="
          flex
          items-center
          gap-4
          rounded-full
          border
          border-emerald-400/20
          bg-white/5
          px-5
          py-4
          backdrop-blur-xl
        "
      >

        <motion.div
          animate={{
            opacity: [1, 0.35, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            h-3
            w-3
            rounded-full
            bg-emerald-400
          "
        />

        <span className="font-semibold text-white">
          Personal Safety Concierge Online
        </span>

      </motion.div>

      {/* AI */}

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="
          flex
          items-center
          gap-4
          rounded-full
          border
          border-cyan-400/20
          bg-white/5
          px-5
          py-4
          backdrop-blur-xl
          w-fit
        "
      >

        <motion.div
          animate={{
            opacity: [1, 0.35, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            h-3
            w-3
            rounded-full
            bg-cyan-400
          "
        />

        <span className="font-semibold text-white">
          AI Concierge Ready
        </span>

      </motion.div>

    </div>
  );
}