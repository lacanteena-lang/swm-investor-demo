"use client";

import {
  User,
  ShieldCheck,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import StatusBadge from "../ui/StatusBadge";

export default function ProfileHeader() {
  return (
    <GlassCard className="p-6">

      <div className="flex flex-col items-center">

        {/* Avatar */}

        <div
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-cyan-400/15
            border
            border-cyan-400/20
          "
        >

          <User
            size={46}
            className="text-cyan-300"
          />

        </div>

        <h2 className="mt-5 text-2xl font-bold text-white">
          Your Safety Profile
        </h2>

        <p className="mt-2 text-center text-white/60">
          Your identity, safety information and protection preferences.
        </p>

      </div>

      <div className="mt-8 flex justify-center">

        <StatusBadge
          label="Protected"
          color="green"
        />

      </div>

      <div className="mt-8 rounded-2xl bg-white/5 p-5">

        <div className="flex items-center gap-3">

          <ShieldCheck
            size={22}
            className="text-emerald-300"
          />

          <div>

            <p className="font-semibold text-white">
              Personal Safety Concierge
            </p>

            <p className="text-sm text-white/60">
              Connected and ready to assist 24/7
            </p>

          </div>

        </div>

      </div>

    </GlassCard>
  );
}