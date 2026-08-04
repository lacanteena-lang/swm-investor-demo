"use client";

import { motion } from "framer-motion";
import { Route, ArrowRight } from "lucide-react";

export default function StartJourneyPanel() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        mt-8
        rounded-[32px]
        border
        border-cyan-400/20
        bg-gradient-to-br
        from-[#0B1628]
        via-[#08111F]
        to-[#06101B]
        p-6
        shadow-[0_0_40px_rgba(34,211,238,0.10)]
        backdrop-blur-2xl
      "
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/15">
        <Route size={34} className="text-cyan-300" />
      </div>

      <h2 className="mt-6 text-center text-2xl font-bold text-white">
        Start Safe Journey
      </h2>

      <p className="mt-3 text-center text-[15px] leading-7 text-white/65">
        AI Concierge and your Personal Safety Concierge
        will stay with you from departure until you arrive safely.
      </p>

      <motion.button
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.01 }}
        className="
          mt-8
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-cyan-400
          py-4
          text-base
          font-semibold
          text-slate-900
          shadow-lg
        "
      >
        Start Journey
        <ArrowRight size={20} />
      </motion.button>

      <p className="mt-4 text-center text-xs tracking-wide text-cyan-200/70">
        Live tracking • AI assistance • Personal concierge
      </p>
    </motion.section>
  );
}