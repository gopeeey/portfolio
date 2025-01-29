import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { forwardRef } from "react";
import * as THREE from "three";
import Text from "../Text";

export const CSS = forwardRef<THREE.Group, GroupProps>((props, ref) => {
  const { nodes, materials } = useGLTF("/models/web_logos/css.glb");
  return (
    <group scale={0.1} {...props} ref={ref} dispose={null}>
      <Text content="CSS" position={[0.65, -0.4, 0]} />
      <group scale={8.647}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve063 as THREE.Mesh).geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve063_1 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
      </group>
    </group>
  );
});

CSS.displayName = "CSS";

useGLTF.preload("/models/web_logos/css.glb");
