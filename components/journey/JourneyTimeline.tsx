"use client";

import { motion } from "framer-motion";
import {
  Navigation,
  BrainCircuit,
  CircleDot,
  Flag,
} from "lucide-react";

const steps = [
  {
    title: "Journey Started",
    subtitle: "Ready",
    icon: Navigation,
    state: "complete",
  },
  {
    title: "AI Monitoring",
    subtitle: "Active",
    icon: BrainCircuit,
    state: "active",
  },
  {
    title: "Safety Checkpoint",
    subtitle: "Monitoring",
    icon: CircleDot,
    state: "pending",
  },
  {
    title: "Destination",
    subtitle: "Not Reached",
    icon: Flag,
    state: "pending",
  },
];

export default function JourneyTimeline() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#071322]/85 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.28)]">

      {/* Header */}

      <div className="mb-6">

        <p className="text-[9px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
          JOURNEY PROGRESS
        </p>

        <h3 className="mt-2 text-[23px] font-bold tracking-tight text-white">
          Journey Timeline
        </h3>

      </div>


      {/* Timeline */}

      <div className="relative">

        {/* Vertical Line */}

        <div className="absolute left-[21px] top-5 bottom-5 w-px bg-white/10" />


        <div className="space-y-7">

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = step.state === "active";
            const isComplete = step.state === "complete";

            return (
              <div
                key={step.title}
                className="relative flex items-center gap-4"
              >

                {/* Timeline Node */}

                <div className="relative z-10 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0a192b]">

                  {isActive && (
                    <motion.div
                      animate={{
                        scale: [1, 1.35, 1],
                        opacity: [0.25, 0.05, 0.25],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full bg-cyan-400"
                    />
                  )}

                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className={
                      isActive
                        ? "relative text-cyan-300"
                        : isComplete
                        ? "relative text-emerald-300"
                        : "relative text-white/35"
                    }
                  />

                </div>


                {/* Text */}

                <div className="min-w-0 flex-1">

                  <div className="flex items-center justify-between gap-3">

                    <p
                      className={`text-[13px] font-semibold ${
                        isActive || isComplete
                          ? "text-white"
                          : "text-white/55"
                      }`}
                    >
                      {step.title}
                    </p>

                    {isActive && (
                      <div className="flex items-center gap-2">

                        <motion.span
                          animate={{
                            opacity: [0.35, 1, 0.35],
                            scale: [0.9, 1.15, 0.9],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]"
                        />

                        <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-cyan-300">
                          LIVE
                        </span>

                      </div>
                    )}

                  </div>

                  <p
                    className={`mt-1 text-[10px] ${
                      isActive
                        ? "text-cyan-300/70"
                        : isComplete
                        ? "text-white/45"
                        : "text-white/30"
                    }`}
                  >
                    {step.subtitle}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}