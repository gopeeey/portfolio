import { sections } from "@/constants";
import { SectionName } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

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

  useGSAP(() => {
    sections.forEach((section) => {
      const trigger = ScrollTrigger.create({
        trigger: `#${section}`,
        start,
        end,
        markers,
        onEnter: () => setActive(section),
        onEnterBack: () => setActive(section),
      });

      return () => trigger.kill();
    });
  });

  return active;
}
