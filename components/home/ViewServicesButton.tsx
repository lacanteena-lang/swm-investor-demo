"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Props = {
  expanded: boolean;
  onClick: () => void;
};

export default function ViewServicesButton({
  expanded,
  onClick,
}: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.01 }}
      onClick={onClick}
      className="
        mt-8
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        border
        border-cyan-400/20
        bg-white/5
        px-6
        py-4
        backdrop-blur-xl
      "
    >
      <span className="font-semibold text-white">
        {expanded
          ? "Hide Safety Services"
          : "View All Safety Services"}
      </span>

      <motion.div
        animate={{
          rotate: expanded ? 180 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
      >
        <ChevronDown
          size={20}
          className="text-cyan-300"
        />
      </motion.div>
    </motion.button>
  );
}