import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./data";

export default function NavContent() {
  const currentPath = usePathname();

  return (
    <div className="flex items-center gap-10 relative z-100">
      {navLinks.map((l) => (
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
