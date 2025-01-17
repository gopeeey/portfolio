"use client";

import { PerspectiveCamera, View } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";
import { Person } from "./Person";
import { Planets } from "./Planets";
import { Stars } from "./Stars";
import { Waves } from "./Waves";

export default function HeroScene() {
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  return (
    <View
      className="w-full h-screen absolute left-0 z-20"
      style={{ zIndex: 20 }}
    >
      <group>
        <PerspectiveCamera
          position={[0, 1, 20]}
          rotation={[Math.PI / 19, 0, 0]}
          fov={30}
          makeDefault
          ref={(cam) => {
            if (cam) setCamera(cam);
          }}
        />
        <Planets />
        <Person camera={camera} />
        <Waves />
        <Stars radius={50} count={1000} />
      </group>
    </View>
  );
}
