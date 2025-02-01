import GithubIcon from "@/components/icons/GithubIcon";
import HeyfoodLogo from "@/components/icons/HeyfoodLogo";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import NpmIcon from "@/components/icons/NpmIcon";
import { Role, Social } from "@/types";

export const roles: Role[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    companyName: "Heyfood",
    companyLogo: HeyfoodLogo,
    duration: "2020 - 2022",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "Japanese",
      "AWS",
      "Azure",
    ],
  },

  {
    id: 2,
    title: "Full Stack Developer",
    companyName: "Turing",
    companyLogo: HeyfoodLogo,
    duration: "2020 - 2022",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "Japanese",
      "AWS",
      "Azure",
    ],
  },

  {
    id: 3,
    title: "Full Stack Developer",
    companyName: "Blending Bytes",
    companyLogo: HeyfoodLogo,
    duration: "2020 - 2022",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "Japanese",
      "AWS",
      "Azure",
    ],
  },
];

export const socials: Social[] = [
  {
    name: "GitHub",
    link: "https://github.com/gopeeey",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/samuel-gopeh-3847719b/",
    icon: LinkedInIcon,
  },
  {
    name: "npm",
    link: "https://www.npmjs.com/~gopeeey",
    icon: NpmIcon,
  },
];
