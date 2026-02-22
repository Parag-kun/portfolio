"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Category } from "./interfaces";
import { skillsData, categories } from "./utils";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<Category>("Frontend");

  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100vh-14rem)] py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-sans w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 space-y-4 w-full"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight ">
          My Skills
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Technologies and tools I work with to build high-performance
          applications.
        </p>
      </motion.div>

      <Tabs
        value={activeTab}
        onValueChange={(val) => setActiveTab(val as Category)}
        className="w-full flex flex-col items-center"
      >
        <div className="w-full max-w-4xl mb-12">
          <TabsList className="flex flex-wrap justify-center gap-2 p-1.5 bg-black/40 rounded-2xl border border-black/40 shadow-sm">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                layoutId="active-skill-tab"
                className="px-4 sm:px-6 py-2.5 text-sm sm:text-base"
                activeClassName="text-black"
                inactiveClassName="text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="w-full max-w-5xl min-h-[400px]">
          <AnimatePresence mode="wait">
            <TabsContent key={activeTab} value={activeTab}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skillsData[activeTab].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex flex-col items-center justify-center p-6 bg-black/60 backdrop-blur-xl hover:bg-black/80 rounded-3xl border border-black/40 shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-semibold text-white text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </AnimatePresence>
        </div>
      </Tabs>
    </div>
  );
}
