/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { forwardRef } from "react";
import * as THREE from "three";
import Text from "../Text";

export const Git = forwardRef<THREE.Group, GroupProps>((props, ref) => {
  const { nodes, materials } = useGLTF("/models/web_logos/git.glb");
  return (
    <group scale={0.1} {...props} ref={ref} dispose={null}>
      <Text content="Git" position={[-0.26, -0.5, 0]} />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Curve034 as THREE.Mesh).geometry}
        material={materials["Material.010"]}
      />
    </group>
  );
});

Git.displayName = "Git";

useGLTF.preload("/models/web_logos/git.glb");
