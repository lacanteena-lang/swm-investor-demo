"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Headphones,
  ShieldCheck,
  Check,
} from "lucide-react";

export default function JourneyStatus() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#071322]/85 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.28)]">

      {/* Header */}

      <div className="mb-5">

        <p className="text-[9px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
          LIVE PROTECTION STATUS
        </p>

        <h3 className="mt-2 text-[23px] font-bold tracking-tight text-white">
          Protection Active
        </h3>

      </div>


      {/* AI MONITORING */}

      <div className="flex items-center gap-4 border-b border-white/5 py-4">

        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10">

          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.45, 0.8, 0.45],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-2xl bg-cyan-400/10"
          />

          <Bot
            size={21}
            strokeWidth={1.8}
            className="relative text-cyan-300"
          />

        </div>


        <div className="min-w-0 flex-1">

          <p className="text-[13px] font-semibold text-white">
            AI Monitoring
          </p>

          <p className="mt-1 text-[10px] leading-relaxed text-white/40">
            Continuously analyzing your journey
          </p>

        </div>


        <div className="flex items-center gap-2">

          <motion.span
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [0.9, 1.15, 0.9],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"
          />

          <span className="text-[13px] font-semibold text-emerald-300">
            Active
          </span>

        </div>

      </div>


      {/* PERSONAL CONCIERGE */}

      <div className="flex items-center gap-4 border-b border-white/5 py-4">

        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-400/10">

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.35, 0.75, 0.35],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-2xl bg-violet-400/10"
          />

          <Headphones
            size={21}
            strokeWidth={1.8}
            className="relative text-violet-300"
          />

        </div>


        <div className="min-w-0 flex-1">

          <p className="text-[13px] font-semibold text-white">
            Personal Safety Concierge
          </p>

          <p className="mt-1 text-[10px] leading-relaxed text-white/40">
            Live support remains connected
          </p>

        </div>


        <div className="flex items-center gap-2">

          <motion.span
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [0.9, 1.15, 0.9],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"
          />

          <span className="text-[13px] font-semibold text-emerald-300">
            Online
          </span>

        </div>

      </div>


      {/* JOURNEY STATUS */}

      <div className="mt-4 flex items-center gap-4 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10">

          <ShieldCheck
            size={22}
            strokeWidth={1.8}
            className="text-emerald-300"
          />

        </div>


        <div className="min-w-0 flex-1">

          <p className="text-[13px] font-semibold text-white">
            Journey Secure
          </p>

          <p className="mt-1 text-[10px] leading-relaxed text-white/45">
            Route is protected • No deviation detected
          </p>

        </div>


        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/10">

          <Check
            size={17}
            strokeWidth={2.5}
            className="text-emerald-300"
          />

        </div>

      </div>

    </div>
  );
}