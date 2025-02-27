/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import * as THREE from "three";

export type Props = {
  setPlanet?: (
    mesh: THREE.Mesh<
      THREE.BufferGeometry<THREE.NormalBufferAttributes>,
      THREE.Material | THREE.Material[],
      THREE.Object3DEventMap
    > | null
  ) => void;
  setPlanetGroup?: (group: THREE.Group<THREE.Object3DEventMap>) => void;
  position?: Vector3;
  scale?: number;
};

export function BlackPlanet({
  setPlanet,
  setPlanetGroup,
  position = [-2.17, 2.17, 0],
  scale = 1.3,
}: Props) {
  const { nodes, materials } = useGLTF("/models/black_planet.glb");

  return (
    <group
      dispose={null}
      rotation={[0, 0, Math.PI / 9]}
      position={position}
      scale={scale}
      ref={(node) => {
        if (node && setPlanetGroup) setPlanetGroup(node);
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Sphere007_Material002_0001 as THREE.Mesh).geometry}
        material={materials["Material.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.793}
        ref={(node) => {
          if (node && setPlanet) setPlanet(node);
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Sphere007_Material001_0002 as THREE.Mesh).geometry}
          material={materials["Material.001"]}
          scale={1.036}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Sphere008_Material002_0001 as THREE.Mesh).geometry}
            material={materials["Material.002"]}
            scale={1.034}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Sphere007_Material001_0003 as THREE.Mesh).geometry}
          material={materials["Material.001"]}
          scale={1.036}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/black_planet.glb");
