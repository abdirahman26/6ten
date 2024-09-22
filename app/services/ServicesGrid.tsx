"use client";

import {
  Globe,
  Megaphone,
  PenTool,
  Camera,
  Search,
  Share2,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Web Design & Development",
    description:
      "We create stunning, responsive websites tailored to your brand and business needs.",
  },
  {
    icon: Megaphone,
    title: "Channel Marketing",
    description:
      "We develop engaging, creative ideas that drive genuine results across a wide range of industries and technology areas.",
  },
  {
    icon: PenTool,
    title: "Branding Strategy & Identity Systems",
    description:
      "We help build and refine your brand identity to create a cohesive and impactful presence.",
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description:
      "Professional visual content creation to showcase your products and services.",
  },
  {
    icon: Search,
    title: "SEO & Content Localisation",
    description:
      "Optimize your online presence and reach global audiences with our SEO and localization services.",
  },
  {
    icon: Share2,
    title: "Social Media Strategy",
    description:
      "Develop a strong social media presence and engage with your audience effectively.",
  },
];

export default function ServiceGrid() {
  return (
    <div className="min-h-screen text-white p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
        Explore the range of services we offer
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg bg-gray-800 cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-6 h-full flex flex-col justify-between z-10">
              <service.icon className="w-12 h-12 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                {service.description}
              </p>
              <a
                href="#"
                className="text-sm font-medium mt-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
              >
                Let's Build &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
