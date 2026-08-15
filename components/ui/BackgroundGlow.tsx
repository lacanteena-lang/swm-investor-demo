"use client";

export default function BackgroundGlow() {
  return (
    <>
      {/* Deep Midnight Blue Base */}
      <div className="absolute inset-0 bg-[#01091C]" />

      {/* Bright Electric Blue Top Glow */}
      <div
        className="
          absolute
          -top-32
          left-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          rounded-full
          bg-[#155EEF]/35
          blur-[100px]
        "
      />

      {/* Strong Electric Blue Horizon */}
      <div
        className="
          absolute
          left-1/2
          top-[150px]
          h-[360px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          border
          border-[#2563EB]/35
          shadow-[0_0_120px_rgba(37,99,235,0.55)]
        "
      />

      {/* Bright Cyan / Electric Blue Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-[250px]
          h-[280px]
          w-[280px]
          -translate-x-1/2
          rounded-full
          bg-[#00D9FF]/20
          blur-[90px]
        "
      />

      {/* Lower Electric Blue Glow */}
      <div
        className="
          absolute
          left-1/2
          bottom-[60px]
          h-[320px]
          w-[320px]
          -translate-x-1/2
          rounded-full
          bg-[#1769FF]/20
          blur-[110px]
        "
      />

      {/* Subtle Blue Atmosphere */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#061A45]/25
          via-transparent
          to-[#010817]/50
        "
      />
    </>
  );
}