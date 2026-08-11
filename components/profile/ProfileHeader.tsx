"use client";

import { motion } from "framer-motion";
import {
  User,
  ShieldCheck,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import StatusBadge from "../ui/StatusBadge";

export default function ProfileHeader() {
  return (
    <GlassCard>
      <div className="w-full min-w-0 px-3">

        {/* Avatar */}

        <div className="flex justify-center">

          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 rgba(34,211,238,0)",
                "0 0 30px rgba(34,211,238,0.20)",
                "0 0 0 rgba(34,211,238,0)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
            "
          >
            <User
              size={46}
              strokeWidth={1.5}
              className="text-cyan-300"
            />
          </motion.div>

        </div>


        {/* Title */}

        <div className="mt-5 text-center">

          <p className="text-[9px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
            PERSONAL SAFETY PROFILE
          </p>

          <h2 className="mt-2 text-[24px] font-bold tracking-tight text-white">
            Your Safety Profile
          </h2>

          <p className="mx-auto mt-2 max-w-[280px] text-[11px] font-semibold leading-5 text-red-400">
  Your identity, safety information and protection preferences.
</p>
            
          

        </div>


        {/* Protected Status */}

        <div className="mt-5 flex justify-center">

          <div className="flex items-center gap-2">

            <motion.span
              animate={{
                opacity: [0.35, 1, 0.35],
                scale: [0.9, 1.15, 0.9],
              }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-400
                shadow-[0_0_12px_rgba(52,211,153,0.9)]
              "
            />

            <StatusBadge
              label="Protected"
              color="green"
            />

          </div>

        </div>


        {/* Personal Concierge */}

        <div className="mt-6 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">

              <ShieldCheck
                size={21}
                strokeWidth={1.8}
                className="text-emerald-300"
              />

            </div>

            <div className="min-w-0">

              <p className="text-[12px] font-semibold text-white">
                Personal Safety Concierge
              </p>

              <p className="mt-1 text-[10px] font-semibold leading-5 text-red-400">
  Connected and ready to assist 24/7
</p>
                
              

            </div>

            <motion.span
              animate={{
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                ml-auto
                h-2
                w-2
                shrink-0
                rounded-full
                bg-emerald-400
                shadow-[0_0_10px_rgba(52,211,153,0.8)]
              "
            />

          </div>

        </div>

      </div>
    </GlassCard>
  );
}