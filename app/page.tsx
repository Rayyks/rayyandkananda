import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Education from "@/components/education";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <SectionDivider />
      <Intro />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
