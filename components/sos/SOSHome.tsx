"use client";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import {
  ShieldAlert,
  ShieldCheck,
  Wifi,
  Headphones,
  BatteryMedium,
  Cpu,
  Users,
  LockKeyhole,
  Camera,
  Video,
  Mic,
  Clock3,
  UserRound,
  MapPin,
  CloudUpload,
  BellRing,
} from "lucide-react";

import ScreenLayout from "../layout/ScreenLayout";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function SOSHome({
  activeTab,
  setActiveTab,
}: Props) {
  const [activated, setActivated] = useState(false);
  const [responseStep, setResponseStep] = useState(0);
  const [activating, setActivating] = useState(false);
  const [conciergeOpen, setConciergeOpen] = useState(false);
  const [conciergeCardOpen, setConciergeCardOpen] = useState(false);
  const [contactsCardOpen, setContactsCardOpen] = useState(false);
  const [aiEngineOpen, setAiEngineOpen] = useState(false);
  const [evidenceVaultOpen, setEvidenceVaultOpen] = useState(false);
  const [photoReadyOpen, setPhotoReadyOpen] = useState(false);
  const [videoReadyOpen, setVideoReadyOpen] = useState(false);
  const [audioReadyOpen, setAudioReadyOpen] = useState(false);
  const [timelineReadyOpen, setTimelineReadyOpen] = useState(false);
  const [conciergeReadyOpen, setConciergeReadyOpen] = useState(false);
  const [locationReadyOpen, setLocationReadyOpen] = useState(false);
  const [dataSyncReadyOpen, setDataSyncReadyOpen] = useState(false);
  const [alertsReadyOpen, setAlertsReadyOpen] = useState(false);
  const [workflowOpen, setWorkflowOpen] = useState<string | null>(null);
  const [conciergeBannerOpen, setConciergeBannerOpen] = useState(false);
  const [humanSupportOpen, setHumanSupportOpen] = useState(false);
  const [contactsStatusOpen, setContactsStatusOpen] = useState(false);
  const [monitoringStatusOpen, setMonitoringStatusOpen] = useState(false);
  const [conciergeConnectionOpen, setConciergeConnectionOpen] = useState(false);

  const activateSOS = () => {
    if (activated || activating) return;

    setActivating(true);
    setResponseStep(0);

    window.setTimeout(() => {
      setActivating(false);
      setActivated(true);
      setResponseStep(1);
    }, 1800);
  };

  const stopSOS = () => {
    setActivating(false);
    setActivated(false);
    setResponseStep(0);
  };

  useEffect(() => {
    if (!activated || responseStep >= 4) return;

    const timer = window.setTimeout(() => {
      setResponseStep((step) => step + 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [activated, responseStep]);

  return (
    <ScreenLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <div className="relative h-full overflow-y-auto overflow-x-hidden bg-[#010817] px-4 pt-4 pb-36 no-scrollbar">

        {/* ambient emergency glow */}
        <div className="pointer-events-none absolute left-1/2 top-28 h-[330px] w-[330px] -translate-x-1/2 rounded-full bg-red-500/[0.035] blur-[120px]" />

        {/* HEADER */}
        <div className="relative text-center">
          <div className="flex items-center justify-center gap-2">
            <ShieldAlert
              size={18}
              className="text-red-400"
              strokeWidth={1.8}
            />
            <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-white">
              EMERGENCY RESPONSE
            </p>
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-[7px] font-bold text-emerald-300">
                SYSTEM READY
              </span>
            </div>
          </div>

          <p className="mt-2 text-[10px] font-semibold text-red-400">
            You are never alone. We are with you.
          </p>
        </div>

        {/* TOP STATUS STRIP */}
        <div className="relative mt-4 grid grid-cols-3 overflow-hidden rounded-2xl border border-cyan-400/15 bg-[#071426]/95 shadow-[0_0_24px_rgba(0,0,0,0.25)]">
          <StatusItem
            icon={<Wifi size={18} />}
            label="NETWORK"
            value="STRONG"
            className="text-emerald-300"
          />
          <StatusItem
            icon={<Headphones size={18} />}
            label="CONCIERGE"
            value="ONLINE"
            className="text-emerald-300"
          />
          <StatusItem
            icon={<BatteryMedium size={18} />}
            label="BATTERY"
            value="82%"
            className="text-emerald-300"
          />
        </div>

        {/* SOS HERO */}
        <div className="relative mt-4 overflow-hidden rounded-[26px] border border-red-500/20 bg-[#030b18] px-3 py-5 shadow-[0_0_35px_rgba(239,68,68,0.08)]">

          {/* subtle map-grid backdrop */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(31,100,150,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(31,100,150,.22) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
            }}
          />

          {/* heartbeat lines */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 opacity-70">
            <svg
              viewBox="0 0 800 100"
              className="h-20 w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 52 H95 L112 52 L125 32 L139 75 L155 45 L170 52 H295 L310 52 L325 25 L342 78 L358 43 L375 52 H800"
                fill="none"
                stroke="#ff3d55"
                strokeWidth="2.2"
              />
            </svg>
          </div>

          <div className="relative flex flex-col items-center">
            <div className="relative flex h-[230px] w-[230px] items-center justify-center">

              {/* CENTRAL SOS RESPONSE CORE — HIGH-POWER NEON */}
              <div
                className={`absolute inset-[-10px] rounded-full transition-all duration-700 ${
                  activating
                    ? "scale-105 bg-red-500/[0.08] shadow-[0_0_28px_8px_rgba(255,30,55,0.42),0_0_70px_22px_rgba(255,30,55,0.28),0_0_120px_35px_rgba(255,0,35,0.16)]"
                    : activated
                      ? "scale-110 bg-red-500/[0.10] shadow-[0_0_35px_10px_rgba(255,30,55,0.55),0_0_85px_25px_rgba(255,30,55,0.34),0_0_145px_45px_rgba(255,0,35,0.20)]"
                      : "bg-red-500/[0.035] shadow-[0_0_24px_5px_rgba(255,30,55,0.28),0_0_70px_18px_rgba(255,0,35,0.14)]"
                }`}
              />

              <div
                className={`absolute inset-[-2px] rounded-full border-2 transition-all duration-700 ${
                  activating
                    ? "scale-105 border-white shadow-[0_0_16px_4px_rgba(255,255,255,0.55),0_0_35px_8px_rgba(255,30,55,0.70)]"
                    : activated
                      ? "scale-110 border-red-100 shadow-[0_0_18px_5px_rgba(255,255,255,0.50),0_0_45px_12px_rgba(255,30,55,0.80)]"
                      : "border-red-300/80 shadow-[0_0_14px_3px_rgba(255,30,55,0.55),0_0_32px_7px_rgba(255,30,55,0.30)]"
                }`}
              />

              <div
                className={`absolute inset-[8px] rounded-full border-[3px] transition-all duration-700 ${
                  activating
                    ? "border-red-100 shadow-[0_0_18px_4px_rgba(255,70,90,0.80)]"
                    : activated
                      ? "border-white/90 shadow-[0_0_22px_5px_rgba(255,45,65,0.85)]"
                      : "border-red-400 shadow-[0_0_16px_3px_rgba(255,45,65,0.65)]"
                }`}
              />

              <div
                className={`absolute inset-[20px] rounded-full transition-all duration-700 ${
                  activating
                    ? "bg-[radial-gradient(circle_at_42%_35%,rgba(255,255,255,0.92)_0%,rgba(255,120,135,0.95)_13%,rgba(255,25,50,0.95)_42%,rgba(130,0,18,0.98)_72%,rgba(35,0,8,1)_100%)] shadow-[inset_0_0_35px_rgba(255,255,255,0.35),inset_0_-18px_35px_rgba(70,0,10,0.55),0_0_35px_8px_rgba(255,25,50,0.75)]"
                    : activated
                      ? "bg-[radial-gradient(circle_at_42%_35%,rgba(255,255,255,0.82)_0%,rgba(255,105,125,0.95)_13%,rgba(255,20,48,0.98)_42%,rgba(125,0,18,1)_72%,rgba(30,0,7,1)_100%)] shadow-[inset_0_0_40px_rgba(255,255,255,0.28),inset_0_-20px_38px_rgba(70,0,10,0.55),0_0_45px_12px_rgba(255,20,45,0.85)]"
                      : "bg-[radial-gradient(circle_at_38%_28%,rgba(255,175,185,0.88)_0%,rgba(255,75,95,0.96)_18%,rgba(235,10,40,0.98)_46%,rgba(125,0,18,1)_72%,rgba(32,0,7,1)_100%)] shadow-[inset_0_0_38px_rgba(255,255,255,0.20),inset_0_-20px_38px_rgba(65,0,10,0.50),0_0_38px_10px_rgba(255,20,45,0.72)]"
                }`}
              />

              <div className="pointer-events-none absolute inset-[31px] rounded-full border border-white/25 shadow-[inset_0_0_20px_rgba(255,255,255,0.16)]" />

              {/* scanning beams */}
              {(activating || activated) && (
                <>
                  <div className="absolute inset-[4px] animate-[spin_1.5s_linear_infinite] rounded-full border-[3px] border-transparent border-t-white border-r-red-200 shadow-[0_0_18px_rgba(255,255,255,0.55)]" />
                  <div className="absolute inset-[13px] animate-[spin_2.4s_linear_infinite_reverse] rounded-full border-2 border-transparent border-b-red-100 border-l-red-400 shadow-[0_0_20px_rgba(255,30,55,0.70)]" />
                </>
              )}

              <button
                type="button"
                onClick={activateSOS}
                disabled={activating || activated}
                className={`relative z-10 flex h-[150px] w-[150px] flex-col items-center justify-center rounded-full border text-white transition-all duration-500 active:scale-95 ${
                  activating
                    ? "scale-105 border-white/80 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,.34),rgba(239,68,68,.78)_35%,rgba(80,0,12,1)_100%)] shadow-[0_0_55px_rgba(255,70,90,0.62),inset_0_0_40px_rgba(255,255,255,0.18)]"
                    : activated
                      ? "scale-105 border-red-200/90 bg-[radial-gradient(circle_at_50%_45%,rgba(255,110,125,.70),rgba(180,0,25,.92)_48%,rgba(45,0,10,1)_100%)] shadow-[0_0_65px_rgba(239,68,68,0.70),inset_0_0_42px_rgba(255,80,100,0.28)]"
                      : "border-white/90 bg-[radial-gradient(circle_at_38%_24%,rgba(255,205,212,.98),rgba(255,65,88,.98)_27%,rgba(235,8,40,.99)_50%,rgba(120,0,18,1)_70%,rgba(35,0,8,1)_100%)] shadow-[0_0_28px_5px_rgba(255,45,65,0.72),0_0_65px_15px_rgba(255,20,45,0.62),0_0_120px_28px_rgba(255,0,35,0.28),inset_0_0_45px_rgba(255,190,200,0.34)]"
                }`}
              >
                <ShieldAlert
                  size={activating || activated ? 41 : 36}
                  strokeWidth={1.5}
                  className={`transition-all duration-500 ${
                    activating ? "animate-pulse text-white" : "text-white"
                  } drop-shadow-[0_0_14px_rgba(255,255,255,0.95)] drop-shadow-[0_0_28px_rgba(255,80,100,0.75)]`}
                />

                <span className={`mt-1 font-black tracking-tight transition-all duration-500 ${
                  activating || activated ? "text-[35px]" : "text-[31px]"
                }`}>
                  SOS
                </span>

                <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] text-white/95">
                  {activating
                    ? "ACTIVATING"
                    : activated
                      ? "ACTIVE"
                      : "TAP TO ACTIVATE"}
                </span>

                {activating && (
                  <span className="mt-2 text-[7px] font-bold uppercase tracking-[0.16em] text-white/70">
                    RESPONSE STARTING
                  </span>
                )}

                {!activated && !activating && (
                  <span className="mt-2 text-[16px] leading-none text-white/90">
                    ↓
                  </span>
                )}
              </button>
            </div>

            <p className="relative -mt-1 text-[8px] font-semibold uppercase tracking-[0.20em] text-white/35">
              {activating
                ? "Establishing emergency response..."
                : activated
                  ? responseStep >= 4
                    ? "Full emergency response active"
                    : "Emergency response connecting..."
                  : "Instant emergency activation"}
            </p>

            {activated && (
              <div className="mt-3 flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/[0.05] px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400 shadow-[0_0_8px_rgba(239,68,68,0.9)]" />
                <span className="text-[7px] font-bold uppercase tracking-[0.16em] text-red-300">
                  {responseStep === 1
                    ? "AI ENGINE ACTIVATED"
                    : responseStep === 2
                      ? "CONCIERGE CONNECTED"
                      : responseStep === 3
                        ? "CONTACTS BEING NOTIFIED"
                        : "EMERGENCY NETWORK ACTIVE"}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* STOP SOS */}
        {activated && (
          <div className="mt-3">
            <button
              type="button"
              onClick={stopSOS}
              className="w-full rounded-2xl border border-white/15 bg-white/[0.045] px-4 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white/80 transition hover:bg-white/[0.07] active:scale-[0.99]"
            >
              STOP SOS
            </button>

            <p className="mt-1.5 text-center text-[7px] text-white/30">
              Tap to end the simulated emergency response
            </p>
          </div>
        )}

        {/* RESPONSE NETWORK */}
        <SectionTitle title="EMERGENCY RESPONSE NETWORK" />

        <div className="relative mt-2 grid grid-cols-4 gap-1.5 rounded-2xl border border-white/10 bg-[#061122]/95 p-2.5">
          <NetworkCard
            icon={<Cpu size={22} />}
            title="AI ENGINE"
            status={responseStep >= 1 ? "ACTIVE" : "READY"}
            tone="cyan"
            active={responseStep >= 1}
            onClick={() => setAiEngineOpen((open) => !open)}
          />
          <NetworkCard
            icon={<Headphones size={22} />}
            title="LIVE CONCIERGE"
            status={responseStep >= 2 ? "CONNECTED" : "ONLINE"}
            tone="violet"
            active={responseStep >= 2}
            onClick={() => setConciergeCardOpen((open) => !open)}
          />
          <NetworkCard
            icon={<Users size={22} />}
            title="5 CONTACTS"
            status={responseStep >= 3 ? "NOTIFIED" : "READY"}
            tone="orange"
            active={responseStep >= 3}
            onClick={() => setContactsCardOpen((open) => !open)}
          />
          <NetworkCard
            icon={<LockKeyhole size={22} />}
            title="EVIDENCE VAULT"
            status={responseStep >= 4 ? "ACTIVE" : "SECURED"}
            tone="green"
            active={responseStep >= 4}
            onClick={() => setEvidenceVaultOpen((open) => !open)}
          />
        </div>

        {aiEngineOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            className="mt-2 overflow-hidden rounded-2xl border border-cyan-300/25 bg-cyan-400/[0.04] shadow-[0_0_20px_rgba(34,211,238,0.08)]"
          >
            <div className="p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-300">
                  <Cpu size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-white">
                    AI Safety Engine
                  </p>
                  <p className="mt-1 text-[8px] leading-4 text-white/60">
                    {responseStep >= 1
                      ? "AI emergency decision support is active and assisting the emergency workflow."
                      : "AI emergency decision support is ready and will activate when an emergency response begins."}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-2 py-1 text-[7px] font-black text-cyan-200">
                  {responseStep >= 1 ? "ACTIVE" : "READY"}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setAiEngineOpen(false)}
                className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:bg-white/[0.06] active:scale-[0.99]"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        )}

        {conciergeCardOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            className="mt-2 overflow-hidden rounded-2xl border border-violet-300/25 bg-violet-400/[0.04] shadow-[0_0_20px_rgba(139,92,246,0.10)]"
          >
            <div className="p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-300/30 bg-violet-400/10 text-violet-300">
                  <Headphones size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-white">
                    Live Concierge
                  </p>
                  <p className="mt-1 text-[8px] leading-4 text-white/60">
                    {responseStep >= 2
                      ? "Your Personal Safety Concierge is connected and actively monitoring your emergency response."
                      : "Your Personal Safety Concierge is online and ready to support you."}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-2 py-1 text-[7px] font-black text-emerald-200">
                  {responseStep >= 2 ? "CONNECTED" : "ONLINE"}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setConciergeCardOpen(false)}
                className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:bg-white/[0.06] active:scale-[0.99]"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        )}

        {contactsCardOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            className="mt-2 overflow-hidden rounded-2xl border border-orange-300/25 bg-orange-400/[0.04] shadow-[0_0_20px_rgba(251,146,60,0.10)]"
          >
            <div className="p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-300/30 bg-orange-400/10 text-orange-300">
                  <Users size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-white">
                    Emergency Contacts
                  </p>
                  <p className="mt-1 text-[8px] leading-4 text-white/60">
                    {responseStep >= 3
                      ? "Your emergency contacts have been notified as part of the active SOS response."
                      : "Your emergency contacts are ready to be notified when SOS is activated."}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-orange-300/30 bg-orange-400/10 px-2 py-1 text-[7px] font-black text-orange-200">
                  {responseStep >= 3 ? "NOTIFIED" : "READY"}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setContactsCardOpen(false)}
                className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:bg-white/[0.06] active:scale-[0.99]"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        )}

        {evidenceVaultOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            className="mt-2 overflow-hidden rounded-2xl border border-emerald-300/25 bg-emerald-400/[0.04] shadow-[0_0_20px_rgba(52,211,153,0.10)]"
          >
            <div className="p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-400/10 text-emerald-300">
                  <LockKeyhole size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-white">
                    Evidence Vault
                  </p>
                  <p className="mt-1 text-[8px] leading-4 text-white/60">
                    {responseStep >= 4
                      ? "Emergency evidence is actively protected and organized in the secure vault."
                      : "Emergency evidence is securely protected and ready for the active response."}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-2 py-1 text-[7px] font-black text-emerald-200">
                  {responseStep >= 4 ? "ACTIVE" : "SECURED"}
                </span>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-1.5">
                <div className="rounded-xl border border-white/[0.07] bg-black/20 px-2 py-2 text-center">
                  <p className="text-[7px] font-bold text-white/70">PHOTO</p>
                  <p className="mt-1 text-[7px] font-black text-emerald-300">
                    {responseStep >= 1 ? "CAPTURING" : "READY"}
                  </p>
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-black/20 px-2 py-2 text-center">
                  <p className="text-[7px] font-bold text-white/70">VIDEO</p>
                  <p className="mt-1 text-[7px] font-black text-emerald-300">
                    {responseStep >= 2 ? "RECORDING" : "READY"}
                  </p>
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-black/20 px-2 py-2 text-center">
                  <p className="text-[7px] font-bold text-white/70">TIMELINE</p>
                  <p className="mt-1 text-[7px] font-black text-emerald-300">
                    {responseStep >= 4 ? "LIVE" : "AUTO"}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setEvidenceVaultOpen(false)}
                className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:bg-white/[0.06] active:scale-[0.99]"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        )}

        {/* SYSTEM READINESS */}
        <SectionTitle title="SYSTEM READINESS" />

        <div className="relative grid grid-cols-4 gap-1.5 rounded-2xl border border-white/10 bg-[#061122]/95 p-2.5">
          <ReadinessCard
            icon={<Camera size={20} />}
            label="PHOTO"
            value={activated ? "CAPTURING" : "READY"}
            tone="lime"
            onClick={() => setPhotoReadyOpen((open) => !open)}
          />
          <ReadinessCard
            icon={<Video size={20} />}
            label="VIDEO"
            value={activated ? "RECORDING" : "READY"}
            tone="cyan"
            onClick={() => setVideoReadyOpen((open) => !open)}
          />
          <ReadinessCard
            icon={<Mic size={20} />}
            label="AUDIO"
            value={activated ? "RECORDING" : "READY"}
            tone="pink"
            onClick={() => setAudioReadyOpen((open) => !open)}
          />
          <ReadinessCard
            icon={<Clock3 size={20} />}
            label="TIMELINE"
            value={activated ? "LIVE" : "AUTO"}
            tone="yellow"
            onClick={() => setTimelineReadyOpen((open) => !open)}
          />
          <ReadinessCard
            icon={<Headphones size={20} />}
            label="CONCIERGE"
            value={responseStep >= 2 ? "ACTIVE" : "ONLINE"}
            tone="purple"
            onClick={() => setConciergeReadyOpen((open) => !open)}
          />
          <ReadinessCard
            icon={<MapPin size={20} />}
            label="LOCATION"
            value={activated ? "TRACKING" : "READY"}
            tone="orange"
                      onClick={() => setLocationReadyOpen((open) => !open)}
/>
          <ReadinessCard
            icon={<CloudUpload size={20} />}
            label="DATA SYNC"
            value={activated ? "LIVE" : "READY"}
            tone="teal"
                      onClick={() => setDataSyncReadyOpen((open) => !open)}
/>
          <ReadinessCard
            icon={<BellRing size={20} />}
            label="ALERTS"
            value={responseStep >= 3 ? "ACTIVE" : "READY"}
            tone="magenta"
                      onClick={() => setAlertsReadyOpen((open) => !open)}
/>
        </div>

        {photoReadyOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            className="mt-2 overflow-hidden rounded-2xl border border-lime-300/25 bg-lime-400/[0.04] shadow-[0_0_20px_rgba(163,230,53,0.10)]"
          >
            <div className="p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-lime-300/30 bg-lime-400/10 text-lime-300">
                  <Camera size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-white">
                    Photo Evidence
                  </p>
                  <p className="mt-1 text-[8px] leading-4 text-white/60">
                    {activated
                      ? "Photo evidence capture is active as part of the emergency workflow."
                      : "Photo evidence capture is ready and will be available during an active emergency response."}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-lime-300/30 bg-lime-400/10 px-2 py-1 text-[7px] font-black text-lime-200">
                  {activated ? "CAPTURING" : "READY"}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setPhotoReadyOpen(false)}
                className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:bg-white/[0.06] active:scale-[0.99]"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        )}

        {videoReadyOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            className="mt-2 overflow-hidden rounded-2xl border border-cyan-300/25 bg-cyan-400/[0.04] shadow-[0_0_20px_rgba(34,211,238,0.10)]"
          >
            <div className="p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-300">
                  <Video size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-white">
                    Video Evidence
                  </p>
                  <p className="mt-1 text-[8px] leading-4 text-white/60">
                    {activated
                      ? "Video recording is active as part of the emergency workflow."
                      : "Video recording is ready and will be available during an active emergency response."}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-2 py-1 text-[7px] font-black text-cyan-200">
                  {activated ? "RECORDING" : "READY"}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setVideoReadyOpen(false)}
                className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:bg-white/[0.06] active:scale-[0.99]"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        )}

        {audioReadyOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            className="mt-2 overflow-hidden rounded-2xl border border-pink-300/25 bg-pink-400/[0.04] shadow-[0_0_20px_rgba(244,114,182,0.10)]"
          >
            <div className="p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-pink-300/30 bg-pink-400/10 text-pink-300">
                  <Mic size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-white">
                    Audio Evidence
                  </p>
                  <p className="mt-1 text-[8px] leading-4 text-white/60">
                    {activated
                      ? "Audio recording is active as part of the emergency workflow."
                      : "Audio recording is ready and will be available during an active emergency response."}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-pink-300/30 bg-pink-400/10 px-2 py-1 text-[7px] font-black text-pink-200">
                  {activated ? "RECORDING" : "READY"}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setAudioReadyOpen(false)}
                className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:bg-white/[0.06] active:scale-[0.99]"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        )}

        {timelineReadyOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            className="mt-2 overflow-hidden rounded-2xl border border-yellow-300/25 bg-yellow-400/[0.04] shadow-[0_0_20px_rgba(253,224,71,0.10)]"
          >
            <div className="p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-yellow-300/30 bg-yellow-400/10 text-yellow-300">
                  <Clock3 size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-white">
                    Incident Timeline
                  </p>
                  <p className="mt-1 text-[8px] leading-4 text-white/60">
                    {activated
                      ? "The incident timeline is live and automatically logging the emergency response."
                      : "The incident timeline is ready to automatically log the emergency response."}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-yellow-300/30 bg-yellow-400/10 px-2 py-1 text-[7px] font-black text-yellow-200">
                  {activated ? "LIVE" : "AUTO"}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setTimelineReadyOpen(false)}
                className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:bg-white/[0.06] active:scale-[0.99]"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        )}

        <div className="mt-2 space-y-2">
          {conciergeReadyOpen && (
            <ReadinessInfoPanel icon={<Headphones size={20} />} title="Live Concierge" value={activated ? "CONNECTED" : "ONLINE"} message={activated ? "Your Personal Safety Concierge is connected and supporting the emergency response." : "Your Personal Safety Concierge is online and ready to support you."} tone="violet" onClose={() => setConciergeReadyOpen(false)} />
          )}
          {locationReadyOpen && (
            <ReadinessInfoPanel icon={<MapPin size={20} />} title="Live Location" value={activated ? "TRACKING" : "READY"} message={activated ? "Your live location is being maintained as part of the emergency response." : "Location sharing is ready for the emergency response."} tone="blue" onClose={() => setLocationReadyOpen(false)} />
          )}
          {dataSyncReadyOpen && (
            <ReadinessInfoPanel icon={<CloudUpload size={20} />} title="Data Sync" value={activated ? "LIVE" : "READY"} message={activated ? "Emergency response data is actively synchronizing." : "Emergency response data is ready to synchronize securely."} tone="teal" onClose={() => setDataSyncReadyOpen(false)} />
          )}
          {alertsReadyOpen && (
            <ReadinessInfoPanel icon={<BellRing size={20} />} title="Alerts" value={responseStep >= 3 ? "ACTIVE" : "READY"} message={responseStep >= 3 ? "Emergency alerts are active in the response workflow." : "Emergency alerts are ready to activate when required."} tone="magenta" onClose={() => setAlertsReadyOpen(false)} />
          )}
        </div>

        {/* LIVE CONCIERGE MONITORING */}
        <SectionTitle title="LIVE CONCIERGE MONITORING" />        {/* LIVE CONCIERGE MONITORING */}
        <SectionTitle title="LIVE CONCIERGE MONITORING" />        {/* LIVE CONCIERGE MONITORING */}
        <SectionTitle title="LIVE CONCIERGE MONITORING" />        {/* LIVE CONCIERGE MONITORING */}
        <SectionTitle title="LIVE CONCIERGE MONITORING" />

        <div
          className={`relative overflow-hidden rounded-2xl border bg-[#050914]/95 transition-all duration-700 ${
            responseStep >= 2
              ? "border-fuchsia-200/80 shadow-[0_0_24px_rgba(217,70,239,0.75),0_0_60px_rgba(139,92,246,0.38),inset_0_0_40px_rgba(168,85,247,0.12)]"
              : "border-violet-400/25 shadow-[0_0_16px_rgba(139,92,246,0.08)]"
          }`}
        >
          {responseStep >= 2 && (
            <>
              <motion.div
                animate={{ x: ["-120%", "140%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute inset-y-0 left-0 w-1/4 -skew-x-12 bg-fuchsia-200/20 blur-lg"
              />
              <motion.div
                animate={{ opacity: [0.25, 0.8, 0.25], scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-0 rounded-2xl border border-fuchsia-300/30"
              />
              <div className="pointer-events-none absolute -right-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-violet-500/15 blur-3xl" />
            </>
          )}

          <div className="relative p-3.5">
            <div className="flex items-center gap-3">
              <div
                className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                  responseStep >= 2
                    ? "border-fuchsia-200/80 bg-fuchsia-400/15 text-fuchsia-200 shadow-[0_0_24px_rgba(217,70,239,0.70)]"
                    : "border-violet-400/20 bg-violet-400/[0.05] text-violet-300"
                }`}
              >
                <Headphones size={21} />
                {responseStep >= 2 && (
                  <span className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,1)]" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-[11px] font-bold text-white">
                    Personal Safety Concierge
                  </p>
                  <span className="rounded-full border border-emerald-300/50 bg-emerald-400/10 px-1.5 py-0.5 text-[7px] font-black text-emerald-200 shadow-[0_0_10px_rgba(52,211,153,0.30)]">
                    {responseStep >= 2 ? "● LIVE" : "READY"}
                  </span>
                </div>

                <p
                  className={`mt-1 text-[9px] font-black leading-4 ${
                    responseStep >= 2
                      ? "text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.95)]"
                      : "text-white/85"
                  }`}
                >
                  {responseStep >= 2
                    ? "A real human Concierge is staying with you during the emergency."
                    : "Your Personal Safety Concierge is ready to support you."}
                </p>
              </div>
            </div>

            {responseStep >= 2 && (
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-fuchsia-300/20 bg-fuchsia-400/[0.045] px-3 py-2">
                <motion.span animate={{ scaleY: [0.35, 1, 0.55, 0.9, 0.35] }} transition={{ duration: 0.8, repeat: Infinity }} className="h-5 w-1 rounded-full bg-fuchsia-300 shadow-[0_0_9px_rgba(217,70,239,0.9)]" />
                <motion.span animate={{ scaleY: [0.8, 0.3, 1, 0.45, 0.8] }} transition={{ duration: 0.7, repeat: Infinity, delay: 0.08 }} className="h-7 w-1 rounded-full bg-violet-300 shadow-[0_0_9px_rgba(139,92,246,0.9)]" />
                <motion.span animate={{ scaleY: [0.45, 0.9, 0.3, 1, 0.45] }} transition={{ duration: 0.75, repeat: Infinity, delay: 0.16 }} className="h-6 w-1 rounded-full bg-fuchsia-200 shadow-[0_0_9px_rgba(232,121,249,0.9)]" />
                <p className="ml-1 text-[8px] font-black uppercase tracking-[0.12em] text-cyan-200 drop-shadow-[0_0_6px_rgba(34,211,238,0.75)]">
                  Concierge connection active
                </p>
                <span className="ml-auto h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_9px_rgba(52,211,153,1)]" />
              </div>
            )}

            <div className="mt-3 grid grid-cols-3 gap-1.5">
              <ConciergeStatus
                label="HUMAN SUPPORT"
                value={responseStep >= 2 ? "ACTIVE" : "READY"}
                active={responseStep >= 2}
                onClick={() => setHumanSupportOpen((open) => !open)}
              />
              <ConciergeStatus
                label="5 CONTACTS"
                value={responseStep >= 3 ? "NOTIFIED" : "READY"}
                active={responseStep >= 3}
                onClick={() => setContactsStatusOpen((open) => !open)}
              />
              <ConciergeStatus
                label="MONITORING"
                value={responseStep >= 2 ? "LIVE" : "STANDBY"}
                active={responseStep >= 2}
                onClick={() => setMonitoringStatusOpen((open) => !open)}
              />
            </div>

            <button
              type="button"
              onClick={() => setConciergeOpen((open) => !open)}
              className={`mt-3 w-full rounded-xl border px-3 py-2.5 text-[8px] font-bold uppercase tracking-[0.12em] transition-all active:scale-[0.99] ${
                responseStep >= 2
                  ? "border-cyan-300/55 bg-cyan-400/10 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.22)]"
                  : "border-white/10 bg-white/[0.025] text-white/75"
              }`}
            >
              {conciergeOpen ? "CLOSE CONCIERGE STATUS" : "VIEW CONCIERGE STATUS"}
            </button>

            {conciergeOpen && (
              <motion.button
                type="button"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                onClick={() => setConciergeConnectionOpen((open) => !open)}
                className={`mt-3 w-full overflow-hidden rounded-xl border bg-black/20 p-3 text-left transition-all active:scale-[0.99] ${
                  conciergeConnectionOpen
                    ? "border-violet-300/40 bg-violet-400/[0.06]"
                    : "border-white/[0.07] hover:bg-white/[0.035]"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-400/10 text-violet-300">
                    <Headphones size={14} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold text-white">
                      Concierge connection
                    </p>
                    <p className="mt-1 text-[8px] leading-4 text-white/70">
                      {responseStep >= 2
                        ? "Connected and monitoring the active safety workflow."
                        : "Ready to connect when an emergency response begins."}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-violet-300/20 bg-violet-400/[0.06] px-2 py-1 text-[7px] font-black text-violet-200">
                    {conciergeConnectionOpen ? "OPEN" : "VIEW"}
                  </span>
                </div>
              </motion.button>
            )}
          </div>
        </div>

        {(humanSupportOpen || contactsStatusOpen || monitoringStatusOpen || conciergeConnectionOpen) && (
          <motion.div
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            className="mt-2 overflow-hidden rounded-2xl border border-violet-300/20 bg-violet-400/[0.035]"
          >
            <div className="p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-300/25 bg-violet-400/10 text-violet-300">
                  <Headphones size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-white">
                    {humanSupportOpen
                      ? "Human Support"
                      : contactsStatusOpen
                        ? "Emergency Contacts"
                        : monitoringStatusOpen
                          ? "Concierge Monitoring"
                          : "Concierge Connection"}
                  </p>
                  <p className="mt-1 text-[8px] leading-4 text-white/60">
                    {humanSupportOpen
                      ? responseStep >= 2
                        ? "A real human Concierge is actively supporting your emergency response."
                        : "Human Concierge support is ready to connect when an emergency begins."
                      : contactsStatusOpen
                        ? responseStep >= 3
                          ? "Your emergency contacts have been notified."
                          : "Your emergency contacts are ready to be notified."
                        : monitoringStatusOpen
                          ? responseStep >= 2
                            ? "Live Concierge monitoring is active."
                            : "Concierge monitoring is standing by."
                          : responseStep >= 2
                            ? "The Concierge is connected and monitoring the active safety workflow."
                            : "The Concierge connection is ready for an emergency response."}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-violet-300/25 bg-violet-400/[0.06] px-2 py-1 text-[7px] font-black text-violet-200">
                  {humanSupportOpen
                    ? responseStep >= 2 ? "ACTIVE" : "READY"
                    : contactsStatusOpen
                      ? responseStep >= 3 ? "NOTIFIED" : "READY"
                      : monitoringStatusOpen
                        ? responseStep >= 2 ? "LIVE" : "STANDBY"
                        : responseStep >= 2 ? "CONNECTED" : "READY"}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setHumanSupportOpen(false);
                  setContactsStatusOpen(false);
                  setMonitoringStatusOpen(false);
                  setConciergeConnectionOpen(false);
                }}
                className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:bg-white/[0.06] active:scale-[0.99]"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        )}

        {/* WORKFLOW */}
        <SectionTitle title="EMERGENCY WORKFLOW STATUS" />

        <div className="relative overflow-hidden rounded-2xl border border-red-500/25 bg-[#061122]/95 shadow-[0_0_22px_rgba(239,68,68,0.08)]">
          <WorkflowRow
            icon={<Camera size={18} />}
            label="Photo Evidence"
            sub="Auto capture ready"
            value={responseStep >= 1 ? "CAPTURING" : "READY"}
            tone="violet"
            active={responseStep >= 1}
                      onClick={() => setWorkflowOpen((value) => value === "photo" ? null : "photo")}
/>
          <WorkflowRow
            icon={<Video size={18} />}
            label="Video Recording"
            sub="Auto recording ready"
            value={responseStep >= 2 ? "RECORDING" : "READY"}
            tone="red"
            active={responseStep >= 2}
                      onClick={() => setWorkflowOpen((value) => value === "video" ? null : "video")}
/>
          <WorkflowRow
            icon={<Mic size={18} />}
            label="Audio Recording"
            sub="Background recording ready"
            value={responseStep >= 3 ? "RECORDING" : "READY"}
            tone="orange"
            active={responseStep >= 3}
                      onClick={() => setWorkflowOpen((value) => value === "audio" ? null : "audio")}
/>
          <WorkflowRow
            icon={<Clock3 size={18} />}
            label="Incident Timeline"
            sub="Automatic logging on"
            value={responseStep >= 4 ? "LIVE" : "AUTOMATIC"}
            tone="cyan"
            active={responseStep >= 4}
                      onClick={() => setWorkflowOpen((value) => value === "timeline" ? null : "timeline")}
/>
          <WorkflowRow
            icon={<UserRound size={18} />}
            label="Concierge Emergency Monitoring"
            sub="24x7 human support"
            value={responseStep >= 2 ? "ACTIVE" : "STANDBY"}
            tone="red"
            active={responseStep >= 2}
            last
                      onClick={() => setWorkflowOpen((value) => value === "concierge" ? null : "concierge")}
/>
        </div>

        {workflowOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            className="mt-2 overflow-hidden rounded-2xl border border-red-400/20 bg-[#071122] shadow-[0_0_20px_rgba(239,68,68,0.08)]"
          >
            <div className="p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/10 text-red-300">
                  {workflowOpen === "photo" && <Camera size={19} />}
                  {workflowOpen === "video" && <Video size={19} />}
                  {workflowOpen === "audio" && <Mic size={19} />}
                  {workflowOpen === "timeline" && <Clock3 size={19} />}
                  {workflowOpen === "concierge" && <UserRound size={19} />}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-white">
                    {workflowOpen === "photo" && "Photo Evidence"}
                    {workflowOpen === "video" && "Video Recording"}
                    {workflowOpen === "audio" && "Audio Recording"}
                    {workflowOpen === "timeline" && "Incident Timeline"}
                    {workflowOpen === "concierge" && "Concierge Emergency Monitoring"}
                  </p>
                  <p className="mt-1 text-[8px] leading-4 text-white/55">
                    {workflowOpen === "photo" && (activated ? "Photo evidence capture is active." : "Photo evidence capture is ready.")}
                    {workflowOpen === "video" && (activated ? "Video recording is active." : "Video recording is ready.")}
                    {workflowOpen === "audio" && (activated ? "Audio recording is active." : "Audio recording is ready.")}
                    {workflowOpen === "timeline" && (activated ? "The incident timeline is actively logging the emergency response." : "The incident timeline is ready for automatic logging.")}
                    {workflowOpen === "concierge" && (activated ? "Your Personal Safety Concierge is actively monitoring the emergency response." : "Your Personal Safety Concierge is standing by and ready to support you.")}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-2 py-1 text-[7px] font-black text-emerald-200">
                  {workflowOpen === "photo" && (activated ? "CAPTURING" : "READY")}
                  {workflowOpen === "video" && (activated ? "RECORDING" : "READY")}
                  {workflowOpen === "audio" && (activated ? "RECORDING" : "READY")}
                  {workflowOpen === "timeline" && (activated ? "LIVE" : "AUTOMATIC")}
                  {workflowOpen === "concierge" && (activated ? "ACTIVE" : "STANDBY")}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setWorkflowOpen(null)}
                className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:bg-white/[0.06] active:scale-[0.99]"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        )}

        {/* HELP BANNER */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setConciergeBannerOpen((open) => !open)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setConciergeBannerOpen((open) => !open);
            }
          }}
          className={`relative mt-3 cursor-pointer overflow-hidden rounded-2xl border px-3 py-3 transition-all duration-700 active:scale-[0.995] ${
            activated
              ? "border-red-400/70 bg-red-500/[0.08] shadow-[0_0_35px_rgba(239,68,68,0.24)]"
              : "border-red-500/35 bg-[#071122] shadow-[0_0_20px_rgba(239,68,68,0.10)]"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-400/30 bg-red-500/10">
              <ShieldCheck size={22} className="text-red-400" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.05em] text-red-400">
                {activated ? "STAY CALM, WE ARE WITH YOU" : "CONCIERGE READY"}
              </p>
              <p className="mt-1 text-[9px] leading-4 text-white/55">
                {activated
                  ? "Stay calm. Your SWM safety support is active."
                  : "Your Personal Safety Concierge is standing by."}
              </p>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-red-400/50 bg-[#0a1626] shadow-[0_0_16px_rgba(239,68,68,0.18)]">
              <Headphones size={21} className="text-violet-300" />
            </div>
          </div>

          <span className="absolute bottom-2 right-3 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_9px_rgba(52,211,153,0.8)]" />

          {conciergeBannerOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 4 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              className="mt-3 overflow-hidden rounded-xl border border-violet-300/20 bg-violet-400/[0.04]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="p-3">
                <div className="flex items-center gap-3">
                  <Headphones size={18} className="shrink-0 text-violet-300" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] font-bold text-white">
                      Personal Safety Concierge
                    </p>
                    <p className="mt-1 text-[7px] leading-4 text-white/55">
                      {activated
                        ? "Live human safety support is active."
                        : "Your Personal Safety Concierge is online and standing by."}
                    </p>
                  </div>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-2 py-1 text-[7px] font-black text-emerald-200">
                    {activated ? "ACTIVE" : "READY"}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setConciergeBannerOpen(false)}
                  className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </ScreenLayout>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mt-4 flex items-center gap-2 px-2">
      <span className="h-px flex-1 bg-red-500/40" />
      <p className="shrink-0 text-[9px] font-bold uppercase tracking-[0.10em] text-white/80">
        {title}
      </p>
      <span className="h-px flex-1 bg-red-500/40" />
    </div>
  );
}

function StatusItem({
  icon,
  label,
  value,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  className: string;
}) {
  return (
    <div className="flex min-w-0 items-center justify-center gap-2 border-r border-white/10 px-2 py-3 last:border-r-0">
      <span className={className}>{icon}</span>
      <div className="min-w-0">
        <p className="truncate text-[7px] font-semibold text-white/45">
          {label}
        </p>
        <p className={`truncate text-[9px] font-bold ${className}`}>
          {value}
        </p>
      </div>
    </div>
  );
}

function NetworkCard({
  icon,
  title,
  status,
  tone,
  active = false,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  status: string;
  tone: "cyan" | "violet" | "orange" | "green";
  active?: boolean;
  onClick?: () => void;
}) {
  const tones = {
    cyan: "border-cyan-400/25 bg-cyan-400/[0.05] text-cyan-300",
    violet: "border-violet-400/25 bg-violet-400/[0.05] text-violet-300",
    orange: "border-orange-400/25 bg-orange-400/[0.05] text-orange-300",
    green: "border-emerald-400/25 bg-emerald-400/[0.05] text-emerald-300",
  };

  const activeGlow = {
    cyan:
      "border-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.95),0_0_42px_rgba(34,211,238,0.55),inset_0_0_28px_rgba(34,211,238,0.22)]",
    violet:
      "border-violet-200 shadow-[0_0_18px_rgba(167,139,250,0.95),0_0_42px_rgba(167,139,250,0.55),inset_0_0_28px_rgba(167,139,250,0.22)]",
    orange:
      "border-orange-200 shadow-[0_0_18px_rgba(251,146,60,0.95),0_0_42px_rgba(251,146,60,0.55),inset_0_0_28px_rgba(251,146,60,0.22)]",
    green:
      "border-emerald-200 shadow-[0_0_18px_rgba(52,211,153,0.95),0_0_42px_rgba(52,211,153,0.55),inset_0_0_28px_rgba(52,211,153,0.22)]",
  };

  const aura = {
    cyan: "bg-cyan-400/30",
    violet: "bg-violet-400/30",
    orange: "bg-orange-400/30",
    green: "bg-emerald-400/30",
  };

  const activeText = {
    cyan: "text-cyan-200",
    violet: "text-violet-200",
    orange: "text-orange-200",
    green: "text-emerald-200",
  };

  return (
    <motion.div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      className={`cursor-pointer relative min-w-0 overflow-hidden rounded-xl border px-1.5 py-3 text-center transition-all duration-500 ${active ? `${activeGlow[tone]} bg-white/[0.09]` : tones[tone]}`}
      animate={
        active
          ? {
              scale: [1, 1.06, 1.025],
              y: [0, -2, 0],
            }
          : { scale: 1, y: 0 }
      }
      transition={
        active
          ? { duration: 0.65, repeat: 2, ease: "easeInOut" }
          : { duration: 0.2 }
      }
    >
      {active && (
        <>
          {/* expanding energy pulse */}
          <motion.div
            initial={{ opacity: 0.85, scale: 0.55 }}
            animate={{ opacity: [0.85, 0.25, 0], scale: [0.55, 1.12, 1.35] }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className={`pointer-events-none absolute inset-[-12px] rounded-full blur-xl ${aura[tone]}`}
          />

          {/* bright sweep */}
          <motion.div
            initial={{ x: "-140%" }}
            animate={{ x: "150%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-white/35 blur-md"
          />

          {/* hot outline */}
          <div className={`pointer-events-none absolute inset-0 rounded-xl border-2 ${activeGlow[tone]}`} />
        </>
      )}

      <div
        className={`relative flex justify-center ${
          active
            ? "scale-110 drop-shadow-[0_0_10px_currentColor] transition-transform duration-300"
            : ""
        }`}
      >
        {icon}
      </div>

      <p className="relative mt-2 truncate text-[7px] font-bold text-white">
        {title}
      </p>

      <div className="relative mt-1 flex items-center justify-center gap-1">
        {active && (
          <motion.span
            animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.35, 0.8] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            className={`h-1.5 w-1.5 rounded-full ${activeText[tone]} shadow-[0_0_10px_currentColor]`}
          />
        )}

        <p className={`truncate text-[7px] font-black ${active ? "text-white" : ""}`}>
          {status}
        </p>
      </div>

      {active && (
        <motion.p
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          className={`relative mt-1 text-[6px] font-black uppercase tracking-[0.15em] ${activeText[tone]}`}
        >
          RESPONSE ACTIVE
        </motion.p>
      )}
    </motion.div>
  );
}
function ReadinessInfoPanel({
  icon, title, value, message, tone, onClose,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  message: string;
  tone: "violet" | "blue" | "teal" | "magenta";
  onClose: () => void;
}) {
  const tones = {
    violet: "border-violet-300/25 bg-violet-400/[0.04] text-violet-300",
    blue: "border-blue-300/25 bg-blue-400/[0.04] text-blue-300",
    teal: "border-teal-300/25 bg-teal-400/[0.04] text-teal-300",
    magenta: "border-fuchsia-300/25 bg-fuchsia-400/[0.04] text-fuchsia-300",
  };
  return (
    <motion.div initial={{ opacity: 0, y: -6, height: 0 }} animate={{ opacity: 1, y: 0, height: "auto" }} className={`overflow-hidden rounded-2xl border ${tones[tone]}`}>
      <div className="p-3.5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">{icon}</div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold text-white">{title}</p>
            <p className="mt-1 text-[8px] leading-4 text-white/60">{message}</p>
          </div>
          <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[7px] font-black text-white/75">{value}</span>
        </div>
        <button type="button" onClick={onClose} className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:bg-white/[0.06] active:scale-[0.99]">CLOSE</button>
      </div>
    </motion.div>
  );
}

function ReadinessCard({
  icon,
  label,
  value,
  tone,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone:
    | "lime"
    | "cyan"
    | "pink"
    | "yellow"
    | "purple"
    | "orange"
    | "teal"
    | "magenta";
  onClick?: () => void;
}) {
  const tones = {
    lime:
      "border-lime-300/70 text-lime-300 shadow-[0_0_14px_rgba(163,230,53,0.35)]",
    cyan:
      "border-cyan-300/70 text-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.35)]",
    pink:
      "border-pink-400/70 text-pink-400 shadow-[0_0_14px_rgba(244,114,182,0.35)]",
    yellow:
      "border-yellow-300/70 text-yellow-300 shadow-[0_0_14px_rgba(253,224,71,0.35)]",
    purple:
      "border-purple-400/70 text-purple-400 shadow-[0_0_14px_rgba(192,132,252,0.35)]",
    orange:
      "border-orange-400/70 text-orange-300 shadow-[0_0_14px_rgba(251,146,60,0.35)]",
    teal:
      "border-teal-300/70 text-teal-300 shadow-[0_0_14px_rgba(45,212,191,0.35)]",
    magenta:
      "border-fuchsia-400/70 text-fuchsia-300 shadow-[0_0_14px_rgba(232,121,249,0.35)]",
  };

  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      className={`min-w-0 rounded-xl border bg-black/20 px-1 py-3 text-center transition-all duration-500 ${tones[tone]} ${
        onClick ? "cursor-pointer active:scale-[0.98]" : ""
      }`}
    >
      <div className="flex justify-center drop-shadow-[0_0_7px_currentColor]">
        {icon}
      </div>

      <p className="mt-2 truncate text-[7px] font-bold text-white">
        {label}
      </p>

      <p className="mt-1 truncate text-[7px] font-bold">
        {value}
      </p>

      <span className="mt-1 inline-block text-[8px] text-emerald-300 drop-shadow-[0_0_5px_rgba(52,211,153,0.9)]">
        • ACTIVE
      </span>
    </div>
  );
}

function ConciergeStatus({
  label,
  value,
  active,
  onClick,
}: {
  label: string;
  value: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      animate={active ? { scale: [1, 1.035, 1] } : { scale: 1 }}
      transition={{ duration: 1.2, repeat: active ? Infinity : 0, ease: "easeInOut" }}
      className={`rounded-xl border px-2 py-2 text-center transition-all duration-500 ${
        active
          ? "border-fuchsia-300/55 bg-fuchsia-400/[0.08] shadow-[0_0_18px_rgba(217,70,239,0.28),inset_0_0_16px_rgba(167,139,250,0.10)]"
          : "border-white/[0.06] bg-white/[0.02]"
      } ${onClick ? "cursor-pointer active:scale-[0.98]" : ""}`}
    >
      <p className="truncate text-[7px] font-bold text-white/80">{label}</p>
      <div className="mt-1 flex items-center justify-center gap-1">
        {active && (
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-200 shadow-[0_0_9px_rgba(217,70,239,1)]" />
        )}
        <p className={`truncate text-[8px] font-black ${
          active
            ? label === "HUMAN SUPPORT"
              ? "text-emerald-300 drop-shadow-[0_0_6px_rgba(52,211,153,0.75)]"
              : label === "5 CONTACTS"
                ? "text-yellow-300 drop-shadow-[0_0_6px_rgba(253,224,71,0.75)]"
                : "text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.75)]"
            : "text-white/60"
        }`}>
          {value}
        </p>
      </div>
    </motion.button>
  );
}

function WorkflowRow({
  icon,
  label,
  sub,
  value,
  tone,
  active = false,
  last,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
  value: string;
  tone: "cyan" | "violet" | "orange" | "red";
  active?: boolean;
  last?: boolean;
  onClick?: () => void;
}) {
  const tones = {
    cyan: "text-cyan-300",
    violet: "text-violet-300",
    orange: "text-orange-300",
    red: "text-red-400",
  };

  const activeBg = {
    cyan: "bg-cyan-400/[0.07] shadow-[inset_0_0_24px_rgba(34,211,238,0.08)]",
    violet: "bg-violet-400/[0.07] shadow-[inset_0_0_24px_rgba(167,139,250,0.08)]",
    orange: "bg-orange-400/[0.07] shadow-[inset_0_0_24px_rgba(251,146,60,0.08)]",
    red: "bg-red-400/[0.07] shadow-[inset_0_0_24px_rgba(248,113,113,0.08)]",
  };

  return (
    <motion.div
      animate={
        active
          ? { x: [0, 3, -2, 0], opacity: [0.82, 1, 1, 1] }
          : { x: 0, opacity: 0.82 }
      }
      transition={
        active
          ? { duration: 0.55, ease: "easeOut" }
          : { duration: 0.2 }
      }
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      className={`relative flex items-center gap-2.5 px-3 py-2.5 transition-all duration-500 ${
        last ? "" : "border-b border-white/[0.06]"
      } ${active ? activeBg[tone] : ""} ${onClick ? "cursor-pointer active:bg-white/[0.06]" : ""}`}
    >
      {active && (
        <motion.div
          initial={{ x: "-120%", opacity: 0 }}
          animate={{ x: "140%", opacity: [0, 0.8, 0] }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/20 blur-md"
        />
      )}

      <div
        className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.035] ${tones[tone]} ${
          active
            ? "scale-110 shadow-[0_0_14px_currentColor] transition-transform duration-300"
            : ""
        }`}
      >
        {icon}

        {active && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border border-emerald-200/70 bg-emerald-400/20 text-[8px] font-black text-emerald-200 shadow-[0_0_10px_rgba(52,211,153,0.85)]">
            ✓
          </span>
        )}
      </div>

      <div className="relative min-w-0 flex-1">
        <p className="truncate text-[9px] font-semibold text-white">
          {label}
        </p>
        <p className="mt-0.5 truncate text-[7px] text-white/40">
          {sub}
        </p>
      </div>

      <span
        className={`relative shrink-0 text-[8px] font-bold ${
          active
            ? tones[tone]
            : value === "AUTOMATIC"
              ? "text-cyan-300"
              : "text-white/35"
        }`}
      >
        {value}
      </span>

      {active && (
        <motion.span
          animate={{ opacity: [0.35, 1, 0.35], scale: [0.85, 1.15, 0.85] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_9px_rgba(52,211,153,0.95)]"
        />
      )}
    </motion.div>
  );
}
