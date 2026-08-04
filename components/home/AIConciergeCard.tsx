"use client";

import {
  MessageCircle,
  Mic,
  Headphones,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";
import StatusBadge from "../ui/StatusBadge";
import PremiumButton from "../ui/PremiumButton";

import { useNavigation } from "../navigation/NavigationContext";

export default function AIConciergeCard() {

  const { navigate } = useNavigation();

  return (
    <GlassCard className="p-6">

      <SectionHeader
        eyebrow="AI + HUMAN SUPPORT"
        title="Personal Safety Concierge"
        subtitle="AI guidance backed by a real Personal Safety Concierge whenever you need assistance."
      />

      <div className="mt-6">
        <StatusBadge label="Concierge Online 24/7" />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">

        <button
          onClick={() => navigate("ai")}
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
          <MessageCircle
            className="mx-auto text-cyan-300"
            size={24}
          />

          <p className="mt-3 text-center font-medium text-white">
            Start Chat
          </p>

        </button>

        <button
          onClick={() => navigate("ai")}
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
          <Mic
            className="mx-auto text-cyan-300"
            size={24}
          />

          <p className="mt-3 text-center font-medium text-white">
            Voice Assistant
          </p>

        </button>

      </div>

      <div className="mt-6 rounded-2xl bg-white/5 p-5">

        <div className="flex items-center gap-3">

          <Headphones
            size={22}
            className="text-emerald-300"
          />

          <div>

            <p className="font-semibold text-white">
              Personal Safety Concierge
            </p>

            <p className="text-sm text-white/60">
              Connected and ready to assist.
            </p>

          </div>

        </div>

      </div>

      <div className="mt-6">

        <PremiumButton
          onClick={() => navigate("ai")}
        >
          Open AI Concierge
        </PremiumButton>

      </div>

    </GlassCard>
  );
}