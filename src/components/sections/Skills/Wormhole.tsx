"use client";

import { randNumBtw, scaleNumber } from "@/lib/utils";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { AWS } from "./skills_models/AWS";
import { Azure } from "./skills_models/Azure";
import { CSS } from "./skills_models/CSS";
import { Docker } from "./skills_models/Docker";
import { Express } from "./skills_models/Express";
import { Firebase } from "./skills_models/Firebase";
import { Git } from "./skills_models/Git";
import { HTML } from "./skills_models/HTML";
import { Javascript } from "./skills_models/Javascript";
import { Jest } from "./skills_models/Jest";
import { MaterialUI } from "./skills_models/MaterialUI";
import { MongoDB } from "./skills_models/MongoDB";
import { Next } from "./skills_models/Next";
import { Node } from "./skills_models/Node";
import { Postgres } from "./skills_models/Postgres";
import { RabbitMQ } from "./skills_models/RabbitMQ";
import { React } from "./skills_models/React";
import { Redis } from "./skills_models/Redis";
import { SocketIO } from "./skills_models/SocketIO";
import { Tailwind } from "./skills_models/Tailwind";
import { Typescript } from "./skills_models/Typescript";
import Text from "./Text";

type Props = {
  geometry: THREE.TubeGeometry;
  camera: THREE.PerspectiveCamera | null;
};

export default function Wormhole({ geometry, camera }: Props) {
  const { edgesGeo, edgesMat } = useMemo(() => {
    const edgesGeo = new THREE.EdgesGeometry(geometry, 0.1);
    const edgesMat = new THREE.LineBasicMaterial({ color: 0xffffff });

    return { edgesGeo, edgesMat };
  }, [geometry]);

  const [title, setTitle] = useState<THREE.Group | null>(null);

  const awsRef = useRef<THREE.Group | null>(null);
  const azureRef = useRef<THREE.Group | null>(null);
  const cssRef = useRef<THREE.Group | null>(null);
  const dockerRef = useRef<THREE.Group | null>(null);
  const expressRef = useRef<THREE.Group | null>(null);
  const firebaseRef = useRef<THREE.Group | null>(null);
  const gitRef = useRef<THREE.Group | null>(null);
  const htmlRef = useRef<THREE.Group | null>(null);
  const javascriptRef = useRef<THREE.Group | null>(null);
  const jestRef = useRef<THREE.Group | null>(null);
  const materialuiRef = useRef<THREE.Group | null>(null);
  const mongodbRef = useRef<THREE.Group | null>(null);
  const nextRef = useRef<THREE.Group | null>(null);
  const nodeRef = useRef<THREE.Group | null>(null);
  const postgresRef = useRef<THREE.Group | null>(null);
  const rabbitmqRef = useRef<THREE.Group | null>(null);
  const reactRef = useRef<THREE.Group | null>(null);
  const redisRef = useRef<THREE.Group | null>(null);
  const socketioRef = useRef<THREE.Group | null>(null);
  const tailwindRef = useRef<THREE.Group | null>(null);
  const typescriptRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (
      !camera ||
      !title ||
      !awsRef.current ||
      !azureRef.current ||
      !cssRef.current ||
      !dockerRef.current ||
      !expressRef.current ||
      !firebaseRef.current ||
      !gitRef.current ||
      !htmlRef.current ||
      !javascriptRef.current ||
      !jestRef.current ||
      !materialuiRef.current ||
      !mongodbRef.current ||
      !nextRef.current ||
      !nodeRef.current ||
      !postgresRef.current ||
      !rabbitmqRef.current ||
      !reactRef.current ||
      !redisRef.current ||
      !socketioRef.current ||
      !tailwindRef.current ||
      !typescriptRef.current
    ) {
      return;
    }
    const skills = [
      typescriptRef.current,
      javascriptRef.current,
      nodeRef.current,
      expressRef.current,
      postgresRef.current,
      mongodbRef.current,
      redisRef.current,
      rabbitmqRef.current,
      socketioRef.current,
      jestRef.current,
      awsRef.current,
      azureRef.current,
      firebaseRef.current,
      dockerRef.current,
      htmlRef.current,
      cssRef.current,
      reactRef.current,
      nextRef.current,
      tailwindRef.current,
      materialuiRef.current,
      gitRef.current,
    ];

    const titlePos = geometry.parameters.path.getPointAt(0.06);
    const titleLookAt = geometry.parameters.path.getPointAt(0.05);
    title.position.copy(titlePos);
    title.lookAt(titleLookAt);

    for (let i = 0; i < skills.length; i++) {
      const p = scaleNumber(i, 0, skills.length - 1, 0.12, 0.93);
      const pos = geometry.parameters.path.getPointAt(p);
      const lookAt = geometry.parameters.path.getPointAt(p - 0.01);
      skills[i].position.copy(pos);

      let maxOffset = 0.2;
      if (window.innerWidth < 768) maxOffset = 0.1;
      skills[i].position.x += randNumBtw(-maxOffset, maxOffset);
      skills[i].position.y += randNumBtw(-maxOffset, maxOffset);
      skills[i].position.z += randNumBtw(-maxOffset, maxOffset);

      skills[i].lookAt(lookAt);
    }
  }, [geometry, camera, title]);

  return (
    <group>
      <hemisphereLight color={0xffffff} intensity={5} />
      <group
        ref={(node) => {
          if (node) setTitle(node);
        }}
      >
        <Text content="Skills" position={[-0.2, 0, 0]} />
        <Text
          content="Tools of Mastery"
          size={0.05}
          position={[-0.18, -0.15, 0]}
        />
      </group>

      <AWS ref={awsRef} />
      <Azure ref={azureRef} />
      <CSS ref={cssRef} />
      <Docker ref={dockerRef} />
      <Express ref={expressRef} />
      <Firebase ref={firebaseRef} />
      <Git ref={gitRef} />
      <HTML ref={htmlRef} />
      <Javascript ref={javascriptRef} />
      <Jest ref={jestRef} />
      <MaterialUI ref={materialuiRef} />
      <MongoDB ref={mongodbRef} />
      <Next ref={nextRef} />
      <Node ref={nodeRef} />
      <Postgres ref={postgresRef} />
      <RabbitMQ ref={rabbitmqRef} />
      <React ref={reactRef} />
      <Redis ref={redisRef} />
      <SocketIO ref={socketioRef} />
      <Typescript ref={typescriptRef} />
      <Tailwind ref={tailwindRef} />
      <lineSegments geometry={edgesGeo} material={edgesMat} />
    </group>
  );
}
