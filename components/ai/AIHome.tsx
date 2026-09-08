"use client";

import { motion } from "framer-motion";

import ScreenLayout from "../layout/ScreenLayout";

import SectionHeader from "../ui/SectionHeader";
import AIOrb from "../ui/AIOrb";

import VoicePanel from "./VoicePanel";
import AIConversation from "./AIConversation";
import ConciergeStatus from "./ConciergeStatus";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onStartJourney: () => void;
};

export default function AIHome({
  activeTab,
  setActiveTab,
  onStartJourney,
}: Props) {
  return (
    <ScreenLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="
          relative
          flex
          h-full
          flex-col
          overflow-y-auto
          no-scrollbar
          px-5
          pt-5
          pb-36
        "
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="
              absolute
              left-1/2
              top-[-160px]
              h-[360px]
              w-[360px]
              -translate-x-1/2
              rounded-full
              bg-cyan-400/10
              blur-[120px]
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-[250px]
              h-[260px]
              w-[260px]
              -translate-x-1/2
              rounded-full
              bg-blue-500/[0.08]
              blur-[110px]
            "
          />

          <div
            className="
              absolute
              bottom-[-180px]
              left-1/2
              h-[360px]
              w-[360px]
              -translate-x-1/2
              rounded-full
              bg-cyan-400/[0.06]
              blur-[120px]
            "
          />
        </div>

        <div className="relative z-10">
          <div className="mt-1">
            <SectionHeader
              eyebrow="AI CONCIERGE"
              title="How can I help today?"
              subtitle="AI assistance backed by your Personal Safety Concierge."
            />
          </div>

          <div className="mt-5 flex justify-center">
            <div
              className="
                relative
                flex
                items-center
                justify-center
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  h-[210px]
                  w-[210px]
                  rounded-full
                  bg-cyan-400/[0.08]
                  blur-[55px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  h-[170px]
                  w-[170px]
                  rounded-full
                  border
                  border-cyan-300/[0.08]
                "
              />

              <AIOrb />
            </div>
          </div>

          <div className="mt-8">
            <VoicePanel
              onStartJourney={onStartJourney}
            />
          </div>

          <div className="mt-7">
            <AIConversation
              setActiveTab={setActiveTab}
              onStartJourney={onStartJourney}
            />
          </div>

          <div className="mt-7 pb-5">
            <ConciergeStatus />
          </div>
        </div>
      </motion.div>
    </ScreenLayout>
  );
}