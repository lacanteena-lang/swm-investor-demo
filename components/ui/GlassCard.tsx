"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={`
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-cyan-400/15
        bg-gradient-to-br
        from-[#081425]
        via-[#0A1B33]
        to-[#09111F]
        backdrop-blur-3xl
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        ${className}
      `}
    >
      {/* Ambient Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-40
          w-40
          rounded-full
          bg-cyan-400/10
          blur-[90px]
        "
      />

      {/* Top Highlight */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-300/30
          to-transparent
        "
      />

      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}