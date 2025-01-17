"use client";

import { Loader, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import NoSSRWrapper from "./NoSSRWrapper";

export default function MyCanvas() {
  return (
    <>
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
        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>

      <NoSSRWrapper>
        <Loader />
      </NoSSRWrapper>
    </>
  );
}
