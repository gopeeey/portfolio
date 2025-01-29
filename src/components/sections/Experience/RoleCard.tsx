import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";
import Chip from "@/components/ui/Chip";
import { Role } from "@/types";

type Props = {
  role: Role;
  className?: string;
};

export default function RoleCard({ role, className }: Props) {
  return (
    <div className={className} id={`role_${role.id}`}>
      <div className={`role_header_${role.id} -translate-x-[4rem] opacity-0`}>
        <h2 className="font-flamenco text-4xl md:text-6xl xl:text-7xl">
          {role.duration}
        </h2>
        <h1
          className={`role_text_${role.id} text-[1.9rem] md:text-[3rem] xl:text-[5rem] 
        text-light_grey opacity-0 tracking-tighter 
        -mt-5 md:-mt-8 xl:-mt-14 ml-2 md:ml-3
        -translate-y-[2rem]`}
        >
          {role.title}
        </h1>
      </div>

      <div className={`role_details_${role.id} translate-y-[4em] opacity-0`}>
        <div className="flex items-center mt-8">
          <role.companyLogo />
          <span className="ml-3 mr-6 text-lg">{role.companyName}</span>
          <span className="cursor-pointer">
            <ExternalLinkIcon />
          </span>
        </div>

        <div className="mt-8 md:max-w-[60%] xl:max-w-[40%]">
          <p>{role.summary}</p>

          <ul className="mt-12 flex flex-wrap">
            {role.skills.map((skill) => (
              <li
                key={skill}
                className={`role_${role.id}_skills opacity-0 translate-y-[2rem]`}
              >
                <Chip>{skill}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
