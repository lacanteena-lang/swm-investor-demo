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
};

export default function AIHome({
  activeTab,
  setActiveTab,
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

        {/* =====================================================
            PREMIUM AMBIENT BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* Top cyan glow */}
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

          {/* Concierge centre glow */}
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

          {/* Bottom atmosphere */}
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


        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="relative z-10">

          {/* HEADER */}

          <div className="mt-1">

            <SectionHeader
              eyebrow="AI CONCIERGE"
              title="How can I help today?"
              subtitle="AI assistance backed by your Personal Safety Concierge."
            />

          </div>


          {/* AI ORB */}

          <div className="mt-5 flex justify-center">

            <div
              className="
                relative
                flex
                items-center
                justify-center
              "
            >

              {/* Soft outer glow */}

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

              {/* Secondary ring */}

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


          {/* VOICE CONCIERGE */}

          <div className="mt-8">

            <VoicePanel />

          </div>


          {/* CONVERSATION */}

          <div className="mt-7">

            <AIConversation
              setActiveTab={setActiveTab}
            />

          </div>


          {/* CONCIERGE STATUS */}

          <div className="mt-7 pb-5">

            <ConciergeStatus />

          </div>

        </div>

      </motion.div>
    </ScreenLayout>
  );
}