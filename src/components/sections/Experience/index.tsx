"use client";

import { Props as BlackPlanetProps } from "@/components/BlackPlanet";
import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/ui/Section";
import { roles } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import RoleCard from "./RoleCard";
import ExperienceScene from "./Scene";

type Planet = Parameters<
  Exclude<BlackPlanetProps["setPlanet"], undefined>
>[number];
type PlanetGroup = Parameters<
  Exclude<BlackPlanetProps["setPlanetGroup"], undefined>
>[number];

const sectionId = "experience";

export default function Experience() {
  const [planet, setPlanet] = useState<Planet | null>(null);
  const [planetGroup, setPlanetGroup] = useState<PlanetGroup | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (!planetGroup || !planet) return;

      gsap.to(planet.rotation, {
        z: Math.PI * 13,
        scrollTrigger: {
          trigger: "#experience",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          pin: "#experience-scene",
          id: "black-planet-rotation",
        },
      });

      gsap.to(planetGroup.position, {
        x: 1.5,
        y: 0,
        duration: 3,
        scrollTrigger: {
          trigger: "#experience",
          start: "top top",
          end: "23% bottom",
          scrub: 1.5,
          id: "experience-intro",
        },
      });

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
  }, [planetGroup]);

  return (
    <Section id={sectionId}>
      <div className="absolute w-full top-0 left-0 overflow-x-hidden">
        <ExperienceScene
          setPlanet={(p) => setPlanet(p)}
          setPlanetGroup={(pg) => setPlanetGroup(pg)}
        />
      </div>

      <SectionTitle
        sectionId={sectionId}
        header="Experience"
        subheader="Where Skills Meet Story"
        animationDelay={1.5}
      />

      <div className="mt-[35rem]">
        {roles.map((role) => (
          <div
            key={role.id}
            className="sticky_container h-[150vh] mb-[40rem]"
            id={`role_container_${role.id}`}
          >
            <RoleCard role={role} className="relative mb-[10rem] z-[30]" />
          </div>
        ))}
      </div>
    </Section>
  );
}
