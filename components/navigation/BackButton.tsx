"use client";

import { ChevronLeft } from "lucide-react";

type Props = {
  onClick?: () => void;
};

export default function BackButton({
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-200
        hover:bg-white/10
        active:scale-95
      "
    >
      <ChevronLeft
        size={22}
        className="text-white"
      />
    </button>
  );
}