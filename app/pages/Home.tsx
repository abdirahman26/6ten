import { Carousel } from "@components/Carousel";
import { ImagesSlider } from "@components/Image-Slider";
import { m, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  margin-top: 100px;
  justify-content: space-evenly;
  align-items: center;
`;

const TextContainer = styled.div`
  font-size: 100px;
  font-weight: bold;
  color: white;
  z-index: 998;
  padding-bottom: 100px;

  @media (max-width: 1210px) {
    font-size: 65px;
  }
  @media (max-width: 995px) {
    font-size: 45px;
  }
`;
const ImageContainer = styled.div`
  background-image: url("/images/moon.png");
  background-size: cover;
  height: 600px;
  width: 600px;
  z-index: 998;

  @media (max-width: 1210px) {
    height: 450px;
    width: 450px;
  }

  @media (max-width: 995px) {
    height: 350px;
    width: 350px;
  }
`;

function Home() {
  const slideVariants = [
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/stephen-curry-gettyimages-1398745379.jpg",
    "https://e0.365dm.com/23/06/2048x1152/skysports-luka-modric-croatia_6187674.jpg?20230614224314",
    "https://media.bleacherreport.com/image/upload/x_5,y_11,w_1788,h_1190,c_crop/c_fill,g_faces,w_3800,h_2000,q_95/v1699517864/bymq7fkl1g2ozzxiunhf.jpg",
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
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            The hero section slideshow <br /> nobody asked for
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
