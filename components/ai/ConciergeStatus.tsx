"use client";

import { Headphones, ShieldCheck } from "lucide-react";

import GlassCard from "../ui/GlassCard";
import StatusBadge from "../ui/StatusBadge";

export default function ConciergeStatus() {
  return (
    <GlassCard className="p-6">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">

            <Headphones
              size={26}
              className="text-emerald-300"
            />

          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-white/45">
              PERSONAL SAFETY CONCIERGE
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              Connected
            </h3>

          </div>

        </div>

        <ShieldCheck
          className="text-cyan-300"
          size={24}
        />

      </div>

      <div className="mt-5">

        <StatusBadge
          label="Available 24/7"
          color="green"
        />

      </div>

      <p className="mt-5 text-sm leading-7 text-white/60">
        Your Personal Safety Concierge is standing by to assist,
        monitor your journey and coordinate emergency support whenever required.
      </p>

    </GlassCard>
  );
}