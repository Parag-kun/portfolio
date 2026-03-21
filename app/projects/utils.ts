import { FaChartLine, FaCoffee, FaGlassMartiniAlt } from "react-icons/fa";
import { Project } from "./interfaces";

export const projectsData: Project[] = [
  {
    title: "The Bombae Bar",
    image: "/thebombaebar.png",
    description:
      "A premium, motion-driven experience featuring an immersive hero section with scroll-synced, interactive vintage artifacts like coins and stamps, and a sophisticated adaptive overlay system that transitions from a desktop sidebar to a mobile slider. Polished with refined micro-animations and custom mobile swipe galleries, the entire layout is powered by Framer Motion for a buttery-smooth user journey across all devices.",
    icon: FaGlassMartiniAlt,
    link: "#",
    tags: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
  },
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
    tags: ["Next.js", "Tailwind CSS", "Framer motion", "TypeScript"],
  },
];
