/*
Auto-generated by: https://postgreshub.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { forwardRef } from "react";
import * as THREE from "three";
import Text from "../Text";

export const Postgres = forwardRef<THREE.Group, GroupProps>((props, ref) => {
  const { nodes, materials } = useGLTF("/models/web_logos/postgres.glb");
  return (
    <group scale={0.1} {...props} ref={ref} dispose={null}>
      <Text content="PostgreSQL" position={[0, -0.5, 0]} />
      <group scale={8.959}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve018 as THREE.Mesh).geometry}
          material={materials["SVGMat.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve018_1 as THREE.Mesh).geometry}
          material={materials["Material.003"]}
        />
      </group>
    </group>
  );
});

Postgres.displayName = "Postgres";

useGLTF.preload("/models/web_logos/postgres.glb");
