import Section from "@/components/ui/Section";
import SkillsProjectsScene from "./Scene";

export default function SkillsAndProjects() {
  return (
    <div id="skills_projects_container" className="relative">
      <div className="absolute w-full top-0 left-0 overflow-x-hidden">
        <SkillsProjectsScene />
      </div>

      <Section id="skills" className="bg-background z-10  h-[1500vh] ">
        Hello world this is the skills section
      </Section>

      <Section id="projects" className="bg-background z-10">
        Hello world this is the skills projects scene
      </Section>
    </div>
  );
}
