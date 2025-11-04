"use client";

import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import React from "react";
import theme from "./theme";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
