"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import InfiniteSlider from "@components/InfiniteSlider";
import ColouredLine from "@components/ColouredLine";
import ServiceGrid from "@/services/ServicesGrid";
import RotatingWords from "@components/RotatingWords";
import { useRouter } from "next/navigation";

function Home() {
  useEffect(() => {
    // Check if the URL contains the hash for services
    if (window.location.hash === "#services") {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const router = useRouter();

  return (
    <>
      <div className="flex h-screen justify-center items-center flex-col">
        {/* Example of your rotating words component */}
        <RotatingWords />

        <div className="mb-36 justify-center align-middle">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-x-20 mt-8 sm:mt-12">
            <Button
              onClick={() => {
                router.push("/contact?tab=creator");
              }}
              className="relative overflow-hidden bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white font-extrabold text-xl sm:text-2xl py-6 sm:py-8 px-8 sm:px-10 rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110 sm:hover:scale-125 hover:shadow-2xl hover:from-blue-500 hover:via-cyan-500 hover:to-teal-500 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 w-full sm:w-auto"
            >
              <span className="relative flex items-center justify-center">
                I Am A Creator
              </span>
              <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
            </Button>
            <Button
              onClick={() => {
                router.push("/contact?tab=brand");
              }}
              className="relative overflow-hidden bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white font-extrabold text-xl sm:text-2xl py-6 sm:py-8 px-8 sm:px-10 rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110 sm:hover:scale-125 hover:shadow-2xl hover:from-blue-500 hover:via-cyan-500 hover:to-teal-500 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 w-full sm:w-auto"
            >
              <span className="relative flex items-center justify-center">
                I Am A Brand
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

      {/* Services Section */}
      <div id="services">
        <ServiceGrid />
      </div>
    </>
  );
}

export default Home;
