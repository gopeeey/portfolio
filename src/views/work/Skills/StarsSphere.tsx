import { randNumBtw } from "@/lib/utils";
import { useLoader } from "@react-three/fiber";
import { forwardRef, useMemo } from "react";
import * as THREE from "three";

type Props = {
  count?: number;
  minRadius?: number;
  maxRadius?: number;
};

const circleImg = "/circle.png";

const StarsSphere = forwardRef<THREE.Group, Props>(
  ({ count = 500, minRadius = 5, maxRadius = 10 }, ref) => {
    const texture = useLoader(THREE.TextureLoader, circleImg);
    const { positions, colors } = useMemo(() => {
      const verts: number[] = [];
      const colors: number[] = [];

      for (let i = 0; i < count; i++) {
        const theta = randNumBtw(0, 2 * Math.PI);
        const phi = randNumBtw(0, 2 * Math.PI);
        const radius = randNumBtw(minRadius, maxRadius);
        const y = radius * Math.sin(phi);
        const xz = radius * Math.cos(phi);
        const x = xz * Math.sin(theta);
        const z = xz * Math.cos(theta);
        verts.push(x, y, z);

        const col = new THREE.Color().setHSL(0, 1, 1);
        colors.push(col.r, col.g, col.b);
      }

      return {
        positions: new Float32Array(verts),
        colors: new Float32Array(colors),
      };
    }, [count, minRadius, maxRadius]);
    return (
      <group ref={ref} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <points>
          <bufferGeometry attach={"geometry"}>
            <bufferAttribute
              attach="attributes-position"
              array={positions}
              count={positions.length / 3}
              itemSize={3}
            />

            <bufferAttribute
              attach="attributes-color"
              array={colors}
              count={colors.length / 3}
              itemSize={3}
            />
          </bufferGeometry>

          <pointsMaterial
            attach="material"
            map={texture}
            color={0xffffff}
            size={0.04}
            alphaTest={0.5}
            vertexColors={true}
          />
        </points>
      </group>
    );
  }
);

StarsSphere.displayName = "StarsSphere";

export default StarsSphere;
