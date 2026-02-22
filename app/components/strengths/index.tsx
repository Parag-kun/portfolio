"use client";

import { FaStar } from "react-icons/fa";

import SectionCard from "../section-card";
import Badge from "./badge";

export default function Strengths() {
  return (
    <SectionCard>
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <FaStar className="mr-3 w-6 h-6" /> Strengths
      </h2>
      <div className="flex flex-wrap gap-3">
        {["Resilient", "Conscientious", "Easy to work with"].map((strength) => (
          <Badge key={strength} strength={strength} />
        ))}
      </div>
    </SectionCard>
  );
}
