"use client";

import { motion } from "framer-motion";

import ScreenLayout from "../layout/ScreenLayout";

import JourneyMap from "./JourneyMap";
import LiveJourneyMetrics from "./LiveJourneyMetrics";
import JourneyStatus from "./JourneyStatus";
import JourneyTimeline from "./JourneyTimeline";
import JourneyStats from "./JourneyStats";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function JourneyHome({
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
        className="relative h-full overflow-y-auto no-scrollbar"
      >

        {/* Background Glow */}

        <div className="pointer-events-none fixed inset-0">

          <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[150px]" />

          <div className="absolute bottom-[-150px] left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        </div>


        {/* Scrollable Journey Content */}

        <div className="relative px-5 pt-4 pb-44">

          {/* Journey Map */}

          <JourneyMap />


          {/* Live AI Analysis */}

          <div className="mt-5">
            <LiveJourneyMetrics />
          </div>


          {/* Journey Status */}

          <div className="mt-5">
            <JourneyStatus />
          </div>


          {/* Journey Timeline */}

          <div className="mt-5">
            <JourneyTimeline />
          </div>


          {/* Journey Stats */}

          <div className="mt-5">
            <JourneyStats />
          </div>


          {/* Bottom Safe Space */}

          <div className="h-8" />

        </div>

      </motion.div>
    </ScreenLayout>
  );
}