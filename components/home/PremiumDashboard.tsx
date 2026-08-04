"use client";

import Image from "next/image";
import { Bell, Navigation, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export default function PremiumDashboard() {
  return (
    <div
      className="
        h-full
        overflow-y-auto
        no-scrollbar
        px-6
        pt-6
        pb-36
      "
    >
      {/* ================= HEADER ================= */}

      <div className="relative flex items-center justify-between">

        <div className="w-11" />

        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            absolute
            left-1/2
            -translate-x-1/2
            flex
            items-center
            gap-2
            rounded-full
            bg-black
            px-5
            py-2
          "
        >
          <motion.div
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="h-2.5 w-2.5 rounded-full bg-emerald-400"
          />

          <span className="text-sm font-semibold text-white">
            Online
          </span>

        </motion.div>

        <button
          className="
            ml-auto
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/5
          "
        >
          <Bell
            size={18}
            className="text-white"
          />
        </button>

      </div>

      {/* ================= HERO ================= */}

      <div className="mt-12">

        <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-400">
          PERSONAL SAFETY
        </p>

        <h1 className="mt-3 text-4xl font-bold text-white">
          You're Protected
        </h1>

        <p className="mt-4 max-w-[290px] text-[16px] leading-7 text-white/65">
          AI-powered protection backed by your Personal Safety Concierge,
          ready whenever you need assistance.
        </p>

      </div>

      {/* ================= STATUS ================= */}

      <div className="mt-8 space-y-3">

        <div className="flex items-center gap-3 rounded-full border border-emerald-400/20 bg-white/5 px-5 py-3">

          <div className="h-3 w-3 rounded-full bg-emerald-400" />

          <span className="font-medium text-white">
            Personal Safety Concierge Online
          </span>

        </div>

        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-5 py-3">

          <div className="h-3 w-3 rounded-full bg-cyan-400" />

          <span className="font-medium text-white">
            AI Concierge Ready
          </span>

        </div>

      </div>

      {/* ================= LOGO ================= */}

      <motion.div
        animate={{ scale: [1, 1.015, 1] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="relative mt-8"
      >

        <div className="absolute inset-0 rounded-[30px] bg-cyan-500/20 blur-[50px]" />

        <div
          className="
            relative
            rounded-[28px]
            border
            border-cyan-400/20
            bg-[#09111F]/90
            px-6
            py-5
          "
        >

          <Image
            src="/images/swm-logo.png"
            alt="Stay With Me"
            width={185}
            height={185}
            priority
            className="mx-auto object-contain"
          />

        </div>

      </motion.div>

      {/* ================= JOURNEY ================= */}

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-[26px] border border-cyan-400/15 bg-white/5 p-5">

          <div className="flex justify-center">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10">

              <Navigation
                size={28}
                className="text-cyan-300"
              />

            </div>

          </div>

          <p className="mt-5 text-center text-xs uppercase tracking-[0.30em] text-cyan-300">
            Journey
          </p>

          <p className="mt-2 text-center text-xl font-bold text-white">
            Standby
          </p>

          <div className="mt-4 flex items-center justify-center gap-2">

            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

            <span className="text-xs text-white/70">
              Protected
            </span>

          </div>

        </div>

        <div className="rounded-[26px] border border-red-400/15 bg-white/5 p-5">

          <div className="flex justify-center">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">

              <ShieldAlert
                size={28}
                className="text-red-400"
              />

            </div>

          </div>

          <p className="mt-5 text-center text-xs uppercase tracking-[0.30em] text-red-300">
            Emergency
          </p>

          <p className="mt-2 text-center text-xl font-bold text-white">
            Ready 24/7
          </p>

          <div className="mt-4 flex items-center justify-center gap-2">

            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

            <span className="text-xs text-white/70">
              Monitoring
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}