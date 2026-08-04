"use client";

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
    <GlassCard className="p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-[0.30em] text-cyan-300/70">
            EVIDENCE VAULT
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Secure Evidence Storage
          </h2>

        </div>

        <FolderLock
          size={28}
          className="text-cyan-300"
        />

      </div>

      <div className="mt-6">

        <StatusBadge
          label="Encrypted Cloud Storage"
          color="green"
        />

      </div>

      <div className="mt-8 space-y-4">

        {items.map(({ icon: Icon, title, value }) => (

          <div
            key={title}
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

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400/10">

                <Icon
                  size={20}
                  className="text-cyan-300"
                />

              </div>

              <span className="text-white">
                {title}
              </span>

            </div>

            <span className="text-sm text-white/55">
              {value}
            </span>

          </div>

        ))}

      </div>

      <div className="mt-8 rounded-2xl bg-white/5 p-4">

        <div className="flex items-center gap-3">

          <Lock
            size={20}
            className="text-emerald-300"
          />

          <p className="text-sm text-white/70">
            All emergency evidence is encrypted and protected from tampering.
          </p>

        </div>

      </div>

    </GlassCard>
  );
}