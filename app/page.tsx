import Hero from "./sections/hero";
import Contact from "./sections/contact";
import Projects from "./sections/projects";
import WorkExperience from "./sections/work-experience";
import Skillset from "./sections/skillset";
import Trailer from "./sections/trailer";
import BlurredBallsBackground from "@/components/animations/balls-bg";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <BlurredBallsBackground />
      <section>
        <Trailer />
        <Hero />
      </section>
      {/* <Projects />
      <WorkExperience />
      <Skillset />
      <Contact /> */}
      <Footer />
    </main>
  );
}
