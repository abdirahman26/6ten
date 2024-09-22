"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RotatingWords() {
  const [isManagement, setIsManagement] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsManagement((prev) => !prev);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
      <div className="w-40 h-16 relative ml-44">
        <AnimatePresence mode="wait">
          {isManagement ? (
            <motion.div
              key="management"
              className="absolute inset-0 flex items-center justify-end pr-7 text-cyan-500"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              Management
            </motion.div>
          ) : (
            <motion.div
              key="ventures"
              className="absolute inset-0 flex items-center justify-end pr-7 text-cyan-500"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ventures
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* <div className="ml-5 mx-2">For</div>
      <div className="mx-2">Elite</div>
      <div className="mx-2">Talent</div> */}
      <div>For Elite Talent</div>
    </div>
  );
}
