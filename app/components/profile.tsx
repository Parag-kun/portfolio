"use client";

import { motion } from "framer-motion";

const isAvailable = true;

export default function Profile() {
  return (
    <div className="relative">
      <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-2 bg-black dark:bg-white shadow-xl">
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
          <img
            src="/parag-profile.jpg"
            alt="Parag Bokde"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {isAvailable && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 z-10"
        >
          <div className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
          <span className="text-xs font-bold text-green-500 whitespace-nowrap">
            Available for projects
          </span>
        </motion.div>
      )}
    </div>
  );
}
