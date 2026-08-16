"use client";

import Screen from "../../ui/Screen";

export default function OnboardingSplash() {
  return (
    <Screen>
      <div className="relative h-full w-full overflow-hidden bg-[#05070d] text-white">

        {/* =========================================================
            AMBIENT BACKGROUND
        ========================================================= */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[12%] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="absolute left-1/2 bottom-[-80px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[120px]" />

          {/* Deep emergency red */}
          <div className="absolute bottom-[20px] left-1/2 h-[170px] w-[300px] -translate-x-1/2 rounded-full bg-[#880001]/25 blur-[75px]" />
        </div>

        {/* =========================================================
            CONTENT
        ========================================================= */}

        <div className="relative z-10 flex h-full flex-col px-6 pt-8 pb-5">

          {/* TOP LABEL */}

          <div className="flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/60">
                Personal Safety
              </span>
            </div>
          </div>

          {/* =========================================================
              LOGO
          ========================================================= */}

          <div className="relative mt-4 flex justify-center">

            <div className="absolute left-1/2 top-1/2 h-[115px] w-[115px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[30px]" />

            <img
              src="/images/swm-logo.png"
              alt="Stay With Me"
              className="relative z-10 w-[125px] object-contain drop-shadow-[0_0_18px_rgba(120,220,255,0.55)]"
            />
          </div>

          {/* =========================================================
              HEADLINE
          ========================================================= */}

          <div className="mt-3 text-center">

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
              Your Companion For Today
            </p>

            <h1 className="mt-3 text-[32px] font-semibold leading-[1.02] tracking-[-0.04em]">
              You&apos;re Never
              <br />
              Alone.
            </h1>

            <p className="mx-auto mt-3 max-w-[270px] text-[11px] leading-[1.45] text-white/55">
              AI-powered protection backed by your
              <br />
              <span className="font-medium text-white/80">
                Personal Safety Concierge.
              </span>
            </p>

          </div>

          {/* =========================================================
              CORE VALUE
          ========================================================= */}

          <div className="mt-5 rounded-[22px] border border-white/10 bg-white/[0.055] p-3.5 backdrop-blur-xl">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="text-cyan-300"
                >
                  <path d="M12 3.5a6 6 0 0 0-6 6v3.5a6 6 0 0 0 12 0V9.5a6 6 0 0 0-6-6Z" />
                  <path d="M6 12H4.5a2 2 0 0 0 0 4H6" />
                  <path d="M18 12h1.5a2 2 0 0 1 0 4H18" />
                  <path d="M15.5 16v1.5a3.5 3.5 0 0 1-7 0V16" />
                </svg>
              </div>

              <div>
                <p className="text-[12px] font-semibold text-white">
                  Protection that stays with you
                </p>

                <p className="mt-0.5 text-[9px] leading-4 text-white/50">
                  Intelligent support when you need it.
                  <br />
                  Human support when it matters.
                </p>
              </div>

            </div>
          </div>

          {/* =========================================================
              CORE VALUES
          ========================================================= */}

          <div className="mt-3 grid grid-cols-3 gap-2">

            <ValueCard
              icon={
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M9 3h6v3H9z" />
                  <rect x="5" y="6" width="14" height="13" rx="3" />
                  <path d="M9 11h.01M15 11h.01M9 15h6" />
                </svg>
              }
              label="AI-Powered"
            />

            <ValueCard
              icon={
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M12 3.5a6 6 0 0 0-6 6v3.5a6 6 0 0 0 12 0V9.5a6 6 0 0 0-6-6Z" />
                  <path d="M6 12H4.5a2 2 0 0 0 0 4H6" />
                  <path d="M18 12h1.5a2 2 0 0 1 0 4H18" />
                </svg>
              }
              label="Human-Supported"
            />

            <ValueCard
              icon={
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M12 3 19 6v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z" />
                  <path d="m9.5 12 1.7 1.7 3.5-3.5" />
                </svg>
              }
              label="Privacy-First"
            />

          </div>

          {/* =========================================================
              ACCOUNT DETAILS
          ========================================================= */}

          <div className="mt-4">

            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45">
              Create your account
            </p>

            <div className="grid grid-cols-2 gap-2">

              <div className="rounded-[16px] border border-white/10 bg-white/[0.045] px-3 py-2.5">
                <p className="text-[8px] uppercase tracking-[0.12em] text-white/35">
                  Mobile
                </p>

                <p className="mt-1 text-[10px] text-white/40">
                  +91  __________
                </p>
              </div>

              <div className="rounded-[16px] border border-white/10 bg-white/[0.045] px-3 py-2.5">
                <p className="text-[8px] uppercase tracking-[0.12em] text-white/35">
                  Email
                </p>

                <p className="mt-1 text-[10px] text-white/40">
                  your@email.com
                </p>
              </div>

            </div>
          </div>

          {/* =========================================================
              SPACER
          ========================================================= */}

          <div className="flex-1" />

          {/* =========================================================
              GET STARTED
          ========================================================= */}

          <div>

            <button
              type="button"
              className="
                group
                relative
                w-full
                rounded-[21px]
                border
                border-[#A80001]
                bg-[#880001]
                py-[14px]
                text-[12px]
                font-black
                uppercase
                tracking-[0.14em]
                text-white
                shadow-[0_0_16px_rgba(136,0,1,0.95),0_0_38px_rgba(136,0,1,0.50)]
                transition-all
                duration-300
                hover:bg-[#990001]
                hover:shadow-[0_0_22px_rgba(136,0,1,1),0_0_52px_rgba(136,0,1,0.65)]
                active:scale-[0.98]
              "
            >

              {/* OUTER RED GLOW */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-[-8px]
                  -z-10
                  rounded-[27px]
                  bg-[#880001]/45
                  blur-[16px]
                  animate-pulse
                "
              />

              <span className="relative z-10">
                Get Started
              </span>

            </button>

            <p className="mt-2 text-center text-[8px] tracking-[0.07em] text-white/30">
              AI-ASSISTED • HUMAN-SUPPORTED • PRIVACY-FIRST
            </p>

          </div>

        </div>
      </div>
    </Screen>
  );
}

/* =========================================================
   VALUE CARD
========================================================= */

function ValueCard({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex h-[68px] flex-col items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.045] px-1.5 text-center backdrop-blur-xl">

      <div className="mb-1.5 flex h-6 w-6 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
        {icon}
      </div>

      <span className="text-[7px] font-semibold uppercase tracking-[0.08em] text-white/70">
        {label}
      </span>

    </div>
  );
}