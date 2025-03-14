/*
Auto-generated by: https://materialuihub.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { forwardRef } from "react";
import * as THREE from "three";
import Text from "../Text";

export const MaterialUI = forwardRef<THREE.Group, GroupProps>((props, ref) => {
  const { nodes, materials } = useGLTF("/models/web_logos/material_ui.glb");
  return (
    <group scale={0.1} {...props} ref={ref} dispose={null}>
      <Text content="Material UI" position={[-0.31, -0.85, 0]} />
      <group scale={5.746}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve054 as THREE.Mesh).geometry}
          material={materials["SVGMat.062"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve054_1 as THREE.Mesh).geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve054_2 as THREE.Mesh).geometry}
          material={materials["SVGMat.060"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve054_3 as THREE.Mesh).geometry}
          material={materials["SVGMat.061"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve054_4 as THREE.Mesh).geometry}
          material={materials["SVGMat.063"]}
        />
      </group>
    </group>
  );
});

MaterialUI.displayName = "MaterialUI";

useGLTF.preload("/models/web_logos/material_ui.glb");
