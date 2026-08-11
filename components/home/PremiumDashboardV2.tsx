"use client";

import { useState } from "react";
import {
  Bell,
  CheckCircle2,
  Bot,
  Shield,
  Navigation,
  X,
} from "lucide-react";

import HeroCard from "./HeroCard";
import JourneyCard from "./JourneyCard";
import StatusCards from "./StatusCards";

type Props = {
  setActiveTab: (tab: string) => void;
};

export default function PremiumDashboardV2({
  setActiveTab,
}: Props) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const openNotifications = () => {
    console.log("SWM NOTIFICATION BELL CLICKED");
    setNotificationsOpen(true);
  };

  const closeNotifications = () => {
    console.log("SWM NOTIFICATIONS CLOSED");
    setNotificationsOpen(false);
  };

  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden">

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-[-170px] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[110px]" />

        <div className="absolute bottom-[-140px] left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[110px]" />

      </div>


      {/* Header */}

      <div className="relative z-[60] flex shrink-0 items-center justify-between px-6 pt-1 pb-2">

        <div className="flex items-center gap-2">

          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

          <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/90">
            Concierge Online
          </span>

        </div>


        {/* NOTIFICATION BELL */}

        <button
          type="button"
          aria-label="Open notifications"
          data-testid="notification-bell"
          onClick={openNotifications}
          className="
            relative
            z-[70]
            flex
            h-10
            w-10
            shrink-0
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            text-white
            backdrop-blur-xl
            transition-all
            duration-200
            hover:bg-white/10
            active:scale-95
          "
        >
          <Bell
            size={17}
            strokeWidth={2}
            className="pointer-events-none text-white"
          />
        </button>

      </div>


      {/* MAIN DASHBOARD */}

      <div
        className="
          relative
          z-10
          flex
          min-h-0
          flex-1
          flex-col
          gap-2
          overflow-hidden
          px-5
          pb-2
        "
      >

        {/* HERO */}

        <div className="relative z-10 shrink-0 h-[265px]">

          <HeroCard />

        </div>


        {/* JOURNEY */}

        <div className="relative z-10 min-h-0 flex-1 overflow-hidden">

          <JourneyCard setActiveTab={setActiveTab} />

        </div>


        {/* TODAY'S STATUS */}

        <div className="relative z-10 shrink-0 h-[105px]">

          <StatusCards />

        </div>

      </div>


      {/* ================================================= */}
      {/* NOTIFICATION CENTER */}
      {/* ================================================= */}

      {notificationsOpen && (

        <div className="absolute inset-0 z-[200]">

          {/* BACKDROP */}

          <button
            type="button"
            aria-label="Close notifications"
            onClick={closeNotifications}
            className="
              absolute
              inset-0
              z-[200]
              cursor-pointer
              bg-black/55
              backdrop-blur-sm
            "
          />


          {/* NOTIFICATION PANEL */}

          <div
            className="
              absolute
              left-4
              right-4
              top-16
              z-[210]
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#0B1729]/95
              shadow-[0_20px_60px_rgba(0,0,0,0.45)]
              backdrop-blur-2xl
            "
          >

            {/* HEADER */}

            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  SAFETY CENTER
                </p>

                <h3 className="mt-1 text-lg font-bold text-white">
                  Notifications
                </h3>

              </div>


              {/* CLOSE X */}

              <button
                type="button"
                aria-label="Close notifications"
                onClick={closeNotifications}
                className="
                  relative
                  z-[220]
                  flex
                  h-9
                  w-9
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-white/5
                  text-white/70
                  transition
                  hover:bg-white/10
                  hover:text-white
                  active:scale-95
                "
              >
                <X
                  size={17}
                  className="pointer-events-none"
                />
              </button>

            </div>


            {/* NOTIFICATION ITEMS */}

            <div className="space-y-3 p-4">

              {/* Protection */}

              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">

                  <CheckCircle2
                    size={19}
                    className="text-emerald-300"
                  />

                </div>

                <div className="min-w-0">

                  <p className="text-sm font-semibold text-white">
                    Protection Active
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/50">
                    Your Personal Safety Concierge is online.
                  </p>

                </div>

              </div>


              {/* AI */}

              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">

                  <Bot
                    size={19}
                    className="text-cyan-300"
                  />

                </div>

                <div className="min-w-0">

                  <p className="text-sm font-semibold text-white">
                    AI Concierge Ready
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/50">
                    AI assistance is available whenever you need it.
                  </p>

                </div>

              </div>


              {/* Journey */}

              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-400/10">

                  <Navigation
                    size={19}
                    className="text-blue-300"
                  />

                </div>

                <div className="min-w-0">

                  <p className="text-sm font-semibold text-white">
                    Journey Monitoring
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/50">
                    Start a protected journey whenever you're ready.
                  </p>

                </div>

              </div>


              {/* Safety */}

              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">

                  <Shield
                    size={19}
                    className="text-emerald-300"
                  />

                </div>

                <div className="min-w-0">

                  <p className="text-sm font-semibold text-white">
                    Safety Systems Ready
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/50">
                    Emergency response systems are standing by.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}