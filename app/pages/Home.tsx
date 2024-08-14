import { ImagesSlider } from "@components/Image-Slider";
import { m, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function Home() {
  const slideVariants = [
    "https://static.timesofisrael.com/www/uploads/2023/02/AP23039186120109-e1675835678772.jpg",
    "https://e0.365dm.com/20/02/2048x1152/skysports-anthony-joshua-boxing_4929385.jpg?20200224092824",
    "https://e0.365dm.com/23/06/2048x1152/skysports-luka-modric-croatia_6187674.jpg?20230614224314",
    "https://images.wsj.net/im-976761/?width=1278&size=1",
  ];

  return (
    <div className="flex h-screen justify-evenly items-center">
      {/* <TextContainer>Lorem Ipsum</TextContainer> */}
      {/* <ImageContainer /> */}
      {/* <ImagesSlider images={slideVariants} /> */}
      {/* <Carousel items={[slideVariants]} /> */}
      <ImagesSlider images={slideVariants}>
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
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className=" uppercase font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Welcome to 6-TEN where we help <br /> muslim creators find their{" "}
            <br /> audience
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Join now →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
    </div>
  );
}

export default Home;
