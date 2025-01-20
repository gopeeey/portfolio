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
    console.log("Running planet animation");

    const tl = gsap.timeline({ defaults: { duration: 10 } });
    const trigger = ScrollTrigger.create({
      animation: tl,
      trigger: "#experience",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5,
      pin: "#experience-scene",
    });

    // This animation does nothing but help me keep the
    // timeline at 10 seconds
    tl.to("#experience-container", { opacity: "1" }, 0);

    tl.to(planet.rotation, { z: Math.PI * 10 }, 0);

    tl.to(
      planetGroup.position,
      {
        x: 1.5,
        y: 0,
        duration: 3,
      },
      0
    );

    tl.to(
      ".header_letter",
      {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        ease: "back.out(3)",
        duration: 2,
      },
      ">"
    );

    tl.to(
      ".experience-subtext",
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      ">-55%"
    );

    return () => trigger.kill();
  }, [planetGroup]);

  return (
    <Section id="experience" className="">
      <ExperienceScene
        setPlanet={(p) => setPlanet(p)}
        setPlanetGroup={(pg) => setPlanetGroup(pg)}
      />

      <div className="relative z-30 mt-[120rem]" id="experience-container">
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

      <div className="mt-[35rem]">
        {roles.map((role) => (
          <RoleCard key={role.companyName} role={role} className="mb-[10rem]" />
        ))}
      </div>
    </Section>
  );
}
