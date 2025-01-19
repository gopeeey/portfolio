"use client";

import useSectionScroll from "@/hooks/useSectionScroll";
import { Color, SectionName } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useState } from "react";
import Logo from "../icons/LogoIcon";
import MenuIcon from "../icons/MenuIcon";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [color, setColor] = useState<Color>("dark");
  const activeSection = useSectionScroll({
    start: "top 10%",
    end: "bottom 9%",
  });

  useGSAP(() => {
    const sectionColors: { [key in SectionName]: string } = {
      hero: "transparent",
      experience: "var(--foreground)",
      skills: "var(--background)",
      projects: "var(--background)",
      contact: "var(--foreground)",
    };

    const themes: { [key: string]: Color } = {
      transparent: "dark",
      "var(--foreground)": "light",
      "var(--background)": "dark",
    };

    const currentColor = sectionColors[activeSection];

    gsap.to("#nav-bar", {
      background: currentColor,
      onStart: () => setColor(themes[currentColor]),
      duration: 0.2,
    });
  }, [activeSection]);

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
