"use client";

import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

import GlassCard from "../ui/GlassCard";
import PremiumButton from "../ui/PremiumButton";

export default function SOSCountdown() {
  return (
    <GlassCard className="p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-[0.30em] text-red-300/70">
            EMERGENCY SOS
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Emergency Ready
          </h2>

        </div>

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-red-500/15
          "
        >
          <ShieldAlert
            size={30}
            className="text-red-400"
          />
        </motion.div>

      </div>

      {/* Countdown */}

      <div className="mt-10 flex justify-center">

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="
            flex
            h-36
            w-36
            items-center
            justify-center
            rounded-full
            border
            border-red-400/20
            bg-red-500/10
          "
        >

          <span className="text-6xl font-black text-red-300">
            3
          </span>

        </motion.div>

      </div>

      {/* Status */}

      <div className="mt-8 rounded-2xl bg-white/5 p-5">

        <p className="text-center text-white/70 leading-7">
          If activated, Stay With Me will immediately begin the
          emergency workflow, notify your Personal Safety Concierge,
          and prepare your emergency contacts.
        </p>

      </div>

      {/* Action */}

      <div className="mt-8">

        <PremiumButton className="bg-red-500 text-white shadow-[0_0_35px_rgba(239,68,68,0.35)]">
          Activate Emergency SOS
        </PremiumButton>

      </div>

    </GlassCard>
  );
}