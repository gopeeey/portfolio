"use client";

import { useGSAP } from "@gsap/react";
import { useAnimations, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useCallback, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type Props = {
  camera: THREE.PerspectiveCamera | null;
};

const MAX_COOL_DOWN = 8;
const MIN_COOL_DOWN = 3;

export function Person({ camera }: Props) {
  const group = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const { nodes, materials, animations } = useGLTF("/male_body.glb");
  const { actions } = useAnimations(animations, group);
  const meshRef = useRef<THREE.SkinnedMesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    THREE.Material | THREE.Material[],
    THREE.Object3DEventMap
  > | null>(null);

  // Head mouse tracking
  const trackingTimer = useRef<NodeJS.Timeout | null>(null);
  const randomTargetTimer = useRef<NodeJS.Timeout | null>(null);
  const headRotationClone = useRef(new THREE.Object3D());
  const intersectionPoint = useMemo(() => new THREE.Vector3(), []);
  const plane = useMemo(() => new THREE.Plane(), []);
  const planeNormal = useMemo(() => new THREE.Vector3(), []);
  const mousePosition = useMemo(() => new THREE.Vector2(), []);
  const raycaster = useMemo(() => new THREE.Raycaster(), []);

  const generateRandomTarget = useCallback(() => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    return [x, y] as const;
  }, []);

  const lookAt = useCallback(
    (x: number, y: number) => {
      if (!camera) return;
      if (randomTargetTimer.current) clearTimeout(randomTargetTimer.current);

      mousePosition.x = (x / window.innerWidth) * 2 - 1;
      mousePosition.y = -(y / window.innerHeight) * 2 + 1;

      planeNormal.copy(camera.position).normalize();
      plane.setFromNormalAndCoplanarPoint(
        planeNormal,
        new THREE.Vector3(0, 0, 0)
      );
      raycaster.setFromCamera(mousePosition, camera);
      raycaster.ray.intersectPlane(plane, intersectionPoint);

      const target = new THREE.Vector3(
        intersectionPoint.x,
        intersectionPoint.y,
        camera.position.z + 2
      );

      trackingTimer.current = setTimeout(() => {
        if (!meshRef.current) return;
        headRotationClone.current.lookAt(target);
        headRotationClone.current.rotation.y -=
          (group.current?.rotation.y || 0) / 1.5;
        gsap.to(meshRef.current.skeleton.bones[5].rotation, {
          x: headRotationClone.current.rotation.x,
          y: headRotationClone.current.rotation.y,
          z: headRotationClone.current.rotation.z,
        });
      }, 250);

      randomTargetTimer.current = setTimeout(() => {
        lookAt(...generateRandomTarget());
      }, (Math.floor(Math.random() * (MAX_COOL_DOWN - MIN_COOL_DOWN)) + MIN_COOL_DOWN) * 1000);
    },
    [
      camera,
      raycaster,
      intersectionPoint,
      planeNormal,
      mousePosition,
      plane,
      generateRandomTarget,
    ]
  );

  useGSAP(() => {
    const handler = (e: MouseEvent) => lookAt(e.clientX, e.clientY);

    window.addEventListener("mousemove", handler);
    lookAt(...generateRandomTarget());

    return () => window.removeEventListener("mousemove", handler);
  }, [lookAt, generateRandomTarget]);

  // Rotate
  useEffect(() => {
    const animate = (t = 0) => {
      if (group.current) {
        group.current.rotation.y = (Math.PI / 4) * Math.sin(t / 5000);
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  // Breathe
  useEffect(() => {
    const breathing = actions["Breathing"];
    if (!breathing) return;
    breathing.setDuration(2);
    breathing.reset().fadeIn(0.5).play();

    return () => {
      breathing.stop();
    };
  }, [actions]);

  return (
    <group ref={group} dispose={null} position={[0, -7.5, 0]} scale={2.9}>
      <group name="Scene">
        <group name="Armature" position={[0, 2.379, 0]} scale={1.382}>
          <group name="BaseSpiderMan">
            <skinnedMesh
              name="Mesh_Model001_24_GTAMtl_10_00_0001"
              geometry={
                (nodes.Mesh_Model001_24_GTAMtl_10_00_0001 as THREE.Mesh)
                  .geometry
              }
              material={materials["Material.001"]}
              skeleton={
                (nodes.Mesh_Model001_24_GTAMtl_10_00_0001 as THREE.SkinnedMesh)
                  .skeleton
              }
              ref={meshRef}
            />
            <skinnedMesh
              name="Mesh_Model001_24_GTAMtl_10_00_0001_1"
              geometry={
                (nodes.Mesh_Model001_24_GTAMtl_10_00_0001_1 as THREE.Mesh)
                  .geometry
              }
              material={materials.Outline}
              skeleton={
                (
                  nodes.Mesh_Model001_24_GTAMtl_10_00_0001_1 as THREE.SkinnedMesh
                ).skeleton
              }
            />
          </group>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone003_L003} />
          <primitive object={nodes.Bone003_R003} />
          <primitive object={nodes.Bone003_L004} />
          <primitive object={nodes.Bone003_R004} />
          <primitive object={nodes.Bone006} />
          <primitive object={nodes.Bone007} />
        </group>
      </group>
    </group>
  );
}

Person.displayName = "Person";

useGLTF.preload("/male_body.glb");
