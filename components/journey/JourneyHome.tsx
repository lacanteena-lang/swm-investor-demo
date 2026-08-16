"use client";

import { motion } from "framer-motion";
import ScreenLayout from "../layout/ScreenLayout";
import JourneyMap from "./JourneyMap";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function JourneyHome({ activeTab, setActiveTab }: Props) {
  return (
    <ScreenLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative h-full overflow-y-auto overflow-x-hidden no-scrollbar bg-[#010817]"
      >
        <JourneyMap setActiveTab={setActiveTab} />
      </motion.div>
    </ScreenLayout>
  );
}