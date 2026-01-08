"use client";

import { motion } from "framer-motion";
import { memo } from "react";

// Utility helpers
const random = (min: number, max: number) => Math.random() * (max - min) + min;

const COLORS = [
  "#22d3ee", // cyan
  "#a855f7", // purple
  "#ec4899", // pink
  "#4ade80", // green
  "#facc15", // yellow
];

function Ball({
  size,
  color,
  x,
  y,
  duration,
}: {
  size: number;
  color: string;
  x: string;
  y: string;
  duration: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-60"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        top: y,
        left: x,
      }}
      animate={{
        x: [0, random(-200, 200), 0],
        y: [0, random(-200, 200), 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function BlurredBallsBackground() {
  const balls = Array.from({ length: random(8, 12) });

  return (
    <div className="absolute h-full w-full overflow-hidden bg-white -z-10">
      {balls.map((_, i) => (
        <Ball
          key={i}
          size={random(200, 500)}
          color={COLORS[Math.floor(Math.random() * COLORS.length)]}
          x={`${random(0, 100)}%`}
          y={`${random(0, 100)}%`}
          duration={random(4, 10)}
        />
      ))}
    </div>
  );
}

export default memo(BlurredBallsBackground);
