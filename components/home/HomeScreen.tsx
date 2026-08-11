"use client";

import PremiumDashboardV2 from "./PremiumDashboardV2";

import ScreenLayout from "../layout/ScreenLayout";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function HomeScreen({
  activeTab,
  setActiveTab,
}: Props) {
  return (
    <ScreenLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <PremiumDashboardV2
        setActiveTab={setActiveTab}
      />
    </ScreenLayout>
  );
}