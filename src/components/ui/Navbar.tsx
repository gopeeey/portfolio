"use client";

import { Color } from "@/types";
import Link from "next/link";
import { useState } from "react";
import Logo from "../icons/LogoIcon";
import MenuIcon from "../icons/MenuIcon";

export default function Navbar() {
  const [color, setColor] = useState<Color>("dark");

  const altColor: Color = color === "light" ? "dark" : "light";
  return (
    <nav
      className={`flex justify-between items-center px-xs py-6 lg:px-lg lg:py-7 ${
        color === "light" ? "bg-foreground" : "bg-background"
      }`}
      onClick={() => setColor(color === "dark" ? "light" : "dark")}
    >
      <Link href={"./"}>
        <Logo color={altColor} />
      </Link>

      <MenuIcon color={altColor} />
    </nav>
  );
}
