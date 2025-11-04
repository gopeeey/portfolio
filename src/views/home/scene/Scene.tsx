"use client";

import { Stars } from "@/components/models/Stars";
import useMaxScreenSize from "@/hooks/useMaxScreenSize";
import { PerspectiveCamera, View } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Person } from "./Person";
import { Planets } from "./Planets";

const camHeight = 2.5;

export default function HomeScene() {
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  const [objectGroup, setObjectGroup] =
    useState<THREE.Group<THREE.Object3DEventMap> | null>(null);
  const heroReady = true;
  const isMobile = useMaxScreenSize("sm");

  const personRef = useRef<THREE.Group<THREE.Object3DEventMap> | null>(null);
  const initialCamRadius = useRef(16.5);
  const camStateRef = useRef({
    angle: Math.PI / 3.6,
    radius: initialCamRadius.current,
  });

  const camTarget = useMemo(() => new THREE.Vector3(0, camHeight, 0), []);

  useEffect(() => {
    initialCamRadius.current = isMobile ? 21 : 16.5;
    camStateRef.current.radius = initialCamRadius.current;
  }, [isMobile]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!objectGroup || !camera || !heroReady) return;

      camera.lookAt(camTarget);

      // const tl = gsap.timeline({
      //   defaults: { duration: 4, ease: "power3.out" },
      // });
    });

    return () => ctx.revert();
  }, [objectGroup, camera, heroReady, camTarget, isMobile]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const person = personRef.current;
      if (!person || !camera) return;

      const scrollTl = gsap.timeline({
        defaults: {},
        scrollTrigger: {
          trigger: "#scroll_scene",
          start: "top top",
          end: "80% bottom",
          scrub: 1.5,
          // markers: true,
        },
      });

      const frames: { angle: number; radius: number; duration: number }[] = [
        {
          angle: Math.PI / 2,
          radius: initialCamRadius.current / 2,
          duration: 1,
        },
        {
          angle: Math.PI * 1.15,
          radius: initialCamRadius.current / 1.3,
          duration: 3,
        },
      ];

      frames.forEach((frame) => {
        scrollTl.to(camStateRef.current, {
          angle: frame.angle,
          radius: frame.radius,
          ease: "none",
          onUpdate: function () {
            const a = camStateRef.current.angle;
            const r = camStateRef.current.radius;
            const { x, z } = getCameraPositionAt(a, r);
            camera.position.x = x;
            camera.position.z = z;
            camera.lookAt(camTarget);
          },
        });
      });

      // const blogTlDuration = 2;

      const blogTl = gsap.timeline({
        defaults: { duration: 2 },
        scrollTrigger: {
          trigger: "#blog",
          start: "top 50%",
          end: "bottom bottom",
          scrub: 1.5,
          // markers: true,
        },
      });

      // Move model to middle
      blogTl.to(person.position, { x: 0, duration: 1 }, 0);

      // Move camera to initial position
      const blogPos = getCameraPositionAt(0, initialCamRadius.current);
      blogTl.to(
        camera.position,
        {
          x: blogPos.x,
          z: blogPos.z,
          y: camera.position.y + 6,
          // duration: blogTlDuration,
        },
        0
      );

      blogTl.to(
        camTarget,
        {
          x: 0,
          y: person.position.y + 20,
          z: person.position.z,
          // duration: blogTlDuration,
          onUpdate: () => {
            camera.lookAt(camTarget);
          },
        },
        0
      );

      blogTl.to(camTarget, {
        y: person.position.y + 25,
        duration: "0.2",
        ease: "power3.inOut",
        onUpdate: () => {
          camera.lookAt(camTarget);
        },
      });
    });
    return () => ctx.revert();
  }, [isMobile, camera, camTarget]);

  return (
    <View
      className="w-screen h-screen absolute left-0 z-20 pointer-events-none"
      style={{ zIndex: 20 }}
    >
      <group>
        <PerspectiveCamera
          position={[
            getCameraPositionAt(
              camStateRef.current.angle,
              camStateRef.current.radius
            ).x,
            camHeight,
            getCameraPositionAt(
              camStateRef.current.angle,
              camStateRef.current.radius
            ).z,
          ]}
          rotation={[0, 0, 0]}
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
          rotation={[0, 0, 0]}
        >
          <Planets />
          <Person ref={personRef} camera={camera} />
        </group>
        <Stars minRadius={30} maxRadius={70} count={5000} />
      </group>
    </View>
  );
}

function getCameraPositionAt(angle: number, radius: number) {
  const amp = radius;
  const x = amp * Math.sin(angle);
  const z = amp * Math.cos(angle);
  return { x, z };
}
