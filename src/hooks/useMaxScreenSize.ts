import { ScreenBreakPoint } from "@/types";
import { useMediaQuery } from "./useMediaQuery";

type BreakPoint = Exclude<ScreenBreakPoint, "2xl">;

export const queries: Record<BreakPoint, string> = {
  xs: "(max-width: 639px)",
  sm: "(max-width: 767px)",
  md: "(max-width: 1023px)",
  lg: "(max-width: 1279px)",
  xl: "(max-width: 1535px)",
};

export default function useMaxScreenSize(
  breakpoint: BreakPoint,
  defaultValue = false
) {
  return useMediaQuery(queries[breakpoint], defaultValue);
}
