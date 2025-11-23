import { BlackPlanet } from "@/components/BlackPlanet";
import { GroupProps } from "@react-three/fiber";
import { ComponentProps } from "react";
import * as THREE from "three";
import { WebLogoRings } from "./WebLogosRings";

type Props = {
  planetProps: ComponentProps<typeof BlackPlanet>;
  ringProps: ComponentProps<typeof WebLogoRings>;
  groupProps: GroupProps;
  setGroup: (group: THREE.Group) => void;
};

export default function RingedPlanet({
  planetProps,
  ringProps,
  groupProps,
  setGroup,
}: Props) {
  return (
    <group
      {...groupProps}
      ref={(node) => {
        if (node) setGroup(node);
      }}
    >
      <WebLogoRings
        {...ringProps}
        rotation={[0, 0, Math.PI / 30]}
        position={[0, 0, 0]}
        scale={0.25}
      />
      <BlackPlanet {...planetProps} />
    </group>
  );
}
