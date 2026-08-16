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
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="
          relative
          flex
          min-h-0
          h-full
          flex-1
          flex-col
          overflow-y-auto
          overflow-x-hidden
          no-scrollbar
          px-5
          pt-4
          pb-36
        "
      >

        {/* Background Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -top-24
            left-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            rounded-full
            bg-cyan-400/10
            blur-[160px]
          "
        />

        {/* Header */}

        <div className="relative shrink-0">
          <SectionHeader
            eyebrow="MY SAFETY"
            title="Safety Profile"
            subtitle="Manage your personal safety information, family circle, privacy and evidence vault from one secure place."
          />
        </div>

        {/* Profile Header */}

        <div className="relative mt-6 shrink-0">
          <ProfileHeader />
        </div>

        {/* Safety Profile */}

        <div className="relative mt-6 shrink-0">
          <SafetyProfile />
        </div>

        {/* Family */}

        <div className="relative mt-6 shrink-0">
          <FamilyCard />
        </div>

        {/* Evidence */}

        <div className="relative mt-6 shrink-0">
          <EvidenceVaultCard />
        </div>

        {/* Privacy */}

        <div className="relative mt-6 shrink-0">
          <PrivacyCard />
        </div>

        {/* Settings */}

        <div className="relative mt-6 shrink-0">
          <SettingsCard />
        </div>

        {/* Bottom Safe Space */}

        <div className="h-12 shrink-0" />

      </motion.div>
    </ScreenLayout>
  );
}