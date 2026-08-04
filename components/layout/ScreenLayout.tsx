"use client";

import { ReactNode } from "react";

import BottomNavigation from "../navigation/BottomNavigation";

type Props = {
  children: ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function ScreenLayout({
  children,
  activeTab,
  setActiveTab,
}: Props) {
  return (
    <div className="flex h-full flex-col">

      {/* Screen Content */}

      <div className="flex-1 overflow-hidden">
        {children}
      </div>

      {/* Bottom Navigation */}

      <BottomNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

    </div>
  );
}