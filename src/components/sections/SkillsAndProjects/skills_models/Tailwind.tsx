/*
Auto-generated by: https://tailwindhub.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { forwardRef } from "react";
import * as THREE from "three";
import Text from "../Text";

export const Tailwind = forwardRef<THREE.Group, GroupProps>((props, ref) => {
  const { nodes, materials } = useGLTF("/models/web_logos/tailwind.glb");
  return (
    <group scale={0.1} {...props} ref={ref} dispose={null}>
      <Text content="Tailwind CSS" position={[-0.06, 0, 0]} />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Curve001 as THREE.Mesh).geometry}
        material={materials["SVGMat.002"]}
        scale={10.245}
      />
    </group>
  );
});

Tailwind.displayName = "Tailwind";

useGLTF.preload("/models/web_logos/tailwind.glb");
