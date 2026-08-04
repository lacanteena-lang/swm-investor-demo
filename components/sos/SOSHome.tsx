"use client";

import { motion } from "framer-motion";

import ScreenLayout from "../layout/ScreenLayout";

import SectionHeader from "../ui/SectionHeader";

import SOSCountdown from "./SOSCountdown";
import EmergencyStatus from "./EmergencyStatus";
import EmergencyContacts from "./EmergencyContacts";
import EvidenceRecorder from "./EvidenceRecorder";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function SOSHome({
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

        <div className="absolute -top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-red-500/10 blur-[140px]" />

        {/* Header */}

        <SectionHeader
          eyebrow="EMERGENCY SOS"
          title="Emergency Response"
          subtitle="If an emergency occurs, Stay With Me instantly activates AI assistance, your Personal Safety Concierge, emergency contacts, and evidence protection."
        />

        {/* SOS Countdown */}

        <div className="mt-8">
          <SOSCountdown />
        </div>

        {/* Emergency Status */}

        <div className="mt-8">
          <EmergencyStatus />
        </div>

        {/* Emergency Contacts */}

        <div className="mt-8">
          <EmergencyContacts />
        </div>

        {/* Evidence Recorder */}

        <div className="mt-8">
          <EvidenceRecorder />
        </div>

      </motion.div>
    </ScreenLayout>
  );
}