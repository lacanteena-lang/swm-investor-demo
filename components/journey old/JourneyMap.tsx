"use client";

import {
  Clock3,
  ShieldCheck,
  Bot,
  MapPin,
  Navigation,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";

export default function JourneyMap() {
  return (
    <GlassCard className="w-full">

      {/* =========================================================
          JOURNEY HEADER
      ========================================================= */}

      <div className="text-center">

        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300">
          LIVE JOURNEY
        </p>

        <h2 className="mt-2 text-[28px] font-bold leading-tight text-white">
          Protected
          <br />
          Route
        </h2>

        <p className="mt-2 text-[10px] font-medium text-white/55">
          AI is monitoring your journey
        </p>

      </div>


      {/* =========================================================
          AI MONITORING
      ========================================================= */}

      <div className="mt-5 flex justify-center">

        <div className="flex items-center gap-2 rounded-full border border-cyan-300/20 bg-[#063A83] px-5 py-2.5">

          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
            AI Monitoring
          </span>

        </div>

      </div>


      {/* =========================================================
          LIGHTWEIGHT SIMULATED MAP
      ========================================================= */}

      <div className="relative mt-6 h-[330px] overflow-hidden rounded-[26px] border border-cyan-300/10 bg-[#07182C]">

        {/* Map background */}

        <div className="absolute inset-0 opacity-70">

          {/* horizontal roads */}

          <div className="absolute left-[-20%] top-[22%] h-[1px] w-[140%] rotate-[8deg] bg-white/[0.08]" />

          <div className="absolute left-[-20%] top-[43%] h-[1px] w-[140%] rotate-[-5deg] bg-white/[0.07]" />

          <div className="absolute left-[-20%] top-[67%] h-[1px] w-[140%] rotate-[11deg] bg-white/[0.07]" />

          {/* vertical roads */}

          <div className="absolute left-[25%] top-[-20%] h-[140%] w-[1px] rotate-[18deg] bg-white/[0.07]" />

          <div className="absolute left-[54%] top-[-20%] h-[140%] w-[1px] rotate-[-12deg] bg-white/[0.07]" />

          <div className="absolute left-[78%] top-[-20%] h-[140%] w-[1px] rotate-[20deg] bg-white/[0.06]" />

          {/* neighbourhood blocks */}

          <div className="absolute left-[8%] top-[15%] h-16 w-20 rounded-lg border border-white/[0.04]" />

          <div className="absolute left-[58%] top-[13%] h-20 w-24 rounded-lg border border-white/[0.04]" />

          <div className="absolute left-[12%] top-[55%] h-20 w-24 rounded-lg border border-white/[0.04]" />

          <div className="absolute left-[62%] top-[60%] h-16 w-20 rounded-lg border border-white/[0.04]" />

        </div>


        {/* route */}

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 390 330"
          preserveAspectRatio="none"
        >

          <path
            d="M45 270 C95 245 110 210 145 220 C180 230 175 170 215 165 C250 160 255 105 300 110 C330 114 342 75 355 48"
            fill="none"
            stroke="rgba(34,211,238,0.28)"
            strokeWidth="10"
            strokeLinecap="round"
          />

          <path
            d="M45 270 C95 245 110 210 145 220 C180 230 175 170 215 165 C250 160 255 105 300 110 C330 114 342 75 355 48"
            fill="none"
            stroke="#22D3EE"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="7 7"
          />

        </svg>


        {/* START */}

        <div className="absolute bottom-[48px] left-[30px]">

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-400/15">
            <MapPin
              size={17}
              className="text-emerald-300"
            />
          </div>

          <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.15em] text-emerald-300">
            Start
          </p>

        </div>


        {/* CURRENT LOCATION */}

        <div className="absolute left-[207px] top-[145px]">

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 shadow-[0_0_24px_rgba(34,211,238,0.25)]">

            <Navigation
              size={20}
              className="text-cyan-300"
            />

          </div>

        </div>


        {/* DESTINATION */}

        <div className="absolute right-[20px] top-[25px]">

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-300/30 bg-violet-400/10">

            <MapPin
              size={17}
              className="text-violet-300"
            />

          </div>

          <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.15em] text-violet-300">
            Office
          </p>

        </div>


        {/* MAP STATUS */}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">

          <div className="rounded-full border border-white/10 bg-[#07182C]/90 px-4 py-2">

            <span className="text-[9px] font-semibold text-white/75">
              Journey protected
            </span>

          </div>

        </div>

      </div>


      {/* =========================================================
          THREE JOURNEY STATUS CARDS
      ========================================================= */}

      <div className="mt-5 grid grid-cols-3 gap-2.5">

        <JourneyStatusCard
          icon={<Clock3 size={18} />}
          label="ETA"
          value="18 min"
          sub="To Office"
          iconClass="text-cyan-300"
        />

        <JourneyStatusCard
          icon={<Bot size={18} />}
          label="AI STATUS"
          value="Active"
          sub="Monitoring"
          iconClass="text-violet-300"
        />

        <JourneyStatusCard
          icon={<ShieldCheck size={18} />}
          label="CONCIERGE"
          value="Online"
          sub="We're with you"
          iconClass="text-emerald-300"
        />

      </div>

    </GlassCard>
  );
}


/* ================================================================
   JOURNEY STATUS CARD
================================================================ */

function JourneyStatusCard({
  icon,
  label,
  value,
  sub,
  iconClass,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  iconClass: string;
}) {
  return (
    <div className="min-w-0 rounded-2xl border border-cyan-300/10 bg-[#082448] p-3">

      <div className={iconClass}>
        {icon}
      </div>

      <p className="mt-3 truncate text-[8px] font-bold uppercase tracking-[0.12em] text-white/55">
        {label}
      </p>

      <p className="mt-1 truncate text-[14px] font-extrabold text-white">
        {value}
      </p>

      <p className="mt-1 truncate text-[8px] font-semibold text-white/45">
        {sub}
      </p>

    </div>
  );
}