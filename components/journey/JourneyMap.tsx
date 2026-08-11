"use client";

import {
  Clock3,
  ShieldCheck,
  Bot,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import PremiumMap from "./PremiumMap";

export default function JourneyMap() {
  return (
    <GlassCard className="w-full">
      {/* Header */}

      <div className="w-full text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300">
          LIVE JOURNEY
        </p>

        <h2 className="mt-2 text-[28px] font-bold leading-tight text-white">
          Protected
          <br />
          Route
        </h2>
      </div>

      {/* AI Monitoring */}

      <div className="mt-6 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-2.5 backdrop-blur-xl">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200">
            AI MONITORING
          </span>
        </div>
      </div>

      {/* Premium Map */}

      <div className="relative mt-6 h-[500px] overflow-hidden rounded-3xl border border-cyan-400/10">
        <PremiumMap />
      </div>

      {/* Journey Status Cards */}

      <div className="mt-6 grid grid-cols-3 gap-3">

        {/* ETA */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <Clock3
            size={20}
            className="text-cyan-300"
          />

          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55">
            ETA
          </p>

          <h3 className="mt-1 text-lg font-bold text-white">
            18 min
          </h3>

          <p className="mt-1 text-[9px] text-white/45">
            To Office
          </p>
        </div>

        {/* AI STATUS */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <Bot
            size={20}
            className="text-cyan-300"
          />

          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55">
            AI STATUS
          </p>

          <h3 className="mt-1 flex items-center gap-1.5 text-lg font-bold text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
            Active
          </h3>

          <p className="mt-1 text-[9px] text-white/45">
            Monitoring
          </p>
        </div>

        {/* CONCIERGE */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <ShieldCheck
            size={20}
            className="text-cyan-300"
          />

          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55">
            CONCIERGE
          </p>

          <h3 className="mt-1 flex items-center gap-1.5 text-lg font-bold text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
            Online
          </h3>

          <p className="mt-1 text-[9px] text-white/45">
            We're with you
          </p>
        </div>

      </div>
    </GlassCard>
  );
}