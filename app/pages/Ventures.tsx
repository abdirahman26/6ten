"use client";

import React from "react";
import Image from "next/image";
import ServicesAction from "@/sections/Services/ServicesAction";
import { TypeWriterEffect } from "@components/TypeWriterEffect";

function Ventures() {
  return (
    <>
      <div className="relative h-screen w-full">
        <div className="flex flex-col items-center justify-center text-center pt-36">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--textPrimary)]">
            <TypeWriterEffect />
          </h1>
          <p className="text-lg md:text-2xl mt-4 text-[var(--textSecondary)]">
            Empowering your creativity with strategic support. Let us bring your
            vision to life together
          </p>
        </div>
      </div>
      <div>
        <div className="py-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:space-x-16 md:justify-center md:items-center">
                <div className="w-full md:w-1/3 space-y-4 text-center md:text-left">
                  <h3 className="font-medium text-3xl text-[var(--textPrimary)]">
                    Our Mission?
                  </h3>
                  <p className="text-[var(--textSecondary)] text-lg">
                    To partner with top talent to launch their next venture. We
                    expertly carve out brands which align with your audience and
                    ethos. This is more than just a sponsorship. This is
                    ownership.
                  </p>
                </div>
                <div className="mx-auto w-1/2 md:w-1/3">
                  <Image
                    src="https://images.ctfassets.net/ihx0a8chifpc/pkPsn4xvlsW7rV74rsMhW/9b749af2555183d91e84b9879422c180/placehold-1280x720.jpg?w=1280&q=60&fm=webp"
                    alt="Right Image"
                    className="rounded-lg"
                    width={1280}
                    height={720}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse md:space-x-reverse md:space-x-16 md:justify-center md:items-center">
                <div className="w-full md:w-1/3 space-y-4 text-center md:text-left">
                  <h3 className="font-medium text-3xl text-[var(--textPrimary)]">
                    What Do We Offer?
                  </h3>
                  <p className="text-[var(--textSecondary)] text-lg">
                    <span className="text-cyan-500 font-bold">Ideate - </span>
                    Deep dive into your audience and niche to create brands
                    which last the test of time.
                    <br />
                    <span className="text-cyan-500 font-bold">Incubate - </span>
                    With access to our expert network of specialists, investors
                    and mentors we provide the springboard to get your venture
                    off the ground.
                    <br />
                    <span className="text-cyan-500 font-bold">Launch - </span>
                    Successfully launch your brand to the world using a bespoke
                    marketing and business growth strategy
                  </p>
                </div>
                <div className="mx-auto w-1/2 md:w-1/3">
                  <Image
                    src="https://images.ctfassets.net/ihx0a8chifpc/pkPsn4xvlsW7rV74rsMhW/9b749af2555183d91e84b9879422c180/placehold-1280x720.jpg?w=1280&q=60&fm=webp"
                    alt="Right Image"
                    className="rounded-lg"
                    width={1280}
                    height={720}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesAction
        header="Are You Prepared to Reach New Heights?"
        message="Let us assist you in achieving your greatest potential."
        button="Let's Build Together"
      />
    </>
  );
}

export default Ventures;
