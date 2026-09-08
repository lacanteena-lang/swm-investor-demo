"use client";

import { ReactNode } from "react";

type Props = {
  screenKey: string;
  children: ReactNode;
};

export default function NavigationStack({
  screenKey,
  children,
}: Props) {
  return (
    <div key={screenKey} className="h-full">
      {children}
    </div>
  );
}
