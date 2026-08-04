"use client";

import { motion } from "framer-motion";

type Props = {
  title?: string;
  statusColor?: string;
};

export default function DynamicIsland({
  title = "Protected",
  statusColor = "bg-emerald-400",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: 1,
        width: [128, 138, 128],
      }}
      transition={{
        opacity: { duration: 0.3 },
        width: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="absolute left-1/2 top-3 z-50 flex h-9 -translate-x-1/2 items-center justify-center rounded-full bg-black/95 px-5 shadow-lg"
    >
      <div className={`mr-2 h-2 w-2 rounded-full ${statusColor}`} />

      <span className="text-[11px] font-medium tracking-wide text-white/90">
        {title}
      </span>
    </motion.div>
  );
}