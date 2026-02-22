"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/tailwind";

interface TabsContextType {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

function useTabs() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider");
  }
  return context;
}

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  className,
}: {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const [internalValue, setInternalValue] = React.useState(defaultValue || "");

  const activeValue = value !== undefined ? value : internalValue;
  const handleValueChange = React.useCallback(
    (newValue: string) => {
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    },
    [onValueChange, value],
  );

  return (
    <TabsContext.Provider
      value={{ value: activeValue, onValueChange: handleValueChange }}
    >
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-center items-center gap-1 relative",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({
  value,
  children,
  className,
  activeClassName,
  inactiveClassName,
  layoutId = "tabs-indicator",
  indicatorClassName = "bg-black dark:bg-white",
  href,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  layoutId?: string;
  indicatorClassName?: string;
  href?: string;
}) {
  const { value: activeValue, onValueChange } = useTabs();
  const isActive = activeValue === value;

  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center w-full h-full">
        {children}
      </span>
      {isActive && (
        <motion.div
          layoutId={layoutId}
          className={cn(
            "absolute inset-0 z-0 rounded-xl shadow-md",
            indicatorClassName,
          )}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </>
  );

  const classes = cn(
    "relative rounded-xl outline-none font-medium transition-colors z-10 flex items-center justify-center",
    className,
    isActive ? activeClassName : inactiveClassName,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={() => onValueChange(value)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onValueChange(value)}
      className={classes}
    >
      {content}
    </button>
  );
}

export function TabsContent({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { value: activeValue } = useTabs();

  if (activeValue !== value) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}
