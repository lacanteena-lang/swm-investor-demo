"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

type AIOrbProps = {
  size?: number;
  iconSize?: number;
};

export default function AIOrb({
  size = 148,
  iconSize = 56,
}: AIOrbProps) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
      }}
    >
      {/* Ambient Glow — SWM Sealed Blue */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.30, 0.75, 0.30],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-[-18px] rounded-full bg-[#0878D8]/15 blur-[65px]"
      />

      {/* Inner Glow — SWM Sealed Blue */}
      <motion.div
        animate={{
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-3 rounded-full bg-[#0758B8]/10 blur-3xl"
      />

      {/* Main Orb */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          relative
          flex
          h-full
          w-full
          items-center
          justify-center
          rounded-full
          border
          border-[#0878D8]/15
          bg-gradient-to-br
          from-[#163453]
          via-[#0E2036]
          to-[#08131F]
          backdrop-blur-3xl
          shadow-[0_0_80px_rgba(8,120,216,0.25)]
        "
      >
        {/* Core */}
        <div
          className="
            absolute
            inset-6
            rounded-full
            border
            border-white/5
            bg-gradient-to-br
            from-[#0878D8]/10
            to-transparent
          "
        />

        {/* AI Icon — SWM Sealed Blue */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        >
          <Bot
            size={iconSize}
            className="text-[#0878D8]"
          />
        </motion.div>
      </motion.div>

      {/* Orbit Ring — SWM Sealed Blue */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-[-8px]
          rounded-full
          border
          border-[#0758B8]/20
        "
      />

      {/* Orbit Dot — SWM Sealed Blue */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[-10px]"
      >
        <div
          className="
            absolute
            left-1/2
            top-0
            h-3
            w-3
            -translate-x-1/2
            rounded-full
            bg-[#0878D8]
            shadow-[0_0_25px_rgba(8,120,216,0.9)]
          "
        />
      </motion.div>
    </div>
  );
}