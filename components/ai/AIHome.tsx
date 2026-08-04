"use client";

import { motion } from "framer-motion";

import ScreenLayout from "../layout/ScreenLayout";

import SectionHeader from "../ui/SectionHeader";
import AIOrb from "../ui/AIOrb";

import VoicePanel from "./VoicePanel";
import AIConversation from "./AIConversation";
import ConciergeStatus from "./ConciergeStatus";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function AIHome({
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
        {/* Ambient Background */}

        <div className="absolute -top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

        {/* Header */}

        <SectionHeader
          eyebrow="AI CONCIERGE"
          title="How can I help today?"
          subtitle="AI assistance backed by your Personal Safety Concierge, always available when you need support."
        />

        {/* AI Orb */}

        <div className="mt-10 flex justify-center">
          <AIOrb />
        </div>

        {/* Voice */}

        <div className="mt-8">
          <VoicePanel />
        </div>

        {/* Conversation */}

        <div className="mt-8">
          <AIConversation />
        </div>

        {/* Concierge */}

        <div className="mt-8">
          <ConciergeStatus />
        </div>

      </motion.div>
    </ScreenLayout>
  );
}