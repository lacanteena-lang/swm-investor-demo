"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Navigation,
  MapPin,
  Flag,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";

const steps = [
  {
    icon: Navigation,
    title: "Journey Started",
    status: "Ready",
    active: true,
  },
  {
    icon: MapPin,
    title: "AI Monitoring",
    status: "Waiting",
    active: false,
  },
  {
    icon: CheckCircle2,
    title: "Checkpoint",
    status: "Pending",
    active: false,
  },
  {
    icon: Flag,
    title: "Destination",
    status: "Not Reached",
    active: false,
  },
];

export default function JourneyTimeline() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-xl font-semibold text-white">
        Journey Timeline
      </h2>

      <div className="mt-6 space-y-6">

        {steps.map(({ icon: Icon, title, status, active }, index) => (

          <motion.div
            key={title}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4"
          >

            <div className="flex flex-col items-center">

              <div
                className={`
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  ${
                    active
                      ? "bg-cyan-400 text-slate-950"
                      : "bg-white/10 text-cyan-300"
                  }
                `}
              >
                <Icon size={18} />
              </div>

              {index < steps.length - 1 && (
                <div className="mt-2 h-10 w-px bg-white/10" />
              )}

            </div>

            <div className="flex-1 pb-3">

              <p className="font-semibold text-white">
                {title}
              </p>

              <p className="mt-1 text-sm text-white/55">
                {status}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </GlassCard>
  );
}
