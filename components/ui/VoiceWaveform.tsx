"use client";

import { motion } from "framer-motion";

const bars = [18, 32, 22, 42, 28, 48, 26, 36, 20, 40, 24, 34];

export default function VoiceWaveform() {
  return (
    <div className="flex flex-col items-center">

      {/* Waveform */}

      <div className="flex h-14 items-end gap-1">

        {bars.map((height, index) => (
          <motion.div
            key={index}
            animate={{
              height: [
                height,
                height + 16,
                Math.max(10, height - 8),
                height,
              ],
            }}
            transition={{
              duration: 1 + index * 0.05,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="w-[5px] rounded-full bg-cyan-300"
            style={{
              height,
            }}
          />
        ))}

      </div>

      {/* Status */}

      <motion.p
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="mt-5 text-sm uppercase tracking-[0.30em] text-cyan-300"
      >
        Listening...
      </motion.p>

      <p className="mt-2 text-center text-sm text-white/55">
        Speak naturally.
        <br />
        Your AI Concierge is listening.
      </p>

    </div>
  );
}