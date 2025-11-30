import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import NpmIcon from "@/components/icons/NpmIcon";
import Chip from "@/components/ui/Chip";
import LiquidGlassContainer from "@/components/ui/liquid-glass-container/LiquidGlassContainer";
import { Project } from "@/types";
import Image from "next/image";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <LiquidGlassContainer className="text-lighter_grey mb-40 project_card rounded-3xl overflow-hidden">
      <div>
        <Image
          src={project.img}
          alt={`${project.title} screenshot`}
          width={2520}
          height={1333}
        />
      </div>

      <div className="px-5 mt-4 pb-2">
        <div className="flex items-center w-fit">
          <h4 className="text-xl font-medium">{project.title}</h4>

          <a className=" ml-5" href={project.github} target="_blank">
            <GithubIcon fill="rgb(var(--background))" />
          </a>

          {project.npm ? (
            <a className=" ml-5" href={project.npm} target="_blank">
              <NpmIcon fill="rgb(var(--background))" />
            </a>
          ) : null}

          {project.demo ? (
            <a className=" ml-5" href={project.demo} target="_blank">
              <ExternalLinkIcon stroke="var(--background)" />
            </a>
          ) : null}
        </div>

        <p className="mt-3 leading-[1.6rem] w-[96%]">{project.description}</p>

        <div className="mt-8">
          {project.technologies.map((skill) => (
            <Chip key={skill} variant="outlined">
              {skill}
            </Chip>
          ))}
        </div>
      </div>
    </LiquidGlassContainer>
  );
}
