"use client";

import { motion } from "framer-motion";
import {
  Fingerprint,
  MapPinned,
  Bell,
  Languages,
  Moon,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import StatusBadge from "../ui/StatusBadge";

const settings = [
  {
    icon: Fingerprint,
    title: "Face ID / Biometrics",
    value: "Enabled",
  },
  {
    icon: MapPinned,
    title: "Location Sharing",
    value: "Always",
  },
  {
    icon: Bell,
    title: "Notifications",
    value: "Enabled",
  },
  {
    icon: Languages,
    title: "Language",
    value: "English",
  },
  {
    icon: Moon,
    title: "Appearance",
    value: "Dark Mode",
  },
];

export default function PrivacyCard() {
  return (
    <GlassCard>
      <div className="w-full min-w-0 px-3">

        {/* Header */}

        <div className="flex items-start justify-between gap-4">

          <div className="min-w-0">

            <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
              PRIVACY & SECURITY
            </p>

            <h2 className="mt-2 text-[23px] font-bold tracking-tight text-white">
              Privacy Settings
            </h2>

            <p className="mt-2 text-[10px] font-semibold leading-5 text-red-400">
  Control how your safety information, location and notifications
  are managed.
</p>
              
              
            

          </div>

          <StatusBadge
            label="Protected"
            color="green"
          />

        </div>


        {/* Settings */}

        <div className="mt-6 space-y-3">

          {settings.map(({ icon: Icon, title, value }, index) => (

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
                delay: index * 0.07,
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

              <div className="flex min-w-0 items-center gap-3">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-400/10
                  "
                >
                  <Icon
                    size={20}
                    strokeWidth={1.8}
                    className="text-cyan-300"
                  />
                </div>

                <span className="truncate text-[12px] font-semibold text-white">
                  {title}
                </span>

              </div>

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

                <span className="text-[10px] font-medium text-white/50">
                  {value}
                </span>

              </div>

            </motion.div>

          ))}

        </div>


        {/* Security State */}

        <div className="mt-5 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] px-4 py-3">

          <div className="flex items-center gap-2">

            <motion.span
              animate={{
                opacity: [0.35, 1, 0.35],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-400
                shadow-[0_0_10px_rgba(52,211,153,0.8)]
              "
            />

            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-300">
              Privacy protection active
            </span>

          </div>

        </div>

      </div>
    </GlassCard>
  );
}