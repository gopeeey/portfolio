"use client";

import Section from "@/components/ui/Section";
import SkillsScene from "./Scene";

export default function Skills() {
  return (
    <Section id="skills" className="bg-background z-10  h-[1500vh] ">
      <div className="absolute w-full top-0 left-0 overflow-x-hidden">
        <SkillsScene />
      </div>
    </Section>
  );
}
