"use client";

import { motion } from "framer-motion";

import TypingText from "@/components/animations/typing";
import { luckiestGuy } from "@/utils/fonts";
import { cn } from "@/utils/tailwind";

export default function Trailer() {
  return (
    <motion.div
      animate={{ height: 0 }}
      transition={{ duration: 0.5, delay: 3 }}
      className="h-screen bg-black overflow-hidden text-white absolute z-10 px-4 md:px-8 lg:px-20"
    >
      <div className="h-screen flex flex-col items-center justify-center">
        <motion.div
          className={cn(
            "text-lg md:text-xl lg:text-3xl",
            luckiestGuy.className
          )}
        >
          You need
        </motion.div>
        <motion.h1 className="mb-4 text-xl font-bold leading-tight tracking-tighter md:text-3xl lg:text-5xl text-center">
          A Full Stack Developer that builds and scales performant web
          applications?
        </motion.h1>

        <TypingText
          className={cn(
            "text-lg md:text-xl lg:text-3xl",
            luckiestGuy.className
          )}
          text="You are at the right place!"
          delay={1}
          speed={50}
        />
      </div>
    </motion.div>
  );
}
