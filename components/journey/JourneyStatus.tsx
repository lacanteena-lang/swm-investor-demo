"use client";

import {
  Navigation,
  ShieldCheck,
  Clock3,
  MapPin,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import StatusBadge from "../ui/StatusBadge";

export default function JourneyStatus() {
  return (
    <GlassCard className="p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-[0.30em] text-cyan-300/70">
            Protected Journey
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Journey Ready
          </h2>

        </div>

        <Navigation
          size={30}
          className="text-cyan-300"
        />

      </div>

      <div className="mt-6">

        <StatusBadge
          label="No Active Journey"
          color="cyan"
        />

      </div>

      <div className="mt-8 space-y-4">

        <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">

          <div className="flex items-center gap-3">

            <MapPin
              size={20}
              className="text-cyan-300"
            />

            <span className="text-white">
              Destination
            </span>

          </div>

          <span className="text-white/60">
            Not Selected
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">

          <div className="flex items-center gap-3">

            <Clock3
              size={20}
              className="text-cyan-300"
            />

            <span className="text-white">
              ETA
            </span>

          </div>

          <span className="text-white/60">
            --
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">

          <div className="flex items-center gap-3">

            <ShieldCheck
              size={20}
              className="text-emerald-300"
            />

            <span className="text-white">
              Concierge
            </span>

          </div>

          <span className="text-emerald-300">
            Available
          </span>

        </div>

      </div>

    </GlassCard>
  );
}