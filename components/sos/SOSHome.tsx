"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wifi,
  BatteryMedium,
  Radio,
  LockKeyhole,
} from "lucide-react";

import ScreenLayout from "../layout/ScreenLayout";
import SectionHeader from "../ui/SectionHeader";
import SOSCountdown from "./SOSCountdown";
import EmergencyStatus from "./EmergencyStatus";
import EmergencyContacts from "./EmergencyContacts";
import EvidenceRecorder from "./EvidenceRecorder";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function SOSHome({
  activeTab,
  setActiveTab,
}: Props) {
  return (
    <ScreenLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative flex h-full flex-col overflow-y-auto no-scrollbar px-5 pt-4 pb-36"
      >
        {/* AMBIENT BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-red-500/[0.08] blur-[150px]" />
          <div className="absolute top-[280px] -right-32 h-[300px] w-[300px] rounded-full bg-orange-500/[0.045] blur-[130px]" />
          <div className="absolute top-[560px] -left-32 h-[300px] w-[300px] rounded-full bg-violet-600/[0.045] blur-[130px]" />
        </div>

        {/* HEADER */}
        <div className="relative z-10">
          <SectionHeader
            eyebrow="EMERGENCY SOS"
            title="Emergency Response"
            subtitle="If an emergency occurs, Stay With Me instantly activates AI assistance, your Personal Safety Concierge, emergency contacts and evidence protection."
          />
        </div>

        {/* SYSTEM READINESS */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.4 }}
          className="relative z-10 mt-5"
        >
          <div className="overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#101828]/75 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08]">
                  <ShieldCheck
                    size={19}
                    strokeWidth={1.8}
                    className="text-emerald-400"
                  />
                  <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                </div>

                <div>
                  <div className="text-[10px] font-semibold tracking-[0.18em] text-white/40">
                    SYSTEM STATUS
                  </div>
                  <div className="mt-0.5 text-[14px] font-semibold text-white">
                    Emergency Ready
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/[0.07] px-2.5 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                <span className="text-[10px] font-semibold tracking-[0.12em] text-emerald-300">
                  SYSTEM READY
                </span>
              </div>
            </div>

            {/* READINESS INDICATORS */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              <ReadinessItem
                icon={<Wifi size={13} />}
                label="Network"
                value="Stb...."
                color="#00E5FF"
                glow="rgba(0,229,255,0.9)"
                delay={0}
              />

              <ReadinessItem
                icon={<Radio size={13} />}
                label="Concierge"
                value="Online"
                color="#FF4DFF"
                glow="rgba(255,77,255,0.9)"
                delay={0.45}
              />

              <ReadinessItem
                icon={<BatteryMedium size={13} />}
                label="Battery"
                value="Good"
                color="#FF9D00"
                glow="rgba(255,157,0,0.9)"
                delay={0.9}
              />
            </div>
          </div>
        </motion.div>

        {/* SOS COUNTDOWN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.18,
            duration: 0.45,
            ease: "easeOut",
          }}
          className="relative z-10 mt-6"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-red-500/[0.13] bg-[#0B1220]/85 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/[0.055] blur-[80px]" />

            <div className="relative mb-3 text-center">
              <div className="text-[10px] font-semibold tracking-[0.22em] text-red-400/80">
                EMERGENCY CONTROL
              </div>

              <h2 className="mt-1 text-[19px] font-semibold tracking-[-0.02em] text-white">
                Hold to activate SOS
              </h2>

              <p className="mx-auto mt-1 max-w-[280px] text-[11px] leading-5 text-white/45">
                Your Personal Safety Concierge will be alerted and your
                emergency workflow will begin.
              </p>
            </div>

            <div className="relative">
              <SOSCountdown />
            </div>

            <div className="relative mt-4 flex items-center justify-center gap-2 text-center">
              <LockKeyhole
                size={12}
                strokeWidth={1.8}
                className="text-white/30"
              />
              <span className="text-[10px] text-white/35">
                Secure emergency activation
              </span>
            </div>
          </div>
        </motion.div>

        {/* EMERGENCY STATUS */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="relative z-10 mt-5"
        >
          <EmergencyStatus />
        </motion.div>

        {/* EMERGENCY CONTACTS */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.4 }}
          className="relative z-10 mt-5"
        >
          <EmergencyContacts />
        </motion.div>

        {/* EVIDENCE RECORDER */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.39, duration: 0.4 }}
          className="relative z-10 mt-5"
        >
          <EvidenceRecorder />
        </motion.div>

        <div className="relative z-10 h-8" />
      </motion.div>
    </ScreenLayout>
  );
}

/* ================================================================
   READINESS ITEM
   - No lateral shaking.
   - Only a very small "alive" pulse.
   - Text is crisp bright white.
   - Colour is reserved for the icon and value.
================================================================ */

function ReadinessItem({
  icon,
  label,
  value,
  color,
  glow,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
  glow: string;
  delay: number;
}) {
  return (
    <div className="flex min-w-0 items-center gap-2 rounded-[14px] border border-white/[0.055] bg-white/[0.025] px-2.5 py-2.5">
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.94, 1, 0.94],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.045]"
        style={{
          boxShadow: `0 0 9px ${glow}`,
        }}
      >
        <span
          style={{
            color,
            filter: `drop-shadow(0 0 4px ${glow})`,
          }}
        >
          {icon}
        </span>
      </motion.div>

      <div className="min-w-0">
        <div className="truncate text-[9px] font-semibold text-violet-300">
          {label}
        </div>

        <div className="truncate text-[10px] font-semibold text-violet-300">
          {value}
        </div>
      </div>
    </div>
  );
}