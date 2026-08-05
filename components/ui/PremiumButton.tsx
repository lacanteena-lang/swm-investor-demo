"use client";

import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function PrimaryButton({
  children,
  onClick,
  className = "",
  disabled = false,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        w-full
        overflow-hidden
        rounded-2xl
        bg-gradient-to-r
        from-[#ff3b3b]
        to-[#ff5b5b]
        px-6
        py-4
        text-sm
        font-semibold
        tracking-wide
        text-white
        transition-all
        duration-300
        shadow-[0_0_25px_rgba(255,59,59,0.45)]
        hover:scale-[1.02]
        hover:shadow-[0_0_40px_rgba(255,59,59,0.65)]
        active:scale-[0.98]
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {/* Shine Effect */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          opacity-40
        "
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}