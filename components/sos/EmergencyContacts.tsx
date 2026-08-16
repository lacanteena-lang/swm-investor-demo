"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  X,
} from "lucide-react";

import { useNavigation } from "../navigation/NavigationContext";

const contacts = [
  {
    name: "Primary Contact",
    detail: "Not added yet",
  },
  {
    name: "Emergency Contact 2",
    detail: "Not added yet",
  },
  {
    name: "Emergency Contact 3",
    detail: "Not added yet",
  },
  {
    name: "Emergency Contact 4",
    detail: "Not added yet",
  },
  {
    name: "Emergency Contact 5",
    detail: "Not added yet",
  },
];

export default function EmergencyContacts() {
  const { navigate } = useNavigation();

  const [selectedContact, setSelectedContact] = useState<number | null>(null);

  const handleClose = () => {
    navigate("profile");
  };

  return (
    <div className="relative h-full overflow-y-auto overflow-x-hidden no-scrollbar px-5 pt-4 pb-32">

      {/* HEADER */}

      <div className="relative">

        {/* X / BACK */}

        <button
          type="button"
          onClick={handleClose}
          aria-label="Back to Profile"
          className="
            absolute
            right-0
            top-0
            z-50
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/20
            text-white
            shadow-lg
            transition-all
            duration-200
            hover:bg-red-500/20
            active:scale-90
          "
        >
          <X
            size={21}
            strokeWidth={2}
          />
        </button>

        <p className="pr-12 text-[10px] font-semibold uppercase tracking-[0.30em] text-red-300">
          SAFETY NETWORK
        </p>

        <h2 className="mt-2 pr-12 text-[24px] font-bold tracking-tight text-white">
          Emergency Contacts
        </h2>

        <p className="mt-2 max-w-[300px] text-[10px] font-semibold leading-5 text-red-400">
          Select the people you want your safety network to contact when needed.
        </p>

      </div>

      {/* STATUS */}

      <div className="mt-5 flex items-center gap-2">

        <motion.span
          animate={{
            opacity: [0.35, 1, 0.35],
            scale: [0.9, 1.15, 0.9],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            h-2
            w-2
            rounded-full
            bg-red-400
            shadow-[0_0_12px_rgba(248,113,113,0.8)]
          "
        />

        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-red-400">
          {selectedContact === null
            ? "0/5 CONTACTS SELECTED"
            : "1/5 CONTACTS SELECTED"}
        </span>

      </div>

      {/* CONTACTS */}

      <div className="mt-5 space-y-3">

        {contacts.map((contact, index) => {

          const selected = selectedContact === index;

          return (
            <button
              key={contact.name}
              type="button"
              onClick={() => setSelectedContact(index)}
              className={`
                relative
                z-10
                flex
                w-full
                items-center
                justify-between
                gap-3
                rounded-2xl
                border
                p-4
                text-left
                transition-all
                duration-200
                ${
                  selected
                    ? "border-red-400/60 bg-red-500/[0.12] shadow-[0_0_25px_rgba(239,68,68,0.15)]"
                    : "border-white/5 bg-white/[0.04] hover:border-red-400/30 hover:bg-red-500/[0.06]"
                }
              `}
            >

              {/* LEFT */}

              <div className="flex min-w-0 items-center gap-3">

                <div
                  className={`
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    ${
                      selected
                        ? "border-red-400/40 bg-red-500/20"
                        : "border-red-400/10 bg-red-500/10"
                    }
                  `}
                >
                  <Users
                    size={20}
                    strokeWidth={1.8}
                    className="text-red-300"
                  />
                </div>

                <div className="min-w-0">

                  <p className="truncate text-[12px] font-semibold text-white">
                    {contact.name}
                  </p>

                  <p className="mt-1 truncate text-[10px] font-medium text-red-400">
                    {selected
                      ? "Contact selected"
                      : contact.detail}
                  </p>

                </div>

              </div>

              {/* RIGHT */}

              <div className="flex shrink-0 items-center">

                {selected ? (

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-red-500
                      text-[13px]
                      font-bold
                      text-white
                      shadow-[0_0_12px_rgba(239,68,68,0.7)]
                    "
                  >
                    ✓
                  </span>

                ) : (

                  <span className="text-[10px] font-semibold text-white/45">
                    Select
                  </span>

                )}

              </div>

            </button>
          );
        })}

      </div>

      {/* INFORMATION */}

      <div className="mt-5 rounded-2xl border border-red-400/10 bg-red-500/[0.035] px-4 py-3">

        <p className="text-[9px] font-semibold leading-5 text-red-400">
          Your emergency contacts can be notified when your safety network
          needs to respond.
        </p>

      </div>

    </div>
  );
}