import { TypewriterEffect } from "@components/ui/typewriter-effect";
import { m, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { TypeWriterEffect } from "@components/TypeWriterEffect";
import InfiniteSlider from "@components/InfiniteSlider";
import ColouredLine from "@components/ColouredLine";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

function Home() {
  const slideVariants = [
    "https://static.timesofisrael.com/www/uploads/2023/02/AP23039186120109-e1675835678772.jpg",
    "https://e0.365dm.com/20/02/2048x1152/skysports-anthony-joshua-boxing_4929385.jpg?20200224092824",
    "https://e0.365dm.com/23/06/2048x1152/skysports-luka-modric-croatia_6187674.jpg?20230614224314",
    "https://images.wsj.net/im-976761/?width=1278&size=1",
  ];

  return (
    <>
      <div className="flex h-screen justify-center items-center flex-col">
        <TypeWriterEffect />
        <div className="mb-36 justify-center">
          <div className="flex gap-x-20 mt-12">
            <Button className="relative overflow-hidden bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white font-extrabold text-2xl py-8 px-10 rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-2xl hover:from-blue-500 hover:via-cyan-500 hover:to-teal-500 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50">
              <span className="relative flex items-center justify-center">
                I'm A Creator
                {/* <Sparkles className="ml-2 h-5 w-5 animate-pulse" /> */}
              </span>
              <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
            </Button>
            <Button className="relative overflow-hidden bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white font-extrabold text-2xl py-8 px-10 rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-2xl hover:from-blue-500 hover:via-cyan-500 hover:to-teal-500 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50">
              <span className="relative flex items-center justify-center">
                I'm A Brand
                {/* <Sparkles className="ml-2 h-5 w-5 animate-pulse" /> */}
              </span>
              <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-4 ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center text-[var(--textSecondary)]">
              Our Valued Clients
            </h1>
            <ColouredLine width={"full"} />
          </div>
        </div>

        <div className="flex items-center justify-center p-4">
          <div className="max-w-[20rem] sm:max-w-[30rem] mt-6">
            <InfiniteSlider />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
