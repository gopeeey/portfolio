"use client";

import Section from "@/components/ui/Section";
import { roles } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import { Props as BlackPlanetProps } from "./BlackPlanet";
import RoleCard from "./RoleCard";
import ExperienceScene from "./Scene";

type Planet = Parameters<BlackPlanetProps["setPlanet"]>[number];
type PlanetGroup = Parameters<BlackPlanetProps["setPlanetGroup"]>[number];

export default function Experience() {
  const [planet, setPlanet] = useState<Planet | null>(null);
  const [planetGroup, setPlanetGroup] = useState<PlanetGroup | null>(null);

  useGSAP(() => {
    if (!planetGroup || !planet) return;

    gsap.to(planet.rotation, {
      z: Math.PI * 13,
      scrollTrigger: {
        trigger: "#experience",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        pin: "#experience-scene",
        id: "black-planet-rotation",
      },
    });

    const introTimeline = gsap.timeline({ defaults: { duration: 10 } });
    ScrollTrigger.create({
      animation: introTimeline,
      trigger: "#experience",
      start: "top top",
      end: "50% bottom",
      scrub: 2,
      id: "experience-intro",
    });

    // This animation does nothing but help me keep the
    // timeline at 10 seconds
    introTimeline.to("#experience-container", { opacity: "1" }, 0);

    introTimeline.to(
      planetGroup.position,
      {
        x: 1.5,
        y: 0,
        duration: 3,
      },
      0
    );

    introTimeline.to(
      ".header_letter",
      {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        ease: "back.out(3)",
        duration: 2,
      },
      ">-12%"
    );

    introTimeline.to(
      ".experience-subtext",
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      ">-55%"
    );

    // Role cards
    roles.forEach((role) => {
      const roleTimeline = gsap.timeline({ default: { duration: 1 } });
      ScrollTrigger.create({
        animation: roleTimeline,
        trigger: `#role_container_${role.id}`,
        start: "top 20%",
        end: "bottom 40%",
        scrub: 2.5,
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
  }, [planetGroup]);

  return (
    <Section id="experience">
      <div className="absolute w-full top-0 left-0 overflow-x-hidden">
        <ExperienceScene
          setPlanet={(p) => setPlanet(p)}
          setPlanetGroup={(pg) => setPlanetGroup(pg)}
        />
      </div>

      <div className="sticky_container mt-[60rem] h-[40vh]">
        <div className="sticky top-[20rem] z-30" id="experience-container">
          <h1
            className="font-montserrat text-[2.8rem] md:text-[3.4rem] xl:text-[5rem]"
            id="experience-header"
          >
            {"Experience".split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block header_letter opacity-0 scale-0"
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="experience-subtext xl:text-[1.4rem] opacity-0 translate-y-4">
            Where Skills Meet Story
          </p>
        </div>
      </div>

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
