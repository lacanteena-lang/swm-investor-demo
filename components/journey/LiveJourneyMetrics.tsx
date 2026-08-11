"use client";

import {
  BrainCircuit,
  Radio,
  ShieldCheck,
  Headphones,
} from "lucide-react";

export default function LiveJourneyMetrics() {
  return (
    <div className="rounded-3xl border border-cyan-400/10 bg-[#071322]/80 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.30)]">

      {/* Header */}

      <div className="mb-5">

        <p className="text-[9px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
          LIVE AI ANALYSIS
        </p>

        <h3 className="mt-2 text-[23px] font-bold tracking-tight text-white">
          Journey Intelligence
        </h3>

        <p className="mt-2 text-[11px] leading-relaxed text-white/45">
          SWM continuously watches the journey and keeps your safety support connected.
        </p>

      </div>


      {/* Intelligence Cards */}

      <div className="grid grid-cols-2 gap-3">

        {/* AI MONITORING */}

        <div className="rounded-2xl border border-cyan-400/10 bg-white/[0.035] p-4">

          <BrainCircuit
            size={21}
            strokeWidth={1.8}
            className="text-cyan-300"
          />

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/45">
            AI MONITORING
          </p>

          <p className="mt-1 text-[15px] font-semibold text-white">
            Active
          </p>

          <p className="mt-1 text-[9px] leading-relaxed text-white/40">
            Journey continuously monitored
          </p>

        </div>


        {/* JOURNEY PROTECTION */}

        <div className="rounded-2xl border border-emerald-400/10 bg-white/[0.035] p-4">

          <ShieldCheck
            size={21}
            strokeWidth={1.8}
            className="text-emerald-300"
          />

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/45">
            PROTECTION
          </p>

          <p className="mt-1 text-[15px] font-semibold text-emerald-300">
            Active
          </p>

          <p className="mt-1 text-[9px] leading-relaxed text-white/40">
            Protected route in progress
          </p>

        </div>


        {/* LIVE CONNECTION */}

        <div className="rounded-2xl border border-blue-400/10 bg-white/[0.035] p-4">

          <Radio
            size={21}
            strokeWidth={1.8}
            className="text-blue-300"
          />

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/45">
            LIVE CONNECTION
          </p>

          <p className="mt-1 text-[15px] font-semibold text-white">
            Connected
          </p>

          <p className="mt-1 text-[9px] leading-relaxed text-white/40">
            Journey information is active
          </p>

        </div>


        {/* PERSONAL CONCIERGE */}

        <div className="rounded-2xl border border-violet-400/10 bg-white/[0.035] p-4">

          <Headphones
            size={21}
            strokeWidth={1.8}
            className="text-violet-300"
          />

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/45">
            CONCIERGE
          </p>

          <p className="mt-1 text-[15px] font-semibold text-violet-300">
            With You
          </p>

          <p className="mt-1 text-[9px] leading-relaxed text-white/40">
            Personal support remains connected
          </p>

        </div>

      </div>


      {/* AI MESSAGE */}

      <div className="mt-4 flex items-center gap-3 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.04] p-4">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400/10">

          <BrainCircuit
            size={18}
            className="text-cyan-300"
          />

        </div>

        <div>

          <p className="text-[10px] font-semibold text-white">
            Journey protection is active
          </p>

          <p className="mt-1 text-[9px] text-white/45">
            AI monitoring and Personal Concierge support are connected throughout your journey.
          </p>

        </div>

      </div>

    </div>
  );
}