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
      className: "text-cyan-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[rem]  ">
      <p className="text-gray-300 lg:text-xl xl:text-2xl sm:text-lg">
        The road to stardom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
