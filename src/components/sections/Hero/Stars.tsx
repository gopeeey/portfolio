"use client";

import { randNumBtw } from "@/lib/utils";
import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const circleImg = "/circle.png";

type Props = { count?: number; radius?: number };

export function Stars({ count = 100, radius = 10 }: Props) {
  const texture = useLoader(THREE.TextureLoader, circleImg);

  const buffers = useMemo(() => {
    const verts: number[] = [];
    const colors: number[] = [];

    for (let i = 0; i < count; i++) {
      const x = randNumBtw(-radius * 2, radius * 2);
      const y = randNumBtw(-4, radius * 2);
      const z = randNumBtw(-radius / 2, -3 * radius);
      verts.push(x, y, z);

      const col = new THREE.Color().setHSL(0.6, 0.2, Math.random());
      colors.push(col.r, col.g, col.b);
    }

    return {
      positions: new Float32Array(verts),
      colors: new Float32Array(colors),
    };
  }, [count, radius]);

  const bufferRef =
    useRef<THREE.BufferGeometry<THREE.NormalBufferAttributes> | null>(null);

  useFrame((state) => {
    if (!bufferRef.current) return;
    const colors = bufferRef.current.attributes.color.array;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < colors.length; i += 3) {
      const color = new THREE.Color().setHSL(0.6, 0.2, Math.sin(t / 2 + i));
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }
    bufferRef.current.attributes.color.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach={"geometry"} ref={bufferRef}>
        <bufferAttribute
          attach="attributes-position"
          array={buffers.positions}
          count={buffers.positions.length / 3}
          itemSize={3}
        />

        <bufferAttribute
          attach="attributes-color"
          array={buffers.colors}
          count={buffers.colors.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        map={texture}
        color={0xffffff}
        size={0.5}
        alphaTest={0.5}
        vertexColors={true}
      />
    </points>
  );
}
