"use client";

import { motion } from "framer-motion";
import { Mic, MicOff } from "lucide-react";

import GlassCard from "../ui/GlassCard";
import PremiumButton from "../ui/PremiumButton";
import VoiceWaveform from "../ui/VoiceWaveform";

export default function VoicePanel() {
  return (
    <GlassCard className="p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-[0.30em] text-cyan-300/70">
            Voice Assistant
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Speak Naturally
          </h2>

          <p className="mt-2 text-sm leading-7 text-white/60">
            Your AI Concierge is ready to listen and respond in real time.
          </p>

        </div>

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-cyan-400/15
          "
        >
          <Mic
            size={30}
            className="text-cyan-300"
          />
        </motion.div>

      </div>

      <div className="mt-8">

        <VoiceWaveform />

      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">

        <PremiumButton className="py-3">

          <div className="flex items-center justify-center gap-2">

            <Mic size={18} />

            Start Listening

          </div>

        </PremiumButton>

        <button
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            py-3
            font-medium
            text-white
            transition-all
            hover:bg-white/10
          "
        >

          <div className="flex items-center justify-center gap-2">

            <MicOff size={18} />

            Stop

          </div>

        </button>

      </div>

    </GlassCard>
  );
}