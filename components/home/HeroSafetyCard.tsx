"use client";

import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";
import StatusBadge from "../ui/StatusBadge";

import LogoPanel from "./LogoPanel";
import HeroStats from "./HeroStats";

export default function HeroSafetyCard() {
  return (
    <GlassCard className="px-6 py-6">

      {/* Header */}

      <SectionHeader
        eyebrow="GOOD AFTERNOON"
        title="You're Protected"
        subtitle="AI-powered protection backed by your Personal Safety Concierge. You're never alone."
      />

      {/* Status Badges */}

      <div className="mt-6 flex flex-wrap gap-3">

        <StatusBadge
          label="Personal Safety Concierge Online"
        />

        <StatusBadge
          label="AI Ready"
          color="cyan"
        />

      </div>

      {/* Logo */}

      <div className="mt-8">

        <LogoPanel />

      </div>

      {/* Journey Stats */}

      <div className="mt-8">

        <HeroStats />

      </div>

    </GlassCard>
  );
}