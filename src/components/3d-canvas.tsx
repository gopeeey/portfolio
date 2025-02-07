"use client";

import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useEffect, useRef } from "react";

export default function MyCanvas() {
  const docHeightRef = useRef(0);
  useEffect(() => {
    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    });

    docHeightRef.current = document.body.scrollHeight;

    const handler = () => {
      const scrollAmount = window.scrollY / docHeightRef.current;
      docHeightRef.current = document.body.scrollHeight;
      const scrollPos = scrollAmount * docHeightRef.current;

      ScrollTrigger.refresh();
      window.scrollTo({ top: scrollPos, behavior: "instant" });
    };

    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  });
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
    </>
  );
}
