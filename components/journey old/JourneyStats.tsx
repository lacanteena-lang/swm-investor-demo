"use client";

import {
  Route,
  Clock3,
  Gauge,
  ShieldCheck,
} from "lucide-react";

export default function JourneyStats() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#071322]/85 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.28)]">

      {/* Header */}

      <div className="mb-5">

        <p className="text-[9px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
          JOURNEY OVERVIEW
        </p>

        <h3 className="mt-2 text-[23px] font-bold tracking-tight text-white">
          Live Journey Stats
        </h3>

      </div>

      {/* Stats Grid */}

      <div className="grid grid-cols-2 gap-3">

        {/* DISTANCE */}

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

          <Route
            size={20}
            strokeWidth={1.8}
            className="text-red-500"
          />

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-white">
            DISTANCE
          </p>

          <p className="mt-1 text-[18px] font-bold text-black">
            8.4 km
          </p>

          <p className="mt-1 text-[9px] font-medium text-white">
            To Office
          </p>

        </div>

        {/* ETA */}

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

          <Clock3
            size={20}
            strokeWidth={1.8}
            className="text-red-500"
          />

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-white">
            ETA
          </p>

          <p className="mt-1 text-[18px] font-bold text-black">
            18 min
          </p>

          <p className="mt-1 text-[9px] font-medium text-white">
            08:15 AM arrival
          </p>

        </div>

        {/* SPEED */}

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

          <Gauge
            size={20}
            strokeWidth={1.8}
            className="text-red-500"
          />

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-white">
            SPEED
          </p>

          <p className="mt-1 text-[18px] font-bold text-black">
            32 km/h
          </p>

          <p className="mt-1 text-[9px] font-medium text-white">
            Moving normally
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
            size={20}
            strokeWidth={1.8}
            className="text-red-500"
          />

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-white">
            PROTECTION
          </p>

          <p className="mt-1 text-[18px] font-bold text-black">
            Active
          </p>

          <p className="mt-1 text-[9px] font-medium text-white">
            AI + Concierge
          </p>

        </div>

      </div>

      {/* Bottom Status */}

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

          <ShieldCheck
            size={18}
            strokeWidth={1.8}
            className="text-red-500"
          />

        </div>

        <div>

          <p className="text-[10px] font-semibold text-black">
            Journey protection is active
          </p>

          <p className="mt-1 text-[9px] font-medium text-white">
            AI monitoring and your Personal Safety Concierge are connected.
          </p>

        </div>

      </div>

    </div>
  );
}