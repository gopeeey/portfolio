"use client";

import classNames from "classnames";
import { ReactNode } from "react";
import "./styles.css";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function LiquidGlassContainer({ children, className }: Props) {
  return (
    <div
      className={classNames(
        "liquid-glass border border-gray-200 shadow-xs",
        className
      )}
    >
      {children}
    </div>
  );
}
