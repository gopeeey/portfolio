import { Color, SectionName } from "./types";

export const colors: Color[] = ["light", "dark"];

export const sections: SectionName[] = [
  "hero",
  "experience",
  "skills",
  "projects",
  "contact",
];

export const sectionColorMap: { [key in SectionName]: Color } = {
  hero: "dark",
  experience: "light",
  skills: "dark",
  projects: "dark",
  contact: "light",
};
