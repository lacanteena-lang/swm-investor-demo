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
    <>
      {/* Screen Content */}
      <div className="relative z-0 h-full overflow-hidden pb-24">
        {children}
      </div>

      {/* Fixed Bottom Navigation */}
      <div className="pointer-events-auto absolute inset-x-0 bottom-0 z-50">
        <BottomNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </>
  );
}