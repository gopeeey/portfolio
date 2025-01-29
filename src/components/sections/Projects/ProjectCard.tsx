import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";
import Chip from "@/components/ui/Chip";
import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="text-lighter_grey mb-[10rem] project_card ">
      <a href="https://google.com" target="__blank">
        <div className="overflow-hidden rounded-2xl border-[1.6px] border-foreground">
          <Image
            src={"/images/codewatch_screenshot.png"}
            alt="Codewatch screenshot"
            width={2520}
            height={1333}
          />
        </div>
      </a>

      <a
        href="https://google.com"
        target="__blank"
        className="flex items-center w-min"
      >
        <h4 className="text-xl mt-8 text-gray-300 font-medium">Codewatch</h4>
        <span className="-mb-7 ml-4">
          <ExternalLinkIcon stroke="var(--foreground)" />
        </span>
      </a>

      <p className="mt-6 leading-[1.6rem] w-[96%]">
        A free and open source error logging and monitoring system for Node.js
        applications. It helps developers track errors and exceptions, making it
        easier to identify and fix issues.
      </p>

      <div className="mt-8">
        {[
          "Typescript",
          "Node.js",
          "PostgreSQL",
          "Jest",
          "ExpressJS",
          "NestJS",
        ].map((skill) => (
          <Chip key={skill} variant="outlined">
            {skill}
          </Chip>
        ))}
      </div>
    </div>
  );
}
