"use client";

import useMaxScreenSize from "@/hooks/useMaxScreenSize";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import Logo from "../../icons/LogoIcon";
import LiquidGlassContainer from "../liquid-glass-container/LiquidGlassContainer";
import Menu from "./Menu";
import NavContent from "./NavContent";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const isMid = useMaxScreenSize("md", true);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const sectionColors: { [key in SectionName]: string } = {
  //       hero: "transparent",
  //       experience: "var(--foreground)",
  //       skills: "transparent",
  //       projects: "var(--background)",
  //       contact: "var(--foreground)",
  //     };

  //     const themes: { [key: string]: Color } = {
  //       transparent: "light",
  //       "var(--foreground)": "light",
  //       "var(--background)": "dark",
  //     };

  //     const currentColor = sectionColors[activeSection];

  //     gsap.to("#nav-bar", {
  //       background: currentColor,
  //       onStart: () => setColor(themes[currentColor]),
  //       duration: 0.2,
  //     });
  //   });

  //   return () => ctx.revert();
  // }, [activeSection]);

  return (
    <nav className={`fixed z-[50] w-full`} id="nav-bar">
      <LiquidGlassContainer className="flex w-full justify-between border-b border-b-gray-300 !shadow-none items-center m-0 px-xs py-6 sm:px-sm lg:px-lg 2xl:px-2xl lg:py-7">
        <Link href="/" className="relative z-100">
          <Logo color="dark" />
        </Link>

        {isMid ? <Menu color="dark" /> : <NavContent />}
      </LiquidGlassContainer>
    </nav>
  );
}
