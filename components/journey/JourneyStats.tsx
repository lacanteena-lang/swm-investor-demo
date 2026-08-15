"use client";

import {
  Clock3,
  Route,
  Gauge,
  ShieldCheck,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";

const stats = [
  {
    icon: Route,
    label: "Distance",
    value: "-- km",
    color: "text-cyan-300",
  },
  {
    icon: Clock3,
    label: "ETA",
    value: "-- min",
    color: "text-cyan-300",
  },
  {
    icon: Gauge,
    label: "Speed",
    value: "-- km/h",
    color: "text-cyan-300",
  },
  {
    icon: ShieldCheck,
    label: "Concierge",
    value: "Ready",
    color: "text-emerald-300",
  },
];

export default function JourneyStats() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-xl font-semibold text-white">
        Live Journey Stats
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4">

        {stats.map(({ icon: Icon, label, value, color }) => (

          <div
            key={label}
            className="rounded-2xl bg-white/5 p-5"
          >

            <Icon
              size={22}
              className={color}
            />

            <p className="mt-3 text-xs uppercase tracking-[0.20em] text-white/45">
              {label}
            </p>

            <p className="mt-2 text-xl font-bold text-white">
              {value}
            </p>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}