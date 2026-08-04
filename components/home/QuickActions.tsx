"use client";

import {
  Bot,
  Navigation,
  ShieldAlert,
  MapPinned,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";
import { useNavigation } from "../navigation/NavigationContext";

const actions = [
  {
    icon: Bot,
    title: "AI Concierge",
    subtitle: "Talk instantly",
    tab: "ai",
  },
  {
    icon: Navigation,
    title: "Journey",
    subtitle: "Start monitoring",
    tab: "journey",
  },
  {
    icon: ShieldAlert,
    title: "Emergency SOS",
    subtitle: "Immediate help",
    tab: "sos",
  },
  {
    icon: MapPinned,
    title: "Nearby Help",
    subtitle: "Police & Hospitals",
    tab: "",
  },
];

export default function QuickActions() {

  const { navigate } = useNavigation();

  return (
    <GlassCard className="p-6">

      <SectionHeader
        eyebrow="QUICK ACTIONS"
        title="One Tap Access"
        subtitle="Instant access to the most important safety features."
      />

      <div className="mt-6 grid grid-cols-2 gap-4">

        {actions.map(({ icon: Icon, title, subtitle, tab }) => (

          <button
            key={title}
            onClick={() => {
              if (tab) navigate(tab);
            }}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
              transition-all
              hover:bg-white/10
            "
          >

            <Icon
              className="mx-auto text-cyan-300"
              size={24}
            />

            <p className="mt-3 text-center font-medium text-white">
              {title}
            </p>

            <p className="mt-1 text-center text-xs text-white/55">
              {subtitle}
            </p>

          </button>

        ))}

      </div>

    </GlassCard>
  );
}