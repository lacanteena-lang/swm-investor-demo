"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

import GlassCard from "../ui/GlassCard";

type Props = {
  setActiveTab: (tab: string) => void;
  onStartJourney?: () => void;
};

type Message = {
  role: "user" | "concierge";
  text: string;
};

export default function AIConversation({
  setActiveTab,
  onStartJourney,
}: Props) {
  const [locationShared, setLocationShared] = useState(false);
  const [conciergeConnected, setConciergeConnected] = useState(false);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "concierge",
      text:
        "&#128075; Hello Ajay.\n\nI'm here to help keep you safe.\n\nHow may I assist you today?",
    },
    {
      role: "user",
      text: "I'm travelling home alone tonight.",
    },
    {
      role: "concierge",
      text:
        "I can help you get home safely.\n\nWould you like to start a Protected Journey?\n\nYou can then use Journey Monitoring and Live Location Sharing.",
    },
  ]);

  const [sending, setSending] = useState(false);

  const sendMessage = async () => {
    const trimmed = message.trim();

    if (!trimmed || sending) return;

    const userMessage: Message = {
      role: "user",
      text: trimmed,
    };

    setMessages((current) => [...current, userMessage]);
    setMessage("");
    setSending(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Unable to contact the AI Concierge."
        );
      }

      setMessages((current) => [
        ...current,
        {
          role: "concierge",
          text:
            data?.reply ||
            "I'm here and ready to help.",
        },
      ]);
    } catch (error) {
      console.error("AI Concierge error:", error);

      setMessages((current) => [
        ...current,
        {
          role: "concierge",
          text:
            "I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  const startJourney = () => {
    if (onStartJourney) {
      onStartJourney();
      return;
    }

    // Fallback preserves the existing navigation behavior
    // if no journey callback is supplied.
    setActiveTab("journey");
  };

  const shareLiveLocation = () => {
    try {
      window.localStorage.setItem(
        "swm_ai_share_location",
        "true"
      );
    } catch {
      // Continue to the existing Journey screen
      // even if localStorage is unavailable.
    }

    setLocationShared(true);
    setActiveTab("journey");
  };

  const talkToConcierge = () => {
    setConciergeConnected(true);

    window.dispatchEvent(
      new Event("swm-talk-to-concierge")
    );
  };

  const startSOS = () => {
    setActiveTab("sos");
  };

  return (
    <GlassCard>
      <div className="space-y-5">

        {/* Conversation */}

        {messages.map((item, index) => (
          <motion.div
            key={`${item.role}-${index}`}
            initial={{
              opacity: 0,
              x: item.role === "user" ? 15 : -15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
          >
            <div
              className={
                item.role === "user"
                  ? "flex justify-end"
                  : ""
              }
            >
              <div
                className={
                  item.role === "user"
                    ? `
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
                    `
                    : `
                      inline-block
                      max-w-[90%]
                      rounded-[26px]
                      rounded-tl-lg
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-4
                    `
                }
              >
                {item.role === "concierge" && (
                  <p className="text-sm font-semibold text-cyan-300">
                    Personal Safety Concierge
                  </p>
                )}

                <p className="mt-3 whitespace-pre-line text-[15px] leading-7 text-white">
                  {item.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* AI thinking indicator */}

        {sending && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[13px] text-white/50"
          >
            Concierge is thinking...
          </motion.div>
        )}

        {/* Actions */}

        <div className="flex flex-wrap gap-2.5">

          {/* Start Journey */}

          <button
            type="button"
            onClick={startJourney}
            className="
              flex
              items-center
              gap-2
              rounded-full
              border border-cyan-400/70
              bg-cyan-500/15
              px-5
              py-2.5
              text-xs
              font-bold
              text-cyan-200
              shadow-[0_0_18px_rgba(34,211,238,0.55)]
              transition
              hover:bg-cyan-500/25
              hover:shadow-[0_0_26px_rgba(34,211,238,0.8)]
              active:scale-95
            "
          >
            <Play
              size={16}
              strokeWidth={2.8}
              fill="currentColor"
              className="drop-shadow-[0_0_7px_rgba(34,211,238,1)]"
            />
            <span>Start Journey</span>
          </button>

          {/* SOS */}

          <button
            type="button"
            onClick={startSOS}
            className="
              rounded-full
              border border-[#FF3131]
              bg-[#FF3131]/20
              px-6
              py-2.5
              text-xs
              font-bold
              text-white
              shadow-[0_0_20px_rgba(255,49,49,0.8)]
              transition
              hover:bg-[#FF3131]/30
              hover:shadow-[0_0_30px_rgba(255,49,49,1)]
              active:scale-95
            "
          >
            SOS
          </button>

          {/* Share Live Location */}

          <button
            type="button"
            onClick={shareLiveLocation}
            className="
              rounded-full
              border border-[#39FF14]/70
              bg-[#39FF14]/12
              px-5
              py-2.5
              text-xs
              font-bold
              text-[#7CFF5A]
              shadow-[0_0_18px_rgba(57,255,20,0.5)]
              transition
              hover:bg-[#39FF14]/22
              hover:shadow-[0_0_26px_rgba(57,255,20,0.8)]
              active:scale-95
            "
          >
            {locationShared
              ? "Location Shared"
              : "Share Live Location"}
          </button>

          {/* Talk to Concierge */}

          <button
            type="button"
            onClick={talkToConcierge}
            className="
              rounded-full
              border border-fuchsia-400/70
              bg-fuchsia-500/15
              px-5
              py-2.5
              text-xs
              font-bold
              text-fuchsia-200
              shadow-[0_0_18px_rgba(217,70,239,0.55)]
              transition
              hover:bg-fuchsia-500/25
              hover:shadow-[0_0_26px_rgba(217,70,239,0.85)]
              active:scale-95
            "
          >
            {conciergeConnected
              ? "Concierge Connected"
              : "Talk to Concierge"}
          </button>

        </div>
        {/* Message input */}

        <div className="flex gap-2 pt-2">

          <input
            value={message}
            onChange={(event) =>
              setMessage(event.target.value)
            }
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Ask your Concierge..."
            disabled={sending}
            className="
              min-w-0
              flex-1
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
              text-sm
              text-white
              outline-none
              placeholder:text-[#FF3131]
              focus:border-cyan-400/40
            "
          />

          <button
            type="button"
            onClick={sendMessage}
            disabled={sending || !message.trim()}
            className="
              rounded-2xl
              bg-[#39FF14]
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-[#66FF33]
              disabled:cursor-not-allowed
            "
          >
            {sending ? "..." : "Send"}
          </button>

        </div>

      </div>
    </GlassCard>
  );
}




