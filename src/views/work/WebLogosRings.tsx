import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import * as THREE from "three";

type Props = GroupProps & {
  setRing1Group?: (group: THREE.Group) => void;
  setRing2Group?: (group: THREE.Group) => void;
  setRing3Group?: (group: THREE.Group) => void;
};

export function WebLogoRings(props: Props) {
  const { nodes, materials } = useGLTF("/models/web_technologies_ring.glb");
  return (
    <group dispose={null} {...props}>
      <group
        rotation={[0, -0.289, 0]}
        scale={9.561}
        ref={(node) => {
          if (node) props.setRing1Group?.(node);
        }}
      >
        <group
          position={[-0.642, 0, 0.764]}
          rotation={[0, -0.746, 0]}
          scale={0.016}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube008 as THREE.Mesh).geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube008_1 as THREE.Mesh).geometry}
            material={materials["SVGMat.028"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube008_2 as THREE.Mesh).geometry}
            material={materials["SVGMat.029"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube008_3 as THREE.Mesh).geometry}
            material={materials["SVGMat.030"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube008_4 as THREE.Mesh).geometry}
            material={materials["SVGMat.031"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube008_5 as THREE.Mesh).geometry}
            material={materials["SVGMat.032"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube008_6 as THREE.Mesh).geometry}
            material={materials["SVGMat.033"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube008_7 as THREE.Mesh).geometry}
            material={materials["SVGMat.034"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube008_8 as THREE.Mesh).geometry}
            material={materials["SVGMat.035"]}
          />
        </group>
        <group position={[0, 0, 1]} scale={0.099}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve041 as THREE.Mesh).geometry}
            material={materials["SVGMat.046"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve041_1 as THREE.Mesh).geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          position={[-0.866, 0, -0.5]}
          rotation={[Math.PI, -1.062, Math.PI]}
          scale={0.098}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve042 as THREE.Mesh).geometry}
            material={materials["SVGMat.047"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve042_1 as THREE.Mesh).geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group
          position={[0.983, 0, 0.173]}
          rotation={[0, 1.368, 0]}
          scale={0.08}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve043 as THREE.Mesh).geometry}
            material={materials["SVGMat.049"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve043_1 as THREE.Mesh).geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group
          position={[0.342, 0, -0.938]}
          rotation={[-Math.PI, 0.358, -Math.PI]}
          scale={0.109}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve044 as THREE.Mesh).geometry}
            material={materials["SVGMat.050"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve044_1 as THREE.Mesh).geometry}
            material={materials["Material.005"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve021 as THREE.Mesh).geometry}
          material={materials["SVGMat.051"]}
          position={[-0.983, 0, 0.173]}
          rotation={[0, -1.377, 0]}
          scale={0.02}
        />
        <group
          position={[0.642, 0, 0.765]}
          rotation={[0, 0.721, 0]}
          scale={0.09}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve046 as THREE.Mesh).geometry}
            material={materials["SVGMat.052"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve046_1 as THREE.Mesh).geometry}
            material={materials["Material.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve046_2 as THREE.Mesh).geometry}
            material={materials["SVGMat.053"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve046_3 as THREE.Mesh).geometry}
            material={materials["SVGMat.054"]}
          />
        </group>
        <group
          position={[-0.341, 0, -0.938]}
          rotation={[Math.PI, -0.347, Math.PI]}
          scale={0.192}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve050 as THREE.Mesh).geometry}
            material={materials["SVGMat.057"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve050_1 as THREE.Mesh).geometry}
            material={materials["SVGMat.056"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve034 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
          position={[0.866, 0, -0.5]}
          rotation={[-Math.PI, 1.055, -Math.PI]}
          scale={0.018}
        />
      </group>
      <group
        scale={7.355}
        ref={(node) => {
          if (node) props.setRing2Group?.(node);
        }}
      >
        <group position={[0, 0, 1]} scale={0.155}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve004 as THREE.Mesh).geometry}
            material={materials["SVGMat.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve004_1 as THREE.Mesh).geometry}
            material={materials["SVGMat.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve004_2 as THREE.Mesh).geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group
          position={[0.973, 0, -0.223]}
          rotation={[-Math.PI, 1.371, -Math.PI]}
          scale={0.233}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve010_1 as THREE.Mesh).geometry}
            material={materials["SVGMat.013"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve010_2 as THREE.Mesh).geometry}
            material={materials["SVGMat.012"]}
          />
        </group>
        <group
          position={[-0.78, 0, 0.624]}
          rotation={[0, -0.877, 0]}
          scale={1.995}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve011 as THREE.Mesh).geometry}
            material={materials["SVGMat.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve011_1 as THREE.Mesh).geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group
          position={[0.432, 0, -0.9]}
          rotation={[-Math.PI, 0.487, -Math.PI]}
          scale={0.233}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve018_1 as THREE.Mesh).geometry}
            material={materials["SVGMat.022"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve018_2 as THREE.Mesh).geometry}
            material={materials["Material.003"]}
          />
        </group>
        <group
          position={[0.781, 0, 0.623]}
          rotation={[0, 0.873, 0]}
          scale={0.155}
        >
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
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve032 as THREE.Mesh).geometry}
          material={materials["SVGMat.067"]}
          position={[-0.434, 0, -0.899]}
          rotation={[Math.PI, -0.443, Math.PI]}
          scale={0.233}
        />
        <group
          position={[-0.973, 0, -0.221]}
          rotation={[Math.PI, -1.364, Math.PI]}
          scale={0.233}
        >
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
      <group
        rotation={[0, Math.PI / 2, 0]}
        scale={5.25}
        ref={(node) => {
          if (node) props.setRing3Group?.(node);
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve017 as THREE.Mesh).geometry}
          material={materials["SVGMat.002"]}
          position={[0.587, 0, -0.808]}
          rotation={[0, -0.62, 0]}
          scale={0.441}
        />
        <group
          position={[-0.587, 0, -0.808]}
          rotation={[Math.PI, -0.619, Math.PI]}
          scale={0.188}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve015 as THREE.Mesh).geometry}
            material={materials["SVGMat.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve015_1 as THREE.Mesh).geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group position={[0, 0, 1]} scale={0.189}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve016 as THREE.Mesh).geometry}
            material={materials["SVGMat.011"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Curve016_1 as THREE.Mesh).geometry}
            material={materials["Material.002"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Curve024 as THREE.Mesh).geometry}
          material={materials["SVGMat.001"]}
          position={[-0.949, 0, 0.308]}
          rotation={[0, -1.285, 0]}
          scale={0.294}
        />
        <group
          position={[0.949, 0, 0.308]}
          rotation={[0, 1.229, 0]}
          scale={0.189}
        >
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
    </group>
  );
}

useGLTF.preload("/web_technologies_logos.glb");
