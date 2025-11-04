"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Planets() {
  const group = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const { nodes, materials, animations } = useGLTF("/models/planets.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.keys(actions).forEach((action) => {
      actions[action]?.reset().play();
    });

    return () => {
      Object.keys(actions).forEach((action) => {
        actions[action]?.reset().stop();
      });
    };
  }, [actions]);

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <mesh
          name="Sphere011_Material002_0"
          castShadow
          receiveShadow
          geometry={(nodes.Sphere011_Material002_0 as THREE.Mesh).geometry}
          material={materials["Material.002"]}
          position={[0, 5.267, 7.247]}
          scale={0.349}
        />
        <mesh
          name="Sphere007_Material002_0001"
          castShadow
          receiveShadow
          geometry={(nodes.Sphere007_Material002_0001 as THREE.Mesh).geometry}
          material={materials["Material.002"]}
          position={[-10.064, 10.485, 0]}
          rotation={[-0.956, 0.401, -0.269]}
          scale={0.793}
        >
          <mesh
            name="Sphere007_Material001_0002"
            castShadow
            receiveShadow
            geometry={(nodes.Sphere007_Material001_0002 as THREE.Mesh).geometry}
            material={materials["Material.001"]}
            scale={1.036}
          >
            <mesh
              name="Sphere008_Material002_0001"
              castShadow
              receiveShadow
              geometry={
                (nodes.Sphere008_Material002_0001 as THREE.Mesh).geometry
              }
              material={materials["Material.002"]}
              scale={1.034}
            />
          </mesh>
          <mesh
            name="Sphere007_Material001_0003"
            castShadow
            receiveShadow
            geometry={(nodes.Sphere007_Material001_0003 as THREE.Mesh).geometry}
            material={materials["Material.001"]}
            scale={1.036}
          />
        </mesh>
        <mesh
          name="Sphere001_Material002_0001"
          castShadow
          receiveShadow
          geometry={(nodes.Sphere001_Material002_0001 as THREE.Mesh).geometry}
          material={materials["Material.002"]}
          position={[0, 5.274, 9.038]}
          rotation={[1.373, 0, 0]}
        >
          <mesh
            name="Sphere004_Material002_0001"
            castShadow
            receiveShadow
            geometry={(nodes.Sphere004_Material002_0001 as THREE.Mesh).geometry}
            material={materials["Material.002"]}
            rotation={[0.112, 0, 0]}
            scale={[1.726, 1.353, 0]}
          />
          <mesh
            name="Sphere_Material001_0001"
            castShadow
            receiveShadow
            geometry={(nodes.Sphere_Material001_0001 as THREE.Mesh).geometry}
            material={materials["Material.001"]}
            scale={1.034}
          />
        </mesh>
        <group
          name="BézierCircle"
          position={[0, 5.274, 0]}
          rotation={[0, 0, 0.298]}
          scale={9.038}
        />
        <group
          name="BézierCircle004"
          position={[0, 5.261, 0]}
          rotation={[0, 0, -0.479]}
          scale={7.7}
        />
        <group name="Empty003" position={[-9.251, 0, 0]} scale={0.449} />
        <group name="Empty" position={[4.525, 0, 0]} scale={0.474} />
        <group name="BézierCircle005" position={[0, 5.267, 0]} scale={5.448} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/planets.glb");
