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
  <div className="relative z-40 px-5 pt-0 pb-[6px]">

      <div
        className="
          rounded-full
          border
          border-white/10
          bg-black/70
          backdrop-blur-3xl
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          px-2
          py-1
        "
      >
        <div className="grid grid-cols-5 place-items-center">

          {items.map(({ id, icon: Icon }) => {
            const active = activeTab === id;

            return (
              <motion.button
                key={id}
                onClick={() => setActiveTab(id)}
                whileTap={{ scale: 0.94 }}
                animate={active ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
                className={`
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    active
                      ? "bg-[#FF3B30]/20 shadow-[0_0_20px_rgba(255,59,48,0.35)]"
                      : "hover:bg-white/5"
                  }
                `}
              >
                <Icon
                  size={22}
                  className={
                    active
                      ? "text-[#FF3B30]"
                      : "text-white/70"
                  }
                />

                {active && (
                  <motion.div
                    layoutId="nav-dot"
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

    </div>
  );
}