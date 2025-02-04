"use client";

import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/ui/Section";
import { projects } from "@/lib/cvData";
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
      />

      <div
        className="relative z-30 mt-[34rem] md:mt-[40rem] md:grid md:grid-cols-2 2xl:grid-cols-3 gap-14"
        id="projects_list_container"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
