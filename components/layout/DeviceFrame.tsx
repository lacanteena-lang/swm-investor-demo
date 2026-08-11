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

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  /* On an actual phone/tablet, use the full screen */
  if (mobile) {
    return (
      <div className="relative h-screen w-screen overflow-hidden bg-black">
        {children}
      </div>
    );
  }

  /* On desktop, create the actual phone */
  return (
    <div
      className="
        relative
        mx-auto
        h-[844px]
        w-[390px]
        overflow-hidden
        rounded-[48px]
        border
        border-white/15
        bg-black
        shadow-[0_30px_100px_rgba(0,0,0,0.55)]
      "
    >
      {children}
    </div>
  );
}