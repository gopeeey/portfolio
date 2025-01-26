"use client";

import { PerspectiveCamera, View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { spline } from "./spline";
import StarsSphere from "./StarsSphere";
import Wormhole from "./Wormhole";

export default function SkillsProjectsScene() {
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  const rootRef = useRef<
    HTMLElement | THREE.Group<THREE.Object3DEventMap> | null
  >(null);
  const starsRef = useRef<THREE.Group | null>(null);

  const { tubeGeo, camCopyObj } = useMemo(() => {
    const tubeGeo = new THREE.TubeGeometry(spline, 222, 0.65, 16, false);
    const camCopyObj = new THREE.PerspectiveCamera(30);
    camCopyObj.position.z = 12;
    return { tubeGeo, camCopyObj };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#skills_projects_container",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (state) => {
          if (!camera) return;
          const t = state.progress;
          console.log(t);
          const pos = tubeGeo.parameters.path.getPointAt(t);
          const lookDistance = 0.017;
          let lookAt = tubeGeo.parameters.path.getPointAt(
            (t + lookDistance) % 1
          );

          if (t > 1 - lookDistance) {
            const p1 = tubeGeo.parameters.path.getPointAt(1 - lookDistance * 2);
            const p2 = tubeGeo.parameters.path.getPointAt(1 - lookDistance);
            const dpx = p2.x - p1.x;
            const dpy = p2.y - p1.y;
            const dpz = p2.z - p1.z;

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
          if (dx > Math.PI) camCopyObj.rotation.x -= 2 * Math.PI;
          if (dx < -Math.PI) camCopyObj.rotation.x += 2 * Math.PI;

          if (dy > Math.PI) camCopyObj.rotation.y -= 2 * Math.PI;
          if (dy < -Math.PI) camCopyObj.rotation.y += 2 * Math.PI;

          if (dz > Math.PI) camCopyObj.rotation.z -= 2 * Math.PI;
          if (dz < -Math.PI) camCopyObj.rotation.z += 2 * Math.PI;

          // if (
          //   dx > Math.PI ||
          //   dx < -Math.PI ||
          //   dy > Math.PI ||
          //   dy < -Math.PI ||
          //   dz > Math.PI ||
          //   dz < -Math.PI
          // ) {
          //   console.log("Looked at", dx, dy, dz);
          // }

          gsap.to(camera.rotation, {
            x: camCopyObj.rotation.x,
            y: camCopyObj.rotation.y,
            z: camCopyObj.rotation.z,
            ease: "power3.out",
          });
        },
        pin: "#skills_projects_scene",
      });
    });

    return () => ctx.revert();
  }, [camera, tubeGeo, camCopyObj]);

  return (
    <View
      className="w-full h-screen absolute left-0 z-20 pointer-events-none"
      style={{ zIndex: 20 }}
      id="skills_projects_scene"
      ref={rootRef}
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
