"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

type AIOrbProps = {
  size?: number;
  iconSize?: number;
};

export default function AIOrb({
  size = 176,
  iconSize = 72,
}: AIOrbProps) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
      }}
    >
      {/* Outer Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.9, 0.45],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-cyan-400/15 blur-[55px]"
      />

      {/* Middle Glow */}

      <motion.div
        animate={{
          scale: [0.92, 1.02, 0.92],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-5 rounded-full bg-cyan-400/10 blur-3xl"
      />

      {/* Orb */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 22,
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
          border-cyan-400/20
          bg-gradient-to-br
          from-cyan-400/20
          via-sky-500/10
          to-blue-600/10
          backdrop-blur-3xl
          shadow-[0_0_70px_rgba(34,211,238,0.25)]
        "
      >
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Bot
            size={iconSize}
            className="text-cyan-300"
          />
        </motion.div>
      </motion.div>

      {/* Orbit Ring */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-[-10px]
          rounded-full
          border
          border-cyan-400/10
        "
      />

      {/* Orbit Dot */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[-16px]"
      >
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
      </motion.div>
    </div>
  );
}