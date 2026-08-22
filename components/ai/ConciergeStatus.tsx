"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import {
  Headphones,
  ShieldCheck,
  Clock3,
  Bot,
  CheckCircle2,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";

export default function ConciergeStatus() {
  const [aiConciergeOpen, setAiConciergeOpen] = useState(false);
  const [humanConciergeOpen, setHumanConciergeOpen] = useState(false);
  const [responseTimeOpen, setResponseTimeOpen] = useState(false);
  const [neverAloneOpen, setNeverAloneOpen] = useState(false);

  return (
    <GlassCard>
      {/* =========================================================
          CONCIERGE HEADER
      ========================================================= */}

      <div className="relative overflow-hidden rounded-[28px] border border-cyan-300/15 bg-gradient-to-br from-cyan-400/[0.10] via-white/[0.04] to-emerald-400/[0.06] p-5">

        {/* Ambient glow */}

        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-[70px]" />

        <div className="pointer-events-none absolute -bottom-16 left-10 h-32 w-32 rounded-full bg-emerald-400/10 blur-[60px]" />

        <div className="relative flex items-center justify-between">

          {/* Concierge identity */}

          <div className="flex items-center gap-4">

            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                boxShadow: [
                  "0 0 18px rgba(34,211,238,0.12)",
                  "0 0 34px rgba(34,211,238,0.28)",
                  "0 0 18px rgba(34,211,238,0.12)",
                ],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                rounded-2xl
                border
                border-cyan-300/25
                bg-cyan-400/10
              "
            >
              <Headphones
                size={30}
                strokeWidth={1.8}
                className="text-cyan-200"
              />
            </motion.div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-300">
                PERSONAL SAFETY CONCIERGE
              </p>

              <h2 className="mt-1 text-[28px] font-bold leading-tight tracking-tight text-white">
                Always Available
              </h2>
            </div>
          </div>

          {/* LIVE indicator */}

          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 rgba(52,211,153,0)",
                "0 0 18px rgba(52,211,153,0.28)",
                "0 0 0 rgba(52,211,153,0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-300/20
              bg-emerald-400/10
              px-3
              py-2
            "
          >
            <motion.span
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
              }}
              className="
                h-2.5
                w-2.5
                rounded-full
                bg-emerald-300
                shadow-[0_0_12px_rgba(52,211,153,0.95)]
              "
            />

            <span className="text-xs font-bold tracking-wide text-emerald-200">
              LIVE
            </span>
          </motion.div>
        </div>

        {/* =========================================================
            STATUS PANEL
        ========================================================= */}

        <div className="relative mt-6 space-y-3">

          {/* =====================================================
              AI CONCIERGE
          ===================================================== */}

          <motion.div
            whileHover={{ scale: 1.01 }}
            role="button"
            tabIndex={0}
            onClick={() => setAiConciergeOpen((open) => !open)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setAiConciergeOpen((open) => !open);
              }
            }}
            className="
              flex
              cursor-pointer
              items-center
              justify-between
              rounded-2xl
              border
              border-cyan-300/55
              bg-gradient-to-br
              from-[#0878D8]
              via-[#0758B8]
              to-[#063A83]
              px-4
              py-4
              transition-all
              active:scale-[0.99]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_25px_rgba(0,110,255,0.22)]
            "
          >
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-400/30 bg-red-400/10">
                <Bot
                  size={21}
                  strokeWidth={1.8}
                  className="text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.75)]"
                />
              </div>

              <div>
                <p className="text-[16px] font-bold text-white">
                  AI Concierge
                </p>

                <p className="mt-0.5 text-[12px] text-white/55">
                  Monitoring your journey
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

              <span className="text-[14px] font-bold text-cyan-200">
                Active
              </span>
            </div>
          </motion.div>

          {aiConciergeOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -4 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              className="overflow-hidden rounded-2xl border border-cyan-300/25 bg-cyan-400/[0.04]"
            >
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-400/10">
                    <Bot size={20} className="text-cyan-200" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-white">
                      AI Concierge Active
                    </p>
                    <p className="mt-1 text-[9px] leading-4 text-white/60">
                      Your AI Concierge is continuously monitoring your journey
                      and is ready to assist.
                    </p>
                  </div>

                  <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2 py-1 text-[7px] font-black text-cyan-200">
                    ACTIVE
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setAiConciergeOpen(false)}
                  className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:bg-white/[0.06] active:scale-[0.99]"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          )}

          {/* =====================================================
              HUMAN CONCIERGE
          ===================================================== */}

          <motion.div
            whileHover={{ scale: 1.01 }}
            role="button"
            tabIndex={0}
            onClick={() => setHumanConciergeOpen((open) => !open)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setHumanConciergeOpen((open) => !open);
              }
            }}
            className="
              flex
              cursor-pointer
              items-center
              justify-between
              rounded-2xl
              border
              border-cyan-300/55
              bg-gradient-to-br
              from-[#0878D8]
              via-[#0758B8]
              to-[#063A83]
              px-4
              py-4
              transition-all
              active:scale-[0.99]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_25px_rgba(0,110,255,0.20)]
            "
          >
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-400/30 bg-red-400/10">
                <ShieldCheck
                  size={21}
                  strokeWidth={1.8}
                  className="text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.75)]"
                />
              </div>

              <div>
                <p className="text-[16px] font-bold text-white">
                  Human Concierge
                </p>

                <p className="mt-0.5 text-[12px] text-white/55">
                  Standing by 24/7
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

              <span className="text-[14px] font-bold text-emerald-200">
                Online
              </span>
            </div>
          </motion.div>

          {humanConciergeOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -4 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              className="overflow-hidden rounded-2xl border border-emerald-300/25 bg-emerald-400/[0.04]"
            >
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-300/25 bg-emerald-400/10">
                    <ShieldCheck size={20} className="text-emerald-200" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-white">
                      Human Concierge Online
                    </p>
                    <p className="mt-1 text-[9px] leading-4 text-white/60">
                      A real human Personal Safety Concierge is standing by
                      and available to support you whenever needed.
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-2 py-1 text-[7px] font-black text-emerald-200">
                    ONLINE
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setHumanConciergeOpen(false)}
                  className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:bg-white/[0.06] active:scale-[0.99]"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          )}

          {/* =====================================================
              RESPONSE TIME
          ===================================================== */}

          <motion.div
            whileHover={{ scale: 1.01 }}
            role="button"
            tabIndex={0}
            onClick={() => setResponseTimeOpen((open) => !open)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setResponseTimeOpen((open) => !open);
              }
            }}
            className="
              flex
              cursor-pointer
              items-center
              justify-between
              rounded-2xl
              border
              border-cyan-300/55
              bg-gradient-to-br
              from-[#0878D8]
              via-[#0758B8]
              to-[#063A83]
              px-4
              py-4
              transition-all
              active:scale-[0.99]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_25px_rgba(0,110,255,0.20)]
            "
          >
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-400/30 bg-red-400/10">
                <Clock3
                  size={21}
                  strokeWidth={1.8}
                  className="text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.75)]"
                />
              </div>

              <div>
                <p className="text-[16px] font-bold text-white">
                  Response Time
                </p>

                <p className="mt-0.5 text-[12px] text-white/55">
                  Average response
                </p>
              </div>
            </div>

            <span className="text-[16px] font-bold text-white">
              &lt;30 sec
            </span>
          </motion.div>
        </div>

        {responseTimeOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            className="mt-3 overflow-hidden rounded-2xl border border-cyan-300/25 bg-cyan-400/[0.04]"
          >
            <div className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-400/10">
                  <Clock3 size={20} className="text-cyan-200" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold text-white">
                    Concierge Response Time
                  </p>
                  <p className="mt-1 text-[9px] leading-4 text-white/60">
                    Average response time is under 30 seconds, keeping human
                    safety support close when you need it.
                  </p>
                </div>

                <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2 py-1 text-[7px] font-black text-cyan-200">
                  &lt;30 SEC
                </span>
              </div>

              <button
                type="button"
                onClick={() => setResponseTimeOpen(false)}
                className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:bg-white/[0.06] active:scale-[0.99]"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        )}

        {/* =========================================================
            YOU'RE NEVER ALONE
        ========================================================= */}

        <motion.div
          animate={{
            boxShadow: [
              "0 0 18px rgba(34,211,238,0.04)",
              "0 0 30px rgba(34,211,238,0.12)",
              "0 0 18px rgba(34,211,238,0.04)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          role="button"
          tabIndex={0}
          onClick={() => setNeverAloneOpen((open) => !open)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setNeverAloneOpen((open) => !open);
            }
          }}
          className="
            relative
            mt-5
            cursor-pointer
            overflow-hidden
            rounded-2xl
            border
            border-cyan-300/55
            transition-transform
            active:scale-[0.995]
            bg-gradient-to-br
            from-[#0878D8]
            via-[#0758B8]
            to-[#063A83]
            p-5
            shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_25px_rgba(0,110,255,0.20)]
          "
        >
          <div className="flex items-start gap-3">

            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-400/30 bg-red-400/10">
              <CheckCircle2
                size={22}
                strokeWidth={1.8}
                className="text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.75)]"
              />
            </div>

            <div>
              <p className="text-[17px] font-bold text-white">
                You're Never Alone
              </p>

              <p className="mt-2 text-[14px] leading-7 text-white/70">
                Your AI Concierge continuously monitors your journey while
                your Personal Safety Concierge remains available to assist
                whenever needed.
              </p>
            </div>
          </div>
        </motion.div>

        {neverAloneOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            className="mt-3 overflow-hidden rounded-2xl border border-cyan-300/25 bg-cyan-400/[0.04]"
          >
            <div className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-400/10">
                  <CheckCircle2 size={20} className="text-cyan-200" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold text-white">
                    You're Never Alone
                  </p>
                  <p className="mt-1 text-[9px] leading-4 text-white/60">
                    Your AI Concierge continuously monitors your journey while
                    your Personal Safety Concierge remains available whenever
                    you need support.
                  </p>
                </div>

                <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-2 py-1 text-[7px] font-black text-emerald-200">
                  ACTIVE
                </span>
              </div>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setNeverAloneOpen(false);
                }}
                className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:bg-white/[0.06] active:scale-[0.99]"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        )}

      </div>
    </GlassCard>
  );
}