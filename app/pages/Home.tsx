import { ImagesSlider } from "@components/Image-Slider";
import { TypewriterEffect } from "@components/ui/typewriter-effect";
import { m, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { TypeWriterEffect } from "@components/TypeWriterEffect";

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
        <section className="text-white py-8 w-[40%]">
          <h2 className="text-center text-2xl mb-2 font-bold leading-8">Our Clients</h2>
          <p className="text-center text-lg font-extralight leading-8">We are trusted by the world’s most innovative teams</p>

          <div className="logos group relative overflow-hidden whitespace-nowrap py-10">
            <div className="carousel flex animate-slide-left-infinite">
              <div className="flex-shrink-0 mx-4 h-16">
                <img src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
              </div>
              <div className="flex-shrink-0 mx-4 h-16">
                <img src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
              </div>
              <div className="flex-shrink-0 mx-4 h-16">
                <img src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
              </div>
              <div className="flex-shrink-0 mx-4 h-16">
                <img src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" />
              </div>
              <div className="flex-shrink-0 mx-4 h-16">
                <img src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="Statamic" />
              </div>
              <div className="flex-shrink-0 mx-4 h-16">
                <img src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg" alt="Laravel" />
              </div>
              <div className="flex-shrink-0 mx-4 h-16">
                <img src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
              </div>
              <div className="flex-shrink-0 mx-4 h-16">
                <img src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
              </div>
              <div className="flex-shrink-0 mx-4 h-16">
                <img src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
              </div>
              <div className="flex-shrink-0 mx-4 h-16">
                <img src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" />
              </div>
              <div className="flex-shrink-0 mx-4 h-16">
                <img src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="Statamic" />
              </div>
              <div className="flex-shrink-0 mx-4 h-16">
                <img src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg" alt="Laravel" />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default Home;
