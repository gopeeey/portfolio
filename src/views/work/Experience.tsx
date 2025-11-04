"use client";

import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/ui/Section";
import { roles } from "@/lib/cvData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import RoleCard from "./RoleCard";

const sectionId = "experience";

export default function Experience() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Role cards
      roles.forEach((role) => {
        const roleTimeline = gsap.timeline({ default: { duration: 1 } });
        ScrollTrigger.create({
          animation: roleTimeline,
          trigger: `#role_container_${role.id}`,
          start: "top 20%",
          end: "bottom 40%",
          scrub: 1.5,
          pin: `#role_${role.id}`,
          id: `role_${role.id}-trigger`,
        });

        roleTimeline.to(`.role_header_${role.id}`, { x: 0, opacity: 1 }, 0);

        roleTimeline.to(`.role_text_${role.id}`, {
          y: 0,
          opacity: 0.45,
          // duration: 2,
        });

        roleTimeline.to(
          `.role_details_${role.id}`,
          { y: 0, opacity: 1 },
          ">-25%"
        );

        roleTimeline.to(
          `.role_${role.id}_skills`,
          { opacity: 1, y: 0, stagger: 0.1 },
          ">-55%"
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section id={sectionId}>
      <SectionTitle
        sectionId={sectionId}
        header="Experience"
        subheader="Where Skills Meet Story"
        animationDelay={1.5}
        className="mt-80"
        useScroll={false}
      />

      <div className="mt-140">
        {roles.map((role) => (
          <div
            key={role.id}
            className="sticky_container h-[150vh] mb-160"
            id={`role_container_${role.id}`}
          >
            <RoleCard role={role} className="relative mb-40 z-30" />
          </div>
        ))}
      </div>
    </Section>
  );
}
