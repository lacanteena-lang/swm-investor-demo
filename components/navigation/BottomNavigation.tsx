"use client";

import { Home, Bot, Navigation, Bell, User } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { id: "home", icon: Home },
  { id: "ai", icon: Bot },
  { id: "journey", icon: Navigation },
  { id: "sos", icon: Bell },
  { id: "profile", icon: User },
];

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function BottomNavigation({
  activeTab,
  setActiveTab,
}: Props) {
  return (
    <div
      className="
        relative
        z-40
        border-t
        border-white/10
        bg-black/40
        backdrop-blur-3xl
        px-4
        pb-[max(env(safe-area-inset-bottom),16px)]
        pt-3
      "
    >
      <div className="mx-auto flex max-w-[430px] items-center justify-between">

        {items.map(({ id, icon: Icon }) => {
          const active = activeTab === id;

          return (
            <motion.button
              key={id}
              onClick={() => setActiveTab(id)}
              whileTap={{ scale: 0.92 }}
              animate={active ? { scale: 1.08 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
              className="
                relative
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
              "
            >
              {active && (
                <motion.div
                  layoutId="active-pill"
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[#FF3B30]/20
                    shadow-[0_0_24px_rgba(255,59,48,0.45)]
                  "
                />
              )}

              <Icon
                size={25}
                className={
                  active
                    ? "relative z-10 text-[#FF3B30]"
                    : "relative z-10 text-white/65"
                }
              />

              {active && (
                <motion.div
                  layoutId="active-dot"
                  className="
                    absolute
                    -bottom-1
                    h-2
                    w-2
                    rounded-full
                    bg-[#FF3B30]
                  "
                />
              )}
            </motion.button>
          );
        })}

      </div>
    </div>
  );
}