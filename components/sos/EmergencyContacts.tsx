"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Users,
  Shield,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";

const contacts = [
  {
    icon: Users,
    name: "Emergency Contact 1",
    detail: "Primary Contact",
  },
  {
    icon: Users,
    name: "Emergency Contact 2",
    detail: "Family Member",
  },
  {
    icon: Shield,
    name: "Personal Safety Concierge",
    detail: "24/7 Available",
  },
  {
    icon: Phone,
    name: "Emergency Services",
    detail: "112",
  },
];

export default function EmergencyContacts() {
  return (
    <GlassCard className="p-6">

      <p className="text-xs uppercase tracking-[0.30em] text-red-300/70">
        EMERGENCY CONTACTS
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white">
        Notification List
      </h2>

      <div className="mt-8 space-y-4">

        {contacts.map(({ icon: Icon, name, detail }, index) => (

          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
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

              <div>

                <p className="font-medium text-white">
                  {name}
                </p>

                <p className="text-sm text-white/55">
                  {detail}
                </p>

              </div>

            </div>

            <span className="text-emerald-300 text-sm">
              Ready
            </span>

          </motion.div>

        ))}

      </div>

    </GlassCard>
  );
}