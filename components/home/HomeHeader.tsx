"use client";

import { Bell } from "lucide-react";

export default function HomeHeader() {
  return (
    <header className="flex items-center justify-between px-6 pt-6">

      {/* Concierge Badge */}

      <div className="
        flex
        items-center
        gap-2
        rounded-full
        border
        border-green-500/20
        bg-white/5
        px-4
        py-2
        backdrop-blur-xl
      ">

        <span className="
          h-2
          w-2
          rounded-full
          bg-green-400
          animate-pulse
        " />

        <span className="
          text-[11px]
          font-medium
          tracking-wider
          uppercase
          text-white/90
        ">
          Concierge Online
        </span>

      </div>

      {/* Notification */}

      <button
        className="
          relative
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          transition-all
          hover:scale-105
        "
      >

        <Bell
          size={20}
          className="text-white"
        />

        <div
          className="
            absolute
            -right-1
            -top-1
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            bg-red-500
            text-[10px]
            font-bold
            text-white
          "
        >
          3
        </div>

      </button>

    </header>
  );
}