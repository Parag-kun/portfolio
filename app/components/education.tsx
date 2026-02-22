"use client";

import { FaGraduationCap } from "react-icons/fa";
import SectionCard from "./section-card";

export default function Education() {
  return (
    <SectionCard>
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <FaGraduationCap className="mr-3 w-6 h-6" /> Education
      </h2>
      <div className="flex items-center gap-4 bg-black/40 hover:bg-black/60 text-white transition-all backdrop-blur-md p-6 rounded-2xl border border-black/40 shadow-sm">
        <img
          src="/srm-logo.jpeg"
          alt="SRM"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-xl font-bold">BTech in EEE</h3>
          <p className="font-semibold mt-1">SRM University</p>
        </div>
      </div>
    </SectionCard>
  );
}
