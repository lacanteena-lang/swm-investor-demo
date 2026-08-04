"use client";

import Image from "next/image";
import { Bell } from "lucide-react";




export default function PremiumDashboardV2() {
  return (
    <div className="h-full overflow-y-auto no-scrollbar bg-[#050B17] px-6 pt-4 pb-36">
      <div className="relative flex items-center">
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-5 py-2">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="text-sm font-semibold text-white">Online</span>
          </div>
        </div>
        <button className="ml-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <Bell size={18} className="text-white" />
        </button>
      </div>

      <div className="mt-6">
        <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-400">PERSONAL SAFETY</p>
        <h1 className="mt-3 text-[34px] font-bold leading-tight text-white">You're Protected</h1>
        <p className="mt-4 max-w-[300px] text-[15px] leading-7 text-white/70">
          AI-powered protection backed by your Personal Safety Concierge, ready whenever you need assistance.
        </p>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 rounded-full border border-emerald-400/20 bg-white/5 px-5 py-3">
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="text-[14px] font-semibold text-white whitespace-nowrap">Concierge Online</span>
        </div>

        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-5 py-3">
          <div className="h-3 w-3 rounded-full bg-cyan-400" />
          <span className="text-[14px] font-semibold text-white">AI Ready</span>
        </div>
      </div>

      <div className="mt-8">
        <div className="relative rounded-[30px] border border-cyan-400/20 bg-[#08111F]/90 px-6 py-3 backdrop-blur-2xl">
          <Image src="/images/swm-logo.png" alt="SWM" width={150} height={150} priority className="mx-auto object-contain" />
        </div>
      </div>

      {/* Main Action */}

      

    </div>
  );
}


    
  
