"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-montserrat), sans-serif",
  },
  palette: {
    primary: {
      main: "rgb(0, 0, 0)",
    },
    // secondary: {
    //   main: "var(--color-secondary)",
    // },
  },
});

export default theme;
