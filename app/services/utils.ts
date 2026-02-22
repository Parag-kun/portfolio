import { FaLaptopCode, FaCloud, FaBrain } from "react-icons/fa";
import { Service } from "./interfaces";

export const servicesData: Service[] = [
  {
    title: "Website Development",
    description:
      "Designing and developing fast, responsive, and conversion-focused websites tailored to business goals. Includes UI/UX design, front-end and back-end development, performance optimization, SEO best practices, and scalable architecture for long-term growth.",
    icon: FaLaptopCode,
  },
  {
    title: "SAAS Development",
    description:
      "Building secure, scalable Software-as-a-Service platforms from concept to launch. Covers multi-tenant architecture, subscription systems, authentication, APIs, cloud deployment, performance optimization, and ongoing feature iteration to support product growth.",
    icon: FaCloud,
  },
  {
    title: "AI Product Development",
    description:
      "Developing intelligent, data-driven applications powered by machine learning and modern AI technologies. Includes AI feature integration (LLMs, automation, analytics), model deployment, prompt engineering, workflow automation, and building production-ready AI solutions that drive measurable business value.",
    icon: FaBrain,
  },
];
