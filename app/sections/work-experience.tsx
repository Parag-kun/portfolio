"use client";

import TypingText from "@/components/animations/typing";
import { useScreenSize } from "@/hooks/window";
import { luckiestGuy } from "@/utils/fonts";
import { cn } from "@/utils/tailwind";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "Dec 2022",
    title: "Software Engineer",
    organization: "Pocketly",
    organizationLink: "https://pocketly.in/",
    organizationLogo: "/pocketly.png",
    description: "Joined my first startup",
  },
  {
    year: "July 2023",
    title: "MERN Stack Developer",
    organization: "Techisor",
    organizationLink: "https://techisor.com/",
    organizationLogo: "/techisor.png",
    description: "Worked on a CRM product from scratch",
  },
  {
    year: "May 2024",
    title: "Software Engineer",
    organization: "Roxiler Systems",
    organizationLink: "https://roxiler.com/",
    organizationLogo: "/roxiler-systems.webp",
    description: "Worked on interesting projects",
  },
  {
    year: "Nov 2024",
    title: "MERN Stack Developer",
    organization: "Quest GLT",
    organizationLink: "https://questglt.com/",
    organizationLogo: "/quest-glt.png",
    description: "Worked on blockchain projects",
  },
];

export default function WorkExperience() {
  const screenSize = useScreenSize();

  return (
    <div className="relative py-12 px-4 bg-white z-30 rounded-2xl overflow-hidden">
      <div className="absolute inset-4 bg-[url('/journey.jpg')] bg-cover bg-center bg-no-repeat blur-md opacity-80 scale-105" />

      <TypingText
        text="Check out my professional journey"
        className={cn(
          "relative text-lg md:text-xl lg:text-3xl text-center z-10 mt-8",
          luckiestGuy.className
        )}
      />

      <div className="mt-16 relative max-w-6xl mx-auto">
        <div className="absolute left-2 md:left-1/2 top-0 h-full w-px bg-white md:-translate-x-1/2" />

        <div className="space-y-16">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0 && screenSize?.width > 768;

            return (
              <div key={index} className="relative flex">
                {/* Left side */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className={`w-0 md:w-1/2 ${isLeft ? "pr-8 text-right" : ""}`}
                >
                  {isLeft && <TimelineCard {...item} isLeft={isLeft} />}
                </motion.div>

                {/* Center dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-black border-3 border-white" />
                </div>

                {/* Right side */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className={`w-full md:w-1/2 ${!isLeft ? "pl-8" : ""}`}
                >
                  {!isLeft && <TimelineCard {...item} isLeft={isLeft} />}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TimelineCard({
  year,
  title,
  description,
  organization,
  organizationLink,
  organizationLogo,
  isLeft,
}: {
  year: string;
  title: string;
  description: string;
  organization: string;
  organizationLink: string;
  organizationLogo: string;
  isLeft: boolean;
}) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <span className="text-xs md:text-sm text-gray-500">{year}</span>
      <div
        className={cn("flex items-center justify-between", {
          "flex-row-reverse": !isLeft,
        })}
      >
        <img
          className="h-8 md:h-12"
          src={organizationLogo}
          alt={`${organization} logo`}
        />
        <div
          className={cn("flex items-center flex-wrap", {
            "justify-end": isLeft,
          })}
        >
          <h3 className="text-xs md:text-base lg:text-lg font-semibold mr-2">
            {title}
          </h3>
          <a
            className="text-gray-500 hover:text-gray-600 transition-colors font-semibold text-xs md:text-sm lg:text-base"
            href={organizationLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            @ {organization}
          </a>
        </div>
      </div>
      <p className="text-xs md:text-sm lg:text-base text-gray-600">
        {description}
      </p>
    </div>
  );
}
