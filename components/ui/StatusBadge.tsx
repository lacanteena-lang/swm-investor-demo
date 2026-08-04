"use client";

import { motion } from "framer-motion";

type StatusBadgeProps = {
  label: string;
  color?: "green" | "cyan" | "red" | "amber";
};

export default function StatusBadge({
  label,
  color = "green",
}: StatusBadgeProps) {
  const colors = {
    green: "bg-emerald-400",
    cyan: "bg-cyan-300",
    red: "bg-red-400",
    amber: "bg-amber-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-white/10
        bg-white/5
        px-4
        py-2
        backdrop-blur-xl
      "
    >
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
        }}
        className={`h-2.5 w-2.5 rounded-full ${colors[color]}`}
      />

      <span className="text-sm font-medium text-white">
        {label}
      </span>
    </motion.div>
  );
}