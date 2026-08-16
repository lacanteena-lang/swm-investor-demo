"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Navigation,
  BrainCircuit,
  CircleDot,
  Flag,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    title: "Journey Started",
    subtitle: "Ready",
    icon: Navigation,
    detail: "Protection activated and your journey is ready to begin.",
    meta: "07:45 AM",
    state: "complete",
  },
  {
    title: "AI Monitoring",
    subtitle: "Active",
    icon: BrainCircuit,
    detail: "AI is continuously analyzing your journey for unusual changes.",
    meta: "Monitoring continuously",
    state: "active",
  },
  {
    title: "Safety Checkpoint",
    subtitle: "Monitoring",
    icon: CircleDot,
    detail: "Your route is being monitored for deviations or safety concerns.",
    meta: "Route protected",
    state: "pending",
  },
  {
    title: "Destination",
    subtitle: "Not Reached",
    icon: Flag,
    detail: "Your destination will be confirmed when the journey is completed.",
    meta: "ETA 08:15 AM",
    state: "pending",
  },
];

export default function JourneyTimeline() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#071322] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#00E5FF]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-[#0878D8]/15 blur-[110px]" />

      <motion.div
        animate={{ x: [-50, 50, -50], opacity: [0.08, 0.20, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-300/15 blur-[80px]"
      />

      {/* Header */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
            JOURNEY PROGRESS
          </p>

          <div className="flex items-center gap-1.5">
            <motion.span
              animate={{ opacity: [0.35, 1, 0.35], scale: [0.85, 1.15, 0.85] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full bg-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.95)]"
            />
            <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-white">
              LIVE
            </span>
          </div>
        </div>

        <h3 className="mt-2 text-[23px] font-bold tracking-tight text-white">
          Journey Timeline
        </h3>
      </div>

      {/* Timeline */}
      <div className="relative z-10">
        <div className="absolute bottom-6 left-[22px] top-6 w-[2px] rounded-full bg-cyan-400/20" />

        <motion.div
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
          className="absolute left-[21px] top-6 h-16 w-[3px] rounded-full bg-[#00E5FF] shadow-[0_0_14px_rgba(0,229,255,0.95)]"
        />

        <div className="space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = step.state === "active";
            const isComplete = step.state === "complete";
            const isExpanded = expanded === index;

            return (
              <div key={step.title} className="relative">
                <div className="flex items-start gap-4">
                  {/* Original icon */}
                  <button
                    type="button"
                    aria-label={`View ${step.title}`}
                    onClick={() => setExpanded(isExpanded ? null : index)}
                    className="relative z-20 mt-1 shrink-0"
                  >
                    {isActive && (
                      <>
                        <motion.div
                          animate={{ scale: [1, 1.45, 1], opacity: [0.35, 0.05, 0.35] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute inset-[-9px] rounded-full bg-[#00E5FF]/20"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute inset-[-4px] rounded-full border border-[#00E5FF]"
                        />
                      </>
                    )}

                    <motion.div
                      whileTap={{ scale: 0.90 }}
                      className={`relative flex h-[46px] w-[46px] items-center justify-center rounded-full border ${
                        isActive
                          ? "border-[#00E5FF] bg-[#0D1B2E] shadow-[0_0_28px_rgba(0,229,255,0.45)]"
                          : isComplete
                          ? "border-cyan-400/60 bg-[#0D1B2E]"
                          : "border-white/15 bg-[#0D1B2E]"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.9} className="text-[#FF3B30]" />
                    </motion.div>
                  </button>

                  {/* Interactive information panel */}
                  <div className="min-w-0 flex-1">
                    <motion.button
                      type="button"
                      onClick={() => setExpanded(isExpanded ? null : index)}
                      whileTap={{ scale: 0.985 }}
                      className={`w-full rounded-2xl border p-4 text-left transition-all duration-300 ${
                        isActive
                          ? "border-[#00E5FF]/70 bg-[#0D1B2E] shadow-[0_0_28px_rgba(0,229,255,0.16)]"
                          : isExpanded
                          ? "border-cyan-400/35 bg-[#0D1B2E]"
                          : "border-white/10 bg-[#0D1B2E]/80"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[14px] font-bold text-white">
                          {step.title}
                        </p>

                        {isActive && (
                          <div className="flex shrink-0 items-center gap-1.5">
                            <motion.span
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1.4, repeat: Infinity }}
                              className="h-2 w-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.9)]"
                            />
                            <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#00E5FF]">
                              LIVE
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="mt-1 flex items-center justify-between">
                        <p className="text-[11px] font-semibold text-white">
                          {step.subtitle}
                        </p>
                        <span className="text-[10px] font-bold text-cyan-300/80">
                          {isExpanded ? "−" : "+"}
                        </span>
                      </div>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3 border-t border-white/10 pt-3">
                              <p className="text-[10px] font-medium leading-relaxed text-white">
                                {step.detail}
                              </p>
                              <div className="mt-2 flex items-center gap-2">
                                <CheckCircle2 size={12} strokeWidth={2} className="text-[#00E5FF]" />
                                <span className="text-[9px] font-semibold text-white">
                                  {step.meta}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Protection Active */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 0 rgba(0,229,255,0)",
            "0 0 24px rgba(0,229,255,0.12)",
            "0 0 0 rgba(0,229,255,0)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 mt-5 flex items-center gap-3 rounded-2xl border border-cyan-400/25 bg-[#0D1B2E] p-4"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#00E5FF]/40 bg-[#071322]">
          <ShieldCheck size={20} strokeWidth={1.9} className="text-[#FF3B30]" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[12px] font-bold text-white">
            PROTECTION ACTIVE
          </p>
          <p className="mt-1 text-[9px] font-semibold leading-relaxed text-white">
            AI Monitoring • Personal Concierge Connected
          </p>
        </div>

        <motion.div
          animate={{ opacity: [0.35, 1, 0.35], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 1.7, repeat: Infinity }}
          className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#FF3B30] shadow-[0_0_12px_rgba(255,59,48,0.85)]"
        />
      </motion.div>
    </div>
  );
}