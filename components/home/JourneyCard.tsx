"use client";

import {
  ArrowRight,
  Clock,
  MapPin,
  Navigation,
} from "lucide-react";

type Props = {
  setActiveTab: (tab: string) => void;
};

export default function JourneyCard({
  setActiveTab,
}: Props) {
  return (
    <div className="h-full">

      {/* Header */}

      <div className="flex items-start justify-between">

        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
            START SAFE JOURNEY
          </p>

          <h2 className="mt-1 text-[17px] font-bold leading-tight text-white">
            Ready to Protect
            <br />
            You
          </h2>
        </div>


        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10">
          <Navigation
            size={18}
            className="text-cyan-300"
          />
        </div>

      </div>


      {/* Destination + ETA */}

      <div className="mt-3 grid grid-cols-2 gap-2">

        {/* Destination */}

        <div className="rounded-2xl bg-[#111E33] p-3">

          <div className="flex items-center gap-2">

            <MapPin
              size={11}
              className="text-cyan-300"
            />

            <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/60">
              DESTINATION
            </span>

          </div>

          <p className="mt-2 text-[12px] font-semibold leading-4 text-white">
            Select
            <br />
            Destination
          </p>

        </div>


        {/* ETA */}

        <div className="rounded-2xl bg-[#111E33] p-3">

          <div className="flex items-center gap-2">

            <Clock
              size={11}
              className="text-cyan-300"
            />

            <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/60">
              ETA
            </span>

          </div>

          <p className="mt-2 text-[15px] font-bold text-white">
            --:--
          </p>

        </div>

      </div>


      {/* Status */}

      <div className="mt-3 flex gap-2">

        <div className="flex-1 rounded-xl bg-emerald-500/10 py-2 text-center">

          <span className="text-[10px] font-semibold text-emerald-300">
            AI READY
          </span>

        </div>

        <div className="flex-1 rounded-xl bg-cyan-500/10 py-2 text-center">

          <span className="text-[10px] font-semibold text-cyan-300">
            ROUTE SAFE
          </span>

        </div>

      </div>


      {/* Button */}

      <button
        type="button"
        onClick={() => setActiveTab("journey")}
        className="
          mt-3
          flex
          h-10
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-gradient-to-r
          from-cyan-500
          via-sky-500
          to-blue-600
          text-sm
          font-semibold
          tracking-wide
          text-white
          shadow-[0_8px_20px_rgba(14,165,233,0.35)]
          transition-all
          duration-300
          hover:brightness-110
          active:scale-[0.98]
        "
      >
        START JOURNEY

        <ArrowRight
          size={15}
        />
      </button>

    </div>
  );
}