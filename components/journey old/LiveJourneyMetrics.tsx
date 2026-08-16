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

      {/* HEADER */}

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

      {/* INTELLIGENCE CARDS */}

      <div className="grid grid-cols-2 gap-3">

        {/* AI MONITORING */}

        <div
          className="
            rounded-2xl
            border
            border-cyan-300/55
            bg-gradient-to-br
            from-[#0878D8]
            via-[#0758B8]
            to-[#063A83]
            p-4
            shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_25px_rgba(0,110,255,0.28)]
          "
        >
          <BrainCircuit
            size={21}
            strokeWidth={1.8}
            className="text-red-500"
          />

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-white">
            AI MONITORING
          </p>

          <p className="mt-1 text-[15px] font-semibold text-black">
            Active
          </p>

          <p className="mt-1 text-[9px] font-medium leading-relaxed text-white">
            Journey continuously monitored
          </p>
        </div>

        {/* PROTECTION */}

        <div
          className="
            rounded-2xl
            border
            border-cyan-300/55
            bg-gradient-to-br
            from-[#0878D8]
            via-[#0758B8]
            to-[#063A83]
            p-4
            shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_25px_rgba(0,110,255,0.28)]
          "
        >
          <ShieldCheck
            size={21}
            strokeWidth={1.8}
            className="text-red-500"
          />

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-white">
            PROTECTION
          </p>

          <p className="mt-1 text-[15px] font-semibold text-black">
            Active
          </p>

          <p className="mt-1 text-[9px] font-medium leading-relaxed text-white">
            Protected route in progress
          </p>
        </div>

        {/* LIVE CONNECTION */}

        <div
          className="
            rounded-2xl
            border
            border-cyan-300/55
            bg-gradient-to-br
            from-[#0878D8]
            via-[#0758B8]
            to-[#063A83]
            p-4
            shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_25px_rgba(0,110,255,0.28)]
          "
        >
          <Radio
            size={21}
            strokeWidth={1.8}
            className="text-red-500"
          />

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-white">
            LIVE CONNECTION
          </p>

          <p className="mt-1 text-[15px] font-semibold text-black">
            Connected
          </p>

          <p className="mt-1 text-[9px] font-medium leading-relaxed text-white">
            Journey information is active
          </p>
        </div>

        {/* PERSONAL CONCIERGE */}

        <div
          className="
            rounded-2xl
            border
            border-cyan-300/55
            bg-gradient-to-br
            from-[#0878D8]
            via-[#0758B8]
            to-[#063A83]
            p-4
            shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_25px_rgba(0,110,255,0.28)]
          "
        >
          <Headphones
            size={21}
            strokeWidth={1.8}
            className="text-red-500"
          />

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-white">
            CONCIERGE
          </p>

          <p className="mt-1 text-[15px] font-semibold text-black">
            With You
          </p>

          <p className="mt-1 text-[9px] font-medium leading-relaxed text-white">
            Personal support remains connected
          </p>
        </div>

      </div>

      {/* FIFTH BOX */}

      <div
        className="
          mt-4
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-cyan-300/55
          bg-gradient-to-br
          from-[#0878D8]
          via-[#0758B8]
          to-[#063A83]
          p-4
          shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_25px_rgba(0,110,255,0.28)]
        "
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#063A83]">
          <BrainCircuit
            size={18}
            className="text-red-500"
          />
        </div>

        <div>
          <p className="text-[10px] font-semibold text-black">
            Journey protection is active
          </p>

          <p className="mt-1 text-[9px] font-medium text-white">
            AI monitoring and Personal Concierge support are connected throughout your journey.
          </p>
        </div>
      </div>

    </div>
  );
}