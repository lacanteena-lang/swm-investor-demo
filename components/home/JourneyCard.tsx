"use client";

import {
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

      {/* HEADER */}

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

        {/* NAVIGATION ICON */}

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-cyan-300/55
            bg-gradient-to-br
            from-[#0878D8]
            via-[#0758B8]
            to-[#063A83]
            shadow-[0_0_24px_rgba(0,174,255,0.45)]
          "
        >
          <Navigation
            size={19}
            strokeWidth={2.2}
            className="text-cyan-100"
          />
        </div>

      </div>


      {/* DESTINATION + ETA */}

      <div className="mt-3 grid grid-cols-2 gap-2">

        <div
          className="
            rounded-2xl
            border
            border-cyan-300/55
            bg-gradient-to-br
            from-[#0878D8]
            via-[#0758B8]
            to-[#063A83]
            p-3
            shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_25px_rgba(0,110,255,0.28)]
          "
        >
          <div className="flex items-center gap-2">
            <MapPin
              size={12}
              strokeWidth={2.4}
              className="text-cyan-100"
            />

            <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/80">
              DESTINATION
            </span>
          </div>

          <p className="mt-2 text-[12px] font-semibold leading-4 text-white">
            Select
            <br />
            Destination
          </p>
        </div>


        <div
          className="
            rounded-2xl
            border
            border-cyan-300/55
            bg-gradient-to-br
            from-[#0878D8]
            via-[#0758B8]
            to-[#063A83]
            p-3
            shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_25px_rgba(0,110,255,0.28)]
          "
        >
          <div className="flex items-center gap-2">
            <Clock
              size={12}
              strokeWidth={2.4}
              className="text-cyan-100"
            />

            <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/80">
              ETA
            </span>
          </div>

          <p className="mt-2 text-[15px] font-bold text-white">
            --:--
          </p>
        </div>

      </div>


      {/* AI READY + ROUTE SAFE */}

      <div className="mt-3 flex gap-2">

        <div
          className="
            flex-1
            rounded-xl
            border
            border-cyan-300/55
            bg-gradient-to-br
            from-[#0878D8]
            via-[#0758B8]
            to-[#063A83]
            py-2
            text-center
            shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_20px_rgba(0,110,255,0.22)]
          "
        >
          <span className="text-[10px] font-semibold text-white">
            AI READY
          </span>
        </div>


        <div
          className="
            flex-1
            rounded-xl
            border
            border-cyan-300/55
            bg-gradient-to-br
            from-[#0878D8]
            via-[#0758B8]
            to-[#063A83]
            py-2
            text-center
            shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_20px_rgba(0,110,255,0.22)]
          "
        >
          <span className="text-[10px] font-semibold text-white">
            ROUTE SAFE
          </span>
        </div>

      </div>


      {/* HORIZONTAL BAR — SAME BLUE AS THE CARDS */}

      <button
        type="button"
        aria-label="Start Journey"
        onClick={() => setActiveTab("journey")}
        className="
          mt-3
          block
          h-[10px]
          w-full
          cursor-pointer
          rounded-full
          border
          border-cyan-300/55
          bg-gradient-to-br
          from-[#0878D8]
          via-[#0758B8]
          to-[#063A83]
          shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_20px_rgba(0,110,255,0.22)]
          transition-all
          duration-300
          hover:brightness-110
          active:scale-[0.99]
        "
      />

    </div>
  );
}