"use client";

import { motion } from "framer-motion";

import { Activity, ShieldCheck, Signal } from "lucide-react";
import GlassCard from "../ui/GlassCard";

type JourneyMapProps = {
  setActiveTab: (tab: string) => void;
};

export default function JourneyMap({ setActiveTab }: JourneyMapProps) {
  return (
    <GlassCard className="w-full max-w-full overflow-hidden p-3 sm:p-4">
      <div className="w-full min-w-0">
        {/* STEP 1 — SEALED HEADER ONLY */}

        <div className="flex w-full min-w-0 items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2 text-pink-400">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.9)]" />

            <span className="truncate text-[10px] font-bold uppercase tracking-[0.22em]">
              LIVE JOURNEY
            </span>

            <Signal className="h-3.5 w-3.5 shrink-0" />
          </div>

          <button type="button" onClick={() => setActiveTab("ai")} className="flex shrink-0 items-center gap-2 rounded-full border border-fuchsia-500/50 bg-fuchsia-500/[0.05] px-3 py-1.5">
            <span className="text-xs text-fuchsia-300">✦</span>

            <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-fuchsia-300">
              AI MONITORING
            </span>
          </button>
        </div>

        {/* Protected Route */}

        <div className="mt-5 flex items-center gap-3 px-1">
          <ShieldCheck className="h-10 w-10 shrink-0 text-emerald-400 drop-shadow-[0_0_16px_rgba(52,211,153,0.75)]" />

          <div className="min-w-0">
            <h2 className="text-[27px] font-bold leading-none text-white">
              Protected Route
            </h2>

            <p className="mt-2 text-[13px] text-cyan-300 drop-shadow-[0_0_8px_rgba(103,232,249,0.55)]">
              Your safety. Always monitored.
            </p>
          </div>
        </div>

        {/* STEP 2 — JOURNEY SUMMARY */}

        <div className="mt-4 grid w-full min-w-0 grid-cols-[1.35fr_0.95fr_0.95fr_auto] items-stretch overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#061329]/95">
          <div className="min-w-0 px-3 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.95)]" />

              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.06em] text-lime-300 drop-shadow-[0_0_7px_rgba(163,230,53,0.65)]">
                  JOURNEY ACTIVE
                </p>

                <p className="mt-1 text-[9px] leading-4 text-cyan-200 drop-shadow-[0_0_6px_rgba(103,232,249,0.45)]">
                  Started at 08:15 AM
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-0 border-l border-white/10 px-3 py-3">
            <p className="text-[8px] uppercase tracking-[0.06em] text-fuchsia-300 drop-shadow-[0_0_7px_rgba(244,114,182,0.60)]">
              DURATION
            </p>

            <p className="mt-1 whitespace-nowrap text-[15px] font-semibold text-white drop-shadow-[0_0_7px_rgba(255,255,255,0.45)]">
              00:24:36
            </p>
          </div>

          <div className="min-w-0 border-l border-white/10 px-3 py-3">
            <p className="text-[8px] uppercase tracking-[0.06em] text-cyan-300 drop-shadow-[0_0_7px_rgba(103,232,249,0.60)]">
              DISTANCE
            </p>

            <p className="mt-1 whitespace-nowrap text-[15px] font-semibold text-white drop-shadow-[0_0_7px_rgba(255,255,255,0.45)]">
              12.4 km
            </p>
          </div>

          <button
            type="button"
            className="my-2 mr-2 flex shrink-0 items-center justify-center rounded-xl bg-rose-600 px-3 text-[10px] font-bold text-white drop-shadow-[0_0_7px_rgba(255,255,255,0.50)] shadow-[0_0_18px_rgba(225,29,72,0.32)] transition active:scale-95"
          >
            LIVE
          </button>
        </div>

        {/* STEP 3 — MAP AREA ONLY */}

        <div className="relative mt-3 h-[430px] w-full min-w-0 overflow-hidden rounded-[18px] border border-slate-600/35 bg-[#020a17]">
          {/* Subtle glowing grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                "linear-gradient(rgba(35,125,205,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(35,125,205,0.16) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Faint map roads */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 400 430"
            preserveAspectRatio="none"
          >
            <path
              d="M-20 90 C70 115 105 155 175 170 C250 185 320 130 430 105"
              fill="none"
              stroke="rgba(35,92,155,0.28)"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <path
              d="M-30 350 C65 305 110 265 175 235 C250 200 310 165 430 180"
              fill="none"
              stroke="rgba(35,92,155,0.25)"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <path
              d="M80 450 C135 355 180 315 235 255 C290 195 315 125 350 25"
              fill="none"
              stroke="rgba(35,92,155,0.22)"
              strokeWidth="18"
              strokeLinecap="round"
            />
          </svg>

          {/* Moving dashed route — the arrow remains locked to this exact path */}
          <svg
            className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            viewBox="0 0 400 430"
            preserveAspectRatio="none"
          >
            <defs>
              <filter
                id="step3-route-glow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur stdDeviation="6" />
              </filter>
            </defs>

            {/* Soft moving glow behind the dashes */}
            <motion.path
              d="M280 390 C235 365 215 335 225 302 C238 265 218 238 195 214 C175 193 170 162 181 128 C188 101 170 78 142 62"
              fill="none"
              stroke="#16a8ff"
              strokeWidth="11"
              strokeLinecap="round"
              strokeDasharray="5 13"
              opacity="0.30"
              filter="url(#step3-route-glow)"
              animate={{ strokeDashoffset: [0, -72] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Bright moving dashes */}
            <motion.path
              d="M280 390 C235 365 215 335 225 302 C238 265 218 238 195 214 C175 193 170 162 181 128 C188 101 170 78 142 62"
              fill="none"
              stroke="#43c5ff"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeDasharray="4 12"
              animate={{ strokeDashoffset: [0, -64] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Fine cyan highlight */}
            <motion.path
              d="M280 390 C235 365 215 335 225 302 C238 265 218 238 195 214 C175 193 170 162 181 128 C188 101 170 78 142 62"
              fill="none"
              stroke="#b7ecff"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeDasharray="2 14"
              opacity="0.85"
              animate={{ strokeDashoffset: [0, -48] }}
              transition={{
                duration: 1.15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>

          {/* Map labels */}
          <span className="absolute left-[10%] top-[25%] text-[8px] uppercase tracking-[0.08em] text-slate-500/55">
            DLF
            <br />
            PHASE 2
          </span>

          <span className="absolute right-[11%] top-[28%] text-[8px] uppercase tracking-[0.08em] text-slate-500/55">
            SECTOR
            <br />
            42
          </span>

          <span className="absolute left-[34%] top-[51%] text-[8px] uppercase tracking-[0.08em] text-slate-500/55">
            SECTOR
            <br />
            25
          </span>

          <span className="absolute left-[9%] bottom-[17%] text-[8px] uppercase tracking-[0.08em] text-slate-500/55">
            MG ROAD
          </span>

          {/* Destination card */}
          <motion.div
            className="absolute left-[14%] top-[6%] z-30 flex h-[58px] w-[104px] flex-col justify-center rounded-[10px] border border-pink-400/45 bg-[#120b19]/92 px-3 py-2 shadow-[0_0_16px_rgba(236,72,153,0.18)] backdrop-blur-md"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[7px] font-semibold uppercase tracking-[0.16em] text-pink-300">
              DESTINATION
            </p>
            <p className="mt-0.5 text-[11px] font-medium text-slate-100">
              Work
            </p>
          </motion.div>

          {/* Destination point */}
          <motion.div
            className="absolute left-[35%] top-[16%] z-30 flex h-5 w-5 items-center justify-center rounded-full border border-pink-300/70 bg-pink-500/85 shadow-[0_0_14px_rgba(236,72,153,0.65)]"
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          </motion.div>

          {/* Start card */}
          <motion.div
            className="absolute bottom-[7%] right-[19%] z-30 flex h-[58px] w-[104px] flex-col justify-center rounded-[10px] border border-emerald-400/45 bg-[#071714]/92 px-3 py-2 shadow-[0_0_16px_rgba(16,185,129,0.18)] backdrop-blur-md"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[7px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
              START
            </p>
            <p className="mt-0.5 text-[11px] font-medium text-slate-100">
              Home
            </p>
          </motion.div>

          {/* Start point */}
          <motion.div
            className="absolute bottom-[4%] right-[39%] z-30 h-4 w-4 rounded-full border border-emerald-300/90 bg-emerald-400/90 shadow-[0_0_14px_rgba(16,185,129,0.70)]"
            animate={{ scale: [1, 1.16, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Single moving arrow — directly animated along the exact visible route */}
          <svg
            className="pointer-events-none absolute inset-0 z-40 h-full w-full overflow-visible"
            viewBox="0 0 400 430"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <filter
                id="moving-route-arrow-glow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur stdDeviation="5" />
              </filter>
            </defs>

            <g>
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                rotate="auto"
                calcMode="linear"
                path="M280 390 C235 365 215 335 225 302 C238 265 218 238 195 214 C175 193 170 162 181 128 C188 101 170 78 142 62"
              />

              <circle
                r="13"
                fill="#ff3046"
                opacity="0.30"
                filter="url(#moving-route-arrow-glow)"
              />

              <path
                d="M 12 0 L -7 -8 L -2 0 L -7 8 Z"
                fill="#ff3046"
                stroke="#ffd7dc"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />

              <path
                d="M -2 0 L 7 0"
                stroke="#ffffff"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.95"
              />
            </g>
          </svg>

          {/* Map controls */}
          <div className="absolute bottom-4 right-3 z-40 flex flex-col gap-2">
            <MapButton symbol="⊙" onClick={() => setActiveTab("journey")} />
            <MapButton symbol="+" onClick={() => setActiveTab("journey")} />
            <MapButton symbol="−" onClick={() => setActiveTab("journey")} />
          </div>
        </div>

        {/* STEP 4 — LIVE MONITORING + JOURNEY PROGRESS + SOS */}
        <div className="mt-3 grid w-full min-w-0 grid-cols-[1.05fr_0.95fr_0.55fr] gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("emergency-contacts")}
            className="min-w-0 rounded-2xl border border-cyan-400/20 bg-[#061329]/95 px-3 py-3 text-left transition active:scale-[0.99]"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-cyan-200">
              LIVE MONITORING
            </p>

            <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">
              {[1, 2, 3, 4, 5].map((contact) => (
                <span key={contact} className="flex min-w-0 items-center gap-2">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.85)]" />
                  <span className="truncate text-[10px] font-medium text-slate-100">
                    Contact {contact}
                  </span>
                </span>
              ))}
            </div>
          </button>

          <div className="min-w-0 rounded-2xl border border-cyan-400/20 bg-[#061329]/95 px-3 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-cyan-200">
              JOURNEY PROGRESS
            </p>

            <p className="mt-3 text-[13px] font-semibold text-white">
              62% Completed
            </p>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-[62%] rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            </div>

            <p className="mt-2 text-right text-[9px] text-cyan-200">
              7.2 km / 11.6 km
            </p>
          </div>

          <button
            type="button"
            onClick={() => setActiveTab("sos")}
            className="flex min-w-0 flex-col items-center justify-center rounded-2xl border border-rose-500/50 bg-[#16070c]/95 px-2 py-3 text-white shadow-[0_0_20px_rgba(244,63,94,0.18)] transition active:scale-95"
          >
            <span className="rounded-full border-2 border-rose-400 px-5 py-2 text-[16px] font-bold text-rose-100 shadow-[0_0_16px_rgba(244,63,94,0.65)]">
              SOS
            </span>
            <span className="mt-2 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
              EMERGENCY
            </span>
          </button>
        </div>

        {/* Quick Actions */}
        <div className="mt-3 w-full rounded-2xl border border-cyan-400/20 bg-[#061329]/95 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-cyan-200">
            QUICK ACTIONS
          </p>

          <div className="mt-3 grid grid-cols-4 gap-2">
            {[
              ["↗", "Share Live", "Location", "with contacts"],
              ["◉", "Call Concierge", "", "Available 24/7"],
              ["◈", "Report Incident", "", "Silent & Secure"],
              ["♩", "Record Audio", "", "Evidence Vault"],
            ].map(([icon, line1, line2, sub], index) => (
              <button
                key={index}
                type="button"
                onClick={() =>
                  setActiveTab(
                    ["emergency-contacts", "ai", "sos", "profile"][index],
                  )
                }
                className="min-w-0 rounded-xl border border-cyan-400/15 bg-[#07172a] px-2 py-3 text-left transition active:scale-[0.98]"
              >
                <div className="text-[18px] text-white">{icon}</div>
                <p className="mt-2 truncate text-[9px] font-semibold text-white">{line1}</p>
                {line2 && (
                  <p className="truncate text-[9px] font-semibold text-white">{line2}</p>
                )}
                <p className="mt-1 truncate text-[8px] text-cyan-200">{sub}</p>
              </button>
            ))}
          </div>
        </div>

        {/* AI Safety Tip */}
        <motion.div
          className="mt-3 flex w-full items-center gap-3 rounded-2xl border border-fuchsia-500/30 bg-[#100b22]/95 px-3 py-3 shadow-[0_0_18px_rgba(168,85,247,0.10)]"
          animate={{ y: [0, -1, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-fuchsia-400/40 bg-fuchsia-500/10 text-lg text-fuchsia-300">
            ✦
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-fuchsia-300">
              AI SAFETY TIP
            </p>
            <p className="mt-1 text-[10px] leading-4 text-white">
              Stay aware of your surroundings and keep your phone accessible.
            </p>
          </div>

          <span className="shrink-0 text-xl text-fuchsia-300">›</span>
        </motion.div>

        {/* STEP 4 COMPLETE */}
      </div>
    </GlassCard>
  );
}

function MapButton({ symbol, onClick }: { symbol: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={symbol === "⊙" ? "Journey location" : symbol === "+" ? "Journey map zoom in" : "Journey map zoom out"}
      className="flex h-8 w-8 items-center justify-center rounded-[9px] border border-slate-500/35 bg-[#07111f]/92 text-base text-slate-200 shadow-[0_0_16px_rgba(0,0,0,0.25)] backdrop-blur-xl transition active:scale-95"
    >
      {symbol}
    </button>
  );
}