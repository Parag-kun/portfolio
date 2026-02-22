import { motion, Variants } from "framer-motion";
import { JourneyExperience } from "../interfaces";

interface JourneyCardProps {
  job: JourneyExperience;
  variants: Variants;
}

export const JourneyCard = ({ job, variants }: JourneyCardProps) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="flex flex-col h-full rounded-3xl p-8 border bg-black/40 text-white shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="px-4 py-2 rounded-md flex items-center justify-center shadow-sm bg-white">
          <img src={job.image} alt={job.company} className="h-7" />
        </div>
        <span className="text-xs font-bold bg-black px-4 py-1 rounded-full">
          {job.period}
        </span>
      </div>

      <h3 className="text-2xl font-bold tracking-tight">{job.company}</h3>
      <p className="font-semibold mb-4 tracking-wide text-sm uppercase">
        {job.role}
      </p>

      <p className="text-base leading-relaxed grow">{job.description}</p>
    </motion.div>
  );
};
