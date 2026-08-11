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
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative mx-auto mt-2"
    >
      {/* Premium Ambient Glow */}

      <div
        className="
          absolute
          inset-0
          scale-110
          rounded-[32px]
          bg-cyan-400/20
          blur-[60px]
        "
      />

      {/* Outer Glass */}

      <div
        className="
          relative
          rounded-[32px]
          border
          border-cyan-400/15
          bg-gradient-to-br
          from-white/8
          via-[#0B1628]/90
          to-[#08111E]
          p-2
          backdrop-blur-3xl
          shadow-[0_0_60px_rgba(34,211,238,0.18)]
        "
      >

        {/* Inner Card */}

        <div
          className="
            rounded-[28px]
            border
            border-white/5
            bg-[#09111F]/80
            px-6
            py-6
          "
        >

          <Image
            src="/images/swm-logo.png"
            alt="Stay With Me"
            width={210}
            height={210}
            priority
            className="mx-auto object-contain"
          />

        </div>

      </div>

    </motion.div>
  );
}