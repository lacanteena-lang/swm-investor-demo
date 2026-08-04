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
    <div className="fixed bottom-6 left-1/2 z-50 w-[92%] max-w-[360px] -translate-x-1/2">

      <div
        className="
          rounded-full
          border
          border-white/10
          bg-black/60
          backdrop-blur-3xl
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          px-3
          py-3
        "
      >

        <div className="grid grid-cols-5 place-items-center">

          {items.map(({ id, icon: Icon }) => {
            const active = activeTab === id;

            return (
              <motion.button
                key={id}
                onClick={() => setActiveTab(id)}
                whileTap={{ scale: 0.92 }}
                animate={active ? { scale: 1.12 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
                className={`
                  relative
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    active
                      ? "bg-[#FF3B30]/20 shadow-[0_0_30px_rgba(255,59,48,0.45)]"
                      : "hover:bg-white/5"
                  }
                `}
              >

                <Icon
                  size={26}
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
                      shadow-[0_0_12px_rgba(255,59,48,0.9)]
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