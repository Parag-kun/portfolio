"use client";

import { type HTMLAttributes, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  text: string;
  speed?: number;
  delay?: number;
}

export default function TypingText({
  text,
  speed = 100,
  delay = 0,
  ...props
}: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalRef: NodeJS.Timeout;
    const timeoutRef = setTimeout(() => {
      intervalRef = setInterval(() => {
        setCount((c) => c + 1);
      }, speed);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutRef);
      intervalRef && clearInterval(intervalRef);
    };
  }, [speed, delay]);

  return (
    <div {...props}>
      {text
        .slice(0, count)
        .split("")
        .map((char, i) => (
          <span key={i}>{char}</span>
        ))}

      <motion.span
        animate={
          count === text.length ? { opacity: [0, 1, 0] } : { opacity: 1 }
        }
        transition={{ repeat: Infinity, duration: 1, delay }}
      >
        |
      </motion.span>
    </div>
  );
}
