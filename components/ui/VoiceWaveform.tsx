"use client";

import { motion } from "framer-motion";

const bars = [
  18, 32, 22, 42, 28, 48,
  26, 36, 20, 40, 24, 34,
];

export default function VoiceWaveform() {
  return (
    <div className="flex h-[72px] items-center justify-center">

      {bars.map((height, index) => (
        <motion.div
          key={index}
          animate={{
            height: [
              height,
              height + 18,
              Math.max(10, height - 10),
              height + 8,
              height,
            ],
            opacity: [0.7, 1, 0.8, 1, 0.7],
          }}
          transition={{
            duration: 0.7 + index * 0.04,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.04,
          }}
          className="
            mx-[2px]
            w-[5px]
            rounded-full
            bg-red-500
            shadow-[0_0_7px_rgba(255,0,0,0.95),0_0_16px_rgba(255,0,0,0.65)]
          "
          style={{
            height,
          }}
        />
      ))}

    </div>
  );
}