"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  screenKey: string;
  children: ReactNode;
};

export default function NavigationStack({
  screenKey,
  children,
}: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={screenKey}
        initial={{
          x: 40,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        exit={{
          x: -40,
          opacity: 0,
        }}
        transition={{
          duration: 0.28,
          ease: "easeOut",
        }}
        className="h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}