"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-2xl
        shadow-[0_8px_40px_rgba(0,0,0,0.45)]
        ${className}
      `}
    >
      {/* Top Highlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
        "
      />

      {/* Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-16
          -right-16
          h-32
          w-32
          rounded-full
          bg-red-500/10
          blur-3xl
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}