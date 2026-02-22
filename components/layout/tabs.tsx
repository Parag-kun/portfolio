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
    <div className="fixed bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto max-w-2xl">
      <UiTabs value={pathname}>
        <TabsList className="bg-white/80 backdrop-blur-xl p-2 rounded-2xl border border-black/10 shadow-lg relative overflow-x-auto overflow-y-hidden hide-scrollbar justify-between">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.path}
              value={tab.path}
              href={tab.path}
              layoutId="global-tabs-indicator"
              className="px-4 md:px-6 py-2.5 text-sm md:text-base text-white whitespace-nowrap"
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
