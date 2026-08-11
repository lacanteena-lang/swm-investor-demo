"use client";

import { motion } from "framer-motion";
import {
  FolderLock,
  Camera,
  Video,
  Mic,
  FileText,
  Lock,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import StatusBadge from "../ui/StatusBadge";

const items = [
  {
    icon: Camera,
    title: "Photos",
    value: "0 Files",
  },
  {
    icon: Video,
    title: "Videos",
    value: "0 Files",
  },
  {
    icon: Mic,
    title: "Audio",
    value: "0 Files",
  },
  {
    icon: FileText,
    title: "Incident Timeline",
    value: "Automatic",
  },
];

export default function EvidenceVaultCard() {
  return (
    <GlassCard>
      <div className="w-full min-w-0 px-3">

        {/* Header */}

        <div className="flex items-start justify-between gap-4">

          <div className="min-w-0">

            <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
              EVIDENCE VAULT
            </p>

            <h2 className="mt-2 text-[23px] font-bold tracking-tight text-white">
              Secure Evidence Storage
            </h2>

            <p className="... font-semibold text-red-400">
  Emergency evidence is organized and protected in one secure vault.
</p>
              
            

          </div>

          <motion.div
            animate={{
              opacity: [0.55, 1, 0.55],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-cyan-400/10
              bg-cyan-400/10
            "
          >
            <FolderLock
              size={21}
              strokeWidth={1.8}
              className="text-cyan-300"
            />
          </motion.div>

        </div>


        {/* Security Status */}

        <div className="mt-5">

          <StatusBadge
            label="Encrypted Cloud Storage"
            color="green"
          />

        </div>


        {/* Evidence Categories */}

        <div className="mt-6 space-y-3">

          {items.map(
            ({ icon: Icon, title, value }, index) => (

              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.3,
                }}
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/[0.04]
                  p-4
                "
              >

                <div className="flex min-w-0 items-center gap-3">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-cyan-400/10
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-cyan-300"
                    />
                  </div>

                  <span className="truncate text-[12px] font-semibold text-white">
                    {title}
                  </span>

                </div>

                <span className="shrink-0 text-[10px] font-medium text-white/45">
                  {value}
                </span>

              </motion.div>

            ),
          )}

        </div>


        {/* Protection Message */}

        <div className="mt-5 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-4">

          <div className="flex items-start gap-3">

            <Lock
              size={19}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-emerald-300"
            />

            <div>

              <p className="text-[11px] font-semibold text-white">
                Protected Evidence
              </p>

              <p className="mt-1 text-[10px] leading-5 text-white/45">
                Emergency evidence is encrypted and protected from tampering.
              </p>

            </div>

            <motion.span
              animate={{
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                ml-auto
                mt-1
                h-2
                w-2
                shrink-0
                rounded-full
                bg-emerald-400
                shadow-[0_0_10px_rgba(52,211,153,0.8)]
              "
            />

          </div>

        </div>

      </div>
    </GlassCard>
  );
}