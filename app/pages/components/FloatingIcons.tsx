import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BeakerIcon, LightbulbIcon, RocketIcon } from "lucide-react";

// Floating Icons Component
const FloatingIcons: FC = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Only access `window` when the component is mounted
    if (typeof window !== "undefined") {
      // Set initial window size
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      // Update window size on resize
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {windowSize.width > 0 &&
        [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-700 opacity-20"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              rotate: Math.random() * 360,
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
              },
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
};

export default FloatingIcons;
