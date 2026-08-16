"use client";

import {
  Settings,
  HelpCircle,
  FileText,
  Info,
  ChevronRight,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";

const items = [
  {
    icon: Settings,
    title: "App Settings",
  },
  {
    icon: HelpCircle,
    title: "Help & Support",
  },
  {
    icon: FileText,
    title: "Privacy Policy",
  },
  {
    icon: Info,
    title: "About Stay With Me",
  },
];

export default function SettingsCard() {
  return (
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

          {items.map(({ icon: Icon, title }) => (

            <button
              key={title}
              type="button"
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
  );
}