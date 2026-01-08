import Hero from "./sections/hero";
import Contact from "./sections/contact";
import Projects from "./sections/projects";
import WorkExperience from "./sections/work-experience";
import Skillset from "./sections/skillset";
import Trailer from "./sections/trailer";

export default function Home() {
  return (
    <main className="relative">
      <section className="sticky top-0">
        <Trailer />
        <Hero />
      </section>
      <Projects />
      <WorkExperience />
      <Skillset />
      <Contact />
    </main>
  );
}
