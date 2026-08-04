"use client";

import {
  Users,
  Plus,
  ShieldCheck,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import PremiumButton from "../ui/PremiumButton";

const members = [
  {
    name: "Primary Contact",
    status: "Connected",
  },
  {
    name: "Family Member",
    status: "Not Added",
  },
];

export default function FamilyCard() {
  return (
    <GlassCard className="p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-[0.30em] text-cyan-300/70">
            FAMILY CIRCLE
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Connected Family
          </h2>

        </div>

        <Users
          size={28}
          className="text-cyan-300"
        />

      </div>

      <div className="mt-8 space-y-4">

        {members.map(({ name, status }) => (

          <div
            key={name}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              bg-white/5
              p-4
            "
          >

            <div className="flex items-center gap-3">

              <ShieldCheck
                size={20}
                className="text-emerald-300"
              />

              <span className="text-white">
                {name}
              </span>

            </div>

            <span
              className={`text-sm ${
                status === "Connected"
                  ? "text-emerald-300"
                  : "text-white/55"
              }`}
            >
              {status}
            </span>

          </div>

        ))}

      </div>

      <div className="mt-6">

        <PremiumButton>

          <div className="flex items-center justify-center gap-2">

            <Plus size={18} />

            Add Family Member

          </div>

        </PremiumButton>

      </div>

    </GlassCard>
  );
}