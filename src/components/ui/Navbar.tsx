"use client";

import { Color } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useState } from "react";
import Logo from "../icons/LogoIcon";
import MenuIcon from "../icons/MenuIcon";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [color, setColor] = useState<Color>("dark");

  useGSAP(() => {
    const sections = [
      ["hero-section", "transparent"],
      ["experience-section", "var(--foreground)"],
      ["skills-section", "var(--background)"],
    ];

    const colors: { [key: string]: Color } = {
      transparent: "dark",
      "var(--foreground)": "light",
      "var(--background)": "dark",
    };

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i][0];
      const color = sections[i][1];
      const prevColor = sections[Math.max(0, i - 1)][1];

      const callback = () => {
        setColor(colors[color]);
      };

      const reverseCallback = () => {
        setColor(colors[prevColor]);
      };

      gsap.to("#nav-bar", {
        backgroundColor: color,
        scrollTrigger: {
          trigger: `#${section}`,
          start: "top top",
          end: "bottom bottom",
          toggleActions: "play none reverse none",
        },
        onStart: callback,
        onReverseComplete: reverseCallback,
      });
    }
  });

  const altColor: Color = color === "light" ? "dark" : "light";
  return (
    <nav
      className={`flex fixed z-[30] w-full justify-between items-center m-0 px-xs py-6 sm:px-sm lg:px-lg 2xl:px-2xl lg:py-7 bg-transparent`}
      id="nav-bar"
    >
      <Logo color={altColor} />

      <MenuIcon color={altColor} />
    </nav>
  );
}
