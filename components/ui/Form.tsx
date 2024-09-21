"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Form() {
  const [activeTab, setActiveTab] = useState("brand");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted for:", activeTab);
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Get in touch today
          </h2>
          <p className="text-lg text-[var(--textSecondary)]">
            Let us collaborate to elevate your brand or creator journey.
          </p>
          <div
            className="flex items-center mt-8 text-[var(--textSecondary)]
              "
          >
            <div></div>
          </div>

          <div
            className="flex items-center mt-4text text-[var(--textSecondary)]
              "
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-[var(--textPrimary)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-48">
              +44 (0) 203 488 6212
            </div>
          </div>

          <div
            className="flex items-center mt-2 text-[var(--textSecondary)]
              "
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-[var(--textPrimary)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              <a href="#">hello@6tenmgt.com</a>
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-4 p-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-lg">
              <TabsTrigger
                value="brand"
                className="text-white data-[state=active]:bg-white data-[state=active]:text-teal-600 transition-all duration-300"
              >
                Brand
              </TabsTrigger>
              <TabsTrigger
                value="creator"
                className="text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 transition-all duration-300"
              >
                Creator
              </TabsTrigger>
            </TabsList>
            <Card className="bg-white shadow-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  {activeTab === "brand" ? "I'm a Brand" : "I'm a Creator"}
                </CardTitle>
              </CardHeader>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabVariants}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      {activeTab === "brand" && (
                        <div className="space-y-2">
                          <Label htmlFor="brandName">Brand Name</Label>
                          <Input
                            id="brandName"
                            placeholder="Enter your brand name"
                            required
                          />
                        </div>
                      )}
                      {activeTab === "creator" && (
                        <div className="space-y-2">
                          <Label htmlFor="socialMedia">
                            Social Media Handle
                          </Label>
                          <Input
                            id="socialMedia"
                            placeholder="Enter your main social media handle"
                            required
                          />
                        </div>
                      )}
                      <div className="space-y-2">
                        <Label htmlFor="lookingFor">
                          What are you looking for?
                        </Label>
                        <Textarea
                          id="lookingFor"
                          placeholder="Briefly describe what you're looking for in a talent management partnership"
                          required
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white transition-all duration-300"
                      >
                        Submit Application
                      </Button>
                    </CardFooter>
                  </form>
                </motion.div>
              </AnimatePresence>
            </Card>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
