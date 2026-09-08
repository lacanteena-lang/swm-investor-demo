"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Shield, X } from "lucide-react";

export default function StatusCards() {
  const [showProtected, setShowProtected] = useState(false);
  const [showAiReady, setShowAiReady] = useState(false);

  return (
    <>
      <section className="relative">

        {/* Section Title */}

        <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-400">
          TODAY'S STATUS
        </h3>

        <div className="grid grid-cols-2 gap-3">

          {/* Protected */}

          <button
            type="button"
            onClick={() => setShowProtected(true)}
            aria-label="Protected status"
            className="relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-[#0C182B]/95 p-4 text-left transition-all duration-200 hover:brightness-110 active:scale-[0.99]"
          >

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

          </button>

          {/* AI */}

          <button
            type="button"
            onClick={() => setShowAiReady(true)}
            aria-label="AI Ready status"
            className="relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-[#0C182B]/95 p-4 text-left transition-all duration-200 hover:brightness-110 active:scale-[0.99]"
          >

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

          </button>

        </div>

      </section>

      {/* AI READY STATUS MODAL */}

      {showAiReady && (
        <div
          className="fixed inset-0 z-[250] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
          onClick={() => setShowAiReady(false)}
        >
          <div
            className="w-full max-w-[340px] rounded-[26px] border border-white/10 bg-[#0d1420] p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
                  TODAY'S STATUS
                </p>

                <h3 className="mt-2 text-[22px] font-bold text-white">
                  AI Ready
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-white/45">
                  Your Personal Safety AI is online and ready to support your
                  safety journey.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowAiReady(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70"
                aria-label="Close AI Ready status"
              >
                <X size={17} />
              </button>
            </div>

            <div className="mt-5 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.035] p-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <span className="text-[10px] font-semibold text-cyan-300">
                  AI Concierge Online
                </span>
              </div>

              <p className="mt-2 text-[9px] leading-4 text-white/40">
                AI support is ready for supported safety workflows.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAiReady(false)}
              className="mt-5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[10px] font-semibold text-white/60 transition hover:bg-white/[0.08]"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* PROTECTED STATUS MODAL */}

      {showProtected && (
        <div
          className="fixed inset-0 z-[240] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
          onClick={() => setShowProtected(false)}
        >
          <div
            className="w-full max-w-[340px] rounded-[26px] border border-white/10 bg-[#0d1420] p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
                  TODAY'S STATUS
                </p>

                <h3 className="mt-2 text-[22px] font-bold text-white">
                  Protected
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-white/45">
                  Your SWM safety protection is currently active.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowProtected(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70"
                aria-label="Close Protected status"
              >
                <X size={17} />
              </button>

            </div>

            <div className="mt-5 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-4">

              <div className="flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                <span className="text-[10px] font-semibold text-emerald-300">
                  Protection Active
                </span>

              </div>

              <p className="mt-2 text-[9px] leading-4 text-white/40">
                Your Personal Safety Concierge is connected and ready to assist.
              </p>

            </div>

            <button
              type="button"
              onClick={() => setShowProtected(false)}
              className="mt-5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[10px] font-semibold text-white/60 transition hover:bg-white/[0.08]"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </>
  );
}