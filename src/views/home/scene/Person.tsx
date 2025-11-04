"use client";

import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";

type Props = {
  camera: THREE.PerspectiveCamera | null;
};

const MAX_COOL_DOWN = 8;
const MIN_COOL_DOWN = 2;
const MAX_LOOK_ANGLE = Math.PI / 4;
const MAX_Y_LOOK_ANGLE = Math.PI / 5;
const X_OFFSET = 4;

export const Person = forwardRef<THREE.Group<THREE.Object3DEventMap>, Props>(
  ({ camera }, ref) => {
    const [lastLookedAt, setLastLookedAt] = useState({ x: 0, y: 0 });

    const group = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
    useImperativeHandle(
      ref,
      () => group.current as THREE.Group<THREE.Object3DEventMap>
    );
    const { nodes, materials } = useGLTF("/models/male_body.glb");
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
    const cameraDir = useMemo(() => new THREE.Vector3(), []);
    const plane = useMemo(() => new THREE.Plane(), []);
    const planeHelper = useMemo(
      () => new THREE.PlaneHelper(plane, 10, 0xff0000),
      [plane]
    );
    const intersectionMarker = useMemo(() => {
      const geom = new THREE.SphereGeometry(0.2, 16, 16); // small ball
      const mat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      return new THREE.Mesh(geom, mat);
    }, []);
    const mousePosition = useMemo(() => new THREE.Vector2(), []);
    const raycaster = useMemo(() => new THREE.Raycaster(), []);

    const generateRandomTarget = useCallback(() => {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      return [x, y] as const;
    }, []);

    const lookAt = useCallback(
      (x: number, y: number) => {
        if (!camera || !group.current || !meshRef.current) return;
        setLastLookedAt({ x, y });
        if (randomTargetTimer.current) clearTimeout(randomTargetTimer.current);

        mousePosition.x = (x / window.innerWidth) * 2 - 1;
        mousePosition.y = -(y / window.innerHeight) * 2 + 1;

        camera.getWorldDirection(cameraDir);
        const bonePos = meshRef.current.skeleton.bones[5].position;
        const camDistance = camera.position.distanceTo(bonePos);
        const planePoint = camera.position
          .clone()
          .add(cameraDir.clone().multiplyScalar(camDistance * 0.6));
        plane.setFromNormalAndCoplanarPoint(cameraDir, planePoint);
        raycaster.setFromCamera(mousePosition, camera);
        raycaster.ray.intersectPlane(plane, intersectionPoint);

        intersectionMarker.position.copy(intersectionPoint);
        intersectionMarker.visible = true; // make sure it shows

        const target = new THREE.Vector3(
          intersectionPoint.x - group.current.position.x,
          intersectionPoint.y - 40 / camDistance,
          intersectionPoint.z
        );

        trackingTimer.current = setTimeout(() => {
          if (!meshRef.current) return;
          headRotationClone.current.lookAt(target);

          headRotationClone.current.rotation.y = THREE.MathUtils.clamp(
            headRotationClone.current.rotation.y,
            -MAX_LOOK_ANGLE,
            MAX_LOOK_ANGLE
          );

          headRotationClone.current.rotation.x = THREE.MathUtils.clamp(
            headRotationClone.current.rotation.x,
            -MAX_Y_LOOK_ANGLE,
            MAX_Y_LOOK_ANGLE
          );

          headRotationClone.current.rotation.z = THREE.MathUtils.clamp(
            headRotationClone.current.rotation.z,
            -MAX_LOOK_ANGLE,
            MAX_LOOK_ANGLE
          );
          // headRotationClone.current.rotation.y -=
          //   (group?.current?.rotation.y || 0) / 1.5;
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
        mousePosition,
        plane,
        generateRandomTarget,
        cameraDir,
        intersectionMarker,
      ]
    );

    useFrame(() => {
      // This is the key line:
      planeHelper.plane.copy(plane);
      planeHelper.updateMatrixWorld(true);
    });

    useGSAP(() => {
      const handler = (e: MouseEvent) => lookAt(e.clientX, e.clientY);

      window.addEventListener("mousemove", handler);
      lookAt(...generateRandomTarget());

      return () => window.removeEventListener("mousemove", handler);
    }, [lookAt, generateRandomTarget]);

    // Breathe
    useEffect(() => {
      const animate = (t = 0) => {
        if (meshRef.current) {
          const rotationFactor = 100;
          const tFactor = 1000;
          meshRef.current.skeleton.bones[6].rotation.y =
            (Math.PI / rotationFactor) * Math.sin(t / tFactor);
          meshRef.current.skeleton.bones[9].rotation.y =
            (Math.PI / rotationFactor) * Math.sin(t / tFactor);

          const xRotationFactor = 200;

          meshRef.current.skeleton.bones[6].rotation.x =
            (Math.PI / xRotationFactor) * Math.sin(t / tFactor);
          meshRef.current.skeleton.bones[9].rotation.x =
            (Math.PI / xRotationFactor) * Math.sin(t / tFactor);

          const tPosFactor = 600;
          const pos = 0.005 * (50 + Math.sin(t / tPosFactor));
          meshRef.current.skeleton.bones[6].position.y = pos;
          meshRef.current.skeleton.bones[9].position.y = pos;
        }
        requestAnimationFrame(animate);
      };

      animate();
    }, []);

    // Look at mouse on scroll
    useEffect(() => {
      const handler = () => {
        lookAt(lastLookedAt.x, lastLookedAt.y);
      };

      window.addEventListener("scroll", handler);

      return () => window.removeEventListener("scroll", handler);
    }, [lookAt, lastLookedAt]);

    return (
      <>
        {/* <primitive object={planeHelper} />
        <primitive object={intersectionMarker} /> */}
        <group
          ref={group}
          dispose={null}
          position={[X_OFFSET, -13, 0]}
          scale={4.1}
          rotation={[0, 0, 0]}
        >
          <group position={[0, 2.379, 0]} scale={1.382}>
            <primitive object={nodes.Bone} />
            <primitive object={nodes.Bone003_L003} />
            <primitive object={nodes.Bone003_R003} />
            <primitive object={nodes.Bone003_L004} />
            <primitive object={nodes.Bone003_R004} />
            <primitive object={nodes.Bone006} />
            <primitive object={nodes.Bone007} />
            <skinnedMesh
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
        </group>
      </>
    );
  }
);

Person.displayName = "Person";

useGLTF.preload("/models/male_body.glb");
