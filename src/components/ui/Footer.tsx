import { socials } from "@/lib/cvData";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-9 px-xs sm:px-sm lg:px-lg 2xl:px-2xl text-center flex justify-between white-selection">
      <div>&copy; {new Date().getFullYear()} Samuel Gopeh</div>
      <div className="flex items-center">
        {socials.map((social) => (
          <a
            href={social.link}
            target="_blank"
            title={social.name}
            key={social.name}
            className="ml-4"
          >
            <social.icon />
          </a>
        ))}
      </div>
    </footer>
  );
}
