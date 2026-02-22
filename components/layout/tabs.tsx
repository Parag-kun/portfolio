"use client";

import { usePathname } from "next/navigation";
import { Tabs as UiTabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  { name: "About", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Journey", path: "/journey" },
  { name: "Skills", path: "/skills" },
];

export default function Tabs() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%] md:w-auto max-w-2xl">
      <UiTabs value={pathname}>
        <TabsList className="bg-white/80 backdrop-blur-xl p-1.5 sm:p-2 rounded-2xl border border-black/10 shadow-lg relative overflow-x-auto overflow-y-hidden hide-scrollbar flex-nowrap md:justify-between w-full">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.path}
              value={tab.path}
              href={tab.path}
              layoutId="global-tabs-indicator"
              className="px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm text-white whitespace-nowrap flex-1 md:flex-none text-center"
              indicatorClassName="bg-black"
              inactiveClassName="text-black/60 hover:text-black"
              activeClassName="font-semibold"
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </UiTabs>
    </div>
  );
}
