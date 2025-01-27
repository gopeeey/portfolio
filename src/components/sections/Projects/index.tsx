"use client";

import Section from "@/components/ui/Section";
import ProjectCard from "./ProjectCard";
import ProjectsScene from "./Scene";

export default function Projects() {
  return (
    <Section
      id="projects"
      className="bg-background z-10 overflow-hidden white-selection"
    >
      <div className="absolute w-full top-0 left-0">
        <ProjectsScene />
      </div>

      <h1 className="text-foreground text-5xl xl:text-6xl 2xl:text-7xl mt-[10rem] mb-[20rem]">
        Projects
      </h1>

      <div className="relative z-30 md:grid md:grid-cols-2 2xl:grid-cols-3 gap-14 ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </Section>
  );
}
