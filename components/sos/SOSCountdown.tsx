"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Radio,
  CheckCircle2,
  PhoneCall,
  LockKeyhole,
  X,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import PremiumButton from "../ui/PremiumButton";

type SOSState = "ready" | "countdown" | "activated";

export default function SOSCountdown() {
  const [sosState, setSosState] = useState<SOSState>("ready");
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (sosState !== "countdown") return;
    if (countdown <= 0) {
      setSosState("activated");
      return;
    }
    const timer = window.setTimeout(() => {
      setCountdown((current) => current - 1);
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [sosState, countdown]);

  const activateSOS = () => {
    setCountdown(3);
    setSosState("countdown");
  };
  const cancelSOS = () => {
    setCountdown(3);
    setSosState("ready");
  };

  const resetSOS = () => {
    setCountdown(3);
    setSosState("ready");
  };

  const isActivated = sosState === "activated";
  const isCountingDown = sosState === "countdown";

  return (
    <GlassCard>
      <div className="w-full min-w-0 px-2 sm:px-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-red-300">EMERGENCY SOS</p>
            <h2 className="mt-1.5 text-[23px] font-bold leading-tight tracking-tight text-white sm:text-[26px]">
              {isActivated ? "SOS Activated" : "Emergency Ready"}
            </h2>
            <div className="mt-2 flex items-center gap-2">
              <motion.span
                animate={{ opacity: [0.35, 1, 0.35], scale: [0.9, 1.15, 0.9] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${isActivated ? "bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.95)]" : "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"}`}
              />
              <span className={`text-[8px] font-medium uppercase tracking-[0.15em] ${isActivated ? "text-red-300" : "text-emerald-300"}`}>
                {isActivated ? "EMERGENCY ACTIVE" : "SYSTEM READY"}
              </span>
            </div>
          </div>

          <motion.div
            animate={{ scale: [1, 1.08, 1], boxShadow: ["0 0 0 rgba(239,68,68,0)", "0 0 24px rgba(239,68,68,0.32)", "0 0 0 rgba(239,68,68,0)"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-red-400/20 bg-red-500/[0.08] sm:h-14 sm:w-14"
          >
            <ShieldAlert size={25} strokeWidth={1.8} className="text-red-400 sm:h-7 sm:w-7" />
          </motion.div>
        </div>

        <div className="relative mt-5 flex justify-center">
          <div className="relative h-[172px] w-[172px] sm:h-[184px] sm:w-[184px]">
            <motion.div
              animate={{ scale: isActivated ? [0.92, 1.12, 0.92] : [0.96, 1.07, 0.96], opacity: isActivated ? [0.25, 0.58, 0.25] : [0.12, 0.32, 0.12] }}
              transition={{ duration: isActivated ? 1 : 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-2 rounded-full bg-red-500/[0.04] blur-xl"
            />

            <motion.svg
              viewBox="0 0 200 200"
              className="absolute inset-0 h-full w-full -rotate-90"
              animate={isCountingDown ? { rotate: [-90, -84, -90] } : { rotate: -90 }}
              transition={{ duration: 0.7, repeat: isCountingDown ? Infinity : 0, ease: "easeInOut" }}
            >
              <defs>
                <linearGradient id="sosRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff304f" />
                  <stop offset="48%" stopColor="#ff5a36" />
                  <stop offset="100%" stopColor="#ff9a3c" />
                </linearGradient>
                <filter id="sosGlow">
                  <feGaussianBlur stdDeviation="3.2" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <circle cx="100" cy="100" r="77" fill="none" stroke="rgba(255,255,255,0.045)" strokeWidth="2" />
              <motion.circle
                cx="100" cy="100" r="77" fill="none" stroke="url(#sosRingGradient)" strokeWidth="4" strokeLinecap="round" strokeDasharray="9 7" filter="url(#sosGlow)"
                animate={isCountingDown ? { strokeDashoffset: [0, -32] } : { strokeDashoffset: 0 }}
                transition={{ duration: 0.7, repeat: isCountingDown ? Infinity : 0, ease: "linear" }}
              />
              <motion.circle
                cx="100" cy="100" r="65" fill="none" stroke="rgba(255,77,82,0.16)" strokeWidth="1" strokeDasharray="2 8"
                animate={{ rotate: 360 }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "100px 100px" }}
              />
            </motion.svg>

            <svg viewBox="0 0 260 70" className="pointer-events-none absolute left-1/2 top-1/2 h-12 w-[260px] -translate-x-1/2 -translate-y-1/2 opacity-70">
              <motion.path
                d="M0 35 H32 L40 35 L46 26 L52 45 L58 35 H76 L84 35 L91 18 L99 52 L106 35 H132 L140 35 L148 29 L154 40 L161 35 H186 L194 35 L201 24 L208 46 L215 35 H260"
                fill="none" stroke="#ff5964" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                animate={{ pathLength: [0.65, 1, 0.65], opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>

            <motion.div
              animate={isCountingDown ? { scale: [1, 1.08, 1], opacity: [0.94, 1, 0.94] } : { scale: [1, 1.025, 1] }}
              transition={{ duration: isCountingDown ? 0.7 : 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[39px] flex items-center justify-center rounded-full border border-red-400/15 bg-[#090b18]/75 shadow-[inset_0_0_24px_rgba(255,50,70,0.08),0_0_28px_rgba(255,50,70,0.12)] backdrop-blur-sm"
            >
              {isActivated ? (
                <div className="text-center">
                  <CheckCircle2 size={30} className="mx-auto text-red-300" />
                  <span className="mt-1.5 block text-[8px] font-bold uppercase tracking-[0.18em] text-red-300">ACTIVATED</span>
                </div>
              ) : (
                <div className="text-center">
                  <span className="block text-[8px] font-semibold uppercase tracking-[0.28em] text-red-300">SOS</span>
                  <motion.span
                    key={countdown}
                    initial={{ opacity: 0, scale: 0.65, y: 5 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.22 }}
                    className="mt-0.5 block text-[57px] font-black leading-none text-white drop-shadow-[0_0_16px_rgba(255,90,90,0.35)]"
                  >{countdown}</motion.span>
                  <span className="mt-0.5 block text-[8px] uppercase tracking-[0.22em] text-white">SECONDS</span>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {!isActivated && (
          <div className="mt-1 flex justify-center">
            <motion.button
              type="button"
              onClick={isCountingDown ? cancelSOS : activateSOS}
              whileTap={{ scale: 0.96 }}
              animate={{
                boxShadow: isCountingDown
                  ? [
                      "0 0 10px rgba(255,55,65,0.12)",
                      "0 0 24px rgba(255,55,65,0.38)",
                      "0 0 10px rgba(255,55,65,0.12)",
                    ]
                  : "0 0 16px rgba(255,55,65,0.16)",
              }}
              transition={{
                duration: 0.9,
                repeat: isCountingDown ? Infinity : 0,
              }}
              className="rounded-full border border-red-400/40 bg-red-500/[0.08] px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-red-200"
            >
              {isCountingDown ? "Tap to cancel" : "Activate Emergency SOS"}
            </motion.button>
          </div>
        )}

        {isCountingDown && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-2xl border border-red-400/15 bg-red-400/[0.045] px-3 py-2.5">
            <div className="flex items-center justify-center gap-2">
              <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.55, 1, 0.55] }} transition={{ duration: 0.8, repeat: Infinity }}>
                <Radio size={13} className="text-red-300" />
              </motion.div>
              <p className="text-center text-[8px] font-semibold uppercase tracking-[0.12em] text-red-300">Emergency activation in progress</p>
            </div>
          </motion.div>
        )}

        {isActivated && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-5 space-y-2">
            <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-2.5"><CheckCircle2 size={17} className="shrink-0 text-emerald-300" /><div><p className="text-[10px] font-semibold text-white">Personal Safety Concierge</p><p className="text-[8px] text-emerald-300">Connected</p></div></div>
            <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-2.5"><PhoneCall size={17} className="shrink-0 text-emerald-300" /><div><p className="text-[10px] font-semibold text-white">Emergency Contacts</p><p className="text-[8px] text-emerald-300">Notified</p></div></div>
            <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-2.5"><LockKeyhole size={17} className="shrink-0 text-emerald-300" /><div><p className="text-[10px] font-semibold text-white">Evidence Vault</p><p className="text-[8px] text-emerald-300">Recording</p></div></div>
          </motion.div>
        )}

        {!isActivated && !isCountingDown && (
          <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-2xl border border-red-400/10 bg-red-400/[0.035] p-3.5">
            <div className="flex items-start gap-3">
              <Radio size={17} className="mt-0.5 shrink-0 text-red-300" />
              <div className="min-w-0"><p className="text-[10px] font-semibold text-white">Emergency workflow ready</p><p className="mt-1.5 text-[9px] leading-5 text-white">When activated, Stay With Me can begin the emergency workflow, connect your Personal Safety Concierge, notify designated contacts and protect journey evidence.</p></div>
            </div>
          </motion.div>
        )}

        <div className="mt-4">
          {isActivated ? (
            <PremiumButton onClick={resetSOS} className="w-full bg-white/10 text-white"><div className="flex items-center justify-center gap-2"><ShieldAlert size={16} />Reset Demo</div></PremiumButton>
          ) : isCountingDown ? (
            <PremiumButton onClick={cancelSOS} className="w-full bg-white/10 text-white"><div className="flex items-center justify-center gap-2"><X size={16} />Cancel Emergency</div></PremiumButton>
          ) : (
            <PremiumButton onClick={activateSOS} className="w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white shadow-[0_0_30px_rgba(239,68,68,0.30)]"><div className="flex items-center justify-center gap-2"><ShieldAlert size={16} />Activate Emergency SOS</div></PremiumButton>
          )}
        </div>

        <p className="mt-3 text-center text-[7px] uppercase tracking-[0.12em] text-white/20">Simulated emergency workflow • Investor Demo</p>
      </div>
    </GlassCard>
  );
}