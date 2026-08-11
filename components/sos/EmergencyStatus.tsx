"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  MapPinned,
  Headphones,
  Bell,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import StatusBadge from "../ui/StatusBadge";

const items = [
  {
    icon: ShieldCheck,
    title: "Emergency Workflow",
    status: "Ready",
    color: "text-emerald-300",
    live: true,
  },
  {
    icon: Headphones,
    title: "Personal Safety Concierge",
    status: "Available",
    color: "text-cyan-300",
    live: true,
  },
  {
    icon: MapPinned,
    title: "Live Location",
    status: "Ready to Share",
    color: "text-cyan-300",
    live: true,
  },
  {
    icon: Bell,
    title: "Emergency Contacts",
    status: "Standby",
    color: "text-cyan-300",
    live: false,
  },
];

export default function EmergencyStatus() {
  return (
    <GlassCard className="relative overflow-hidden rounded-3xl p-6">

      {/* HEADER */}

      <div className="flex items-center justify-between gap-4">

        <div className="min-w-0">

          <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-red-300">
            EMERGENCY STATUS
          </p>

          <h2 className="mt-2 text-[24px] font-bold text-white">
            System Ready
          </h2>

        </div>

        <div className="shrink-0">

          <StatusBadge
            label="Standby"
            color="green"
          />

        </div>

      </div>


      {/* STATUS ITEMS */}

      <div className="mt-6 space-y-3">

        {items.map(
          (
            {
              icon: Icon,
              title,
              status,
              color,
              live,
            },
            index,
          ) => (

            <motion.div
              key={title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.08,
                duration: 0.3,
              }}
              className="
                flex
                w-full
                items-center
                justify-between
                rounded-2xl
                border
                border-white/5
                bg-white/[0.04]
                p-4
              "
            >

              {/* LEFT */}

              <div className="flex min-w-0 items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/[0.05]
                  "
                >

                  <Icon
                    size={19}
                    strokeWidth={1.8}
                    className={color}
                  />

                </div>


                <div className="min-w-0">

                  <p className="truncate text-[12px] font-semibold text-white">
                    {title}
                  </p>

                  <div className="mt-1 flex items-center gap-2">

                    {live && (
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
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-emerald-400
                          shadow-[0_0_10px_rgba(52,211,153,0.8)]
                        "
                      />
                    )}

                    <span className="text-[10px] text-white/40">
                      {live
                        ? "Live monitoring"
                        : "On standby"}
                    </span>

                  </div>

                </div>

              </div>


              {/* RIGHT */}

              <span
                className={`
                  ml-3
                  shrink-0
                  text-right
                  text-[11px]
                  font-semibold
                  ${live ? color : "text-white/50"}
                `}
              >
                {status}
              </span>

            </motion.div>

          ),
        )}

      </div>

    </GlassCard>
  );
}