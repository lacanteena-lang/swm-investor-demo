"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

export default function AppShell({ children }: Props) {
  return (
    <main className="min-h-dvh bg-[#030712] flex items-center justify-center overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -40, 50, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-56 -top-56 h-[650px] w-[650px] rounded-full bg-cyan-500/20 blur-[180px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 40, 0],
            y: [0, 60, -30, 0],
            scale: [1.04, 1, 1.06],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-56 -bottom-56 h-[650px] w-[650px] rounded-full bg-blue-600/20 blur-[190px]"
        />

      </div>

      {/* Phone */}

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="
          relative
          w-full
          max-w-[430px]
          h-dvh
          md:h-[844px]
          md:rounded-[48px]
          overflow-hidden
          border-0
          md:border
          border-white/10
          bg-[#09111F]/90
          shadow-none
          md:shadow-[0_40px_120px_rgba(0,0,0,0.70)]
          backdrop-blur-3xl
        "
      >

        {/* Dynamic Island */}

        <div className="absolute left-1/2 top-3 z-50 -translate-x-1/2 rounded-full bg-black px-5 py-2">

          <div className="flex items-center gap-2">

            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

            <span className="text-[11px] text-white">
              Protected
            </span>

          </div>

        </div>

        {/* Content */}

        <div
          className="
            absolute
            inset-0
            pt-14
            pb-[92px]
            overflow-hidden
          "
        >
          {children}
        </div>

      </motion.div>

    </main>
  );
}