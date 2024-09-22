// "use client";

// import React from "react";
// import Image from "next/image";
// import ServicesAction from "@/sections/Services/ServicesAction";
// import { TypeWriterEffect } from "@components/TypeWriterEffect";

// function Ventures() {
//   return (
//     <>
//       <div className="relative h-screen w-full">
//         <div className="flex flex-col items-center justify-center text-center pt-36">
//           <h1 className="text-4xl md:text-6xl font-bold text-[var(--textPrimary)]">
//             <TypeWriterEffect />
//           </h1>
//           <p className="text-lg md:text-2xl mt-4 text-[var(--textSecondary)]">
//             Empowering your creativity with strategic support. Let us bring your
//             vision to life together
//           </p>
//         </div>
//       </div>
//       <div>
//         <div className="py-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
//           <div className="space-y-16">
//             <div className="space-y-8">
//               <div className="flex flex-col md:flex-row md:space-x-16 md:justify-center md:items-center">
//                 <div className="w-full md:w-1/3 space-y-4 text-center md:text-left">
//                   <h3 className="font-medium text-3xl text-[var(--textPrimary)]">
//                     Our Mission?
//                   </h3>
//                   <p className="text-[var(--textSecondary)] text-lg">
//                     To partner with top talent to launch their next venture. We
//                     expertly carve out brands which align with your audience and
//                     ethos. This is more than just a sponsorship. This is
//                     ownership.
//                   </p>
//                 </div>
//                 <div className="mx-auto w-1/2 md:w-1/3">
//                   <Image
//                     src="https://images.ctfassets.net/ihx0a8chifpc/pkPsn4xvlsW7rV74rsMhW/9b749af2555183d91e84b9879422c180/placehold-1280x720.jpg?w=1280&q=60&fm=webp"
//                     alt="Right Image"
//                     className="rounded-lg"
//                     width={1280}
//                     height={720}
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col md:flex-row-reverse md:space-x-reverse md:space-x-16 md:justify-center md:items-center">
//                 <div className="w-full md:w-1/3 space-y-4 text-center md:text-left">
//                   <h3 className="font-medium text-3xl text-[var(--textPrimary)]">
//                     What Do We Offer?
//                   </h3>
//                   <p className="text-[var(--textSecondary)] text-lg">
//                     <span className="text-cyan-500 font-bold">Ideate - </span>
//                     Deep dive into your audience and niche to create brands
//                     which last the test of time.
//                     <br />
//                     <span className="text-cyan-500 font-bold">Incubate - </span>
//                     With access to our expert network of specialists, investors
//                     and mentors we provide the springboard to get your venture
//                     off the ground.
//                     <br />
//                     <span className="text-cyan-500 font-bold">Launch - </span>
//                     Successfully launch your brand to the world using a bespoke
//                     marketing and business growth strategy
//                   </p>
//                 </div>
//                 <div className="mx-auto w-1/2 md:w-1/3">
//                   <Image
//                     src="https://images.ctfassets.net/ihx0a8chifpc/pkPsn4xvlsW7rV74rsMhW/9b749af2555183d91e84b9879422c180/placehold-1280x720.jpg?w=1280&q=60&fm=webp"
//                     alt="Right Image"
//                     className="rounded-lg"
//                     width={1280}
//                     height={720}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ServicesAction
//         header="Are You Prepared to Reach New Heights?"
//         message="Let us assist you in achieving your greatest potential."
//         button="Let's Build Together"
//       />
//     </>
//   );
// }

// export default Ventures;

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LightbulbIcon,
  RocketIcon,
  BeakerIcon,
  LucideIcon,
} from "lucide-react";
import { useRef, useState, FC } from "react";

// Define the structure of the service object
interface Service {
  title: string;
  description: string;
  icon: LucideIcon; // Type for the icon component
  color: string;
}

const services: Service[] = [
  {
    title: "Ideate",
    description:
      "Deep dive into your audience and niche to create brands which last the test of time.",
    icon: LightbulbIcon,
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Launch",
    description:
      "Successfully launch your brand to the world using a bespoke marketing and business growth strategy.",
    icon: RocketIcon,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Incubate",
    description:
      "With access to our expert network of specialists, investors and mentors we provide the springboard to get your venture off the ground.",
    icon: BeakerIcon,
    color: "from-blue-500 to-teal-500",
  },
];

// Floating Icons Component
const FloatingIcons: FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-gray-700 opacity-20"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          rotate: Math.random() * 360,
          transition: { duration: Math.random() * 10 + 10, repeat: Infinity },
        }}
      >
        {i % 3 === 0 ? (
          <LightbulbIcon size={32} />
        ) : i % 3 === 1 ? (
          <RocketIcon size={32} />
        ) : (
          <BeakerIcon size={32} />
        )}
      </motion.div>
    ))}
  </div>
);

// Scroll Progress Component
const ScrollProgress: FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 z-50"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
};

// Service Card Component
interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: FC<ServiceCardProps> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale }}
      className="perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        className={`bg-gradient-to-br ${service.color} border-none shadow-lg transition-all duration-300 transform hover:scale-105`}
      >
        <CardHeader>
          <motion.div
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4"
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <service.icon className="w-8 h-8 text-gray-800" />
          </motion.div>
          <CardTitle className="text-3xl font-bold">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-100">{service.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Main Component
const Component: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.1, 0.3, 0.1]
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gray-900 text-white overflow-hidden"
    >
      <ScrollProgress />
      <FloatingIcons />
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 pointer-events-none"
        style={{ opacity: backgroundOpacity }}
      />
      <div className="max-w-6xl mx-auto px-4 py-24 relative z-10">
        <motion.h1
          className="text-6xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Mission
        </motion.h1>
        <motion.p
          className="text-xl mb-24 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          To partner with top talent to launch their next venture. We expertly
          carve out brands which align with your audience and ethos. This is
          more than just a sponsorship. This is ownership.
        </motion.p>
        <motion.h2
          className="text-4xl font-semibold mb-12 text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          What Do We Offer?
        </motion.h2>
        <div className="space-y-24">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Component;
