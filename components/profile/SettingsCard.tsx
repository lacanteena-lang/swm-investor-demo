"use client";

import { useState } from "react";
import {
  Settings,
  HelpCircle,
  FileText,
  Info,
  ChevronRight,
  X,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";

type PanelKey =
  | "app-settings"
  | "help-support"
  | "privacy-policy"
  | "about";

const items = [
  {
    icon: Settings,
    title: "App Settings",
    key: "app-settings" as const,
  },
  {
    icon: HelpCircle,
    title: "Help & Support",
    key: "help-support" as const,
  },
  {
    icon: FileText,
    title: "Privacy Policy",
    key: "privacy-policy" as const,
  },
  {
    icon: Info,
    title: "About Stay With Me",
    key: "about" as const,
  },
];

export default function SettingsCard() {
  const [activePanel, setActivePanel] = useState<PanelKey | null>(null);

  const closePanel = () => {
    setActivePanel(null);
  };

  const activeItem = items.find((item) => item.key === activePanel);

  return (
    <>
      <GlassCard className="overflow-visible">
        <div className="p-5">

          {/* Header */}

          <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
            SETTINGS
          </p>

          <h2 className="mt-2 text-[23px] font-bold tracking-tight text-white">
            Preferences
          </h2>

          <p className="mt-2 text-[10px] font-semibold leading-5 text-red-400">
            Manage your Stay With Me experience and access support resources.
          </p>

          {/* Settings */}

          <div className="mt-6 space-y-3">

            {items.map(({ icon: Icon, title, key }) => (

              <button
                key={key}
                type="button"
                onClick={() => setActivePanel(key)}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-3
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/[0.04]
                  p-4
                  text-left
                  transition-all
                  duration-200
                  hover:border-cyan-400/20
                  hover:bg-white/[0.08]
                  active:scale-[0.99]
                "
              >

                <div className="flex min-w-0 items-center gap-3">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-cyan-400/10
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-cyan-300"
                    />
                  </div>

                  <span className="truncate text-[12px] font-semibold text-white">
                    {title}
                  </span>

                </div>

                <ChevronRight
                  size={18}
                  strokeWidth={1.8}
                  className="shrink-0 text-white/35"
                />

              </button>

            ))}

          </div>

          {/* Version */}

          <div className="mt-6 text-center">

            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-red-400">
              STAY WITH ME
            </p>

            <p className="mt-1 text-[9px] font-semibold text-red-400">
              Personal Safety Platform
            </p>

          </div>

        </div>
      </GlassCard>

      {/* Preference / information modal */}

      {activePanel && (

        <div
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            bg-black/70
            px-5
            backdrop-blur-sm
          "
        >

          <div
            className="
              w-full
              max-w-[350px]
              rounded-[26px]
              border
              border-white/10
              bg-[#0d1420]
              p-5
              shadow-2xl
            "
          >

            <div className="flex items-start justify-between gap-4">

              <div className="min-w-0">

                <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
                  SETTINGS
                </p>

                <h3 className="mt-2 text-[22px] font-bold tracking-tight text-white">
                  {activeItem?.title}
                </h3>

              </div>

              <button
                type="button"
                onClick={closePanel}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-white/70
                  transition
                  hover:bg-white/[0.08]
                "
                aria-label="Close"
              >
                <X size={17} />
              </button>

            </div>

            {/* App Settings */}

            {activePanel === "app-settings" && (

              <div className="mt-5">

                <p className="text-[10px] leading-5 text-white/50">
                  Manage your Stay With Me app preferences and safety
                  experience.
                </p>

                <div className="mt-4 space-y-3">

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/5
                      bg-white/[0.04]
                      p-4
                    "
                  >
                    <p className="text-[11px] font-semibold text-white">
                      Safety Platform
                    </p>
                    <p className="mt-1 text-[9px] leading-4 text-white/40">
                      Your core safety features are active and available.
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-emerald-400/10
                      bg-emerald-400/[0.035]
                      p-4
                    "
                  >
                    <div className="flex items-center gap-2">

                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-emerald-400
                          shadow-[0_0_10px_rgba(52,211,153,0.8)]
                        "
                      />

                      <p className="text-[10px] font-semibold text-emerald-300">
                        Safety protection active
                      </p>

                    </div>
                  </div>

                </div>

              </div>

            )}

            {/* Help & Support */}

            {activePanel === "help-support" && (

              <div className="mt-5">

                <p className="text-[10px] leading-5 text-white/50">
                  Get help with Stay With Me and learn how the safety
                  platform works.
                </p>

                <div className="mt-4 space-y-3">

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/5
                      bg-white/[0.04]
                      p-4
                    "
                  >
                    <p className="text-[11px] font-semibold text-white">
                      Need assistance?
                    </p>
                    <p className="mt-1 text-[9px] leading-4 text-white/40">
                      Your Personal Safety Concierge is available to assist
                      with supported safety workflows.
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-cyan-400/10
                      bg-cyan-400/[0.035]
                      p-4
                    "
                  >
                    <p className="text-[10px] font-semibold text-cyan-200">
                      Support resources
                    </p>
                    <p className="mt-1 text-[9px] leading-4 text-white/40">
                      Help and support options will be connected to the
                      production support system.
                    </p>
                  </div>

                </div>

              </div>

            )}

            {/* Privacy Policy */}

            {activePanel === "privacy-policy" && (

              <div className="mt-5">

                <p className="text-[10px] leading-5 text-white/50">
                  Stay With Me is designed with privacy and safety in mind.
                </p>

                <div
                  className="
                    mt-4
                    rounded-2xl
                    border
                    border-white/5
                    bg-white/[0.04]
                    p-4
                  "
                >
                  <p className="text-[11px] font-semibold text-white">
                    Privacy Protection
                  </p>

                  <p className="mt-2 text-[9px] leading-5 text-white/40">
                    Your safety information is managed through protected
                    application services. Evidence Vault content is stored
                    securely, and your safety settings remain under your
                    control.
                  </p>

                  <p className="mt-3 text-[9px] leading-5 text-white/30">
                    Full legal privacy policy content will be connected
                    before production launch.
                  </p>
                </div>

              </div>

            )}

            {/* About */}

            {activePanel === "about" && (

              <div className="mt-5">

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/5
                    bg-white/[0.04]
                    p-4
                  "
                >

                  <p className="text-[11px] font-semibold text-white">
                    Stay With Me
                  </p>

                  <p className="mt-2 text-[9px] leading-5 text-white/45">
                    Personal Safety Platform
                  </p>

                  <div className="mt-4 h-px bg-white/5" />

                  <p className="mt-4 text-[9px] leading-5 text-white/40">
                    AI-assisted, human-supported safety designed to help
                    people stay connected throughout their journey.
                  </p>

                  <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.14em] text-cyan-300">
                    Stay With Me
                  </p>

                </div>

              </div>

            )}

            <button
              type="button"
              onClick={closePanel}
              className="
                mt-5
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-3
                text-[10px]
                font-semibold
                text-white/60
                transition
                hover:bg-white/[0.08]
              "
            >
              Close
            </button>

          </div>

        </div>

      )}
    </>
  );
}