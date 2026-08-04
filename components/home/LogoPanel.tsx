"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LogoPanel() {
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
      className="relative mx-auto mt-6"
    >
      {/* Ambient Glow */}

      <div
        className="
          absolute
          inset-0
          rounded-[28px]
          bg-cyan-500/20
          blur-3xl
          scale-105
        "
      />

      {/* Premium Logo Card */}

      <div
        className="
          relative
          rounded-[24px]
          border
          border-cyan-400/20
          bg-[#09111F]/80
          px-5
          py-5
          backdrop-blur-2xl
          shadow-[0_0_40px_rgba(34,211,238,0.18)]
        "
      >
        <Image
          src="/images/swm-logo.png"
          alt="Stay With Me"
          width={200}
          height={200}
          priority
          className="mx-auto object-contain"
        />
      </div>

    </motion.div>
  );
}