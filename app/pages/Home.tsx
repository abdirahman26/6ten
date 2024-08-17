import { ImagesSlider } from "@components/Image-Slider";
import { TypewriterEffect } from "@components/ui/typewriter-effect";
import { m, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { TypeWriterEffect } from "@components/TypeWriterEffect";
import InfiniteSlider from "@components/InfiniteSlider";
import ColouredLine from "@components/ColouredLine";

function Home() {
  const slideVariants = [
    "https://static.timesofisrael.com/www/uploads/2023/02/AP23039186120109-e1675835678772.jpg",
    "https://e0.365dm.com/20/02/2048x1152/skysports-anthony-joshua-boxing_4929385.jpg?20200224092824",
    "https://e0.365dm.com/23/06/2048x1152/skysports-luka-modric-croatia_6187674.jpg?20230614224314",
    "https://images.wsj.net/im-976761/?width=1278&size=1",
  ];

  return (
    <>
      <div className="flex h-screen justify-center items-center pl-10 flex-col">
        <TypeWriterEffect />
        <button className="px-4 py-2 backdrop-blur-sm border bg-[var(--lineIndingo)] border-[var(--lineIndigo)] text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[var(--linePink)] to-transparent" />
        </button>

        <div className="flex flex-col items-center justify-center mt-4 pt-10 pb-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center text-[var(--textSecondary)]">
              6-TEN<span className="text-[#b625ab]">.</span> Clientele
            </h1>
            {/* <div className="py-0.5 px-4 text-left md:text-center font-medium font-sans tracking-tight text-sm bg-gradient-to-r text-white from-pink-500 via-purple-500 to-indigo-500 w-full"></div> */}
            <ColouredLine width={"full"} />
          </div>
        </div>

        <InfiniteSlider />
      </div>
    </>
  );
}

export default Home;
