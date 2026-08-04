"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type PremiumButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function PremiumButton({
  children,
  onClick,
  className = "",
}: PremiumButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className={`
        relative
        w-full
        overflow-hidden
        rounded-2xl
        bg-cyan-400
        py-4
        px-6
        font-semibold
        text-slate-950
        shadow-[0_0_35px_rgba(34,211,238,0.35)]
        transition-all
        duration-300
        ${className}
      `}
    >
      {/* Glow */}

      <motion.div
        animate={{
          x: ["-120%", "120%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-y-0
          w-20
          bg-white/20
          blur-xl
        "
      />

      <span className="relative z-10">
        {children}
      </span>
    </motion.button>
  );
}