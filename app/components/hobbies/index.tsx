"use client";

import { FaPalette, FaCar, FaUtensils } from "react-icons/fa";

import HobbyBadge from "./hobby-badge";
import SectionCard from "../section-card";

export default function Hobbies() {
  return (
    <SectionCard>
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <FaPalette className="mr-3 w-6 h-6" /> Hobbies
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <HobbyBadge icon={FaPalette} label="Drawing" />
        <HobbyBadge icon={FaCar} label="Driving" />
        <HobbyBadge icon={FaUtensils} label="Cooking" />
      </div>
    </SectionCard>
  );
}
