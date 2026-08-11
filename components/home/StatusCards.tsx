"use client";

import { motion } from "framer-motion";
import { Bot, Shield } from "lucide-react";

export default function StatusCards() {
  return (
    <section className="relative">

      {/* Section Title */}

      <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-400">
        TODAY'S STATUS
      </h3>


      <div className="grid grid-cols-2 gap-3">

        {/* Protected */}

        <div className="relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-[#0C182B]/95 p-4">

          <motion.div
            animate={{
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-emerald-400/10 blur-2xl"
          />

          <div className="relative mt-3 flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10">

              <Shield
                size={18}
                strokeWidth={1.8}
                className="text-emerald-400"
              />

            </div>

            <div className="min-w-0">

              <h4 className="text-[13px] font-bold text-white">
                Protected
              </h4>

              <div className="mt-1 flex items-center gap-1.5">

                <motion.span
                  animate={{
                    opacity: [0.35, 1, 0.35],
                    scale: [0.9, 1.15, 0.9],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                />

                <p className="text-[11px] text-emerald-400">
                  Active
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* AI */}

        <div className="relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-[#0C182B]/95 p-4">

          <motion.div
            animate={{
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-cyan-400/10 blur-2xl"
          />

          <div className="relative mt-3 flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">

              <Bot
                size={18}
                strokeWidth={1.8}
                className="text-cyan-400"
              />

            </div>

            <div className="min-w-0">

              <h4 className="text-[13px] font-bold text-white">
                AI Ready
              </h4>

              <div className="mt-1 flex items-center gap-1.5">

                <motion.span
                  animate={{
                    opacity: [0.35, 1, 0.35],
                    scale: [0.9, 1.15, 0.9],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                />

                <p className="text-[11px] text-cyan-400">
                  Online
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}