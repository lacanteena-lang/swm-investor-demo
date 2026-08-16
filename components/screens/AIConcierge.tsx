"use client";

import { useState } from "react";
import ScreenLayout from "../layout/ScreenLayout";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function AIConcierge({
  activeTab,
  setActiveTab,
}: Props) {
  const [listening, setListening] = useState(false);

  return (
    <ScreenLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <div className="relative h-full overflow-hidden bg-[#050B16] text-white">

        {/* =====================================================
            AMBIENT BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0">

          {/* Top cyan atmosphere */}
          <div
            className="
              absolute
              left-1/2
              top-[-180px]
              h-[400px]
              w-[400px]
              -translate-x-1/2
              rounded-full
              bg-cyan-400/10
              blur-[120px]
            "
          />

          {/* Concierge glow */}
          <div
            className={`
              absolute
              left-1/2
              top-[280px]
              h-[240px]
              w-[240px]
              -translate-x-1/2
              rounded-full
              blur-[90px]
              transition-all
              duration-700
              ${
                listening
                  ? "bg-cyan-300/20"
                  : "bg-cyan-500/8"
              }
            `}
          />

          {/* Bottom blue atmosphere */}
          <div
            className="
              absolute
              bottom-[-180px]
              left-1/2
              h-[380px]
              w-[380px]
              -translate-x-1/2
              rounded-full
              bg-blue-600/10
              blur-[120px]
            "
          />

        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="relative z-10 flex h-full flex-col px-5 pt-5 pb-6">

          {/* ===================================================
              HEADER
          =================================================== */}

          <div>

            <div className="flex items-center justify-between">

              {/* Online status */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-400/20
                  bg-emerald-400/[0.08]
                  px-3.5
                  py-2
                "
              >

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_10px_rgba(52,211,153,0.9)]
                    animate-pulse
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-emerald-300
                  "
                >
                  Concierge Online
                </span>

              </div>

              {/* Availability */}

              <div
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.035]
                  px-3
                  py-2
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-white/45
                "
              >
                24 / 7
              </div>

            </div>

            <h1
              className="
                mt-5
                text-[32px]
                font-bold
                leading-none
                tracking-[-0.035em]
                text-white
              "
            >
              Your Safety
              <br />
              Concierge
            </h1>

            <p
              className="
                mt-3
                max-w-[320px]
                text-[13px]
                leading-5
                text-[#AAB6C9]
              "
            >
              AI-assisted protection backed by
              <span className="text-white/85">
                {" "}real human support
              </span>
              {" "}when it matters.
            </p>

          </div>

          {/* ===================================================
              CONCIERGE VOICE CARD
          =================================================== */}

          <div
            className={`
              relative
              mt-6
              overflow-hidden
              rounded-[30px]
              border
              p-6
              backdrop-blur-2xl
              transition-all
              duration-500

              ${
                listening
                  ? "border-cyan-300/35 bg-cyan-400/[0.07] shadow-[0_0_35px_rgba(34,211,238,0.16)]"
                  : "border-white/10 bg-white/[0.045]"
              }
            `}
          >

            {/* Animated atmosphere */}

            <div
              className={`
                pointer-events-none
                absolute
                left-1/2
                top-[42px]
                h-[150px]
                w-[150px]
                -translate-x-1/2
                rounded-full
                blur-[45px]
                transition-all
                duration-500
                ${
                  listening
                    ? "bg-cyan-300/20"
                    : "bg-cyan-300/8"
                }
              `}
            />

            {/* Listening rings */}

            <div className="relative mx-auto flex h-[142px] w-[142px] items-center justify-center">

              {listening && (
                <>
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-cyan-300/20
                      animate-ping
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-[10px]
                      rounded-full
                      border
                      border-cyan-300/15
                      animate-pulse
                    "
                  />
                </>
              )}

              <div
                className="
                  absolute
                  inset-[17px]
                  rounded-full
                  border
                  border-cyan-300/20
                  bg-cyan-300/[0.04]
                "
              />

              <button
                type="button"
                aria-label={
                  listening
                    ? "Stop listening"
                    : "Start listening"
                }
                onClick={() =>
                  setListening((value) => !value)
                }
                className={`
                  relative
                  z-10
                  flex
                  h-[92px]
                  w-[92px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  transition-all
                  duration-300

                  ${
                    listening
                      ? "border-cyan-200/50 bg-cyan-300/20 shadow-[0_0_25px_rgba(103,232,249,0.45)]"
                      : "border-cyan-300/20 bg-cyan-400/10 shadow-[0_0_18px_rgba(34,211,238,0.14)]"
                  }
                `}
              >

                {/* Microphone */}

                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-cyan-200"
                >
                  <rect
                    x="8"
                    y="3"
                    width="8"
                    height="12"
                    rx="4"
                  />

                  <path d="M5 11a7 7 0 0 0 14 0" />

                  <path d="M12 18v3" />

                  <path d="M8 21h8" />

                </svg>

              </button>

            </div>

            {/* Voice heading */}

            <div className="relative mt-5 text-center">

              <p
                className={`
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  transition-colors
                  ${
                    listening
                      ? "text-cyan-300"
                      : "text-white/45"
                  }
                `}
              >
                {listening
                  ? "Listening now"
                  : "Talk naturally"}
              </p>

              <h2 className="mt-2 text-[22px] font-bold tracking-[-0.02em]">
                {listening
                  ? "I&apos;m listening."
                  : "Talk to Concierge"}
              </h2>

              <p className="mx-auto mt-2 max-w-[280px] text-[12px] leading-5 text-[#AAB6C9]">
                {listening
                  ? "Tell me what you need. I&apos;m here with you."
                  : "Tap the microphone and speak naturally with your Personal Safety Concierge."}
              </p>

            </div>

            {/* Main action */}

            <button
              type="button"
              onClick={() =>
                setListening((value) => !value)
              }
              className={`
                relative
                mt-5
                w-full
                rounded-[18px]
                border
                py-3.5
                text-[12px]
                font-bold
                uppercase
                tracking-[0.10em]
                transition-all
                duration-300

                ${
                  listening
                    ? "border-cyan-300/35 bg-cyan-300/10 text-cyan-200"
                    : "border-cyan-300/25 bg-cyan-300/[0.06] text-cyan-200"
                }
              `}
            >
              {listening
                ? "End Listening"
                : "Start Listening"}
            </button>

          </div>

          {/* ===================================================
              SUPPORT STATUS
          =================================================== */}

          <div className="mt-4 grid grid-cols-2 gap-3">

            {/* AI */}

            <div
              className="
                rounded-[20px]
                border
                border-cyan-300/10
                bg-white/[0.035]
                p-4
                backdrop-blur-xl
              "
            >

              <div className="flex items-center justify-between">

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-300/10
                    text-cyan-300
                  "
                >
                  ✦
                </div>

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_9px_rgba(52,211,153,0.8)]
                  "
                />

              </div>

              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                AI Concierge
              </p>

              <p className="mt-1 text-[13px] font-bold text-emerald-300">
                Active
              </p>

            </div>

            {/* HUMAN */}

            <div
              className="
                rounded-[20px]
                border
                border-white/10
                bg-white/[0.035]
                p-4
                backdrop-blur-xl
              "
            >

              <div className="flex items-center justify-between">

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/[0.06]
                    text-white/70
                  "
                >
                  ◉
                </div>

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_9px_rgba(52,211,153,0.8)]
                  "
                />

              </div>

              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                Human Concierge
              </p>

              <p className="mt-1 text-[13px] font-bold text-emerald-300">
                Online
              </p>

            </div>

          </div>

          {/* ===================================================
              CONVERSATION
          =================================================== */}

          <div
            className="
              mt-4
              rounded-[24px]
              border
              border-white/10
              bg-white/[0.035]
              p-5
              backdrop-blur-xl
            "
          >

            <div className="flex items-center justify-between">

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-cyan-300
                "
              >
                Conversation
              </p>

              <span className="text-[9px] text-white/30">
                SECURE
              </span>

            </div>

            <div
              className="
                mt-4
                rounded-[18px]
                border
                border-cyan-300/10
                bg-cyan-300/[0.045]
                p-4
              "
            >

              <div className="flex gap-3">

                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-cyan-300/10
                    text-cyan-300
                  "
                >
                  ✦
                </div>

                <div>

                  <p className="text-[13px] font-semibold text-white">
                    Hello Ajay 👋
                  </p>

                  <p className="mt-2 text-[12px] leading-5 text-[#C7D2E2]">
                    I&apos;m your Personal Safety Concierge.
                    <br />
                    How may I help keep you safe today?
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* ===================================================
              TRUST MESSAGE
          =================================================== */}

          <div
            className="
              mt-4
              flex
              items-center
              justify-center
              gap-2
              rounded-[18px]
              border
              border-white/5
              bg-white/[0.02]
              px-4
              py-3
            "
          >

            <span className="text-cyan-300">
              ✦
            </span>

            <p className="text-center text-[10px] leading-4 text-white/40">
              AI-assisted protection.
              <br />
              Human support when it matters.
            </p>

          </div>

        </div>

      </div>
    </ScreenLayout>
  );
}