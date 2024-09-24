import { CardContent, CardHeader, CardTitle, Card } from "@/components/ui/card";
import { useScroll, useTransform, motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { FC, useRef, useState } from "react";

// Define the structure of the service object
export interface Service {
  title: string;
  description: string;
  icon: LucideIcon; // Type for the icon component
  color: string;
}

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

export default ServiceCard;
