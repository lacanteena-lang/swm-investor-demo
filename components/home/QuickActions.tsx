"use client";

import {
  Bot,
  Navigation,
  ShieldAlert,
  Users,
} from "lucide-react";

export default function QuickActions() {
  return (
    <section className="mt-5">

      <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-400">
        QUICK ACTIONS
      </h3>

      <div className="grid grid-cols-4 gap-3">

        {/* SOS */}

        <button className="group rounded-[22px] border border-red-500/20 bg-[#0C182B]/95 p-4 backdrop-blur-xl transition-all duration-300 hover:border-red-400/50 hover:-translate-y-1">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10">

            <ShieldAlert
              size={22}
              className="text-red-400"
            />

          </div>

          <p className="mt-3 text-center text-[11px] font-medium text-white">
            SOS
          </p>

        </button>

        {/* AI */}

        <button className="group rounded-[22px] border border-cyan-400/10 bg-[#0C182B]/95 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">

            <Bot
              size={22}
              className="text-cyan-400"
            />

          </div>

          <p className="mt-3 text-center text-[11px] font-medium text-white">
            AI
          </p>

        </button>

        {/* Journey */}

        <button className="group rounded-[22px] border border-cyan-400/10 bg-[#0C182B]/95 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">

            <Navigation
              size={22}
              className="text-cyan-400"
            />

          </div>

          <p className="mt-3 text-center text-[11px] font-medium text-white">
            Journey
          </p>

        </button>

        {/* Family */}

        <button className="group rounded-[22px] border border-cyan-400/10 bg-[#0C182B]/95 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">

            <Users
              size={22}
              className="text-cyan-400"
            />

          </div>

          <p className="mt-3 text-center text-[11px] font-medium text-white">
            Family
          </p>

        </button>

      </div>

    </section>
  );
}