import { ReactNode } from "react";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiRemix,
  SiSolid,
  SiExpress,
  SiNestjs,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiLangchain,
  SiMlflow,
} from "react-icons/si";
import { SkillsData, Category } from "./interfaces";
import { FallbackIcon } from "./components/fallback-icon";

export const skillsData: SkillsData = {
  Frontend: [
    { name: "ReactJs", icon: <FaReact className="w-12 h-12 text-[#61DAFB]" /> },
    {
      name: "NextJs",
      icon: <SiNextdotjs className="w-12 h-12 text-black dark:text-white" />,
    },
    {
      name: "Remix",
      icon: <SiRemix className="w-12 h-12 text-black dark:text-white" />,
    },
    {
      name: "Solidjs",
      icon: (
        <SiSolid className="w-12 h-12 text-[#2C4F7C] dark:text-[#446b9e]" />
      ),
    },
  ],
  Backend: [
    { name: "Nodejs", icon: <FaNodeJs className="w-12 h-12 text-[#339933]" /> },
    { name: "Bun", icon: <FallbackIcon letter="B" /> },
    {
      name: "Expressjs",
      icon: <SiExpress className="w-12 h-12 text-black dark:text-white" />,
    },
    { name: "Nestjs", icon: <SiNestjs className="w-12 h-12 text-[#E0234E]" /> },
    { name: "Elysiajs", icon: <FallbackIcon letter="E" /> },
    { name: "Python", icon: <FaPython className="w-12 h-12 text-[#3776AB]" /> },
    {
      name: "FastAPI",
      icon: <SiFastapi className="w-12 h-12 text-[#009688]" />,
    },
  ],
  Database: [
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-12 h-12 text-[#47A248]" />,
    },
    {
      name: "Postgres",
      icon: <SiPostgresql className="w-12 h-12 text-[#4169E1]" />,
    },
    { name: "Redis", icon: <SiRedis className="w-12 h-12 text-[#DC382D]" /> },
    { name: "Chroma", icon: <FallbackIcon letter="C" /> },
  ],
  GenAI: [
    {
      name: "Langchain",
      icon: <SiLangchain className="w-12 h-12 text-black dark:text-white" />,
    },
    { name: "Langgraph", icon: <FallbackIcon letter="L" /> },
    { name: "LlamaIndex", icon: <FallbackIcon letter="L" /> },
    { name: "OpenRouter", icon: <FallbackIcon letter="O" /> },
  ],
  ML: [
    { name: "Python", icon: <FaPython className="w-12 h-12 text-[#3776AB]" /> },
    {
      name: "NumPy",
      icon: (
        <SiNumpy className="w-12 h-12 text-[#013243] dark:text-[#4D77CF]" />
      ),
    },
    {
      name: "Pandas",
      icon: <SiPandas className="w-12 h-12 text-[#150458] dark:text-white" />,
    },
    {
      name: "PyTorch",
      icon: <SiPytorch className="w-12 h-12 text-[#EE4C2C]" />,
    },
    {
      name: "Scikit-Learn",
      icon: <SiScikitlearn className="w-12 h-12 text-[#F7931E]" />,
    },
  ],
  "Devops + MLops": [
    { name: "Docker", icon: <FaDocker className="w-12 h-12 text-[#2496ED]" /> },
    { name: "AWS", icon: <FaAws className="w-12 h-12 text-[#FF9900]" /> },
    { name: "MLflow", icon: <SiMlflow className="w-12 h-12 text-[#0194E2]" /> },
  ],
};

export const categories = Object.keys(skillsData) as Category[];
