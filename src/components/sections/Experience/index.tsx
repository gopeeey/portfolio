"use client";

import Section from "@/components/ui/Section";
import { roles } from "@/lib/data";
import RoleCard from "./RoleCard";
import ExperienceScene from "./Scene";

export default function Experience() {
  // useGSAP(() => {
  //   gsap.to("#experience-header", {
  //     opacity: 1,
  //     x: 23,
  //     scrollTrigger: {
  //       trigger: "#experience",
  //       start: "top top",
  //       end: "+=300",
  //       scrub: true,
  //       toggleActions: "play none reverse none",
  //     },
  //   });
  // });

  return (
    <Section id="experience" className="">
      <ExperienceScene />

      <div className="relative z-30 mt-[20rem] mb-[29rem]">
        <h1
          className="font-montserrat text-[2.8rem] md:text-[3.4rem] xl:text-[5rem] opacity-0"
          id="experience-header"
        >
          Experience
        </h1>
        <p className="xl:text-[1.4rem]">Where Skills Meet Story</p>
      </div>

      {roles.map((role) => (
        <RoleCard key={role.companyName} role={role} className="mb-[6rem]" />
      ))}
    </Section>
  );
}
