"use client";

import {
  BlackPlanet,
  Props as BlackPlanetProps,
} from "@/components/BlackPlanet";
import { PerspectiveCamera, View } from "@react-three/drei";

export default function ExperienceScene({
  setPlanet,
  setPlanetGroup,
}: BlackPlanetProps) {
  return (
    <View
      className="w-full h-screen top-0 left-0 z-20 pointer-events-none"
      style={{ zIndex: 20 }}
      id="experience-scene"
    >
      <group>
        <PerspectiveCamera fov={20} makeDefault position={[0, 0, 6]} />
        <BlackPlanet setPlanet={setPlanet} setPlanetGroup={setPlanetGroup} />
      </group>
    </View>
  );
}
