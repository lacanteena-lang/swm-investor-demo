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
  },
  {
    icon: Headphones,
    title: "Personal Safety Concierge",
    status: "Available",
    color: "text-cyan-300",
  },
  {
    icon: MapPinned,
    title: "Live Location",
    status: "Ready to Share",
    color: "text-cyan-300",
  },
  {
    icon: Bell,
    title: "Emergency Contacts",
    status: "Standby",
    color: "text-cyan-300",
  },
];

export default function EmergencyStatus() {
  return (
    <GlassCard className="p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-[0.30em] text-red-300/70">
            EMERGENCY STATUS
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            System Ready
          </h2>

        </div>

        <StatusBadge
          label="Standby"
          color="green"
        />

      </div>

      <div className="mt-8 space-y-4">

        {items.map(({ icon: Icon, title, status, color }, index) => (

          <motion.div
            key={title}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              bg-white/5
              p-4
            "
          >

            <div className="flex items-center gap-3">

              <Icon
                size={20}
                className={color}
              />

              <span className="text-white">
                {title}
              </span>

            </div>

            <span className="text-white/60 text-sm">
              {status}
            </span>

          </motion.div>

        ))}

      </div>

    </GlassCard>
  );
}