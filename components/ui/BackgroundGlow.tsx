"use client";

export default function BackgroundGlow() {
  return (
    <>
      {/* Main Background */}
      <div className="absolute inset-0 bg-[#050506]" />

      {/* Top Ambient Glow */}
      <div
        className="
          absolute
          -top-32
          left-1/2
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-red-500/10
          blur-[120px]
        "
      />

      {/* Horizon Glow */}
      <div
        className="
          absolute
          left-1/2
          top-[170px]
          h-[320px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          border
          border-red-500/25
          shadow-[0_0_80px_rgba(255,59,59,0.35)]
        "
      />

      {/* Lower Red Glow */}
      <div
        className="
          absolute
          left-1/2
          top-[280px]
          h-64
          w-64
          -translate-x-1/2
          rounded-full
          bg-red-500/15
          blur-[90px]
        "
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-black/10
          to-black
        "
      />
    </>
  );
}