import { ImagesSlider } from "@components/Image-Slider";
import { TypewriterEffect } from "@components/ui/typewriter-effect";
import { m, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { TypeWriterEffect } from "@components/TypeWriterEffect";
import { InfiniteSlider } from "@components/InfiniteSlider";

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
        {/* <ImagesSlider images={slideVariants}>
        <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        classNameName="z-50 flex flex-col justify-center items-center"
      > */}

        <TypeWriterEffect />
        {/* </motion.div>
      </ImagesSlider> */}

        <button className="px-4 py-2 backdrop-blur-sm border bg-[var(--lineIndingo)] border-[var(--lineIndigo)] text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[var(--linePink)] to-transparent" />
        </button>

          <InfiniteSlider />

      </div>
    </>
  );
}

export default Home;
