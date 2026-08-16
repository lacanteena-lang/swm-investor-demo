"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Wifi,
  BatteryFull,
} from "lucide-react";

export default function DynamicIsland() {
  return (
    <>

      {/* Status Bar */}

      <div className="flex items-center justify-between px-1 pt-1">

        <span className="text-[13px] font-semibold text-white">
          9:41
        </span>

        <div className="flex items-center gap-2 text-white/80">

          <Wifi
            size={14}
            strokeWidth={2.2}
          />

          <BatteryFull
            size={16}
            strokeWidth={2.2}
          />

        </div>

      </div>

      {/* Online Dynamic Island */}

      <div className="relative mt-3 flex justify-center">

        <motion.div
          animate={{
            width: [150, 156, 150],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            h-10
            items-center
            justify-center
            gap-3
            rounded-full
            bg-black
            px-6
            shadow-2xl
          "
        >

          <motion.div
            animate={{
              opacity: [1, 0.35, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              h-3
              w-3
              rounded-full
              bg-emerald-400
            "
          />

          <span className="text-sm font-semibold text-white">
            Online
          </span>

        </motion.div>

      </div>

      {/* Header */}

      <div className="mt-8 flex items-start justify-between">

        <div>

          <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-400">
            PERSONAL SAFETY
          </p>

          <h1 className="mt-2 text-[34px] font-bold leading-tight text-white">
            You're Protected
          </h1>

          <p className="mt-3 max-w-[240px] text-[15px] leading-7 text-white/60">
            AI-powered protection backed by your
            Personal Safety Concierge,
            ready whenever you need assistance.
          </p>

        </div>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
          "
        >

          <Bell
            size={20}
            className="text-white"
          />

        </motion.button>

      </div>

    </>
  );
}