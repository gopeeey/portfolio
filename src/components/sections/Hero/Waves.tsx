"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useCallback, useRef } from "react";
import * as THREE from "three";

const FREQUENCY = 60;
const AMPLITUDE = 0.001;

export function Waves() {
  const { nodes, materials } = useGLTF("/black_plane_with_outline.glb");
  const outlineRef = useRef<THREE.Mesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    THREE.Material | THREE.Material[],
    THREE.Object3DEventMap
  > | null>(null);

  const meshRef = useRef<THREE.Mesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    THREE.Material | THREE.Material[],
    THREE.Object3DEventMap
  > | null>(null);

  const graph = useCallback((x: number, z: number, t: number) => {
    const d = Math.sqrt(x ** 2 + z ** 2);
    return (
      AMPLITUDE * Math.log(d ** 2 / 2) * Math.sin(FREQUENCY * (-d + t / 30))
    );
  }, []);

  useFrame((animation) => {
    if (!outlineRef.current) return;
    const outlinePositions =
      outlineRef.current.geometry.attributes.position.array;

    for (let i = 0; i < outlinePositions.length; i += 21) {
      const x = outlinePositions[i];
      // Manually specify some other indexes to loop through the array a bit faster
      const x2 = outlinePositions[i + 3];
      const x3 = outlinePositions[i + 6];
      const x4 = outlinePositions[i + 9];
      const x5 = outlinePositions[i + 12];
      const x6 = outlinePositions[i + 15];
      const x7 = outlinePositions[i + 18];

      const z = outlinePositions[i + 2];
      const z2 = outlinePositions[i + 5];
      const z3 = outlinePositions[i + 8];
      const z4 = outlinePositions[i + 11];
      const z5 = outlinePositions[i + 14];
      const z6 = outlinePositions[i + 17];
      const z7 = outlinePositions[i + 20];

      const t = animation.clock.getElapsedTime();

      outlinePositions[i + 1] = graph(x, z, t);
      outlinePositions[i + 4] = graph(x2, z2, t);
      outlinePositions[i + 7] = graph(x3, z3, t);
      outlinePositions[i + 10] = graph(x4, z4, t);
      outlinePositions[i + 13] = graph(x5, z5, t);
      outlinePositions[i + 16] = graph(x6, z6, t);
      outlinePositions[i + 19] = graph(x7, z7, t);
    }

    outlineRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group dispose={null} scale={2.5}>
      <group scale={5.968}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Plane_1 as THREE.Mesh).geometry}
          material={materials.Color}
          ref={meshRef}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Plane_2 as THREE.Mesh).geometry}
          material={materials.Outline}
          ref={outlineRef}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/black_plane_with_outline.glb");
