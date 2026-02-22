import { FaChartLine, FaCoffee } from "react-icons/fa";
import { Project } from "./interfaces";

export const projectsData: Project[] = [
  {
    title: "Cryptoghost",
    image: "/cryptoghost.png",
    description:
      "A comprehensive cryptocurrency tracking and analysis platform. It provides real-time market data, portfolio management, and predictive insights to help users make informed trading decisions.",
    icon: FaChartLine,
    link: "https://cryptoghost.ai/",
    tags: ["Remix", "Typescript", "Tailwind CSS", "Crypto API", "Stripe"],
  },
  {
    title: "Cafefoodpool",
    image: "/cafefoodpool.png",
    description:
      "A website built for a local café purely for marketing serves as a digital storefront that showcases the café’s brand, menu, ambiance, and unique offerings. It helps attract new customers, promote special events or seasonal items, and strengthen customer engagement through visually appealing content and easy contact access.",
    icon: FaCoffee,
    link: "https://cafefoodpool.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Framer motion"],
  },
];
