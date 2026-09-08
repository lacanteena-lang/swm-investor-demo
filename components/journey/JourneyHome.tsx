"use client";

import ScreenLayout from "../layout/ScreenLayout";
import JourneyMap from "./JourneyMap";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function JourneyHome({ activeTab, setActiveTab }: Props) {
  return (
    <ScreenLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="relative h-full overflow-y-auto overflow-x-hidden no-scrollbar bg-[#010817]">
        <JourneyMap setActiveTab={setActiveTab} />
      </div>
    </ScreenLayout>
  );
}
