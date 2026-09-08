"use client";

import { useEffect, useState } from "react";

import {
  Activity,
  CheckCircle2,
  Clock3,
  MapPin,
  ShieldCheck,
  Users,
  Video,
  Wifi,
} from "lucide-react";

type LiveProtectionCommandCenterProps = {
  onBack?: () => void;
};

export default function LiveProtectionCommandCenter({
  onBack,
}: LiveProtectionCommandCenterProps) {
  const [journeyActive, setJourneyActive] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const checkJourney = () => {
      try {
        const stored = window.localStorage.getItem("swm_active_journey");
        const journey = stored ? JSON.parse(stored) : null;

        const active = journey?.isJourneyActive === true;
        setJourneyActive(active);

        if (!active) {
          setElapsedSeconds(0);
          return;
        }

        const startedAt = Number(journey?.journeyStartedAt);

        if (Number.isFinite(startedAt) && startedAt > 0) {
          const seconds = Math.max(
            0,
            Math.floor((Date.now() - startedAt) / 1000)
          );

          setElapsedSeconds(seconds);
        } else {
          setElapsedSeconds(0);
        }
      } catch {
        setJourneyActive(false);
        setElapsedSeconds(0);
      }
    };

    checkJourney();

    const interval = window.setInterval(checkJourney, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const formatElapsed = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [
      hours > 0 ? String(hours).padStart(2, "0") : null,
      String(minutes).padStart(2, "0"),
      String(secs).padStart(2, "0"),
    ]
      .filter(Boolean)
      .join(":");
  };
  return (
<div className="min-h-screen w-full bg-[#020B18] px-4 pb-8 pt-5 text-white">
      <div className="mx-auto w-full max-w-md">

        {/* HEADER */}

        <div className="flex items-center justify-between">

          <button
            type="button"
            onClick={onBack}
            className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-semibold tracking-[0.16em] text-white/75"
          >
            BACK
          </button>

          <div className="text-right">
            <p className="text-[9px] font-semibold tracking-[0.22em] text-cyan-300/80">
              SWM PROTECTION
            </p>

            <p className="mt-1 text-[18px] font-extrabold">
              LIVE PROTECTION
            </p>
          </div>

        </div>


        {/* ACTIVE STATUS */}

        <section className="mt-5 rounded-[24px] border border-emerald-400/25 bg-gradient-to-br from-[#063A2D] via-[#063C36] to-[#052A39] p-5 shadow-[0_14px_45px_rgba(0,0,0,0.28)]">

          <div className="flex items-start justify-between">

            <div>

              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[10px] font-bold tracking-[0.18em] text-emerald-300">
                  {journeyActive ? "PROTECTION ACTIVE" : "PROTECTION STANDBY"}
                </span>
              </div>

              <h1 className="mt-3 text-[27px] font-extrabold leading-tight">
                {journeyActive ? "SWM is watching over you." : "SWM is ready to protect you."}
              </h1>

              <p className="mt-2 text-[11px] leading-5 text-white/75">
                Your protected journey is being monitored and your safety
                systems are ready.
              </p>

            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10">
              <ShieldCheck
                size={27}
                strokeWidth={2}
                className="text-emerald-300"
              />
            </div>

          </div>

        </section>


        {/* LIVE JOURNEY */}

        <section className="mt-4 rounded-[22px] border border-white/10 bg-white/[0.035] p-4">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10">
                <MapPin
                  size={19}
                  strokeWidth={2}
                  className="text-cyan-300"
                />
              </div>

              <div>
                <p className="text-[9px] font-semibold tracking-[0.16em] text-white/45">
                  CURRENT JOURNEY
                </p>

                <p className="mt-1 text-[14px] font-extrabold">
                  Protected Journey
                </p>

                <p className="mt-2 text-[9px] font-semibold tracking-[0.14em] text-white/45">JOURNEY TIME</p>

                <p className="mt-1 text-[18px] font-extrabold tabular-nums text-cyan-300">
                  {journeyActive ? formatElapsed(elapsedSeconds) : "00:00:00"}
                </p>
              </div>

            </div>

            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[8px] font-bold tracking-[0.12em] text-cyan-300">
              LIVE
            </span>

          </div>


          <div className="mt-5">

            <div className="flex items-center justify-between text-[9px]">
              <span className="font-semibold text-white/55">
                JOURNEY PROGRESS
              </span>

              <span className="font-bold text-cyan-300">
                IN PROGRESS
              </span>
            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
              <div className={`h-full rounded-full bg-cyan-300 transition-all duration-700 ${journeyActive ? "w-[58%]" : "w-0"}`} />
            </div>

          </div>

        </section>


        {/* STATUS GRID */}

        <div className="mt-4 grid grid-cols-2 gap-3">

          <StatusCard
            icon={<Activity size={18} />}
            title="SAFETY STATUS"
            value="MONITORED"
          />

          <StatusCard
            icon={<Wifi size={18} />}
            title="CONNECTION"
            value="SECURE"
          />

          <StatusCard
            icon={<Users size={18} />}
            title="TRUSTED CIRCLE"
            value="READY"
          />

          <StatusCard
            icon={<Video size={18} />}
            title="EVIDENCE"
            value="SECURED"
          />

        </div>


        {/* LAST UPDATE */}

        <section className="mt-4 rounded-[22px] border border-white/10 bg-white/[0.035] p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05]">
              <Clock3
                size={18}
                strokeWidth={2}
                className="text-white/70"
              />
            </div>

            <div className="flex-1">

              <p className="text-[9px] font-semibold tracking-[0.16em] text-white/45">
                LAST SAFETY UPDATE
              </p>

              <p className="mt-1 text-[12px] font-semibold text-white/85">
                SWM systems are operating normally.
              </p>

            </div>

            <CheckCircle2
              size={19}
              strokeWidth={2}
              className="text-emerald-300"
            />

          </div>

        </section>


        {/* EMERGENCY READINESS */}

        <section className="mt-4 rounded-[22px] border border-cyan-300/15 bg-cyan-300/[0.04] p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10">
              <ShieldCheck
                size={19}
                strokeWidth={2}
                className="text-cyan-300"
              />
            </div>

            <div>

              <p className="text-[9px] font-semibold tracking-[0.16em] text-cyan-300/70">
                EMERGENCY READINESS
              </p>

              <p className="mt-1 text-[13px] font-extrabold">
                All critical safety systems ready
              </p>

            </div>

          </div>

        </section>

      </div>
    </div>
  );
}


function StatusCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  
  return (
<div className="rounded-[20px] border border-white/10 bg-white/[0.035] p-4">

      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] text-cyan-300">
        {icon}
      </div>

      <p className="mt-3 text-[8px] font-semibold tracking-[0.14em] text-white/40">
        {title}
      </p>

      <p className="mt-1 text-[12px] font-extrabold text-white/90">
        {value}
      </p>

    </div>
  );
}

















