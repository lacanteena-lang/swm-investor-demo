"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import GlassCard from "../ui/GlassCard";

type Props = {
  setActiveTab: (tab: string) => void;
};

export default function AIConversation({
  setActiveTab,
}: Props) {
  const [locationShared, setLocationShared] = useState(false);
  const [conciergeConnected, setConciergeConnected] = useState(false);

  return (
    <GlassCard>

      <div className="space-y-5">

        {/* Concierge */}

        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div
            className="
              inline-block
              max-w-[88%]
              rounded-[26px]
              rounded-tl-lg
              border
              border-cyan-400/10
              bg-cyan-400/10
              px-5
              py-4
            "
          >

            <p className="text-sm font-semibold text-cyan-300">
              Personal Safety Concierge
            </p>

            <p className="mt-3 text-[15px] leading-7 text-white">
              👋 Hello Ajay.
              <br />
              <br />
              I'm here to help keep you safe.
              <br />
              <br />
              How may I assist you today?
            </p>

          </div>
        </motion.div>


        {/* User */}

        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
          className="flex justify-end"
        >
          <div
            className="
              inline-block
              max-w-[82%]
              rounded-[26px]
              rounded-tr-lg
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-5
              py-4
              shadow-[0_8px_20px_rgba(0,180,255,0.25)]
            "
          >

            <p className="text-[15px] leading-7 text-white">
              I'm travelling home alone tonight.
            </p>

          </div>
        </motion.div>


        {/* Concierge Response */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div
            className="
              inline-block
              max-w-[90%]
              rounded-[26px]
              rounded-tl-lg
              border
              border-white/10
              bg-white/5
              px-5
              py-4
            "
          >

            <p className="text-sm font-semibold text-cyan-300">
              Recommended Actions
            </p>

            <p className="mt-3 text-[15px] leading-7 text-white">
              I'll monitor your journey continuously.
              <br />
              <br />
              Your Personal Safety Concierge will remain available throughout your trip.
              <br />
              <br />
              You can begin a protected journey whenever you're ready.
            </p>


            {/* Actions */}

            <div className="mt-5 flex flex-wrap gap-2">

              {/* Start Journey */}

              <button
                type="button"
                onClick={() => setActiveTab("journey")}
                className="
                  rounded-full
                  bg-cyan-500/15
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-cyan-300
                  transition
                  hover:bg-cyan-500/25
                  active:scale-95
                "
              >
                Start Journey
              </button>


              {/* Share Live Location */}

              <button
                type="button"
                onClick={() =>
                  setLocationShared(true)
                }
                className={`
                  rounded-full
                  px-4
                  py-2
                  text-xs
                  font-medium
                  transition
                  active:scale-95
                  ${
                    locationShared
                      ? "bg-emerald-500/15 text-emerald-300"
                      : "bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500/25"
                  }
                `}
              >
                {locationShared
                  ? "Location Shared"
                  : "Share Live Location"}
              </button>


              {/* Talk to Concierge */}

              <button
                type="button"
                onClick={() =>
                  setConciergeConnected(true)
                }
                className={`
                  rounded-full
                  px-4
                  py-2
                  text-xs
                  font-medium
                  transition
                  active:scale-95
                  ${
                    conciergeConnected
                      ? "bg-emerald-500/15 text-emerald-300"
                      : "bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500/25"
                  }
                `}
              >
                {conciergeConnected
                  ? "Concierge Connected"
                  : "Talk to Concierge"}
              </button>

            </div>

          </div>
        </motion.div>


        {/* Listening Indicator */}

        <motion.div
          animate={{
            opacity: [0.35, 1, 0.35],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="flex items-center gap-2"
        >

          <div className="h-2 w-2 rounded-full bg-cyan-300" />

          <div className="h-2 w-2 rounded-full bg-cyan-300" />

          <div className="h-2 w-2 rounded-full bg-cyan-300" />

          <span className="ml-3 text-[13px] text-white/50">
            Concierge is listening...
          </span>

        </motion.div>

      </div>

    </GlassCard>
  );
}