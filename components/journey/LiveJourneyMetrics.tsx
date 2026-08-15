"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BatteryFull,
  Wifi,
  CloudSun,
  AlertTriangle,
  Brain,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";

export default function LiveJourneyMetrics() {
  return (
    <GlassCard className="p-6">

      {/* Header */}

      <div>

        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300">
          LIVE AI ANALYSIS
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white">
          Journey Intelligence
        </h2>

      </div>

      {/* Metrics */}

      <div className="mt-6 grid grid-cols-2 gap-4">

        {/* Safety */}

        <Metric
          icon={<ShieldCheck size={20} />}
          title="Safety Score"
          value="98%"
          color="text-emerald-300"
        />

        {/* Battery */}

        <Metric
          icon={<BatteryFull size={20} />}
          title="Battery"
          value="82%"
          color="text-cyan-300"
        />

        {/* Network */}

        <Metric
          icon={<Wifi size={20} />}
          title="Network"
          value="Excellent"
          color="text-cyan-300"
        />

        {/* Weather */}

        <Metric
          icon={<CloudSun size={20} />}
          title="Weather"
          value="Clear"
          color="text-emerald-300"
        />

      </div>

      {/* AI Prediction */}

      <div className="mt-6 rounded-2xl border border-cyan-400/10 bg-cyan-500/5 p-5">

        <div className="flex items-center gap-3">

          <Brain
            size={22}
            className="text-cyan-300"
          />

          <div>

            <p className="text-sm font-semibold text-white">
              AI Prediction
            </p>

            <p className="text-xs text-white/60">
              Route appears safe.
            </p>

          </div>

        </div>

      </div>

      {/* Risk */}

      <div className="mt-4 rounded-2xl border border-emerald-400/10 bg-emerald-500/5 p-5">

        <div className="flex items-center gap-3">

          <AlertTriangle
            size={22}
            className="text-emerald-300"
          />

          <div>

            <p className="text-sm font-semibold text-white">
              Risk Assessment
            </p>

            <p className="text-xs text-white/60">
              Low risk detected. Continue on current route.
            </p>

          </div>

        </div>

      </div>

    </GlassCard>
  );
}

function Metric({
  icon,
  title,
  value,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: string;
}) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="rounded-2xl bg-white/5 p-4"
    >
      <div className={color}>
        {icon}
      </div>

      <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/45">
        {title}
      </p>

      <p className={`mt-2 text-lg font-bold ${color}`}>
        {value}
      </p>
    </motion.div>
  );
}