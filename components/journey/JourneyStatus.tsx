"use client";

import {
  Bot,
  Headphones,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";

export default function JourneyStatus() {
  return (
    <GlassCard className="p-6">

      {/* Header */}

      <div>

        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300">
          LIVE PROTECTION STATUS
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white">
          Protection Active
        </h2>

      </div>

      {/* Status Cards */}

      <div className="mt-6 space-y-4">

        {/* AI */}

        <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10">

              <Bot
                size={20}
                className="text-cyan-300"
              />

            </div>

            <div>

              <p className="text-sm font-semibold text-white">
                AI Monitoring
              </p>

              <p className="text-xs text-white/50">
                Continuously analysing your journey
              </p>

            </div>

          </div>

          <span className="text-emerald-300 font-semibold">
            Active
          </span>

        </div>

        {/* Concierge */}

        <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">

              <Headphones
                size={20}
                className="text-emerald-300"
              />

            </div>

            <div>

              <p className="text-sm font-semibold text-white">
                Personal Safety Concierge
              </p>

              <p className="text-xs text-white/50">
                Live support connected
              </p>

            </div>

          </div>

          <span className="text-emerald-300 font-semibold">
            Online
          </span>

        </div>

        {/* Protection */}

        <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10">

              <ShieldCheck
                size={20}
                className="text-cyan-300"
              />

            </div>

            <div>

              <p className="text-sm font-semibold text-white">
                Journey Status
              </p>

              <p className="text-xs text-white/50">
                Route verified • No deviation detected
              </p>

            </div>

          </div>

          <CheckCircle2
            size={22}
            className="text-emerald-300"
          />

        </div>

      </div>

    </GlassCard>
  );
}