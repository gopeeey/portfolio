import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";
import HeyfoodLogo from "@/components/icons/HeyfoodLogo";

export default function RoleCard() {
  return (
    <div>
      <h2 className="font-flamenco text-4xl md:text-6xl xl:text-7xl">
        2020 - 2022
      </h2>
      <h1
        className={`text-[1.9rem] md:text-[3rem] xl:text-[5rem] 
        text-light_grey opacity-45 tracking-tighter 
        -mt-5 md:-mt-8 xl:-mt-14 ml-2 md:ml-3`}
      >
        Full Stack Developer
      </h1>

      <div className="flex items-center mt-8">
        <HeyfoodLogo />
        <span className="ml-3 mr-6 text-lg">Heyfood</span>
        <ExternalLinkIcon />
      </div>

      <div className="mt-8 md:max-w-[60%] xl:max-w-[40%]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <ul className="mt-12 flex flex-wrap">
          {[
            "React",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "Redis",
            "MongoDB",
            "Japanese",
            "AWS",
            "Azure",
          ].map((skill) => (
            <li key={skill}>
              <Chip>{skill}</Chip>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="mr-2 mb-2 inline-block text-xs bg-light_grey text-white px-2 py-1 text-center rounded-md">
      {children}
    </span>
  );
}
