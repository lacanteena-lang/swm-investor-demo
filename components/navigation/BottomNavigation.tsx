"use client";

import {
  Bot,
  Home,
  Navigation,
  ShieldAlert,
  User,
} from "lucide-react";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function BottomNavigation({
  activeTab,
  setActiveTab,
}: Props) {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-cyan-400/10 bg-[#081321]/95 backdrop-blur-2xl">

      {/* Ambient Glow */}

      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-cyan-500/5" />

      <div className="relative grid grid-cols-5 px-3 py-3">
        {/* HOME */}

      <button
        onClick={() => setActiveTab("home")}
        className="flex flex-col items-center"
      >
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 ${
            activeTab === "home"
              ? "bg-gradient-to-br from-red-500/25 to-red-600/20 shadow-[0_0_30px_rgba(239,68,68,0.45)]"
              : ""
          }`}
        >
          <Home
            size={20}
            className={
              activeTab === "home"
                ? "text-red-400"
                : "text-white/60"
            }
          />
        </div>

        <span
          className={`mt-2 text-[10px] font-semibold ${
            activeTab === "home"
              ? "text-red-400"
              : "text-white/60"
          }`}
        >
          Home
        </span>
      </button>
       {/* AI */}

      <button
        onClick={() => setActiveTab("ai")}
        className="flex flex-col items-center"
      >
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 ${
            activeTab === "ai"
              ? "bg-gradient-to-br from-red-500/25 to-red-600/20 shadow-[0_0_30px_rgba(239,68,68,0.45)]"
              : ""
          }`}
        >
          <Bot
            size={20}
            className={
              activeTab === "ai"
                ? "text-red-400"
                : "text-white/60"
            }
          />
        </div>

        <span
          className={`mt-2 text-[10px] font-semibold ${
            activeTab === "ai"
              ? "text-red-400"
              : "text-white/60"
          }`}
        >
          AI
        </span>
      </button>
      {/* JOURNEY */}

      <button
        onClick={() => setActiveTab("journey")}
        className="flex flex-col items-center"
      >
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 ${
            activeTab === "journey"
              ? "bg-gradient-to-br from-red-500/25 to-red-600/20 shadow-[0_0_30px_rgba(239,68,68,0.45)]"
              : ""
          }`}
        >
          <Navigation
            size={20}
            className={
              activeTab === "journey"
                ? "text-red-400"
                : "text-white/60"
            }
          />
        </div>

        <span
          className={`mt-2 text-[10px] font-semibold ${
            activeTab === "journey"
              ? "text-red-400"
              : "text-white/60"
          }`}
        >
          Journey
        </span>
      </button>
      {/* SOS */}

      <button
        onClick={() => setActiveTab("sos")}
        className="flex flex-col items-center"
      >
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 ${
            activeTab === "sos"
              ? "bg-gradient-to-br from-red-500/25 to-red-600/20 shadow-[0_0_30px_rgba(239,68,68,0.45)]"
              : ""
          }`}
        >
          <ShieldAlert
            size={20}
            className={
              activeTab === "sos"
                ? "text-red-400"
                : "text-white/60"
            }
          />
        </div>

        <span
          className={`mt-2 text-[10px] font-semibold ${
            activeTab === "sos"
              ? "text-red-400"
              : "text-white/60"
          }`}
        >
          SOS
        </span>
      </button>
      {/* PROFILE */}

      <button
        onClick={() => setActiveTab("profile")}
        className="flex flex-col items-center"
      >
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 ${
            activeTab === "profile"
              ? "bg-gradient-to-br from-red-500/25 to-red-600/20 shadow-[0_0_30px_rgba(239,68,68,0.45)]"
              : ""
          }`}
        >
          <User
            size={20}
            className={
              activeTab === "profile"
                ? "text-red-400"
                : "text-white/60"
            }
          />
        </div>

        <span
          className={`mt-2 text-[10px] font-semibold ${
            activeTab === "profile"
              ? "text-red-400"
              : "text-white/60"
          }`}
        >
          Profile
        </span>
      </button>
       </div>

    </div>
  );
}