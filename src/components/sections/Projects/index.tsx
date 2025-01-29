"use client";

import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/ui/Section";
import ProjectCard from "./ProjectCard";
import ProjectsScene from "./Scene";

const sectionId = "projects";

export default function Projects() {
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.to(".project_card", {
  //       y: 0,
  //       opacity: 1,
  //       ease: "power2.inOut",
  //       stagger: 0.5,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: "#projects_list_container",
  //         start: "top 95%",
  //         end: "85% bottom",
  //         scrub: 1.5,
  //       },
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);
  return (
    <Section
      id={sectionId}
      className="bg-background z-10 overflow-hidden white-selection"
    >
      <div className="absolute w-full top-0 left-0">
        <ProjectsScene />
      </div>

      {/* <div className="mt-[10rem] mb-[20rem] relative z-30">
        <h1 className="text-foreground text-[2.8rem] md:text-[3.4rem] xl:text-[5rem]">
          Projects
        </h1>

        <p className="xl:text-[1.4rem] text-foreground">
          My Creative Playground
        </p>
      </div> */}

      <div className="mb-[60rem]">
        <SectionTitle
          sectionId={sectionId}
          header="Projects"
          subheader="My Creative Playground"
          animationDelay={0}
          variant="white"
          marginTop={0}
        />
      </div>

      <div
        className="relative z-30 md:grid md:grid-cols-2 2xl:grid-cols-3 gap-14"
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
