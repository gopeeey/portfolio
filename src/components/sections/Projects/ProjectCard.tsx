import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import NpmIcon from "@/components/icons/NpmIcon";
import Chip from "@/components/ui/Chip";
import { Project } from "@/types";
import Image from "next/image";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="text-lighter_grey mb-[10rem] project_card ">
      <div className="overflow-hidden rounded-2xl border-[1.6px] border-foreground">
        <Image
          src={project.img}
          alt={`${project.title} screenshot`}
          width={2520}
          height={1333}
        />
      </div>

      <div className="flex items-center w-fit">
        <h4 className="text-xl mt-8 text-gray-300 font-medium">
          {project.title}
        </h4>

        <a className="-mb-7 ml-5" href={project.github} target="_blank">
          <GithubIcon />
        </a>

        {project.npm ? (
          <a className="-mb-7 ml-5" href={project.npm} target="_blank">
            <NpmIcon />
          </a>
        ) : null}

        {project.demo ? (
          <a className="-mb-7 ml-5" href={project.demo} target="_blank">
            <ExternalLinkIcon stroke="var(--foreground)" />
          </a>
        ) : null}
      </div>

      <p className="mt-6 leading-[1.6rem] w-[96%]">{project.description}</p>

      <div className="mt-8">
        {project.technologies.map((skill) => (
          <Chip key={skill} variant="outlined">
            {skill}
          </Chip>
        ))}
      </div>
    </div>
  );
}
