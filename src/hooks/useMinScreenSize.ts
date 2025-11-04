import { ScreenBreakPoint } from "@/types";
import { useMediaQuery } from "./useMediaQuery";

export const queries: { [key in ScreenBreakPoint]: string } = {
  xs: "(min-width: 0px)",
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
};

export default function useMinScreenSize(breakpoint: ScreenBreakPoint) {
  return useMediaQuery(queries[breakpoint]);
}
