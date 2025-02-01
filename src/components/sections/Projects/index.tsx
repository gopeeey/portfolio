"use client";

import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/ui/Section";
import ProjectCard from "./ProjectCard";
import ProjectsScene from "./Scene";

const sectionId = "projects";

export default function Projects() {
  return (
    <Section
      id={sectionId}
      className="bg-background z-10 overflow-hidden white-selection"
    >
      <div className="absolute w-screen top-0 left-0 overflow-x-hidden">
        <ProjectsScene />
      </div>

      <SectionTitle
        sectionId={sectionId}
        header="Projects"
        subheader="My Creative Playground"
        animationDelay={0}
        variant="white"
        marginTop={0}
      />

      <div
        className="relative z-30 mt-[34rem] md:mt-[40rem] md:grid md:grid-cols-2 2xl:grid-cols-3 gap-14"
        id="projects_list_container"
      >
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
