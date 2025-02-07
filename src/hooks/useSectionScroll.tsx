import { sections } from "@/constants";
import { SectionName } from "@/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

type Options = {
  start?: string;
  end?: string;
  markers?: boolean;
};

const defaultOptions: Options = {
  start: "top top",
  end: "bottom bottom",
  markers: false,
};

export default function useSectionScroll({
  start,
  end,
  markers,
}: Options = defaultOptions) {
  const [active, setActive] = useState<SectionName>("hero");

  useEffect(() => {
    const ctx = gsap.context(() => {
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: `#${section}`,
          start,
          end,
          markers,
          onEnter: () => setActive(section),
          onEnterBack: () => setActive(section),
        });
      });
    });

    return () => ctx.kill();
  }, [start, end, markers]);

  return active;
}
