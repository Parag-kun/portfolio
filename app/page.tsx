"use client";

import { motion } from "framer-motion";
import About from "./components/about";
import Profile from "./components/profile";
import Strengths from "./components/strengths";
import Hobbies from "./components/hobbies";
import Education from "./components/education";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full space-y-16"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <About />
          <Profile />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Strengths />
          <Hobbies />
          <Education />
        </div>
      </motion.div>
    </div>
  );
}
