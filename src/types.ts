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
  link: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  img: string;
  github: string;
  demo?: string;
  npm?: string;
};

export type Social = {
  name: string;
  link: string;
  icon: () => React.ReactElement;
};

export type CurrentContactAnimation = "rest" | "hover" | "fly";

export type EmailData = {
  email: string;
  name: string;
  message: string;
};
