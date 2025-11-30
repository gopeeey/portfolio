import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", link: "/" },
  { name: "Work", link: "/work" },
  { name: "About", link: "/about" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

export default function NavContent() {
  const currentPath = usePathname();

  return (
    <div className="flex items-center gap-10 relative z-100">
      {links.map((l) => (
        <Link
          href={l.link}
          key={l.name}
          className={classNames("font-medium transition-all text-gray-500", {
            "text-primary":
              currentPath === l.link ||
              (currentPath.startsWith(l.link) &&
                l.link.length > currentPath.length),
            // "text-border": !currentPath.startsWith(l.link),
          })}
        >
          {l.name}
        </Link>
      ))}
    </div>
  );
}
