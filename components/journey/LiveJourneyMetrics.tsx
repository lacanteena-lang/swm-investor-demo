"use client";

import { motion } from "framer-motion";
import { Clock3, Route } from "lucide-react";

import GlassCard from "../ui/GlassCard";

export default function LiveJourneyMetrics() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-xl font-semibold text-white">
        Live Journey Metrics
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4">

        {/* Progress */}

        <motion.div
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="rounded-2xl bg-white/5 p-5"
        >

          <Route
            size={22}
            className="text-cyan-300"
          />

          <p className="mt-3 text-xs uppercase tracking-[0.20em] text-white/45">
            Progress
          </p>

          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="mt-2 text-3xl font-bold text-white"
          >
            68%
          </motion.p>

        </motion.div>

        {/* ETA */}

        <motion.div
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            delay: 0.2,
            repeat: Infinity,
          }}
          className="rounded-2xl bg-white/5 p-5"
        >

          <Clock3
            size={22}
            className="text-cyan-300"
          />

          <p className="mt-3 text-xs uppercase tracking-[0.20em] text-white/45">
            ETA
          </p>

          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="mt-2 text-3xl font-bold text-white"
          >
            18 min
          </motion.p>

        </motion.div>

      </div>

    </GlassCard>
  );
}