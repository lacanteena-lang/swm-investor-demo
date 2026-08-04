"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  ArrowRight,
  Mic,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

export default function AIConciergeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.15 }}
      className="
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-cyan-400/10
        bg-gradient-to-br
        from-[#0A1830]
        via-[#0C2140]
        to-[#0A1224]
        p-6
      "
    >

      {/* Glow */}

      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="flex items-start justify-between">

          <div className="flex items-center gap-4">

            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-cyan-400/10
                border
                border-cyan-400/20
              "
            >
              <Bot
                size={32}
                className="text-cyan-300"
              />
            </div>

            <div>

              <div className="flex items-center gap-2">

                <h2 className="text-3xl font-bold text-white">
                  AI Concierge
                </h2>

                <Sparkles
                  size={18}
                  className="text-cyan-300"
                />

              </div>

              <p className="mt-2 text-white/65 text-[15px]">
                Ask anything. Get real-time guidance.
              </p>

              <p className="mt-1 text-cyan-300 text-[14px]">
                Human concierge always available.
              </p>

            </div>

          </div>

          <ArrowRight
            size={22}
            className="text-white/30"
          />

        </div>
        {/* Live Status */}

        <div
          className="
            mt-7
            rounded-2xl
            border
            border-white/8
            bg-white/5
            p-5
          "
        >
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <CheckCircle2
                size={18}
                className="text-emerald-400"
              />

              <div>

                <p className="text-[11px] uppercase tracking-[0.25em] text-white/45">
                  STATUS
                </p>

                <p className="mt-1 text-white font-semibold">
                  Online & Ready
                </p>

              </div>

            </div>

            <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />

          </div>

          <p className="mt-5 text-[15px] leading-7 text-white/70">
            Your Personal Safety Concierge is available 24/7.
            Ask questions, request assistance, or start a protected journey anytime.
          </p>

          <div className="mt-6 flex gap-3">

            <button
              className="
                flex-1
                rounded-2xl
                bg-cyan-400/10
                border
                border-cyan-400/20
                py-4
                flex
                items-center
                justify-center
                gap-2
                text-white
                font-medium
              "
            >
              <MessageCircle size={18} />
              Chat
            </button>

            <button
              className="
                flex-1
                rounded-2xl
                bg-white/5
                border
                border-white/10
                py-4
                flex
                items-center
                justify-center
                gap-2
                text-white
                font-medium
              "
            >
              <Mic size={18} />
              Voice
            </button>

          </div>

        </div>
         </div>

    </motion.div>
  );
}
