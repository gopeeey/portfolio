"use client";

import {
  BlackPlanet,
  Props as BlackPlanetProps,
} from "@/components/BlackPlanet";
import { Stars } from "@/components/models/Stars";
import { PerspectiveCamera, View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type Planet = Parameters<
  Exclude<BlackPlanetProps["setPlanet"], undefined>
>[number];
type PlanetGroup = Parameters<
  Exclude<BlackPlanetProps["setPlanetGroup"], undefined>
>[number];

const INITIAL_ROTATION_SPEED = 0.008;

export default function ExperienceScene() {
  const [planet, setPlanet] = useState<Planet | null>(null);
  const [planetGroup, setPlanetGroup] = useState<PlanetGroup | null>(null);
  const [starGroup, setStarGroup] = useState<THREE.Group | null>(null);
  const rotationSpeed = useRef(INITIAL_ROTATION_SPEED);
  const scrollTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!planetGroup || !planet || !starGroup) return;

      ScrollTrigger.create({
        trigger: "#experience",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        pin: "#experience-scene",
        id: "star-points-rotation",
        onUpdate: (self) => {
          if (scrollTimer.current) clearTimeout(scrollTimer.current);

          rotationSpeed.current = self.getVelocity() / 10000;

          scrollTimer.current = setTimeout(() => {
            gsap.to(rotationSpeed, {
              current: INITIAL_ROTATION_SPEED,
              duration: 0.7,
            });
          }, 700);
        },
      });

      gsap.to(planetGroup.position, {
        x: 1.5,
        y: 0,
        duration: 3,
      });
    });

    return () => ctx.revert();
  }, [planetGroup, planet, starGroup]);

  // Rotation
  useEffect(() => {
    const animate = () => {
      if (!planet || !starGroup) return;

      planet.rotation.z += rotationSpeed.current;
      starGroup.rotation.y += rotationSpeed.current / 30;

      if (planet.rotation.z >= Math.PI * 2) planet.rotation.z = 0;
      if (starGroup.rotation.y >= Math.PI * 2) starGroup.rotation.y = 0;

      requestAnimationFrame(animate);
    };

    animate();
  }, [planet, starGroup]);

  return (
    <View
      className="w-full h-screen top-0 left-0 z-20 pointer-events-none"
      style={{ zIndex: 20 }}
      id="experience-scene"
    >
      <group>
        <PerspectiveCamera fov={20} makeDefault position={[0, 0, 6]} />
        <BlackPlanet setPlanet={setPlanet} setPlanetGroup={setPlanetGroup} />
        <Stars
          minRadius={30}
          maxRadius={70}
          count={5000}
          setStarGroup={setStarGroup}
        />
      </group>
    </View>
  );
}
