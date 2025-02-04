import BlendingBytesLogo from "@/components/icons/BlendingBytesLogo";
import BluuLogo from "@/components/icons/BluuLogo";
import GithubIcon from "@/components/icons/GithubIcon";
import HeyfoodLogo from "@/components/icons/HeyfoodLogo";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import NpmIcon from "@/components/icons/NpmIcon";
import TuringLogo from "@/components/icons/TuringLogo";
import { Project, Role, Social } from "@/types";

export const roles: Role[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    companyName: "Turing",
    companyLogo: TuringLogo,
    duration: "Apr - Nov 2024",
    summary:
      "Optimized large language models (LLMs) through advanced training and fine-tuning techniques to enhance code-related task-specific performance and language comprehension.",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Node.js",
      "React",
      "SQL",
      "Docker",
    ],
    link: "https://www.turing.com/",
  },

  {
    id: 2,
    title: "Backend Consultant",
    companyName: "Blending Bytes",
    companyLogo: BlendingBytesLogo,
    duration: "2023 - 2024",
    summary:
      "Enhanced user experience by implementing a faceted search backend for a used cars marketplace. Optimized database performance to reduce costs, and improved developer experience through detailed backend architecture insights.",
    skills: ["TypeScript", "Node.js", "MongoDB"],
    link: "https://www.blendingbytes.com/",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    companyName: "Heyfood",
    companyLogo: HeyfoodLogo,
    duration: "2021 - 2023",
    summary:
      "Improved delivery speed by 20% by automating order batching and payouts, making the process more efficient for vendors and drivers. Helped drive growth by rapidly iterating on features to support growth hacks. Built a real-time monitoring dashboard that improved customer support response times and streamlined grocery vendor onboarding, cutting the process by 50%. Enhanced operational efficiency with better system insights and reduced database costs by 65% by migrating from MongoDB to PostgreSQL.",
    skills: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "AWS",
      "Azure",
      "Docker",
      "React",
      "Next.js",
      "Material UI",
    ],
    link: "https://heyfood.africa/",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    companyName: "Bluu Africa",
    companyLogo: BluuLogo,
    duration: "2019 - 2021",
    summary:
      "Enhanced brand visibility by developing a company blog and contributed to revenue generation by building and maintaining a scalable e-commerce platform.",
    skills: [
      "JavaScript",
      "Python",
      "PostgreSQL",
      "React",
      "Next.js",
      "Material UI",
    ],
    link: "https://www.linkedin.com/company/bluu-africa/?originalSubdomain=ng",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Codewatch",
    description:
      "An open source error logging and monitoring system for Node.js applications. It helps developers track errors and exceptions, making it easier to identify and fix issues.",
    technologies: [
      "Typescript",
      "Node.js",
      "PostgreSQL",
      "Jest",
      "ExpressJS",
      "NestJS",
      "React",
      "TailwindCSS",
    ],
    github: "https://github.com/gopeeey/codewatch",
    npm: "https://www.npmjs.com/package/codewatch-core",
    img: "/images/codewatch_screenshot.png",
  },
  {
    id: 2,
    title: "Bufferbus",
    description:
      "An npm package that provides a simple interface for uploading files from a node.js application to major cloud storage platforms, including S3, Google Cloud Storage, Azure Blob Storage, Firebase, and Google Drive.",
    technologies: [
      "AWS S3",
      "Google Cloud Storage",
      "Azure Blob Storage",
      "Firebase",
      "TypeScript",
      "Node.js",
    ],
    github: "https://github.com/gopeeey/bufferbus",
    npm: "https://www.npmjs.com/package/bufferbus",
    img: "/images/bufferbus_screenshot.png",
  },
  {
    id: 3,
    title: "Paychip",
    description:
      "A platform for businesses to create and manage wallets for their users. It implements a RESTful API for creating, funding, and withdrawing from wallets while maintaining accurate transaction records, allowing businesses to focus on writing their business logic.",
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "Jest"],
    github: "https://github.com/gopeeey/paychip",
    img: "/images/paychip_screenshot.png",
  },
  {
    id: 4,
    title: "S.A.T.G",
    description:
      "Short for Super Awesome Typing Game. A real-time multiplayer typing game",
    technologies: [
      "TypeScript",
      "JavaScript",
      "Socket.IO",
      "RabbitMQ",
      "MongoDB",
      "Redis",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/gopeeey/satg",
    demo: "https://satg.gopeh.com",
    img: "/images/satg_screenshot.png",
  },
  {
    id: 5,
    title: "U.O.D",
    description:
      "Up Or Down. A simple application for monitoring the up or down status of a user's desired sites. It is built entirely in Node.js without third-party libraries (as an added challenge).",
    technologies: ["JavaScript", "Node.js", "HTML", "CSS"],
    github: "https://github.com/gopeeey/up_or_down",
    img: "/images/uod_screenshot.png",
  },
  {
    id: 6,
    title: "Irrational",
    description:
      "A simple demonstration of simple and complex patterns in rational and irrational numbers.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/gopeeey/irrational",
    demo: "https://irrational.gopeh.com/",
    img: "/images/irrational_screenshot.png",
  },
  {
    id: 7,
    title: "ASCII Me",
    description:
      "Just a fun page that renders pictures, videos and camera input using ASCII characters",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/gopeeey/ascii-me",
    demo: "https://asciime.gopeh.com/",
    img: "/images/asciime_screenshot.png",
  },
  {
    id: 8,
    title: "Personal Website",
    description:
      "My personal website featuring a 3d portfolio. Implemented using Three.js and GSAP.",
    technologies: ["TypeScript", "React", "Next.js", "Three.js", "GSAP"],
    github: "https://github.com/gopeeey/portfolio",
    demo: "https://gopeh.com",
    img: "/images/portfolio_screenshot.png",
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
