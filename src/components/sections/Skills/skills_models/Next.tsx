/*
Auto-generated by: https://nexthub.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { forwardRef } from "react";
import * as THREE from "three";
import Text from "../Text";

export const Next = forwardRef<THREE.Group, GroupProps>((props, ref) => {
  const { nodes, materials } = useGLTF("/models/web_logos/next.glb");
  return (
    <group scale={0.1} {...props} ref={ref} dispose={null}>
      <Text content="Next.js" position={[0.1, -0.88, 0]} />
      <group scale={5.75}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve051 as THREE.Mesh).geometry}
          material={materials["SVGMat.058"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve051_1 as THREE.Mesh).geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
});

Next.displayName = "Next";

useGLTF.preload("/models/web_logos/next.glb");
