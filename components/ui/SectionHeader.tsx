"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 max-w-[320px] text-[15px] font-semibold leading-7 text-red-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}