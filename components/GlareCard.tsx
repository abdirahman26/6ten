import React, { useState } from "react";
import { GlareCard } from "./ui/glare-card";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Image from 'next/image';

interface Talent {
  name: string;
  description: string;
  imageUrl: string;
}

export function GlareCardComponent({ talent }: { talent: Talent }) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full max-w-xs"
      >
        <GlareCard className="relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
          <Image
            className="w-full h-full object-cover"
            src={talent.imageUrl}
            alt={talent.name}
            width={300}
            height={300}
          />

          {hover && (
            <div className="absolute inset-0 flex flex-col bg-black bg-opacity-50 text-white z-20 p-4 gap-20">
              <p className="font-bold text-lg mb-2">{talent.name}</p>
              <p className="font-normal text-base text-center flex gap-3 justify-center mt-auto">
                <FaInstagram className="inline mr-2 text-2xl" />
                <FaTiktok className="inline mr-2 text-2xl" />
              </p>
            </div>
          )}
        </GlareCard>
      </div>
    </div>

  );
}
