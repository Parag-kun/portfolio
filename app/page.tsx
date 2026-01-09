"use client";

import Hero from "./sections/hero";
import Contact from "./sections/contact";
import Projects from "./sections/projects";
import WorkExperience from "./sections/work-experience";
import Skillset from "./sections/skillset";
import Trailer from "./sections/trailer";
import BlurredBallsBackground from "@/components/animations/balls-bg";
import Footer from "./sections/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  return (
    <main className="relative">
      <BlurredBallsBackground />
      <section>
        <Trailer />
        <Hero />
      </section>
      {show && (
        <>
          {/* <Projects />
          <WorkExperience />
          <Skillset />
          <Contact /> */}
          <Footer />
        </>
      )}
    </main>
  );
}
