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
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0 }}
        className="h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}


