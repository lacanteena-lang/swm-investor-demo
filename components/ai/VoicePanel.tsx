"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mic, MicOff, Radio } from "lucide-react";

import GlassCard from "../ui/GlassCard";
import PremiumButton from "../ui/PremiumButton";

const waveformBars = [
  18, 32, 48, 28, 62, 38, 76, 46, 88,
  52, 72, 40, 82, 55, 68, 34, 50
];

export default function VoicePanel() {
  const [listening, setListening] = useState(false);
const startListening = () => {
  setListening(true);
};

const endSession = () => {
  setListening(false);
};
  return (
    <GlassCard
      className="
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/15
        bg-black/20
        p-5
        backdrop-blur-2xl
        shadow-[0_0_45px_rgba(0,0,0,0.35)]
      "
    >

      {/* RED AMBIENT GLOW */}

      <motion.div
        animate={{
          opacity: listening
            ? [0.18, 0.38, 0.18]
            : [0.08, 0.16, 0.08],
          scale: listening
            ? [0.95, 1.12, 0.95]
            : [1, 1.05, 1],
        }}
        transition={{
          duration: listening ? 1.2 : 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[80px]
          h-[300px]
          w-[300px]
          -translate-x-1/2
          rounded-full
          bg-[#880001]
          blur-[100px]
        "
      />

      {/* CONTENT */}

      <div className="relative z-10 text-center">

        <p
          className="
            text-[12px]
            font-black
            uppercase
            tracking-[0.26em]
            text-white
          "
        >
          Personal Safety Concierge
        </p>

        <h2
          className="
            mt-3
            text-[31px]
            font-black
            leading-none
            tracking-[-0.04em]
            text-white
          "
        >
          {listening ? "I'm Listening" : "Talk Naturally"}
        </h2>

        <div
          className="
            mx-auto
            mt-4
            max-w-[320px]
            text-[14px]
            font-black
            leading-6
            text-white
          "
        >
          {listening ? (
            <>
              <p>Speak naturally.</p>
              <p>Your AI Concierge is listening.</p>
            </>
          ) : (
            <>
              <p>Speak naturally with your AI Concierge.</p>
              <p>It understands your requests and stays connected.</p>
            </>
          )}
        </div>

      </div>


      {/* MICROPHONE */}

      <div className="relative z-10 mt-7 flex justify-center">

        <div className="relative flex h-[142px] w-[142px] items-center justify-center">

          <motion.div
            animate={{
              scale: listening
                ? [0.88, 1.28, 0.88]
                : [0.94, 1.08, 0.94],
              opacity: listening
                ? [0.55, 0, 0.55]
                : [0.25, 0.08, 0.25],
            }}
            transition={{
              duration: listening ? 1.3 : 3,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="
              absolute
              inset-0
              rounded-full
              border-2
              border-red-500/70
            "
          />

          <motion.div
            animate={{
              scale: listening
                ? [0.9, 1.18, 0.9]
                : [0.95, 1.07, 0.95],
              opacity: listening
                ? [0.5, 0.05, 0.5]
                : [0.22, 0.06, 0.22],
            }}
            transition={{
              duration: listening ? 1.3 : 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.25,
            }}
            className="
              absolute
              inset-[12px]
              rounded-full
              border
              border-red-400/60
            "
          />

          <motion.div
            animate={{
              opacity: listening
                ? [0.25, 0.65, 0.25]
                : [0.10, 0.25, 0.10],
            }}
            transition={{
              duration: listening ? 1 : 2.8,
              repeat: Infinity,
            }}
            className="
              absolute
              h-[105px]
              w-[105px]
              rounded-full
              bg-red-600/35
              blur-[30px]
            "
          />

          <motion.div
            animate={{
              scale: listening
                ? [1, 1.08, 1]
                : [1, 1.03, 1],
              boxShadow: listening
                ? [
                    "0 0 22px rgba(255,0,0,.35)",
                    "0 0 70px rgba(255,0,0,.85)",
                    "0 0 22px rgba(255,0,0,.35)",
                  ]
                : [
                    "0 0 15px rgba(255,0,0,.18)",
                    "0 0 38px rgba(255,0,0,.40)",
                    "0 0 15px rgba(255,0,0,.18)",
                  ],
            }}
            transition={{
              duration: listening ? 1 : 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              z-10
              flex
              h-[82px]
              w-[82px]
              items-center
              justify-center
              rounded-full
              border
              border-red-400/70
              bg-[#880001]/40
            "
          >
            {listening ? (
              <Radio
                size={36}
                className="
                  text-red-200
                  drop-shadow-[0_0_14px_rgba(255,0,0,1)]
                "
              />
            ) : (
              <Mic
                size={36}
                className="
                  text-red-200
                  drop-shadow-[0_0_14px_rgba(255,0,0,1)]
                "
              />
            )}
          </motion.div>

        </div>

      </div>


      {/* =====================================================
          ONE AND ONLY WAVEFORM
      ===================================================== */}

      <div className="relative z-10 mt-3 flex h-[90px] items-center justify-center">

        <div className="flex h-[82px] items-center justify-center gap-[4px]">

          {waveformBars.map((height, index) => (
            <motion.div
              key={index}
              animate={
  listening
    ? {
        height: [
          `${Math.max(8, height * 0.25)}px`,
          `${height}px`,
          `${Math.max(10, height * 0.45)}px`,
          `${height * 0.8}px`,
          `${Math.max(8, height * 0.25)}px`,
        ],
        opacity: [0.65, 1, 0.8, 1, 0.65],
      }
    : {
        height: [
          `${Math.max(7, height * 0.18)}px`,
          `${Math.max(9, height * 0.30)}px`,
          `${Math.max(7, height * 0.18)}px`,
        ],
        opacity: [0.22, 0.45, 0.22],
      }
}
              
                  
                      
                        
                        
                        
                        
                        
                    
                      
                  
                  
                      
                      
                    
              
              transition={
  listening
    ? {
        duration: 0.55 + index * 0.035,
        delay: index * 0.035,
        repeat: Infinity,
        ease: "easeInOut",
      }
    : {
        duration: 2.2 + index * 0.08,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.05,
      }
}
                
                  
                      
                      
                      
                    
                    
                  
                      
                    
              
              className="
                w-[5px]
                rounded-full
                bg-gradient-to-t
                from-[#880001]
                via-red-500
                to-red-300
                shadow-[0_0_7px_rgba(255,0,0,0.95),0_0_18px_rgba(255,0,0,0.65)]
              "
            />
          ))}

        </div>

      </div>


      {/* LISTENING STATUS */}

      <div className="relative z-10 mt-2 min-h-[58px] text-center">

        {listening ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >

            <div className="flex items-center justify-center gap-2">

              <motion.span
                animate={{
                  opacity: [0.25, 1, 0.25],
                  scale: [0.75, 1.3, 0.75],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
                className="
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-red-500
                  shadow-[0_0_10px_rgba(255,0,0,1)]
                "
              />

              <p
                className="
                  text-[15px]
                  font-black
                  uppercase
                  tracking-[0.30em]
                  text-red-400
                  drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]
                "
              >
                Listening...
              </p>

            </div>

            <p className="mt-3 text-[14px] font-black text-white">
              Speak naturally. Your AI Concierge is listening.
            </p>

          </motion.div>
        ) : (
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-white">
              Ready when you are
            </p>

            <p className="mt-2 text-[13px] font-bold text-white/75">
              Tap Start Listening to talk with your Concierge.
            </p>
          </div>
        )}

      </div>


      {/* BUTTONS */}

      <div className="relative z-10 mt-5 grid w-full grid-cols-2 gap-3">

        <PremiumButton
          onClick={startListening}
          className="
            h-14
            rounded-[18px]
            border
            border-red-400/50
            bg-[#880001]
            text-white
            shadow-[0_0_18px_rgba(255,0,0,0.45)]
          "
        >
          <div className="flex items-center justify-center gap-2">

            <Mic size={18} />

            <span className="text-[12px] font-black whitespace-nowrap">
              {listening ? "Listening..." : "Start Listening"}
            </span>

          </div>
        </PremiumButton>


        <button
          type="button"
          onClick={endSession}
          className="
            h-14
            rounded-[18px]
            border
            border-white/20
            bg-white/[0.07]
            px-3
            text-white
          "
        >
          <div className="flex items-center justify-center gap-2">

            <MicOff size={18} />

            <span className="text-[12px] font-black whitespace-nowrap">
              End Session
            </span>

          </div>
        </button>

      </div>


      {/* TRUST */}

      <div className="relative z-10 mt-5 flex items-center justify-center gap-2">

        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-emerald-400
            shadow-[0_0_10px_rgba(52,211,153,1)]
          "
        />

        <span
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-white/55
          "
        >
          Private • Secure • Concierge Supported
        </span>

      </div>

    </GlassCard>
  );
}