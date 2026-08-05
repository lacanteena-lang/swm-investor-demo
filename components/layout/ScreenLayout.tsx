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
    <div className="relative h-full">

      {/* Screen Content */}

      <div className="h-full overflow-hidden pb-24">
        {children}
      </div>

      {/* Fixed Bottom Navigation */}

      <div className="absolute inset-x-0 bottom-0">
        <BottomNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

    </div>
  );
}