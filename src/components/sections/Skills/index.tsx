"use client";

import Section from "@/components/ui/Section";
import SkillsScene from "./Scene";

export default function SkillsAndProjects() {
  return (
    <Section id="skills" className="bg-background z-10  h-[1500vh] ">
      <div className="absolute w-full top-0 left-0">
        <SkillsScene />
      </div>
    </Section>
  );
}
