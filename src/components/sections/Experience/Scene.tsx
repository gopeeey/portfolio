"use client";

import { View } from "@react-three/drei";
import { BlackPlanet } from "./BlackPlanet";

export default function ExperienceScene() {
  return (
    <View
      className="w-full h-screen absolute left-0 z-20 pointer-events-none"
      style={{ zIndex: 20 }}
    >
      <BlackPlanet />
    </View>
  );
}
