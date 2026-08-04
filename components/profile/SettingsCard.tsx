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
    <GlassCard className="p-6">

      <p className="text-xs uppercase tracking-[0.30em] text-cyan-300/70">
        SETTINGS
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Preferences
      </h2>

      <div className="mt-8 space-y-4">

        {items.map(({ icon: Icon, title }) => (

          <button
            key={title}
            className="
              flex
              w-full
              items-center
              justify-between
              rounded-2xl
              bg-white/5
              p-4
              transition-all
              hover:bg-white/10
            "
          >

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400/10">

                <Icon
                  size={20}
                  className="text-cyan-300"
                />

              </div>

              <span className="text-white">
                {title}
              </span>

            </div>

            <ChevronRight
              size={18}
              className="text-white/40"
            />

          </button>

        ))}

      </div>

    </GlassCard>
  );
}