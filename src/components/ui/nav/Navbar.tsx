"use client";

import useMaxScreenSize from "@/hooks/useMaxScreenSize";
import useSectionScroll from "@/hooks/useSectionScroll";
import { Color, SectionName } from "@/types";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../icons/LogoIcon";
import LiquidGlassContainer from "../liquid-glass-container/LiquidGlassContainer";
import Menu from "./Menu";
import NavContent from "./NavContent";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [color, setColor] = useState<Color>("dark");
  const activeSection = useSectionScroll();
  const isMid = useMaxScreenSize("md");

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
        transparent: "light",
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
    <nav className={`fixed z-[50] w-full`} id="nav-bar">
      <LiquidGlassContainer className="flex w-full justify-between border-b border-b-gray-300 !shadow-none items-center m-0 px-xs py-6 sm:px-sm lg:px-lg 2xl:px-2xl lg:py-7">
        <Link href="#hero" className="relative z-100">
          <Logo color={altColor} />
        </Link>

        {isMid ? <Menu color={altColor} /> : <NavContent />}
      </LiquidGlassContainer>
    </nav>
  );
}
