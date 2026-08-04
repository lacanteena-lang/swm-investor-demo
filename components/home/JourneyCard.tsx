"use client";

import {
  Navigation,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";
import StatusBadge from "../ui/StatusBadge";
import PremiumButton from "../ui/PremiumButton";

import { useNavigation } from "../navigation/NavigationContext";

export default function JourneyCard() {

  const { navigate } = useNavigation();

  return (
    <GlassCard className="p-6">

      <SectionHeader
        eyebrow="JOURNEY MONITORING"
        title="Protected Journey"
        subtitle="AI and your Personal Safety Concierge monitor your journey until you arrive safely."
      />

      <div className="mt-6">
        <StatusBadge
          label="No Active Journey"
          color="cyan"
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-white/5 p-4">

          <Navigation
            className="text-cyan-300"
            size={22}
          />

          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/45">
            Journey
          </p>

          <p className="mt-2 font-semibold text-white">
            Standby
          </p>

        </div>

        <div className="rounded-2xl bg-white/5 p-4">

          <ShieldCheck
            className="text-emerald-300"
            size={22}
          />

          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/45">
            Concierge
          </p>

          <p className="mt-2 font-semibold text-white">
            Ready
          </p>

        </div>

      </div>

      <div className="mt-6 rounded-2xl bg-white/5 p-4 flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-[0.25em] text-white/45">
            Estimated Arrival
          </p>

          <p className="mt-2 font-semibold text-white">
            Starts after journey begins
          </p>

        </div>

        <Clock3
          className="text-cyan-300"
          size={22}
        />

      </div>

      <div className="mt-6">

        <PremiumButton
          onClick={() => navigate("journey")}
        >
          Start Protected Journey
        </PremiumButton>

      </div>

    </GlassCard>
  );
}