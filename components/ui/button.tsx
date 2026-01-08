"use client";

import { forwardRef } from "react";
import { cn } from "@/utils/tailwind";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "cursor-pointer inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-white text-black hover:bg-zinc-200": variant === "primary",
            "bg-zinc-800 text-white hover:bg-zinc-800/80":
              variant === "secondary",
            "border border-zinc-800 bg-transparent hover:bg-zinc-800 hover:text-white":
              variant === "outline",
            "hover:bg-zinc-800 hover:text-white": variant === "ghost",
            "h-8 px-3 text-xs": size === "sm",
            "h-10 px-8 py-2": size === "md",
            "h-12 px-8": size === "lg",
          },
          className
        )}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.08 }}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
