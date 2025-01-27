import { Html } from "@react-three/drei";
import { extend, Vector3 } from "@react-three/fiber";
import { forwardRef, useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import { Font, FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";

extend({ TextGeometry });

type Props = {
  content: string;
  position?: Vector3;
  size?: number;
};

const loader = new FontLoader();

const Text = forwardRef<THREE.Mesh, Props>(
  ({ content, position, size = 0.25 }, ref) => {
    const [font, setFont] = useState<Font | null>(null);

    useEffect(() => {
      loader.load("/fonts/Montserrat_Medium_Regular.json", (data) => {
        setFont(data);
      });
    }, []);

    const textGeo = useMemo(() => {
      if (!font) return null;
      return new TextGeometry(content, {
        font,
        size,
        depth: 0,
      });
    }, [font, content, size]);

    if (!textGeo) return <Html>{content}</Html>;
    return (
      <mesh geometry={textGeo} position={position} ref={ref}>
        <meshLambertMaterial attach="material" color={0xffffff} />
      </mesh>
    );
  }
);

Text.displayName = "Text";

export default Text;
