"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mic, MicOff, Radio } from "lucide-react";

import GlassCard from "../ui/GlassCard";
import PremiumButton from "../ui/PremiumButton";

type Props = {};

const BASE_WAVE = [
  0, 4, -6, 8, -5, 12, -7, 17, -10, 7,
  -15, 10, -6, 22, -12, 8, -29, 14, -8, 5,
  -19, 11, -5, 32, -15, 8, -6, 24, -11, 6,
  -36, 16, -8, 5, -22, 12, -6, 29, -13, 7,
  -18, 10, -5, 40, -18, 8, -5, 26, -12, 6,
  -30, 14, -7, 4, -20, 10, -5, 34, -15, 8,
  -24, 12, -6, 5, -18, 9, -5, 27, -12, 7,
  -21, 11, -6, 4, -16, 9, -5, 23, -10, 6,
  -14, 8, -4, 3, -8, 5, -3, 2, -1, 0,
];

const CENTER_Y = 110;
const WIDTH = 1000;
const AMPLITUDE = 1.18;

function createPath(
  values: number[],
  phase: number,
  strength: number
) {
  return values
    .map((value, index) => {
      const x =
        (index / (values.length - 1)) * WIDTH;

      /*
        Every point gets its own smooth movement.

        Different frequencies prevent the waveform
        from simply breathing as one object.
      */

      const localPhase =
        phase * (0.85 + (index % 9) * 0.035);

    const movement =
  Math.sin(localPhase + index * 0.48) *
  6 *
  strength;

const secondaryMovement =
  Math.sin(
    phase * 0.47 +
      index * 0.83
  ) *
  3 *
  strength;
        
        
        

      
        
          
            
        
        
        

      const y =
        CENTER_Y +
        value * AMPLITUDE * strength +
        movement +
        secondaryMovement;

      return `${index === 0 ? "M" : "L"}${x.toFixed(
        1
      )} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function useLiveWaveform(
  listening: boolean
) {
  const [path, setPath] =
    useState(() =>
      createPath(BASE_WAVE, 0, 0.18)
    );

  const animationRef =
    useRef<number | null>(null);

  const startTimeRef =
    useRef<number | null>(null);

  useEffect(() => {
    if (!listening) {
      if (animationRef.current !== null) {
        cancelAnimationFrame(
          animationRef.current
        );
      }

      startTimeRef.current = null;

      setPath(
        createPath(
          BASE_WAVE,
          0,
          0.18
        )
      );

      return;
    }

    const animate = (
      timestamp: number
    ) => {
      if (
        startTimeRef.current === null
      ) {
        startTimeRef.current =
          timestamp;
      }

      const elapsed =
        timestamp -
        startTimeRef.current;

      /*
        Slow, smooth movement.

        0.00155 gives a deliberate
        voice-visualizer speed rather
        than a fast vibrating effect.
      */

      const phase =
        elapsed * 0.00155;

      setPath(
        createPath(
          BASE_WAVE,
          phase,
          1
        )
      );

      animationRef.current =
        requestAnimationFrame(
          animate
        );
    };

    animationRef.current =
      requestAnimationFrame(
        animate
      );

    return () => {
      if (
        animationRef.current !== null
      ) {
        cancelAnimationFrame(
          animationRef.current
        );
      }

      startTimeRef.current = null;
    };
  }, [listening]);

  return path;
}

export default function VoicePanel(
  _props: Props
) {
  const [listening, setListening] =
    useState(false);

  const wavePath =
    useLiveWaveform(listening);

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
      {/* BLUE AMBIENT GLOW */}

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
          bg-[#147DFF]
          blur-[100px]
        "
      />

      {/* HEADER */}

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
          {listening
            ? "I'm Listening"
            : "Talk Naturally"}
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
              <p>
                Your AI Concierge is listening.
              </p>
            </>
          ) : (
            <>
              <p>
                Speak naturally with your AI
                Concierge.
              </p>
              <p>
                It understands your requests
                and stays connected.
              </p>
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
              border-[#147DFF]/80
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
              border-[#42A5FF]/70
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
              bg-[#147DFF]/40
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
                    "0 0 22px rgba(20,125,255,.35)",
                    "0 0 70px rgba(20,125,255,.85)",
                    "0 0 22px rgba(20,125,255,.35)",
                  ]
                : [
                    "0 0 15px rgba(20,125,255,.18)",
                    "0 0 38px rgba(20,125,255,.40)",
                    "0 0 15px rgba(20,125,255,.18)",
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
              border-[#42A5FF]/80
              bg-[#147DFF]/40
            "
          >
            {listening ? (
              <Radio
                size={36}
                className="
                  text-white
                  drop-shadow-[0_0_14px_rgba(20,125,255,1)]
                "
              />
            ) : (
              <Mic
                size={36}
                className="
                  text-white
                  drop-shadow-[0_0_14px_rgba(20,125,255,1)]
                "
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* ================================================= */}
      {/* SMOOTH LIVE NEON ORANGE WAVEFORM */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          mt-3
          flex
          h-[118px]
          w-full
          items-center
          justify-center
        "
      >
        {/* SOFT ORANGE ATMOSPHERE */}

        <motion.div
          animate={{
            opacity: listening
              ? [0.07, 0.13, 0.07]
              : 0.03,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[65px]
            w-[90%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#FF5A00]
            blur-[25px]
          "
        />

        <svg
          viewBox="0 0 1000 220"
          preserveAspectRatio="none"
          className="
            relative
            h-[112px]
            w-full
            overflow-visible
          "
        >
          {/* SOFT GLOW */}

          <path
            d={wavePath}
            fill="none"
            stroke="#FF5A00"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="miter"
            opacity={
              listening ? 0.16 : 0.04
            }
            style={{
              filter: "blur(5px)",
            }}
          />

          {/* MAIN ORANGE SIGNAL */}

          <path
            d={wavePath}
            fill="none"
            stroke="#FF5A00"
            strokeWidth="1.9"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            opacity={
              listening ? 0.94 : 0.20
            }
            style={{
              filter:
                "drop-shadow(0 0 3px rgba(255,90,0,0.80)) drop-shadow(0 0 7px rgba(255,90,0,0.40))",
            }}
          />

          {/* FINE HOT CORE */}

          <path
            d={wavePath}
            fill="none"
            stroke="#FFE4D2"
            strokeWidth="0.45"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            opacity={
              listening ? 0.70 : 0.14
            }
          />
        </svg>
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
                  opacity: [0.35, 1, 0.35],
                  scale: [0.8, 1.15, 0.8],
                }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                }}
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#FF5A00]
                  shadow-[0_0_7px_rgba(255,90,0,0.75)]
                "
              />

              <p
                className="
                  text-[15px]
                  font-black
                  uppercase
                  tracking-[0.30em]
                  text-[#FF5A00]
                  drop-shadow-[0_0_6px_rgba(255,90,0,0.45)]
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
            border-[#42A5FF]/70
            bg-[#147DFF]
            text-white
            shadow-[0_0_18px_rgba(20,125,255,0.55)]
          "
        >
          <div className="flex items-center justify-center gap-2">
            <Mic size={18} />

            <span className="whitespace-nowrap text-[12px] font-black">
              {listening
                ? "Listening..."
                : "Start Listening"}
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

            <span className="whitespace-nowrap text-[12px] font-black">
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