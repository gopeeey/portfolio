"use client";

import { useAnimationReadyStore } from "@/hooks/useAnimationReadyStore";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useEffect } from "react";

export default function Loader() {
  const setReady = useAnimationReadyStore((store) => store.setHeroReady);
  const progressData = useProgress();

  useEffect(() => {
    if (progressData.progress < 100) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to("#loader_progress", {
        opacity: 0,
        scale: 0.4,
        duration: 0.7,
      });

      tl.to(
        "#loader_white_ball",
        {
          scale: 0.6,
          duration: 2,
          onComplete: () => setReady(),
        },
        "0"
      );

      tl.to("#loader_white_ball", {
        scale: 50,
        opacity: 0,
        duration: 2,
        // onStart: () => setReady(),
      });

      tl.to(
        "#loader_container",
        {
          opacity: 0,
          duration: 1,
        },
        "<15%"
      );
      tl.to("#loader_container", {
        display: "none",
      });
    });

    return () => ctx.revert();
  }, [progressData.progress, setReady]);

  return (
    <div
      id="loader_container"
      className="fixed top-0 left-0 text-white flex justify-center items-center z-[60] w-screen h-screen bg-background"
    >
      <div
        id="loader_white_ball"
        className="big_black_ball relative w-20 h-20 bg-white flex justify-center items-center rounded-full"
      >
        <div
          id="loader_black_ball"
          className="black_ball w-[99%] h-[99%] bg-black rounded-full absolute top-0 transition-all duration-100"
        />

        <div id="loader_progress" className="relative z-10">
          {Math.floor(progressData.progress)}%
        </div>
      </div>
    </div>
  );
}
