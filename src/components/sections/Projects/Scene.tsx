"use client";

import { PerspectiveCamera, View } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useState } from "react";
import * as THREE from "three";
import StarsSphere from "../Skills/StarsSphere";

export default function ProjectsScene() {
  const [stars, setStars] = useState<THREE.Group | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (stars) {
        gsap.to(stars.rotation, {
          x: 1.3 * Math.PI,
          ease: "none",
          scrollTrigger: {
            trigger: "#projects",
            start: "top top",
            end: "bottom bottom",
            pin: "#projects_scene",
            scrub: 0.5,
          },
        });
      }
    });

    return () => ctx.revert();
  }, [stars]);
  return (
    <View
      className="w-screen h-screen absolute left-0 z-20 pointer-events-none"
      style={{ zIndex: 20 }}
      id="projects_scene"
    >
      <PerspectiveCamera position={[0, 0, 0]} fov={30} makeDefault />
      <StarsSphere
        ref={(node) => {
          if (node) setStars(node);
        }}
        minRadius={4}
        maxRadius={10}
        count={3000}
      />
      <fogExp2 attach={"fog"} color="black" density={0.12} />
    </View>
  );
}
