"use client";

import { PerspectiveCamera, View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { spline } from "./spline";
import StarsSphere from "./StarsSphere";
import Wormhole from "./Wormhole";

const LOOK_DISTANCE = 0.017;

export default function SkillsScene() {
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  const starsRef = useRef<THREE.Group | null>(null);

  const { tubeGeo, camCopyObj, dpx, dpy, dpz } = useMemo(() => {
    const tubeGeo = new THREE.TubeGeometry(spline, 222, 0.65, 16, false);
    const camCopyObj = new THREE.PerspectiveCamera(30);
    camCopyObj.position.z = 12;

    // Calculate the change in x and y values for the last points
    const p1 = tubeGeo.parameters.path.getPointAt(1 - LOOK_DISTANCE / 2);
    const p2 = tubeGeo.parameters.path.getPointAt(1);
    const dpx = p2.x - p1.x;
    const dpy = p2.y - p1.y;
    const dpz = p2.z - p1.z;

    return { tubeGeo, camCopyObj, dpx, dpy, dpz };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#skills",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (state) => {
          if (!camera) return;
          const t = state.progress;
          const pos = tubeGeo.parameters.path.getPointAt(t);
          let lookAt = tubeGeo.parameters.path.getPointAt(
            (t + LOOK_DISTANCE) % 1
          );

          const pastEnd = t > 1 - LOOK_DISTANCE;
          if (pastEnd) {
            lookAt = new THREE.Vector3(pos.x + dpx, pos.y + dpy, pos.z + dpz);
          }

          gsap.to(camera.position, {
            x: pos.x,
            y: pos.y,
            z: pos.z,
            ease: "power3.out",
          });

          if (starsRef.current) {
            gsap.to(starsRef.current.position, {
              x: pos.x,
              y: pos.y,
              z: pos.z,
              ease: "power3.out",
            });
          }

          camCopyObj.position.copy(pos);
          const x1 = camCopyObj.rotation.x;
          const y1 = camCopyObj.rotation.y;
          const z1 = camCopyObj.rotation.z;
          camCopyObj.lookAt(lookAt);

          const dx = camCopyObj.rotation.x - x1;
          const dy = camCopyObj.rotation.y - y1;
          const dz = camCopyObj.rotation.z - z1;

          // Prevent the camera from spinning when there's a sudden
          // rotation.
          const maxRotation = Math.PI;
          if (dx > maxRotation) camCopyObj.rotation.x -= 2 * Math.PI;
          if (dx < -maxRotation) camCopyObj.rotation.x += 2 * Math.PI;

          if (dy > maxRotation) camCopyObj.rotation.y -= 2 * Math.PI;
          if (dy < -maxRotation) camCopyObj.rotation.y += 2 * Math.PI;

          if (dz > maxRotation) camCopyObj.rotation.z -= 2 * Math.PI;
          if (dz < -maxRotation) camCopyObj.rotation.z += 2 * Math.PI;

          gsap.to(camera.rotation, {
            x: camCopyObj.rotation.x,
            y: camCopyObj.rotation.y,
            z: camCopyObj.rotation.z,
            ease: "power3.out",
          });
        },
        pin: "#skills_scene",
      });
    });

    return () => ctx.revert();
  }, [camera, tubeGeo, camCopyObj, dpx, dpy, dpz]);

  return (
    <View
      className="w-full h-screen absolute left-0 z-20 pointer-events-none"
      style={{ zIndex: 20 }}
      id="skills_scene"
    >
      <group>
        <PerspectiveCamera
          position={[0, 0, 12]}
          fov={30}
          makeDefault
          ref={(cam) => {
            if (cam) setCamera(cam);
          }}
        />
        <Wormhole geometry={tubeGeo} camera={camera} />
        <StarsSphere ref={starsRef} minRadius={4} maxRadius={10} count={3000} />
      </group>
      <fogExp2 attach={"fog"} color="black" density={0.12} />
    </View>
  );
}
