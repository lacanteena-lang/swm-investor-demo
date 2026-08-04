"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export default function PremiumCard({
  children,
  className = "",
  glow = true,
}: PremiumCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -2,
        scale: 1.01,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-cyan-400/15
        bg-[rgba(10,20,35,0.72)]
        backdrop-blur-3xl
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        ${className}
      `}
    >
      {glow && (
        <>
          <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-[90px]" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-44 w-44 rounded-full bg-blue-500/8 blur-[70px]" />
        </>
      )}

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}