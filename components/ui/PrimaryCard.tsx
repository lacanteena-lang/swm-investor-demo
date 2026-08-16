"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  title: string;
  subtitle: string;
  icon: ReactNode;
  accent?: boolean;
};

export default function PrimaryCard({
  title,
  subtitle,
  icon,
  accent = false,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{ duration: 0.25 }}
      className={`
        rounded-3xl
        p-5
        border
        backdrop-blur-2xl
        transition-all
        ${
          accent
            ? "border-cyan-400/30 bg-cyan-500/10"
            : "border-white/10 bg-white/5"
        }
      `}
    >
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-3xl">
        {icon}
      </div>

      <h2 className="text-1g font-semibold text-white">
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-white/60">
        {subtitle}
      </p>
    </motion.div>
  );
}