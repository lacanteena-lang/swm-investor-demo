"use client";

import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";
import StatusBadge from "../ui/StatusBadge";

import LogoPanel from "./LogoPanel";
import HeroStats from "./HeroStats";

export default function HeroSafetyCard() {
  return (
    <GlassCard className="p-7">

      <SectionHeader
        eyebrow="GOOD AFTERNOON"
        title="You're Protected"
        subtitle="AI-powered protection backed by your Personal Safety Concierge, ready whenever you need assistance."
      />

      {/* Status */}

      <div className="mt-6">
        <StatusBadge label="Personal Safety Concierge Online" />
      </div>

      <div className="mt-4">
        <StatusBadge
          label="AI Concierge Ready"
          color="cyan"
        />
      </div>

      {/* SWM Logo */}

      <LogoPanel />

      {/* Journey + Emergency */}

      <HeroStats />

    </GlassCard>
  );
}