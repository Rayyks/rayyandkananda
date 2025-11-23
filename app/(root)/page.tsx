import AboutMe from "@/components/about-me";
import { DotScreenShader } from "@/components/dot-shader-background";
import FeaturedProjects from "@/components/featured-projects";
import Hero from "@/components/hero";
import ProjectStudy from "@/components/project-study";

export default function Home() {
  return (
    <>
      <div className="h-svh w-screen flex flex-col gap-8 items-center justify-center relative">
        <div className="absolute inset-0">
          <DotScreenShader />
        </div>
        <Hero />
      </div>
      <ProjectStudy />
      <FeaturedProjects />
      <AboutMe />
    </>
  );
}
