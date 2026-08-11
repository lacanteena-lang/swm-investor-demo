"use client";

import { motion } from "framer-motion";

export default function PremiumMap() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl bg-[#071329]">
      {/* Soft map glow */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

        <div className="absolute left-[18%] bottom-[12%] h-[120px] w-[120px] rounded-full bg-cyan-400/10 blur-[70px]" />

        <div className="absolute right-[12%] top-[10%] h-[140px] w-[140px] rounded-full bg-blue-500/10 blur-[80px]" />
      </div>

      {/* Very subtle map grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,220,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(120,220,255,0.35) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* Road lines */}

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 400 500"
        preserveAspectRatio="none"
      >
        <path
          d="M40 420 C95 365 115 300 180 270 C235 245 280 170 350 70"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="34"
          strokeLinecap="round"
        />

        <path
          d="M40 420 C95 365 115 300 180 270 C235 245 280 170 350 70"
          fill="none"
          stroke="rgba(120,180,220,0.10)"
          strokeWidth="2"
        />

        <path
          d="M20 250 C95 230 135 210 190 160 C240 115 300 105 380 120"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="18"
          strokeLinecap="round"
        />

        <path
          d="M20 250 C95 230 135 210 190 160 C240 115 300 105 380 120"
          fill="none"
          stroke="rgba(120,180,220,0.08)"
          strokeWidth="1.5"
        />
      </svg>

      {/* Street labels */}

      <div className="pointer-events-none absolute left-[18%] top-[34%] rotate-[-8deg] text-[9px] font-medium uppercase tracking-[0.08em] text-white/25">
        SUSHANT LOK
      </div>

      <div className="pointer-events-none absolute right-[10%] top-[50%] rotate-[8deg] text-[9px] font-medium uppercase tracking-[0.08em] text-white/25">
        MG ROAD
      </div>

      <div className="pointer-events-none absolute bottom-[20%] right-[28%] rotate-[5deg] text-[9px] font-medium uppercase tracking-[0.08em] text-white/25">
        SECTOR 54
      </div>

      {/* AI Monitoring */}

      <div className="absolute left-4 top-4 z-20 rounded-full border border-cyan-300/20 bg-[#0a1730]/80 px-4 py-2 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-200" />
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-100">
            AI Monitoring
          </span>
        </div>
      </div>

      {/* Destination */}

      <div className="absolute right-4 top-5 z-20 rounded-2xl border border-white/10 bg-[#102044]/75 px-5 py-4 backdrop-blur-xl">
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-rose-300">
          Destination
        </p>

        <p className="mt-1 text-xl font-bold text-white">
          OFFICE
        </p>

        <p className="mt-1 text-[11px] font-medium text-cyan-200">
          08:15 AM ETA
        </p>
      </div>

      {/* Animated route */}

      <svg
        className="pointer-events-none absolute inset-0 z-10 h-full w-full"
        viewBox="0 0 400 500"
        preserveAspectRatio="none"
      >
        {/* Glow */}

        <motion.path
          d="M42 415 C95 365 118 302 182 270 C238 242 282 170 350 78"
          fill="none"
          stroke="#38d9ff"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.18"
          filter="url(#routeGlow)"
          animate={{
            opacity: [0.12, 0.28, 0.12],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main route */}

        <motion.path
          d="M42 415 C95 365 118 302 182 270 C238 242 282 170 350 78"
          fill="none"
          stroke="#62e6ff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="14 10"
          animate={{
            strokeDashoffset: [0, -48],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Solid route core */}

        <path
          d="M42 415 C95 365 118 302 182 270 C238 242 282 170 350 78"
          fill="none"
          stroke="rgba(225,250,255,0.9)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <defs>
          <filter id="routeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>
      </svg>

      {/* START / HOME */}

      <div className="absolute bottom-[16%] left-4 z-20 rounded-2xl border border-white/10 bg-[#102044]/85 px-4 py-3 backdrop-blur-xl">
        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-200">
          Start
        </p>

        <p className="mt-1 text-lg font-bold text-white">
          HOME
        </p>

        <p className="mt-1 text-[10px] text-white/60">
          07:45 AM
        </p>
      </div>

      {/* Current location glow */}

      <motion.div
        className="absolute left-[48%] top-[56%] z-30 -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: [0, 18, 34, 50, 66, 82],
          y: [0, -18, -42, -68, -94, -118],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {/* Outer pulse */}

        <motion.div
          className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20"
          animate={{
            scale: [0.7, 1.15, 0.7],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Middle pulse */}

        <motion.div
          className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30"
          animate={{
            scale: [0.8, 1.1, 0.8],
            opacity: [0.2, 0.55, 0.2],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glow */}

        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-xl" />

        {/* Location marker */}

        <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/60 bg-[#071329]/90 shadow-[0_0_30px_rgba(80,220,255,0.65)]">
          <div className="h-0 w-0 border-l-[8px] border-r-[8px] border-b-[16px] border-l-transparent border-r-transparent border-b-red-500" />
        </div>
      </motion.div>

      {/* Small live signal */}

      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-full border border-emerald-300/15 bg-black/40 px-3 py-1.5 backdrop-blur-xl">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-50" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
        </span>

        <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-emerald-200">
          Live
        </span>
      </div>
    </div>
  );
}