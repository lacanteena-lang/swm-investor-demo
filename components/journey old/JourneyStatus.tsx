"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Headphones,
  ShieldCheck,
  ChevronRight,
  Clock3,
  LockKeyhole,
} from "lucide-react";
import { useState } from "react";

type Panel = "ai" | "concierge" | "secure" | null;

export default function JourneyStatus() {
  const [activePanel, setActivePanel] = useState<Panel>(null);

  const togglePanel = (panel: Panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-400/15 bg-[#071322]/90 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.30)]">

      {/* HEADER */}

      <div className="relative z-10 mb-5">
        <p className="text-[9px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
          LIVE PROTECTION STATUS
        </p>

        <div className="mt-2 flex items-center justify-between gap-3">
          <h3 className="text-[23px] font-bold tracking-tight text-white">
            Protection Active
          </h3>

          <div className="flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.08] px-3 py-1.5">
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
              className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-cyan-200">
              LIVE
            </span>
          </div>
        </div>

        <p className="mt-2 text-[10px] font-medium text-white/55">
          You are never alone. We are with you.
        </p>
      </div>


      {/* AI MONITORING */}

      <motion.button
        type="button"
        whileTap={{ scale: 0.99 }}
        onClick={() => togglePanel("ai")}
        className="relative z-10 mt-4 w-full text-left"
      >
        <div
          className={`rounded-[24px] border p-4 transition-all duration-300 ${
            activePanel === "ai"
              ? "border-violet-400/50 bg-violet-500/[0.10] shadow-[0_0_35px_rgba(139,92,246,0.12)]"
              : "border-white/10 bg-white/[0.025] hover:border-violet-400/30 hover:bg-violet-500/[0.04]"
          }`}
        >
          <div className="flex items-center gap-4">

            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-violet-400/35 bg-violet-500/[0.08]">

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-4px] rounded-full border border-violet-400/20 border-t-violet-300"
              />

              <BrainCircuit
                size={25}
                strokeWidth={1.8}
                className="relative text-red-400"
              />
            </div>

            <div className="min-w-0 flex-1">

              <div className="flex items-center justify-between gap-3">

                <p className="text-[14px] font-bold text-white">
                  AI Monitoring
                </p>

                <div className="flex items-center gap-2">
                  <motion.span
                    animate={{
                      opacity: [0.4, 1, 0.4],
                      scale: [0.9, 1.15, 0.9],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                    className="h-2 w-2 rounded-full bg-cyan-300"
                  />

                  <span className="text-[12px] font-bold text-cyan-300">
                    Active
                  </span>
                </div>

              </div>

              <p className="mt-2 text-[10px] leading-relaxed text-white/65">
                Continuously analyzing your journey
              </p>

              {activePanel === "ai" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3 flex items-center justify-between border-t border-white/10 pt-3"
                >
                  <span className="text-[9px] text-white/45">
                    Last analysis: 12 sec ago
                  </span>

                  <ChevronRight
                    size={14}
                    className="text-violet-300"
                  />
                </motion.div>
              )}

            </div>

          </div>
        </div>
      </motion.button>


      {/* PERSONAL SAFETY CONCIERGE */}

      <motion.button
        type="button"
        whileTap={{ scale: 0.99 }}
        onClick={() => togglePanel("concierge")}
        className="relative z-10 mt-3 w-full text-left"
      >
        <div
          className={`rounded-[24px] border p-4 transition-all duration-300 ${
            activePanel === "concierge"
              ? "border-violet-400/50 bg-violet-500/[0.10] shadow-[0_0_35px_rgba(139,92,246,0.12)]"
              : "border-white/10 bg-white/[0.025] hover:border-violet-400/30 hover:bg-violet-500/[0.04]"
          }`}
        >

          <div className="flex items-center gap-4">

            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-violet-400/35 bg-violet-500/[0.08]">

              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-[-3px] rounded-full border border-violet-400/20"
              />

              <Headphones
                size={25}
                strokeWidth={1.8}
                className="relative text-red-400"
              />
            </div>

            <div className="min-w-0 flex-1">

              <div className="flex items-center justify-between gap-3">

                <p className="text-[14px] font-bold text-white">
                  Personal Safety Concierge
                </p>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                  <span className="text-[12px] font-bold text-emerald-300">
                    Online
                  </span>
                </div>

              </div>

              <p className="mt-2 text-[10px] leading-relaxed text-white/65">
                Live support remains connected
              </p>

              {activePanel === "concierge" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3 flex items-center justify-between border-t border-white/10 pt-3"
                >
                  <div className="flex items-center gap-2">
                    <Clock3 size={12} className="text-cyan-300" />

                    <span className="text-[9px] text-white/55">
                      Connected since 07:45 AM
                    </span>
                  </div>

                  <ChevronRight
                    size={14}
                    className="text-violet-300"
                  />
                </motion.div>
              )}

            </div>

          </div>

        </div>
      </motion.button>


      {/* JOURNEY SECURE */}

      <motion.button
        type="button"
        whileTap={{ scale: 0.99 }}
        onClick={() => togglePanel("secure")}
        className="relative z-10 mt-3 w-full text-left"
      >
        <div
          className={`rounded-[24px] border p-4 transition-all duration-300 ${
            activePanel === "secure"
              ? "border-violet-400/50 bg-violet-500/[0.10]"
              : "border-white/10 bg-white/[0.025] hover:border-violet-400/30 hover:bg-violet-500/[0.04]"
          }`}
        >

          <div className="flex items-center gap-4">

            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-violet-400/35 bg-violet-500/[0.08]">

              <ShieldCheck
                size={25}
                strokeWidth={1.8}
                className="text-red-400"
              />

            </div>

            <div className="min-w-0 flex-1">

              <div className="flex items-center justify-between gap-3">

                <p className="text-[14px] font-bold text-white">
                  Journey Secure
                </p>

                <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-2.5 py-1">

                  <LockKeyhole
                    size={11}
                    className="text-emerald-300"
                  />

                  <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-emerald-300">
                    Secure
                  </span>

                </div>

              </div>

              <p className="mt-2 text-[10px] leading-relaxed text-white/65">
                Route is protected
              </p>

              {activePanel === "secure" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3 border-t border-white/10 pt-3"
                >
                  <p className="text-[9px] text-white/55">
                    No deviation detected. AI Monitoring and Personal
                    Concierge remain connected.
                  </p>
                </motion.div>
              )}

            </div>

          </div>

        </div>
      </motion.button>


      {/* JOURNEY STATUS */}

      <div className="relative z-10 mt-4 grid grid-cols-4 border-t border-red-400/10 pt-4">

        {[
          ["Route", "Protected"],
          ["AI", "Active"],
          ["Concierge", "Connected"],
          ["Deviation", "None"],
        ].map(([label, value], index) => (
          <div
            key={label}
            className={`px-2 text-center ${
              index !== 0 ? "border-l border-white/10" : ""
            }`}
          >

            <span className="mx-auto block h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)]" />

            <p className="mt-2 text-[8px] font-semibold text-white/55">
              {label}
            </p>

            <p className="mt-1 text-[9px] font-bold text-white">
              {value}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}