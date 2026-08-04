"use client";

import {
  HeartPulse,
  Droplets,
  Phone,
  MapPin,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";

const items = [
  {
    icon: Droplets,
    label: "Blood Group",
    value: "Not Added",
  },
  {
    icon: HeartPulse,
    label: "Medical Information",
    value: "No Information",
  },
  {
    icon: Phone,
    label: "Emergency Contact",
    value: "Not Configured",
  },
  {
    icon: MapPin,
    label: "Home Address",
    value: "Not Added",
  },
];

export default function SafetyProfile() {
  return (
    <GlassCard className="p-6">

      <p className="text-xs uppercase tracking-[0.30em] text-cyan-300/70">
        SAFETY PROFILE
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Personal Safety Information
      </h2>

      <div className="mt-8 space-y-4">

        {items.map(({ icon: Icon, label, value }) => (

          <div
            key={label}
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

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400/10">

                <Icon
                  size={20}
                  className="text-cyan-300"
                />

              </div>

              <span className="text-white">
                {label}
              </span>

            </div>

            <span className="text-sm text-white/55">
              {value}
            </span>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}