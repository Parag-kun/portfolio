"use client";

import { useEffect, useState } from "react";

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState(window?.screen);

  useEffect(() => {
    setScreenSize(window?.screen);

    const handleResize = () => {
      setScreenSize(window?.screen);
    };

    window?.addEventListener("resize", handleResize);

    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
}
