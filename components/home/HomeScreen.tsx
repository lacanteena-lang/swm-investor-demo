"use client";

import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <ScreenLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <div className="relative h-full">
        {/* BACK TO ONBOARDING */}
        <button
          type="button"
          aria-label="Back to onboarding"
          onClick={() => router.push("/onboarding")}
          className="
            absolute
            left-3
            top-3
            z-[80]
            flex
            min-w-[82px]
            flex-col
            items-center
            justify-center
            rounded-2xl
            border
            border-cyan-300/20
            bg-black/25
            px-2
            pb-2
            pt-1
            text-cyan-200
            backdrop-blur-md
            transition-all
            duration-200
            hover:border-cyan-300/50
            hover:bg-cyan-300/10
            hover:shadow-[0_0_18px_rgba(34,211,238,0.25)]
            active:scale-95
          "
        >
          <span className="text-[20px] font-light leading-5 text-cyan-200 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]">
            ←
          </span>

          <span className="mt-0.5 whitespace-nowrap text-[7px] font-black uppercase tracking-[0.12em] text-cyan-300 drop-shadow-[0_0_7px_rgba(34,211,238,0.8)]">
            BACK TO ONBOARDING
          </span>
        </button>

        <PremiumDashboardV2
          setActiveTab={setActiveTab}
        />
      </div>
    </ScreenLayout>
  );
}