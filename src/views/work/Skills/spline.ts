import * as THREE from "three";
import { vertices } from "./vertices";

const scale = 3;

const curvePath = vertices.points.reduce(
  (agg, curr) => [...agg, ...[curr.x * scale, curr.y * scale, curr.z * scale]],
  [] as number[]
);

// construct tunnel track
const points = [];
const len = curvePath.length;
for (let p = 0; p < len; p += 3) {
  points.push(
    new THREE.Vector3(curvePath[p], curvePath[p + 1], curvePath[p + 2])
  );
}

export const spline = new THREE.CatmullRomCurve3(points);
