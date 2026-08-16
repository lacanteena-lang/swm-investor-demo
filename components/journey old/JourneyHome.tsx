"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  ShieldCheck,
  Bot,
  MapPin,
  Navigation,
} from "lucide-react";

import ScreenLayout from "../layout/ScreenLayout";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const routePath = `
M 38 270
C 78 252 92 220 132 228
C 168 235 165 185 204 178
C 242 171 248 122 288 128
C 322 133 338 83 355 42
`;

export default function JourneyHome({
  activeTab,
  setActiveTab,
}: Props) {
  return (
    <ScreenLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <div className="h-full overflow-y-auto no-scrollbar px-5 pt-5 pb-36">

        {/* ======================================================
            HEADER
        ====================================================== */}

        <div className="text-center">

          <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
            LIVE JOURNEY
          </p>

          <h1 className="mt-2 text-[28px] font-bold leading-tight text-white">
            Protected Route
          </h1>

          <p className="mt-2 text-[11px] font-semibold text-white/70">
            Live journey monitoring active
          </p>

        </div>


        {/* ======================================================
            AI MONITORING
        ====================================================== */}

        <div className="mt-5 flex justify-center">

          <div className="flex items-center gap-2 rounded-full border border-cyan-300/25 bg-gradient-to-r from-[#0878D8] via-[#0758B8] to-[#063A83] px-5 py-2.5 shadow-[0_0_22px_rgba(0,120,255,0.25)]">

            <span className="relative flex h-2.5 w-2.5">

              <span className="absolute inset-0 animate-ping rounded-full bg-cyan-300 opacity-40" />

              <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_10px_rgba(103,232,255,0.9)]" />

            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.20em] text-white">
              AI MONITORING
            </span>

          </div>

        </div>


        {/* ======================================================
            LIVE MAP
        ====================================================== */}

        <div className="relative mt-6 h-[320px] overflow-hidden rounded-[26px] border border-cyan-300/20 bg-[#04132A] shadow-[0_15px_45px_rgba(0,80,180,0.18)]">

          {/* MAP GRID */}

          <div className="pointer-events-none absolute inset-0 opacity-40">

            <div className="absolute left-[20%] top-0 h-full w-px bg-cyan-300/[0.07]" />
            <div className="absolute left-[40%] top-0 h-full w-px bg-cyan-300/[0.05]" />
            <div className="absolute left-[60%] top-0 h-full w-px bg-cyan-300/[0.07]" />
            <div className="absolute left-[80%] top-0 h-full w-px bg-cyan-300/[0.05]" />

            <div className="absolute left-0 top-[20%] h-px w-full bg-cyan-300/[0.06]" />
            <div className="absolute left-0 top-[40%] h-px w-full bg-cyan-300/[0.06]" />
            <div className="absolute left-0 top-[60%] h-px w-full bg-cyan-300/[0.06]" />
            <div className="absolute left-0 top-[80%] h-px w-full bg-cyan-300/[0.06]" />

          </div>


          {/* ==================================================
              ROUTE SVG
          ================================================== */}

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 390 320"
            preserveAspectRatio="none"
          >

            {/* route glow */}

            <path
              d={routePath}
              fill="none"
              stroke="rgba(0,190,255,0.14)"
              strokeWidth="15"
              strokeLinecap="round"
            />

            {/* outer route */}

            <path
              d={routePath}
              fill="none"
              stroke="rgba(50,180,255,0.30)"
              strokeWidth="7"
              strokeLinecap="round"
            />

            {/* main route */}

            <path
              d={routePath}
              fill="none"
              stroke="#20D9FF"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* moving route highlights */}

            <motion.path
              d={routePath}
              fill="none"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="3 18"
              animate={{
                strokeDashoffset: [0, -42],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "linear",
              }}
            />

          </svg>


          {/* ==================================================
              START
          ================================================== */}

          <motion.div
            className="absolute bottom-[25px] left-[18px] z-20"
            animate={{
              x: [0, -1, 1, 0],
              y: [0, 1, -1, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-emerald-300/40 bg-[#06182D] shadow-[0_0_20px_rgba(52,211,153,0.30)]">

              <span className="absolute inset-[-5px] rounded-full border border-emerald-300/20" />

              <MapPin
                size={20}
                strokeWidth={2}
                className="text-emerald-300"
              />

            </div>

            <p className="mt-1 text-center text-[8px] font-bold uppercase tracking-[0.14em] text-emerald-300">
              START
            </p>

          </motion.div>


          {/* ==================================================
              DESTINATION
          ================================================== */}

          <motion.div
            className="absolute right-[12px] top-[13px] z-20"
            animate={{
              x: [0, 1, -1, 0],
              y: [0, -1, 1, 0],
            }}
            transition={{
              duration: 3.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-orange-300/50 bg-[#07182D] shadow-[0_0_22px_rgba(255,157,0,0.35)]">

              <span className="absolute inset-[-5px] rounded-full border border-orange-300/20" />

              <MapPin
                size={20}
                strokeWidth={2}
                className="text-orange-300"
              />

            </div>

            <p className="mt-1 text-center text-[8px] font-bold uppercase tracking-[0.10em] text-orange-300">
              DESTINATION
            </p>

          </motion.div>


          {/* ==================================================
              LIVE ARROW
          ================================================== */}

          <motion.div
            className="absolute left-0 top-0 z-30"
            style={{
              offsetPath: `path("${routePath}")`,
            }}
            animate={{
              offsetDistance: ["0%", "100%"],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >

            <div className="-translate-x-1/2 -translate-y-1/2">

              <div className="relative flex h-12 w-12 items-center justify-center rounded-full">

                {/* live radar */}

                <motion.span
                  className="absolute inset-0 rounded-full border border-red-400/30"
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.7, 0, 0.7],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />

                {/* blue navigation ring */}

                <div className="absolute inset-1 rounded-full border border-cyan-300/50 bg-[#06182D]/95 shadow-[0_0_25px_rgba(0,180,255,0.35)]" />

                {/* RED ARROW */}

                <Navigation
                  size={22}
                  strokeWidth={2.5}
                  className="relative z-10 rotate-0 fill-red-500 text-red-500 drop-shadow-[0_0_8px_rgba(255,40,40,0.95)]"
                />

              </div>

            </div>

          </motion.div>


          {/* ==================================================
              LIVE MAP STATUS
          ================================================== */}

          <div className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2">

            <div className="flex items-center gap-2 rounded-full border border-cyan-300/15 bg-[#06182D]/95 px-4 py-2 shadow-[0_0_18px_rgba(0,120,255,0.15)]">

              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />

              <span className="text-[9px] font-semibold text-white">
                Journey protected
              </span>

            </div>

          </div>

        </div>


        {/* ======================================================
            THREE LIVE STATUS CARDS
        ====================================================== */}

        <div className="mt-5 grid grid-cols-3 gap-2.5">

          <StatusCard
            icon={<Clock3 size={18} />}
            iconColor="text-cyan-300"
            label="ETA"
            value="18 min"
            sub="To Destination"
          />

          <StatusCard
            icon={<Bot size={18} />}
            iconColor="text-violet-300"
            label="AI STATUS"
            value="Active"
            sub="Monitoring"
          />

          <StatusCard
            icon={<ShieldCheck size={18} />}
            iconColor="text-emerald-300"
            label="CONCIERGE"
            value="Online"
            sub="We're with you"
          />

        </div>


        {/* ======================================================
            JOURNEY STATUS
        ====================================================== */}

        <div className="mt-5 rounded-[22px] border border-cyan-300/15 bg-[#06182D] p-4 shadow-[0_12px_35px_rgba(0,80,180,0.12)]">

          <div className="flex items-center gap-3">

            <motion.div
              className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/[0.08]"
              animate={{
                scale: [1, 1.025, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <ShieldCheck
                size={21}
                className="text-emerald-300"
              />

            </motion.div>

            <div>

              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                JOURNEY STATUS
              </p>

              <p className="mt-1 text-[14px] font-semibold text-white">
                Journey Protected
              </p>

            </div>

          </div>

          <p className="mt-3 text-[10px] leading-5 text-white/55">
            We are continuously monitoring your route and will alert you if
            something changes.
          </p>

        </div>


        <div className="h-8" />

      </div>
    </ScreenLayout>
  );
}


/* ================================================================
   STATUS CARD
================================================================ */

function StatusCard({
  icon,
  iconColor,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  iconColor: string;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="min-w-0 rounded-2xl border border-cyan-300/10 bg-[#082448] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">

      <div className={iconColor}>
        {icon}
      </div>

      <p className="mt-3 truncate text-[8px] font-bold uppercase tracking-[0.10em] text-white/60">
        {label}
      </p>

      <p className="mt-1 truncate text-[14px] font-extrabold text-white">
        {value}
      </p>

      <p className="mt-1 truncate text-[8px] font-semibold text-white/50">
        {sub}
      </p>

    </div>
  );
}