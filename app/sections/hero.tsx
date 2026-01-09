"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

import TypingText from "@/components/animations/typing";
import { Button } from "@/components/ui/button";

const container: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const letter: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.4, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 3500);
  }, []);

  return (
    <div className="h-screen flex flex-col text-center lg:text-start items-center justify-center py-10 px-4 md:px-8 lg:px-20">
      {show && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
        >
          <TypingText
            text="Hi, I'm Parag Bokde"
            className="mb-8 text-md md:text-lg lg:text-xl font-mono text-zinc-800 max-md:text-center text-center"
          />
        </motion.div>
      )}
      <motion.h1
        layout
        variants={container}
        initial="initial"
        animate="animate"
        className="mb-4 text-xl font-bold leading-tight tracking-tighter md:text-3xl lg:text-5xl text-center text-shadow-black"
      >
        A Full Stack Developer that builds and scales performant web
        applications.
      </motion.h1>
      {show && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-zinc-800 md:text-lg lg:text-xl leading-relaxed text-center"
        >
          I am an experienced software engineer with a background spanning both
          startups and established organizations. I bring a strong passion for
          problem-solving, software development, and machine learning, and I
          enjoy building scalable, impactful solutions that bridge innovation
          with real-world applications.
        </motion.p>
      )}
      {show && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
          className="flex gap-4 items-center justify-center lg:justify-start"
        >
          <a href="mailto:paragbokde51@gmail.com">
            <Button variant="secondary" size="lg">
              Contact Me
            </Button>
          </a>
        </motion.div>
      )}
    </div>
  );
}
