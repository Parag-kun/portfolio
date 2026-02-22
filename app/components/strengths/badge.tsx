import { FaCheckCircle } from "react-icons/fa";

interface BadgeProps {
  strength: string;
}

export default function Badge({ strength }: BadgeProps) {
  return (
    <span className="px-4 py-2 bg-black/40 hover:bg-black/60 text-white rounded-full font-medium text-sm border border-black/40 flex items-center shadow-sm">
      <FaCheckCircle className="mr-2 w-3.5 h-3.5" />
      {strength}
    </span>
  );
}
