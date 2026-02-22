import { motion, Variants } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Service } from "../interfaces";

interface ServiceCardProps {
  service: Service;
  variants: Variants;
}

export const ServiceCard = ({ service, variants }: ServiceCardProps) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`flex flex-col h-full rounded-3xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm relative overflow-hidden group bg-black/50`}
    >
      <div
        className={`absolute -right-20 -top-20 w-48 h-48 bg-linear-to-br rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
      />

      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm z-10 bg-white`}
      >
        <service.icon className="w-7 h-7" />
      </div>

      <h3 className="text-2xl font-bold mb-4 text-white z-10">
        {service.title}
      </h3>

      <p className="text-white text-base leading-relaxed mb-8 grow z-10">
        {service.description}
      </p>

      {/* <div className="mt-auto flex items-center text-sm font-semibold cursor-pointer w-max uppercase tracking-wider relative group/btn z-10">
        <span className="text-white">Learn More</span>
        <FaArrowRight
          className={`ml-2 w-4 h-4 text-white group-hover/btn:translate-x-1 group-hover/btn:text-zinc-300 transition-all`}
        />
      </div> */}
    </motion.div>
  );
};
