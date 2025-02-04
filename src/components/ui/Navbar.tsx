"use client";

import useSectionScroll from "@/hooks/useSectionScroll";
import { Color, SectionName } from "@/types";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import Logo from "../icons/LogoIcon";
import Menu from "./Menu";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [color, setColor] = useState<Color>("dark");
  const activeSection = useSectionScroll({
    start: "top 10%",
    end: "bottom 9%",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionColors: { [key in SectionName]: string } = {
        hero: "transparent",
        experience: "var(--foreground)",
        skills: "transparent",
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
    });

    return () => ctx.revert();
  }, [activeSection]);

  const altColor: Color = color === "light" ? "dark" : "light";
  return (
    <nav
      className={`flex fixed z-[40] w-full justify-between items-center m-0 px-xs py-6 sm:px-sm lg:px-lg 2xl:px-2xl lg:py-7 bg-transparent`}
      id="nav-bar"
    >
      <a href="#hero">
        <Logo color={altColor} />
      </a>

      <Menu color={altColor} />
    </nav>
  );
}
