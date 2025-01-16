import { Color } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as React from "react";
import { colorMap } from "./constants";

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: Color;
}

const lineClassName = "line";
export default function MenuIcon({ color = "light", ...props }: Props) {
  useGSAP(() => {
    gsap.to(`.${lineClassName}`, {
      fill: colorMap[color],
    });
  }, [color]);

  return (
    <svg
      width={33}
      height={14}
      viewBox="0 0 33 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 2L32 2C32.5523 2 33 1.55228 33 1C33 0.447715 32.5523 0 32 0L1 0C0.447716 0 0 0.447715 0 1C0 1.55228 0.447716 2 1 2Z"
        fill="#EDE9E9"
        className={lineClassName}
      />
      <path
        d="M12 14L32 14C32.5523 14 33 13.5523 33 13C33 12.4477 32.5523 12 32 12L12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z"
        fill="#EDE9E9"
        className={lineClassName}
      />
    </svg>
  );
}
