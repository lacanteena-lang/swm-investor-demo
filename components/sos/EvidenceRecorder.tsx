"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Mic,
  FileText,
  Video,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";

const items = [
  {
    icon: Camera,
    title: "Photo Evidence",
    status: "Ready",
  },
  {
    icon: Video,
    title: "Video Recording",
    status: "Ready",
  },
  {
    icon: Mic,
    title: "Audio Recording",
    status: "Ready",
  },
  {
    icon: FileText,
    title: "Incident Timeline",
    status: "Automatic",
  },
];

export default function EvidenceRecorder() {
  return (
    <GlassCard className="p-6">

      <p className="text-xs uppercase tracking-[0.30em] text-red-300/70">
        EVIDENCE VAULT
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Evidence Collection
      </h2>

      <p className="mt-3 text-sm leading-7 text-white/60">
        During an emergency, Stay With Me securely records and preserves
        evidence to help build a clear incident timeline.
      </p>

      <div className="mt-8 space-y-4">

        {items.map(({ icon: Icon, title, status }, index) => (

          <motion.div
            key={title}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
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

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500/10">

                <Icon
                  size={20}
                  className="text-red-300"
                />

              </div>

              <span className="text-white">
                {title}
              </span>

            </div>

            <span className="text-emerald-300 text-sm">
              {status}
            </span>

          </motion.div>

        ))}

      </div>

    </GlassCard>
  );
}