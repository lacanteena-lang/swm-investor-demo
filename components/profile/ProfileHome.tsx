"use client";

import { motion } from "framer-motion";

import ScreenLayout from "../layout/ScreenLayout";

import SectionHeader from "../ui/SectionHeader";

import ProfileHeader from "./ProfileHeader";
import SafetyProfile from "./SafetyProfile";
import FamilyCard from "./FamilyCard";
import EvidenceVaultCard from "./EvidenceVaultCard";
import PrivacyCard from "./PrivacyCard";
import SettingsCard from "./SettingsCard";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function ProfileHome({
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
          eyebrow="MY SAFETY"
          title="Safety Profile"
          subtitle="Manage your personal safety information, family circle, privacy, and evidence vault from one secure place."
        />

        {/* Profile Header */}

        <div className="mt-8">
          <ProfileHeader />
        </div>

        {/* Safety Profile */}

        <div className="mt-8">
          <SafetyProfile />
        </div>

        {/* Family */}

        <div className="mt-8">
          <FamilyCard />
        </div>

        {/* Evidence */}

        <div className="mt-8">
          <EvidenceVaultCard />
        </div>

        {/* Privacy */}

        <div className="mt-8">
          <PrivacyCard />
        </div>

        {/* Settings */}

        <div className="mt-8">
          <SettingsCard />
        </div>

      </motion.div>
    </ScreenLayout>
  );
}