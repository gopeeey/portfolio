"use client";

import { PerspectiveCamera, View } from "@react-three/drei";
import { BlackPlanet } from "./BlackPlanet";

export default function ExperienceScene() {
  return (
    <View
      className="w-full h-screen absolute top-0 left-0 z-20 pointer-events-none"
      style={{ zIndex: 20 }}
      id="experience-scene"
    >
      <group>
        <PerspectiveCamera fov={20} makeDefault position={[0, 0, 6]} />
        <BlackPlanet />
      </group>
    </View>
  );
}
