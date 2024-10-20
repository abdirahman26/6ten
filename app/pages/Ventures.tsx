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
import FloatingIcons from "./components/FloatingIcons";
import ServiceCard, { Service } from "./components/ServiceCard";

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
