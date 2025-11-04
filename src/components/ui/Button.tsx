"use client";

import { Button as MuiButton } from "@mui/material";
import classNames from "classnames";
import { ComponentProps } from "react";
import LiquidGlassContainer from "./liquid-glass-container/LiquidGlassContainer";

type Props = ComponentProps<typeof MuiButton> & {
  glassClassName?: string;
};

export default function Button({
  children,
  size = "medium",
  glassClassName,
  ...props
}: Props) {
  return (
    <LiquidGlassContainer
      className={classNames(
        "group border border-none rounded-lg bg-transparent backdrop-blur-xs relative z-30 hover:p-0 transition-all duration-200 shrink-0 flex items-center justify-center",
        glassClassName
      )}
    >
      <MuiButton
        {...props}
        className={classNames(
          "capitalize shadow-none z-30 rounded-xl m-1 bg-black text-white !font-montserrat font-medium origin-center group-hover:bg-black/65 transition-all duration-500",
          {
            "p-4 px-9": size === "large",
            "p-3 px-8": size === "medium",
            "p-1 px-3": size === "small",
          },
          props.className
        )}
      >
        {children}
      </MuiButton>
    </LiquidGlassContainer>
  );
}
