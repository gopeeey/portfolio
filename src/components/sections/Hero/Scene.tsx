"use client";

import { useAnimationReadyStore } from "@/hooks/useAnimationReadyStore";
import { PerspectiveCamera, View } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { Person } from "./Person";
import { Planets } from "./Planets";
import { Stars } from "./Stars";
import { Waves } from "./Waves";

export default function HeroScene() {
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  const [objectGroup, setObjectGroup] =
    useState<THREE.Group<THREE.Object3DEventMap> | null>(null);
  const setReady = useAnimationReadyStore((store) => store.setHeroReady);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!objectGroup || !camera) return;
      setReady();

      const tl = gsap.timeline({
        defaults: { duration: 4, ease: "power3.out" },
      });

      tl.set(objectGroup.rotation, { y: Math.PI });
      tl.set(camera.rotation, { x: -Math.PI / 14 });
      tl.set(camera.position, { y: 7, z: 60 });

      tl.to(objectGroup.rotation, { x: 0, y: 0, z: 0 }, 0);

      tl.to(camera.position, { y: 1, z: 20 }, 0);

      tl.to(camera.rotation, { x: Math.PI / 19 }, 0);
    });

    return () => ctx.revert();
  }, [objectGroup, camera, setReady]);

  return (
    <View
      className="w-screen h-screen absolute left-0 z-20 pointer-events-none"
      style={{ zIndex: 20 }}
    >
      <group>
        <PerspectiveCamera
          position={[0, 7, 60]}
          rotation={[-Math.PI / 14, 0, 0]}
          fov={30}
          makeDefault
          ref={(cam) => {
            if (cam) setCamera(cam);
          }}
        />
        <group
          ref={(node) => {
            if (node) setObjectGroup(node);
          }}
          rotation={[0, Math.PI, 0]}
        >
          <Planets />
          <Person camera={camera} />
          <Waves />
        </group>
        <Stars radius={50} count={1000} />
      </group>
    </View>
  );
}
