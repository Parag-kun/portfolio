"use client";

import { motion } from "framer-motion";
import { projectsData } from "./utils";
import { ProjectCard } from "./components/project-card";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 12 },
  },
};

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100vh-14rem)] py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-sans">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          My Projects
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Here are some of the recent applications I've built. Each project is
          crafted with a focus on problem-solving, performance, and user
          experience.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} variants={cardVariants} />
        ))}
      </motion.div>
    </div>
  );
}
