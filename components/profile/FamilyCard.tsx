"use client";

import { motion } from "framer-motion";
import {
  Users,
  Plus,
  ShieldCheck,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import PremiumButton from "../ui/PremiumButton";
import { useNavigation } from "../navigation/NavigationContext";

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
  const { navigate } = useNavigation();

  const openEmergencyContacts = () => {
    navigate("emergency-contacts");
  };

  return (
    <GlassCard className="overflow-visible">
      <div className="p-5">

        {/* Header */}

        <div className="flex items-start justify-between gap-4">

          <div className="min-w-0">

            <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
              FAMILY CIRCLE
            </p>

            <h2 className="mt-2 text-[23px] font-bold tracking-tight text-white">
              Connected Family
            </h2>

            <p className="mt-2 text-[10px] font-semibold leading-5 text-red-400">
              People you trust can stay connected to your safety journey.
            </p>

          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">

            <Users
              size={22}
              strokeWidth={1.8}
              className="text-cyan-300"
            />

          </div>

        </div>

        {/* Members */}

        <div className="mt-6 space-y-3">

          {members.map(({ name, status }) => {

            const connected = status === "Connected";
            const familyMember = name === "Family Member";

            return (
              <button
                key={name}
                type="button"
                onClick={
                  familyMember
                    ? openEmergencyContacts
                    : undefined
                }
                className={`
  relative
  z-[60]
  pointer-events-auto
  w-full
                  
                  flex
                  items-center
                  justify-between
                  gap-3
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/[0.04]
                  p-4
                  text-left
                  transition-all
                  duration-300
                  ${
                    familyMember
                      ? "cursor-pointer hover:border-red-400/30 hover:bg-red-500/[0.06] active:scale-[0.98]"
                      : "cursor-default"
                  }
                `}
              >

                <div className="flex min-w-0 items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">

                    <ShieldCheck
                      size={19}
                      strokeWidth={1.8}
                      className="text-emerald-300"
                    />

                  </div>

                  <div className="min-w-0">

                    <p className="truncate text-[12px] font-semibold text-white">
                      {name}
                    </p>

                    <p className="mt-1 text-[9px] font-medium text-red-400">
                      {connected
                        ? "Safety connection active"
                        : "Tap to manage emergency contacts"}
                    </p>

                  </div>

                </div>

                <div className="flex shrink-0 items-center gap-2">

                  {connected && (
                    <motion.span
                      animate={{
                        opacity: [0.35, 1, 0.35],
                        scale: [0.9, 1.15, 0.9],
                      }}
                      transition={{
                        duration: 1.7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-emerald-400
                        shadow-[0_0_10px_rgba(52,211,153,0.8)]
                      "
                    />
                  )}

                  <span
                    className={`text-[10px] font-semibold ${
                      connected
                        ? "text-emerald-300"
                        : "text-red-400"
                    }`}
                  >
                    {status}
                  </span>

                </div>

              </button>
            );
          })}

        </div>

        {/* Add Member */}

        <div className="mt-5">

          <PremiumButton
  className="relative z-[60] w-full pointer-events-auto"
  onClick={openEmergencyContacts}
>
            
          
          
            <div className="flex items-center justify-center gap-2">

              <Plus size={17} />

              Add Family Member

            </div>
          </PremiumButton>

        </div>

      </div>
    </GlassCard>
  );
}