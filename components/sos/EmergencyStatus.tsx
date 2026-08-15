"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wifi,
  Headphones,
  BatteryMedium,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";

const items = [
  {
    icon: Wifi,
    label: "Network",
    value: "Stb....",
    color: "text-cyan-300",
  },
  {
    icon: Headphones,
    label: "Concierge",
    value: "Online",
    color: "text-violet-300",
  },
  {
    icon: BatteryMedium,
    label: "Battery",
    value: "Good",
    color: "text-orange-300",
  },
];

export default function EmergencyStatus() {
  return (
    <GlassCard className="relative overflow-hidden rounded-[22px] p-4 sm:p-5">
      {/* subtle emergency glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-emerald-400/[0.05] blur-3xl" />

      {/* HEADER */}
      <div className="relative flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 rgba(52,211,153,0)",
                "0 0 16px rgba(52,211,153,0.22)",
                "0 0 0 rgba(52,211,153,0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/[0.06]"
          >
            <ShieldCheck
              size={18}
              strokeWidth={1.8}
              className="text-emerald-300"
            />
          </motion.div>

          <div className="min-w-0">
            <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-white/35">
              EMERGENCY STATUS
            </p>

            <h2 className="mt-0.5 text-[15px] font-bold leading-tight text-white">
              Emergency Ready
            </h2>
          </div>
        </div>

        {/* READY BADGE */}
        <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-1.5">
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
            className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"
          />

          <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-emerald-300">
            SYSTEM READY
          </span>
        </div>
      </div>

      {/* COMPACT STATUS STRIP
          These are the THREE icons directly above Emergency Contacts.
          They are deliberately STATIC — no vibration, no pulse, no scale animation. */}
      <div className="relative mt-4 grid grid-cols-3 divide-x divide-white/[0.06] border-t border-white/[0.06] pt-3">
        {items.map(({ icon: Icon, label, value, color }) => (
          <div
            key={label}
            className="flex min-w-0 items-center justify-center gap-1.5 px-1.5 first:pl-0 last:pr-0"
          >
            {/* STATIC ICON */}
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.045]">
              <Icon
                size={13}
                strokeWidth={1.9}
                className={`${color} drop-shadow-[0_0_4px_currentColor]`}
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-[7px] font-semibold text-violet-300">
                {label}
              </p>

              <p className="truncate text-[9px] font-semibold text-violet-300">
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}