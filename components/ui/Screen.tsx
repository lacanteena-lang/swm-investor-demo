"use client";

import { ReactNode } from "react";

interface ScreenProps {
  children: ReactNode;
}

export default function Screen({ children }: ScreenProps) {
  return (
    <main
      className="
      relative
      h-screen
      w-full
      overflow-hidden
      bg-[#050506]
      text-white
      flex
      justify-center
      items-center
    "
    >
      <div
        className="
        relative
        w-[390px]
        h-[844px]
        rounded-[42px]
        overflow-hidden
        border
        border-white/10
        bg-black
        shadow-[0_0_80px_rgba(255,0,50,0.12)]
      "
      >
        {children}
      </div>
    </main>
  );
}