import { motion, Variants } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "../interfaces";

interface ProjectCardProps {
  project: Project;
  variants: Variants;
}

export const ProjectCard = ({ project, variants }: ProjectCardProps) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="flex flex-col h-full rounded-3xl overflow-hidden border bg-black/40 text-white shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      <img src={project.image} alt={project.title} />

      <div className="p-8 flex flex-col grow">
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

        <p className="text-base leading-relaxed mb-6 grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white text-black rounded-full font-medium text-xs shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t pt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Visit Project <FaExternalLinkAlt className="ml-2 w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
