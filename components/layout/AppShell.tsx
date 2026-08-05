"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

import DeviceFrame from "./DeviceFrame";

type Props = {
  children: ReactNode;
};

export default function AppShell({ children }: Props) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      setMobile(window.innerWidth < 768);
    };

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712]">

      {/* Animated Background */}

      {!mobile && (
        <div className="absolute inset-0 overflow-hidden">

          <motion.div
            animate={{
              x: [0, 80, -40, 0],
              y: [0, -40, 50, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-56 -top-56 h-[650px] w-[650px] rounded-full bg-cyan-500/20 blur-[180px]"
          />

          <motion.div
            animate={{
              x: [0, -70, 40, 0],
              y: [0, 60, -30, 0],
              scale: [1.04, 1, 1.06],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-56 -bottom-56 h-[650px] w-[650px] rounded-full bg-blue-600/20 blur-[190px]"
          />

        </div>
      )}

      <DeviceFrame>

        {!mobile && (
          <div className="absolute inset-0 rounded-[48px] ring-1 ring-cyan-400/10 pointer-events-none" />
        )}

        {/* Status Bar */}

        <div
          className={`absolute left-0 right-0 z-40 flex items-center justify-between text-xs text-white/70 ${
            mobile ? "top-3 px-5" : "top-0 px-8 pt-5"
          }`}
        >
          <span>9:41</span>

          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-cyan-400" />
            <div className="h-2 w-2 rounded-full bg-white/70" />
            <div className="h-2 w-2 rounded-full bg-white/40" />
          </div>
        </div>

        {/* Dynamic Island */}

        <motion.div
          animate={{ width: [128, 138, 128] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className={`absolute left-1/2 z-50 flex h-9 -translate-x-1/2 items-center justify-center rounded-full bg-black px-5 ${
            mobile ? "top-2" : "top-3"
          }`}
        >
          <div className="mr-2 h-2 w-2 rounded-full bg-emerald-400" />

          <span className="text-[11px] font-medium text-white/90">
            Protected
          </span>
        </motion.div>

        {/* Screen */}

        <div
          className={`absolute inset-x-0 overflow-y-auto no-scrollbar ${
            mobile
              ? "top-14 bottom-0 px-5 pb-24"
              : "top-16 bottom-0 px-8 pb-8"
          }`}
        >
          {children}
        </div>

      </DeviceFrame>

    </main>
  );
}