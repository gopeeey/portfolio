"use client";

import { Props as BlackPlanetProps } from "@/components/BlackPlanet";
import { Stars } from "@/components/models/Stars";
import { PerspectiveCamera, View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import RingedPlanet from "./RingedPlanet";

type Planet = Parameters<
  Exclude<BlackPlanetProps["setPlanet"], undefined>
>[number];
type PlanetGroup = Parameters<
  Exclude<BlackPlanetProps["setPlanetGroup"], undefined>
>[number];

const INITIAL_ROTATION_SPEED = 0.008;

export default function ExperienceScene() {
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  const [planet, setPlanet] = useState<Planet | null>(null);
  const [planetGroup, setPlanetGroup] = useState<PlanetGroup | null>(null);
  const [ring1Group, setRing1Group] = useState<THREE.Group | null>(null);
  const [ring2Group, setRing2Group] = useState<THREE.Group | null>(null);
  const [ring3Group, setRing3Group] = useState<THREE.Group | null>(null);
  const [starGroup, setStarGroup] = useState<THREE.Group | null>(null);
  const rotationSpeed = useRef(INITIAL_ROTATION_SPEED);
  const scrollTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!planetGroup || !planet || !starGroup || !camera) return;

      console.log(planet.material);

      ScrollTrigger.create({
        trigger: "#work",
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

      gsap.to(camera.rotation, { y: 0, duration: 3 });

      gsap.fromTo(
        camera.position,
        { z: 6, x: 0 },
        {
          z: 8,
          x: -4.5,
          scrollTrigger: {
            trigger: "#projects",
            start: "top top",
            end: "top+=30% top",
            scrub: 1.5,
            id: "camera-zoom",
            markers: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [planetGroup, planet, starGroup, camera]);

  // Rotation
  useEffect(() => {
    const animate = () => {
      if (!planet || !starGroup || !ring1Group || !ring2Group || !ring3Group)
        return;

      planet.rotation.z += rotationSpeed.current;
      starGroup.rotation.y += rotationSpeed.current / 30;

      const ringSpeed = rotationSpeed.current / 3;
      ring1Group.rotation.y += ringSpeed / 12;
      ring2Group.rotation.y += ringSpeed / 6;
      ring3Group.rotation.y += ringSpeed / 3;

      if (planet.rotation.z >= Math.PI * 2) planet.rotation.z = 0;
      if (starGroup.rotation.y >= Math.PI * 2) starGroup.rotation.y = 0;
      if (ring1Group.rotation.y >= Math.PI * 2) ring1Group.rotation.y = 0;
      if (ring2Group.rotation.y >= Math.PI * 2) ring2Group.rotation.y = 0;
      if (ring3Group.rotation.y >= Math.PI * 2) ring3Group.rotation.y = 0;

      requestAnimationFrame(animate);
    };

    animate();
  }, [planet, starGroup, ring1Group, ring2Group, ring3Group]);

  return (
    <View
      className="w-full h-screen top-0 left-0 z-20 pointer-events-none"
      style={{ zIndex: 20 }}
      id="experience-scene"
    >
      <group>
        <PerspectiveCamera
          fov={20}
          makeDefault
          rotation={[0, Math.PI / 4, 0]}
          position={[0, 0, 30]}
          ref={(node) => {
            if (node) setCamera(node);
          }}
        />
        {/* <PerspectiveCamera fov={20} makeDefault position={[0, 0, 20]} /> */}

        <directionalLight position={[0, 0, 10]} intensity={3} castShadow />

        <RingedPlanet
          planetProps={{ setPlanet }}
          ringProps={{
            setRing1Group,
            setRing2Group,
            setRing3Group,
          }}
          groupProps={{
            position: [1.5, 0, 0],
            rotation: [Math.PI / 20, 0, 0],
          }}
          setGroup={setPlanetGroup}
        />
        <Stars
          minRadius={30}
          maxRadius={70}
          count={5000}
          setStarGroup={setStarGroup}
        />

        <ambientLight intensity={0.5} />
      </group>
    </View>
  );
}
