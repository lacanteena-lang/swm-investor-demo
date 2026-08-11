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
    if (sosState !== "countdown") {
      return;
    }

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
      <div className="w-full min-w-0 px-3">

        {/* Header */}

        <div className="flex items-center justify-between gap-4">

          <div className="min-w-0">

            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-red-300">
              EMERGENCY SOS
            </p>

            <h2 className="mt-2 text-[26px] font-bold tracking-tight text-white">
              {isActivated ? "SOS Activated" : "Emergency Ready"}
            </h2>

            <div className="mt-2 flex items-center gap-2">

              <motion.span
                animate={{
                  opacity: [0.35, 1, 0.35],
                  scale: [0.9, 1.15, 0.9],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`h-2 w-2 shrink-0 rounded-full ${
                  isActivated
                    ? "bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.9)]"
                    : "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]"
                }`}
              />

              <span
                className={`text-[10px] font-medium uppercase tracking-[0.14em] ${
                  isActivated
                    ? "text-red-300"
                    : "text-emerald-300"
                }`}
              >
                {isActivated ? "EMERGENCY ACTIVE" : "SYSTEM READY"}
              </span>

            </div>

          </div>

          {/* Emergency Icon */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                "0 0 0 rgba(239,68,68,0)",
                "0 0 28px rgba(239,68,68,0.30)",
                "0 0 0 rgba(239,68,68,0)",
              ],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              h-16
              w-16
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-red-400/20
              bg-red-500/10
            "
          >
            <ShieldAlert
              size={30}
              strokeWidth={1.8}
              className="text-red-400"
            />
          </motion.div>

        </div>


        {/* Countdown / Activated State */}

        <div className="mt-8 flex justify-center">

          <div className="relative flex h-40 w-40 items-center justify-center">

            {/* Outer pulse */}

            <motion.div
              animate={{
                scale: isActivated
                  ? [0.9, 1.15, 0.9]
                  : [0.8, 1.12, 0.8],
                opacity: isActivated
                  ? [0.25, 0.6, 0.25]
                  : [0.15, 0.45, 0.15],
              }}
              transition={{
                duration: isActivated ? 1.2 : 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full border border-red-400/30"
            />

            {/* Middle pulse */}

            <motion.div
              animate={{
                scale: [0.85, 1.05, 0.85],
                opacity: [0.2, 0.55, 0.2],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-4 rounded-full border border-red-400/25"
            />

            {/* Main Circle */}

            <motion.div
              animate={{
                scale: isCountingDown
                  ? [1, 1.08, 1]
                  : [1, 1.04, 1],
              }}
              transition={{
                duration: isCountingDown ? 0.7 : 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                flex
                h-32
                w-32
                items-center
                justify-center
                rounded-full
                border
                border-red-400/30
                bg-red-500/[0.12]
                shadow-[0_0_45px_rgba(239,68,68,0.18)]
              "
            >

              {isActivated ? (

                <div className="text-center">

                  <CheckCircle2
                    size={34}
                    className="mx-auto text-red-300"
                  />

                  <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-red-300">
                    ACTIVATED
                  </span>

                </div>

              ) : (

                <div className="text-center">

                  <span className="block text-[9px] font-semibold uppercase tracking-[0.25em] text-red-300/70">
                    SOS
                  </span>

                  <motion.span
                    key={countdown}
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="mt-1 block text-6xl font-black leading-none text-red-300"
                  >
                    {countdown}
                  </motion.span>

                  <span className="mt-1 block text-[9px] uppercase tracking-[0.18em] text-white/40">
                    seconds
                  </span>

                </div>

              )}

            </motion.div>

          </div>

        </div>


        {/* Countdown Message */}

        {isCountingDown && (

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-2xl border border-red-400/15 bg-red-400/[0.06] px-4 py-3"
          >

            <div className="flex items-center justify-center gap-2">

              <Radio
                size={15}
                className="text-red-300"
              />

              <p className="text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-red-300">
                Emergency activation in progress
              </p>

            </div>

          </motion.div>

        )}


        {/* Activated Response */}

        {isActivated && (

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 space-y-2"
          >

            <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-3">

              <CheckCircle2
                size={18}
                className="shrink-0 text-emerald-300"
              />

              <div className="min-w-0">

                <p className="text-[11px] font-semibold text-white">
                  Personal Safety Concierge
                </p>

                <p className="text-[9px] text-emerald-300">
                  Connected
                </p>

              </div>

            </div>


            <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-3">

              <PhoneCall
                size={18}
                className="shrink-0 text-emerald-300"
              />

              <div className="min-w-0">

                <p className="text-[11px] font-semibold text-white">
                  Emergency Contacts
                </p>

                <p className="text-[9px] text-emerald-300">
                  Notified
                </p>

              </div>

            </div>


            <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-3">

              <LockKeyhole
                size={18}
                className="shrink-0 text-emerald-300"
              />

              <div className="min-w-0">

                <p className="text-[11px] font-semibold text-white">
                  Evidence Vault
                </p>

                <p className="text-[9px] text-emerald-300">
                  Recording
                </p>

              </div>

            </div>

          </motion.div>

        )}


        {/* Ready Explanation */}

        {!isActivated && !isCountingDown && (

          <div className="mt-7 rounded-2xl border border-red-400/10 bg-red-400/[0.035] p-5">

            <div className="flex items-start gap-3">

              <Radio
                size={19}
                className="mt-0.5 shrink-0 text-red-300"
              />

              <div className="min-w-0">

                <p className="text-[12px] font-semibold text-white">
                  Emergency workflow ready
                </p>

                <p className="mt-2 text-[10px] leading-6 text-white/50">
                  When activated, Stay With Me can begin the emergency
                  workflow, connect your Personal Safety Concierge,
                  notify designated contacts and protect journey evidence.
                </p>

              </div>

            </div>

          </div>

        )}


        {/* Action */}

        <div className="mt-6">

          {isActivated ? (

            <PremiumButton
              onClick={resetSOS}
              className="w-full bg-white/10 text-white"
            >
              <div className="flex items-center justify-center gap-2">
                <ShieldAlert size={17} />
                Reset Demo
              </div>
            </PremiumButton>

          ) : isCountingDown ? (

            <PremiumButton
              onClick={cancelSOS}
              className="w-full bg-white/10 text-white"
            >
              <div className="flex items-center justify-center gap-2">
                <X size={17} />
                Cancel Emergency
              </div>
            </PremiumButton>

          ) : (

            <PremiumButton
              onClick={activateSOS}
              className="w-full bg-red-500 text-white shadow-[0_0_35px_rgba(239,68,68,0.35)]"
            >
              <div className="flex items-center justify-center gap-2">
                <ShieldAlert size={17} />
                Activate Emergency SOS
              </div>
            </PremiumButton>

          )}

        </div>


        {/* Demo Notice */}

        <p className="mt-4 text-center text-[8px] uppercase tracking-[0.12em] text-white/20">
          Simulated emergency workflow • Investor Demo
        </p>

      </div>
    </GlassCard>
  );
}