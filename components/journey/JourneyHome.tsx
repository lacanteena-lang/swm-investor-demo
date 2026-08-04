"use client";

import { motion } from "framer-motion";

import ScreenLayout from "../layout/ScreenLayout";

import SectionHeader from "../ui/SectionHeader";

import JourneyMap from "./JourneyMap";
import LiveJourneyMetrics from "./LiveJourneyMetrics";
import JourneyStatus from "./JourneyStatus";
import JourneyTimeline from "./JourneyTimeline";
import JourneyStats from "./JourneyStats";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function JourneyHome({
  activeTab,
  setActiveTab,
}: Props) {
  return (
    <ScreenLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative flex h-full flex-col overflow-y-auto no-scrollbar px-5 pt-6 pb-36"
      >
        {/* Background Glow */}

        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[160px]" />

        {/* Header */}

        <SectionHeader
          eyebrow="PROTECTED JOURNEY"
          title="Live Journey Monitoring"
          subtitle="AI continuously monitors your journey while your Personal Safety Concierge stays connected until you arrive safely."
        />

        {/* Live Route */}

        <div className="mt-8">
          <JourneyMap />
        </div>

        {/* Live Metrics */}

        <div className="mt-8">
          <LiveJourneyMetrics />
        </div>

        {/* Journey Status */}

        <div className="mt-8">
          <JourneyStatus />
        </div>

        {/* Timeline */}

        <div className="mt-8">
          <JourneyTimeline />
        </div>

        {/* Statistics */}

        <div className="mt-8">
          <JourneyStats />
        </div>

      </motion.div>
    </ScreenLayout>
  );
}