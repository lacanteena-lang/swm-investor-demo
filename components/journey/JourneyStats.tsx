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

        <div className="rounded-2xl border border-white/5 bg-white/[0.035] p-4">

          <Route
            size={20}
            strokeWidth={1.8}
            className="text-cyan-300"
          />

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/40">
            DISTANCE
          </p>

          <p className="mt-1 text-[18px] font-bold text-white">
            8.4 km
          </p>

          <p className="mt-1 text-[9px] text-white/35">
            To Office
          </p>

        </div>


        {/* ETA */}

        <div className="rounded-2xl border border-white/5 bg-white/[0.035] p-4">

          <Clock3
            size={20}
            strokeWidth={1.8}
            className="text-cyan-300"
          />

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/40">
            ETA
          </p>

          <p className="mt-1 text-[18px] font-bold text-white">
            18 min
          </p>

          <p className="mt-1 text-[9px] text-white/35">
            08:15 AM arrival
          </p>

        </div>


        {/* SPEED */}

        <div className="rounded-2xl border border-white/5 bg-white/[0.035] p-4">

          <Gauge
            size={20}
            strokeWidth={1.8}
            className="text-blue-300"
          />

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/40">
            SPEED
          </p>

          <p className="mt-1 text-[18px] font-bold text-white">
            32 km/h
          </p>

          <p className="mt-1 text-[9px] text-white/35">
            Moving normally
          </p>

        </div>


        {/* PROTECTION */}

        <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-4">

          <ShieldCheck
            size={20}
            strokeWidth={1.8}
            className="text-emerald-300"
          />

          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/40">
            PROTECTION
          </p>

          <p className="mt-1 text-[18px] font-bold text-emerald-300">
            Active
          </p>

          <p className="mt-1 text-[9px] text-white/35">
            AI + Concierge
          </p>

        </div>

      </div>


      {/* Bottom Status */}

      <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-4">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">

          <ShieldCheck
            size={18}
            strokeWidth={1.8}
            className="text-emerald-300"
          />

        </div>

        <div>

          <p className="text-[10px] font-semibold text-white">
            Journey protection is active
          </p>

          <p className="mt-1 text-[9px] text-white/40">
            AI monitoring and your Personal Safety Concierge are connected.
          </p>

        </div>

      </div>

    </div>
  );
}