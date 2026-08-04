"use client";

import { motion } from "framer-motion";
import { Bell } from "lucide-react";

export default function OnlineHeader() {
  return (
    <div className="mb-8">

      {/* Header Row */}

      <div className="relative flex items-center justify-between">

        {/* Left Spacer */}

        <div className="h-12 w-12" />

        {/* Center Online Pill */}

        <div className="absolute left-1/2 -translate-x-1/2">

          <motion.div
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              items-center
              gap-3
              rounded-full
              bg-black
              px-5
              py-2.5
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
              className="h-3 w-3 rounded-full bg-emerald-400"
            />

            <span className="text-sm font-semibold text-white">
              Online
            </span>

          </motion.div>

        </div>

        {/* Notification */}

        <button
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
        </button>

      </div>

    </div>
  );
}