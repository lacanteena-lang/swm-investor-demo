"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Mic,
  FileText,
  Video,
  LockKeyhole,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";

const items = [
  {
    icon: Camera,
    title: "Photo Evidence",
    status: "Ready",
  },
  {
    icon: Video,
    title: "Video Recording",
    status: "Ready",
  },
  {
    icon: Mic,
    title: "Audio Recording",
    status: "Ready",
  },
  {
    icon: FileText,
    title: "Incident Timeline",
    status: "Automatic",
  },
];

export default function EvidenceRecorder() {
  return (
    <GlassCard>
      <div className="w-full min-w-0 px-3">

        {/* Header */}

        <div className="flex items-start justify-between gap-4">

          <div className="min-w-0">

            <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-red-300">
              EVIDENCE VAULT
            </p>

            <h2 className="mt-2 text-[24px] font-bold tracking-tight text-white">
              Evidence Collection
            </h2>

          </div>

          <motion.div
            animate={{
              opacity: [0.55, 1, 0.55],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-emerald-400/15
              bg-emerald-400/10
            "
          >
            <LockKeyhole
              size={19}
              strokeWidth={1.8}
              className="text-emerald-300"
            />
          </motion.div>

        </div>


        {/* Description */}

        <p className="mt-3 text-[11px] leading-6 text-white/50">
          During an emergency, Stay With Me securely records and preserves
          evidence to help build a clear incident timeline.
        </p>


        {/* Evidence Items */}

        <div className="mt-6 space-y-3">

          {items.map(
            ({ icon: Icon, title, status }, index) => (

              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.3,
                }}
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/[0.04]
                  p-4
                "
              >

                {/* Evidence Type */}

                <div className="flex min-w-0 items-center gap-3">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-red-400/10
                      bg-red-500/10
                    "
                  >

                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-red-300"
                    />

                  </div>

                  <span className="truncate text-[12px] font-semibold text-white">
                    {title}
                  </span>

                </div>


                {/* Status */}

                <div className="flex shrink-0 items-center gap-2">

                  <motion.span
                    animate={{
                      opacity: [0.35, 1, 0.35],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-emerald-400
                      shadow-[0_0_10px_rgba(52,211,153,0.8)]
                    "
                  />

                  <span className="text-[10px] font-semibold text-emerald-300">
                    {status}
                  </span>

                </div>

              </motion.div>

            ),
          )}

        </div>


        {/* Security State */}

        <div className="mt-5 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] px-4 py-3">

          <div className="flex items-center gap-2">

            <LockKeyhole
              size={14}
              className="shrink-0 text-emerald-300"
            />

            <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-emerald-300">
              Secure evidence protection ready
            </span>

          </div>

        </div>

      </div>
    </GlassCard>
  );
}