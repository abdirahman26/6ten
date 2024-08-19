"use client";
import { TypewriterEffectSmooth } from "@components/ui/typewriter-effect";
export function TypeWriterEffect() {
  const words = [
    {
      text: "Unlock",
    },
    {
      text: "Your",
    },
    {
      text: "Full",
    },
    {
      text: "Potential",
    },
    {
      text: "with",
    },
    {
      text: "6-TEN.",
      className: "text-[#b625ab]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[rem]  ">
      <p className="text-gray-300 text-lg sm:text-lg">
        The road to stardom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
