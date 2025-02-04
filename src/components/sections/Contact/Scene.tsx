"use client";

import { WhitePlanet } from "@/components/WhitePlanet";
import { scaleNumber } from "@/lib/utils";
import { Float, PerspectiveCamera, View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useEffect, useState } from "react";
import * as THREE from "three";
import { BlackPlanet } from "../../BlackPlanet";
import { Rocket } from "./Rocket";
import { CurrentAnimationContext } from "./contexts";

export default function ContactScene() {
  const [scene, setScene] = useState<THREE.Group | null>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const currentAnimation = useContext(CurrentAnimationContext);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#contact",
        start: "top top",
        end: "bottom bottom",
        pin: "#contact_scene",
        scrub: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (width < 768) return;
    const handler = (e: MouseEvent) => {
      if (!scene) return;
      const maxRotation = Math.PI / 20;
      const x = scaleNumber(e.clientY, 0, width, -maxRotation, maxRotation);
      const y = scaleNumber(e.clientX, 0, height, -maxRotation, maxRotation);
      scene.rotation.x = -x;
      scene.rotation.y = -y;
    };

    window.addEventListener("mousemove", handler);

    return () => window.removeEventListener("mousemove", handler);
  }, [scene, width, height]);

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <View
      className="w-full h-screen absolute left-0 z-20 pointer-events-none"
      style={{ zIndex: 20 }}
      id="contact_scene"
    >
      <group>
        <PerspectiveCamera position={[0, 0, 42]} fov={30} makeDefault />
        <group
          ref={(node) => {
            if (node) setScene(node);
          }}
        >
          <Rocket currentAnimation={currentAnimation} />
          <group position={[11, 3, 0]}>
            <Float speed={2}>
              <BlackPlanet position={[0, 0, 0]} scale={2.5} />
            </Float>

            <Float speed={2}>
              <WhitePlanet position={[-2, -2, 2]} scale={1} />
            </Float>
          </group>

          <hemisphereLight intensity={5} />
        </group>
      </group>
    </View>
  );
}
