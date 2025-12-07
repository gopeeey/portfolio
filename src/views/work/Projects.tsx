"use client";

import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/ui/Section";
import { projects } from "@/lib/cvData";
import ProjectCard from "./ProjectCard";

const sectionId = "projects";

export default function Projects() {
  return (
    <Section id={sectionId} className="bg-background z-20 overflow-hidden">
      {/* <div className="absolute w-screen top-0 left-0 overflow-x-hidden">
        <ProjectsScene />
      </div> */}

      <SectionTitle
        sectionId={sectionId}
        header="Projects"
        subheader="My Creative Playground"
        animationDelay={0}
        // variant="white"
      />

      <div
        className="relative z-30 mt-136  md:mt-160 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 2xl:gap-y-40 overflow-hidden"
        id="projects_list_container"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
