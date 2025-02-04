import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";
import Chip from "@/components/ui/Chip";
import { Project } from "@/types";
import Image from "next/image";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="text-lighter_grey mb-[10rem] project_card ">
      <a href={project.link} target="__blank">
        <div className="overflow-hidden rounded-2xl border-[1.6px] border-foreground">
          <Image
            src={project.img}
            alt={`${project.title} screenshot`}
            width={2520}
            height={1333}
          />
        </div>
      </a>

      <a
        href={project.link}
        target="__blank"
        className="flex items-center w-min"
      >
        <h4 className="text-xl mt-8 text-gray-300 font-medium">
          {project.title}
        </h4>
        <span className="-mb-7 ml-4">
          <ExternalLinkIcon stroke="var(--foreground)" />
        </span>
      </a>

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
