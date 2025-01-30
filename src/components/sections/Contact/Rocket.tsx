/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { CurrentContactAnimation } from "@/types";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  currentAnimation: CurrentContactAnimation;
};

const flameScale = 0.946;
const rocketPosition = 19.947;
console.log(flameScale, rocketPosition);

export function Rocket({ currentAnimation }: Props) {
  const group = useRef<THREE.Group | null>(null);
  const { nodes, materials } = useGLTF("/models/rocket.glb");
  // const { actions } = useAnimations(animations, group);
  const rocketRef = useRef<THREE.Group | null>(null);
  const flameRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!rocketRef.current || !flameRef.current) return;
      switch (currentAnimation) {
        case "rest":
          const restTl = gsap.timeline({ defaults: { duration: 1.5 } });
          restTl.to(rocketRef.current.position, { y: 17.047 }, 0);
          restTl.to(rocketRef.current.rotation, { y: 0 }, 0);
          restTl.to(flameRef.current.scale, { y: -1.946, z: 0.2, x: 0.2 }, 0);
          break;

        case "hover":
          const hoverTl = gsap.timeline({ defaults: { duration: 1.5 } });
          hoverTl.to(rocketRef.current.position, { y: 20.3 });
          hoverTl.to(rocketRef.current.rotation, { y: 0 }, 0);
          hoverTl.to(
            rocketRef.current.position,
            {
              y: 19.947,
              yoyo: true,
              repeat: -1,
              ease: "power1.inOut",
              duration: 1,
            },
            ">"
          );
          hoverTl.to(
            flameRef.current.scale,
            { y: 1.2, z: 1, x: 1, duration: 0.5 },
            0
          );
          hoverTl.to(flameRef.current.scale, {
            y: 0.946,
            repeat: -1,
            yoyo: true,
            duration: 0.2,
          });
          break;

        case "fly":
          const flyTl = gsap.timeline({ defaults: { duration: 3.5 } });
          flyTl.to(rocketRef.current.position, { y: 40, ease: "power2.in" });
          flyTl.to(
            rocketRef.current.rotation,
            { y: Math.PI, ease: "power3.in" },
            0
          );
          flyTl.to(
            flameRef.current.scale,
            { y: 1.6, z: 1.2, x: 1, duration: 0.3 },
            0
          );
          flyTl.to(
            flameRef.current.scale,
            {
              y: 1.2,
              z: 1,
              repeat: -1,
              duration: 0.5,
              yoyo: true,
            },
            ">"
          );
          break;
      }
    });

    return () => ctx.kill();
  }, [currentAnimation]);
  return (
    <group ref={group} dispose={null}>
      <group name="Scene" rotation={[0, Math.PI / 2, 0]} position={[0, -22, 0]}>
        <group
          name="Empty"
          position={[0, 17.047, 0]}
          scale={3.279}
          ref={rocketRef}
        >
          <group name="Circle" position={[0, -3.08, 0]} scale={0.305}>
            <mesh
              name="Circle_1"
              castShadow
              receiveShadow
              geometry={(nodes.Circle_1 as THREE.Mesh).geometry}
              material={materials["Material.010"]}
            />
            <mesh
              name="Circle_2"
              castShadow
              receiveShadow
              geometry={(nodes.Circle_2 as THREE.Mesh).geometry}
              material={materials["Material.011"]}
            />
            <mesh
              name="Circle_3"
              castShadow
              receiveShadow
              geometry={(nodes.Circle_3 as THREE.Mesh).geometry}
              material={materials["Outline.002"]}
            />
            <mesh
              name="Circle001"
              castShadow
              receiveShadow
              geometry={(nodes.Circle001 as THREE.Mesh).geometry}
              material={materials["Material.015"]}
              position={[0, 11.097, 0]}
            />
            <group name="Circle002" position={[0.76, 11.069, 0]}>
              <mesh
                name="Circle003_1"
                castShadow
                receiveShadow
                geometry={(nodes.Circle003_1 as THREE.Mesh).geometry}
                material={materials["Material.014"]}
              />
              <mesh
                name="Circle003_2"
                castShadow
                receiveShadow
                geometry={(nodes.Circle003_2 as THREE.Mesh).geometry}
                material={materials["Material.015"]}
              />
            </group>
            <group
              name="Circle003"
              position={[0, 8.365, 0]}
              scale={[0.2, -1.946, 0.2]}
              ref={flameRef}
            >
              <mesh
                name="Circle004"
                castShadow
                receiveShadow
                geometry={(nodes.Circle004 as THREE.Mesh).geometry}
                material={materials["Material.016"]}
              />
              <mesh
                name="Circle004_1"
                castShadow
                receiveShadow
                geometry={(nodes.Circle004_1 as THREE.Mesh).geometry}
                material={materials.Fire_Outline}
              />
            </group>
          </group>
        </group>
        <group name="Icosphere" scale={15.945}>
          <mesh
            name="Icosphere_1"
            castShadow
            receiveShadow
            geometry={(nodes.Icosphere_1 as THREE.Mesh).geometry}
            material={materials["Material.017"]}
          />
          <mesh
            name="Icosphere_2"
            castShadow
            receiveShadow
            geometry={(nodes.Icosphere_2 as THREE.Mesh).geometry}
            material={materials["Outline.002"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/rocket.glb");
