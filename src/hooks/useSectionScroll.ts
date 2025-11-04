import { sections as sectionNames } from "@/constants";
import { SectionName } from "@/types";
import { useEffect, useState } from "react";

export default function useSectionScroll() {
  const [active, setActive] = useState<SectionName>("hero");

  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY;
      const sections = sectionNames
        .map((sec) => document.getElementById(sec))
        .filter((sec) => sec) as HTMLDivElement[];

      let currentSection: SectionName = "hero";
      sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          currentSection = section.id as SectionName;
        }
      });
      setActive(currentSection);
    };

    handler();

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return active;
}
