"use client";

import { useEffect, useState } from "react";

import Hero from "./sections/hero";
import Trailer from "./sections/trailer";
import WorkExperience from "./sections/work-experience";
import Skillset from "./sections/skillset";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  return (
    <main className="relative">
      <section className="sticky top-0">
        <Trailer />
        <Hero />
      </section>
      {show && (
        <>
          <Projects />
          <WorkExperience />
          {/* <Skillset /> */}
          {/* <Contact /> */}
          <Footer />
        </>
      )}
    </main>
  );
}
