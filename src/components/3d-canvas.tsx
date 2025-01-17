"use client";

import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function MyCanvas() {
  return (
    <Canvas
      gl={{ antialias: true }}
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 20,
      }}
    >
      <View.Port />
    </Canvas>
  );
}
