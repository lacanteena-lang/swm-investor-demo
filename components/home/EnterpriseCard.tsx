"use client";

import {
  Building2,
  Users,
  BarChart3,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";
import StatusBadge from "../ui/StatusBadge";
import PremiumButton from "../ui/PremiumButton";

export default function EnterpriseCard() {
  return (
    <GlassCard className="p-6">

      <SectionHeader
        eyebrow="ENTERPRISE PLATFORM"
        title="Safety for Organisations"
        subtitle="Protect employees, students, visitors and guests with AI and Personal Safety Concierge support."
      />

      <div className="mt-6">
        <StatusBadge
          label="Enterprise Dashboard Ready"
          color="cyan"
        />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">

        <div className="rounded-2xl bg-white/5 p-4 text-center">

          <Building2
            className="mx-auto text-cyan-300"
            size={22}
          />

          <p className="mt-3 text-xs text-white/60">
            Dashboard
          </p>

        </div>

        <div className="rounded-2xl bg-white/5 p-4 text-center">

          <Users
            className="mx-auto text-cyan-300"
            size={22}
          />

          <p className="mt-3 text-xs text-white/60">
            People
          </p>

        </div>

        <div className="rounded-2xl bg-white/5 p-4 text-center">

          <BarChart3
            className="mx-auto text-cyan-300"
            size={22}
          />

          <p className="mt-3 text-xs text-white/60">
            Analytics
          </p>

        </div>

      </div>

      <div className="mt-6">

        <PremiumButton>
          Open Enterprise Dashboard
        </PremiumButton>

      </div>

    </GlassCard>
  );
}