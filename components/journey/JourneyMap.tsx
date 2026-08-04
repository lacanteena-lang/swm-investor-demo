"use client";

import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Navigation,
  ShieldCheck,
  Clock3,
  Route,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import StatusBadge from "../ui/StatusBadge";

export default function JourneyMap() {
  return (
    <GlassCard className="p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-[0.30em] text-cyan-300/70">
            LIVE JOURNEY
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Protected Route
          </h2>

        </div>

        <StatusBadge
          label="AI Monitoring"
          color="green"
        />

      </div>

      {/* Route */}

      <div className="relative mt-12 px-4">

        {/* Background Line */}

        <div className="absolute left-10 right-10 top-7 h-[3px] rounded-full bg-white/10" />

        {/* Animated Progress */}

        <motion.div
          animate={{
            width: ["5%", "25%", "45%", "65%", "85%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="
            absolute
            left-10
            top-7
            h-[3px]
            rounded-full
            bg-cyan-300
          "
        />

        <div className="relative flex items-center justify-between">

          {/* Home */}

          <div className="flex flex-col items-center">

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-white/5
              "
            >

              <Home
                size={24}
                className="text-cyan-300"
              />

            </div>

            <p className="mt-3 text-sm text-white">
              Home
            </p>

          </div>

          {/* Moving Navigation */}
          <motion.div
            animate={{
              x: [-45, 45, 120, 190, 250],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute left-10 top-1"
          >
            <div className="rounded-full bg-cyan-400 p-3 shadow-[0_0_25px_rgba(34,211,238,0.45)]">

              <Navigation
                size={18}
                className="text-slate-950"
              />

            </div>
          </motion.div>

          {/* Office */}

          <div className="flex flex-col items-center">

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-white/5
              "
            >

              <Briefcase
                size={24}
                className="text-cyan-300"
              />

            </div>

            <p className="mt-3 text-sm text-white">
              Office
            </p>

          </div>

        </div>

      </div>

      {/* Live Journey Details */}

      <div className="mt-10 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-white/5 p-4">

          <Route
            size={22}
            className="text-cyan-300"
          />

          <p className="mt-3 text-xs uppercase tracking-[0.20em] text-white/45">
            Progress
          </p>

          <motion.p
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-2 text-xl font-bold text-white"
          >
            68%
          </motion.p>

        </div>

        <div className="rounded-2xl bg-white/5 p-4">

          <Clock3
            size={22}
            className="text-cyan-300"
          />

          <p className="mt-3 text-xs uppercase tracking-[0.20em] text-white/45">
            ETA
          </p>

          <motion.p
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-2 text-xl font-bold text-white"
          >
            18 min
          </motion.p>

        </div>

      </div>
      {/* Live Status */}

      <div className="mt-8 rounded-2xl bg-white/5 p-5">

        <div className="flex items-center justify-between">

          <span className="text-white/60">
            AI Monitoring
          </span>

          <span className="text-emerald-300">
            Active
          </span>

        </div>

        <div className="mt-4 flex items-center justify-between">

          <span className="text-white/60">
            Personal Safety Concierge
          </span>

          <div className="flex items-center gap-2">

            <ShieldCheck
              size={18}
              className="text-emerald-300"
            />

            <span className="text-emerald-300">
              Connected
            </span>

          </div>

        </div>

      </div>

    </GlassCard>
  );
}