"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LogoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{
        opacity: 1,
        scale: [1, 1.015, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative mt-8"
    >
      {/* Blue Ambient Glow */}

      <div
        className="
          absolute
          inset-0
          rounded-[34px]
          bg-cyan-500/20
          blur-[55px]
          scale-105
        "
      />

      {/* Premium Card */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-cyan-400/25
          bg-[#09111F]/90
          p-7
          backdrop-blur-2xl
          shadow-[0_0_60px_rgba(34,211,238,0.18)]
        "
      >
        {/* Inner Glow */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-cyan-400/5
            via-transparent
            to-transparent
          "
        />

        <Image
          src="/images/swm-logo.png"
          alt="Stay With Me"
          width={210}
          height={210}
          priority
          className="relative mx-auto object-contain"
        />
      </div>
    </motion.div>
  );
}