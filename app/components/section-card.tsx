import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function SectionCard({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-black/40 rounded-3xl p-8 shadow-sm border border-black/40 hover:shadow-xl transition-shadow"
    >
      {children}
    </motion.div>
  );
}
