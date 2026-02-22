import { IconType } from "react-icons";

interface HobbyBadgeProps {
  icon: IconType;
  label: string;
}

export default function HobbyBadge({ icon: Icon, label }: HobbyBadgeProps) {
  return (
    <div className="bg-black/30 hover:bg-black/50 text-white flex flex-col items-center justify-center p-4 rounded-2xl transition-all hover:-translate-y-1">
      <Icon className="w-8 h-8 mb-2" />
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}
