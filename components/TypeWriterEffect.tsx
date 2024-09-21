"use client";
import { TypewriterEffectSmooth } from "@components/ui/typewriter-effect";

export function TypeWriterEffect({}) {
  const words = [
    {
      text: "Management/Ventures",
    },
    {
      text: "For",
    },
    {
      text: "Elite",
    },
    {
      text: "Talent",
    },
    // {
    //   text: "",
    // },
    // {
    //   text: "Movin",
    //   className: "text-cyan-500",
    // },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[rem]  ">
      <p className="text-gray-300 lg:text-xl xl:text-3xl sm:text-lg">
        {/* Management for elite talent. */}
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
