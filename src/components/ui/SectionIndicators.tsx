"use client";

import { sectionColorMap, sections } from "@/constants";
import { useAnimationReadyStore } from "@/hooks/useAnimationReadyStore";
import useSectionScroll from "@/hooks/useSectionScroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMemo, useRef } from "react";

export default function SectionIndicators() {
  const heroReady = useAnimationReadyStore((state) => state.heroReady);
  const currentSection = useSectionScroll({
    start: "top 80%",
    end: "bottom 79%",
  });
  const introAnimation = useRef<boolean | null>(false);

  useGSAP(() => {
    const isHero = currentSection === "hero";
    if (isHero && !heroReady) return;

    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "back.out(2)",
        delay: isHero ? 4.5 : 0.1,
      },
    });

    tl.to(".section-indicator", {
      opacity: 1,
      scale: 1,
      rotate: "45deg",
      background: "transparent",
      delay: introAnimation.current ? 0 : isHero ? 4.5 : 0,
    });

    if (!introAnimation.current) {
      tl.to(".section-indicator", {
        y: 0,
        delay: isHero ? 0.3 : 0.1,
      });
    }

    tl.to(
      ".current-section",
      {
        rotate: "0deg",
        scale: 1.7,
        background:
          sectionColorMap[currentSection] === "dark"
            ? "var(--foreground)"
            : currentSection === "experience" && window.innerWidth >= 768
            ? "var(--foreground)"
            : "var(--background)",
        delay: introAnimation.current ? 0 : isHero ? 4.7 : 0,
      },
      0
    );

    introAnimation.current = true;
  }, [heroReady, currentSection]);

  const theme = useMemo(
    () => sectionColorMap[currentSection],
    [currentSection]
  );

  return (
    <div className="fixed text-white z-50 top-[65vh] left-[100%] -translate-x-[100%] pr-xs sm:pr-sm lg:pr-lg 2xl:pr-2xl">
      {sections.map((section, index) => (
        <button
          key={section}
          className={`
            section-indicator w-3 h-3 border-solid 
            border-[1.5px]
            mb-6 cursor-pointer rounded-[0.19rem] opacity-0 
            block
            ${theme === "light" ? "border-background" : "border-foreground"}
            ${
              theme === "light" && currentSection === "experience"
                ? "sm:border-foreground"
                : ""
            }
            ${currentSection === section ? "current-section" : ""}`}
          style={{
            transform: `translate(0px, -${
              2 * 1.125 * index
            }rem) rotate(45deg) scale(0)`,
          }}
          onClick={() => {
            const target = document.getElementById(section);
            if (target)
              target.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }}
        ></button>
      ))}
    </div>
  );
}
