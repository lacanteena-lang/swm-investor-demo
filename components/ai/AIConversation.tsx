"use client";

import { motion } from "framer-motion";

import GlassCard from "../ui/GlassCard";

export default function AIConversation() {
  return (
    <GlassCard className="p-6">

      <div className="space-y-5">

        {/* AI */}

        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="inline-block max-w-[85%] rounded-3xl rounded-tl-lg bg-cyan-400/15 px-5 py-4">

            <p className="text-white leading-7">
              Good afternoon.
              <br />
              Your Personal Safety Concierge is online.
              <br />
              How may I assist you today?
            </p>

          </div>
        </motion.div>

        {/* User */}

        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-end"
        >
          <div className="inline-block max-w-[80%] rounded-3xl rounded-tr-lg bg-cyan-400 px-5 py-4">

            <p className="text-slate-950">
              I am travelling home alone.
            </p>

          </div>
        </motion.div>

        {/* AI */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          <div className="inline-block max-w-[90%] rounded-3xl rounded-tl-lg bg-white/5 px-5 py-4">

            <p className="text-white leading-7">
              I can start a Protected Journey,
              monitor your route continuously,
              and connect your Personal Safety Concierge.
            </p>

          </div>
        </motion.div>

        {/* Typing Indicator */}

        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
          className="flex items-center gap-2"
        >

          <div className="h-2 w-2 rounded-full bg-cyan-300" />
          <div className="h-2 w-2 rounded-full bg-cyan-300" />
          <div className="h-2 w-2 rounded-full bg-cyan-300" />

          <span className="ml-3 text-sm text-white/50">
            AI is typing...
          </span>

        </motion.div>

      </div>

    </GlassCard>
  );
}