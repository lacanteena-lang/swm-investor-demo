"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Plus,
  ShieldCheck,
  X,
  Phone,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import PremiumButton from "../ui/PremiumButton";

type FamilyMember = {
  id: string;
  name: string;
  phone: string;
  relation: string;
};

const FAMILY_MEMBERS_KEY = "swm-family-circle-members";

const primaryContact = {
  name: "Primary Contact",
  status: "Connected",
};

export default function FamilyCard() {
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
  const [showAddMember, setShowAddMember] = useState(false);
  const [primaryContactOpen, setPrimaryContactOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [relation, setRelation] = useState("");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(FAMILY_MEMBERS_KEY);

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setFamilyMembers(parsed);
        }
      }
    } catch (error) {
      console.error("Unable to load Family Circle members:", error);
    }
  }, []);

  const saveMembers = (members: FamilyMember[]) => {
    setFamilyMembers(members);
    window.localStorage.setItem(
      FAMILY_MEMBERS_KEY,
      JSON.stringify(members),
    );
  };

  const openAddMember = () => {
    setName("");
    setPhone("");
    setRelation("");
    setShowAddMember(true);
  };

  const closeAddMember = () => {
    setShowAddMember(false);
  };

  const handleAddMember = () => {
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedRelation = relation.trim();

    if (!trimmedName || !trimmedPhone) {
      alert("Please enter the family member's name and phone number.");
      return;
    }

    const newMember: FamilyMember = {
      id: crypto.randomUUID(),
      name: trimmedName,
      phone: trimmedPhone,
      relation: trimmedRelation || "Family Member",
    };

    saveMembers([...familyMembers, newMember]);
    setShowAddMember(false);
  };

  const removeMember = (id: string) => {
    const updatedMembers = familyMembers.filter(
      (member) => member.id !== id,
    );

    saveMembers(updatedMembers);
  };

  return (
    <>
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

            {/* Primary Contact */}

            <div
              role="button"
              tabIndex={0}
              onClick={() => setPrimaryContactOpen((open) => !open)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setPrimaryContactOpen((open) => !open);
                }
              }}
              className="
                relative
                flex
                w-full
                cursor-pointer
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
                active:scale-[0.995]
              "
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
                    {primaryContact.name}
                  </p>

                  <p className="mt-1 text-[9px] font-medium text-red-400">
                    Safety connection active
                  </p>

                </div>

              </div>

              <div className="flex shrink-0 items-center gap-2">

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

                <span className="text-[10px] font-semibold text-emerald-300">
                  Connected
                </span>

              </div>

            </div>

            {primaryContactOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -4 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                className="overflow-hidden rounded-2xl border border-emerald-300/20 bg-emerald-400/[0.04]"
              >
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">
                      <ShieldCheck size={19} className="text-emerald-300" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold text-white">
                        Primary Contact Connected
                      </p>
                      <p className="mt-1 text-[9px] leading-4 text-white/55">
                        Your primary safety contact is connected and ready to
                        support your safety journey.
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-2 py-1 text-[8px] font-semibold text-emerald-300">
                      CONNECTED
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setPrimaryContactOpen(false);
                    }}
                    className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:bg-white/[0.06] active:scale-[0.99]"
                  >
                    CLOSE
                  </button>
                </div>
              </motion.div>
            )}

            {/* Added Family Members */}

            {familyMembers.map((member) => (

              <div
                key={member.id}
                className="
                  relative
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-3
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/[0.04]
                  p-4
                  text-left
                "
              >

                <div className="flex min-w-0 items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">

                    <Users
                      size={19}
                      strokeWidth={1.8}
                      className="text-cyan-300"
                    />

                  </div>

                  <div className="min-w-0">

                    <p className="truncate text-[12px] font-semibold text-white">
                      {member.name}
                    </p>

                    <p className="mt-1 truncate text-[9px] font-medium text-white/45">
                      {member.relation} • {member.phone}
                    </p>

                  </div>

                </div>

                <button
                  type="button"
                  onClick={() => removeMember(member.id)}
                  className="
                    shrink-0
                    rounded-lg
                    px-2
                    py-1
                    text-[9px]
                    font-semibold
                    text-red-400
                    transition
                    hover:bg-red-400/10
                  "
                >
                  Remove
                </button>

              </div>

            ))}

            {/* Empty Family Member State */}

            {familyMembers.length === 0 && (

              <div
                className="
                  flex
                  w-full
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

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04]">

                    <Users
                      size={19}
                      strokeWidth={1.8}
                      className="text-white/35"
                    />

                  </div>

                  <div className="min-w-0">

                    <p className="truncate text-[12px] font-semibold text-white">
                      Family Member
                    </p>

                    <p className="mt-1 text-[9px] font-medium text-white/35">
                      Add someone you trust
                    </p>

                  </div>

                </div>

                <span className="shrink-0 text-[10px] font-semibold text-red-400">
                  Not Added
                </span>

              </div>

            )}

          </div>

          {/* Add Member */}

          <div className="mt-5">

            <PremiumButton
              className="relative z-[60] w-full pointer-events-auto"
              onClick={openAddMember}
            >

              <div className="flex items-center justify-center gap-2">

                <Plus size={17} />

                Add Family Member

              </div>

            </PremiumButton>

          </div>

        </div>
      </GlassCard>

      {/* Add Family Member Modal */}

      {showAddMember && (

        <div
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            bg-black/70
            px-5
            backdrop-blur-sm
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            className="
              w-full
              max-w-[340px]
              rounded-[26px]
              border
              border-white/10
              bg-[#0d1420]
              p-5
              shadow-2xl
            "
          >

            <div className="flex items-start justify-between gap-4">

              <div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
                  FAMILY CIRCLE
                </p>

                <h3 className="mt-2 text-[22px] font-bold text-white">
                  Add Family Member
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-white/45">
                  Add someone you trust to your safety circle.
                </p>

              </div>

              <button
                type="button"
                onClick={closeAddMember}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-white/70
                "
              >

                <X size={17} />

              </button>

            </div>

            <div className="mt-5 space-y-3">

              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Full name"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-4
                  py-3
                  text-[11px]
                  text-white
                  outline-none
                  placeholder:text-white/25
                "
              />

              <div className="relative">

                <Phone
                  size={15}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/60"
                />

                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Phone number"
                  type="tel"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    py-3
                    pl-10
                    pr-4
                    text-[11px]
                    text-white
                    outline-none
                    placeholder:text-white/25
                  "
                />

              </div>

              <input
                value={relation}
                onChange={(event) => setRelation(event.target.value)}
                placeholder="Relationship (e.g. Spouse, Parent, Sibling)"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-4
                  py-3
                  text-[11px]
                  text-white
                  outline-none
                  placeholder:text-white/25
                "
              />

            </div>

            <div className="mt-5 flex gap-3">

              <button
                type="button"
                onClick={closeAddMember}
                className="
                  flex-1
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-4
                  py-3
                  text-[10px]
                  font-semibold
                  text-white/60
                "
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleAddMember}
                className="
                  flex-1
                  rounded-xl
                  border
                  border-cyan-400/10
                  bg-cyan-400/10
                  px-4
                  py-3
                  text-[10px]
                  font-semibold
                  text-cyan-200
                "
              >
                Add Member
              </button>

            </div>

          </motion.div>

        </div>

      )}
    </>
  );
}