"use client";

import { motion } from "framer-motion";
import { servicesData } from "./utils";
import { ServiceCard } from "./components/service-card";

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

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100vh-14rem)] py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-sans">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
          My <span className="text-black">Services</span>
        </h1>
        <p className="text-xl text-black max-w-2xl mx-auto">
          Delivering high-quality, scalable solutions tailored to help your
          business evolve and succeed in the digital landscape.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} variants={cardVariants} />
        ))}
      </motion.div>
    </div>
  );
}
