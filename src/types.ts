import React from "react";
export type Color = "light" | "dark";

export type SectionName =
  | "hero"
  | "experience"
  | "skills"
  | "projects"
  | "contact";

export type Role = {
  id: number;
  duration: string;
  title: string;
  companyName: string;
  companyLogo: () => React.ReactElement;
  summary: string;
  skills: string[];
};
