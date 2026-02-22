"use client";

import dynamic from "next/dynamic";

const BlurredBallsBackground = dynamic(
  () => import("@/components/animations/balls-bg"),
  { ssr: false },
);

export default function BackgroundWrapper() {
  return <BlurredBallsBackground />;
}
