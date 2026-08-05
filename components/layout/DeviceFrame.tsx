"use client";

import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function DeviceFrame({ children }: Props) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      setMobile(window.innerWidth < 768);
    };

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  if (mobile) {
    return (
      <div className="h-[100dvh] w-screen overflow-hidden bg-[#09111F]">
        {children}
      </div>
    );
  }

  return (
    <div className="relative h-[844px] w-[430px] overflow-hidden rounded-[48px] border border-white/10 bg-[#09111F]/90 shadow-[0_40px_120px_rgba(0,0,0,0.70)] backdrop-blur-3xl">
      {children}
    </div>
  );
}