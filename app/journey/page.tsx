"use client";

import { motion } from "framer-motion";
import { journeyData } from "./utils";
import { JourneyCard } from "./components/journey-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

export default function Journey() {
  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100vh-14rem)] py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto font-sans">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Professional Journey
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Companies I have partnered with to deliver scalable and performant
          software solutions over the years.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
      >
        {journeyData.map((job, index) => (
          <JourneyCard key={index} job={job} variants={cardVariants} />
        ))}
      </motion.div>
    </div>
  );
}
