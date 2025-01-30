"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

type Props = {
  sectionId: string;
  header: string;
  subheader: string;
  marginTop?: number;
  animationDelay?: number;
  variant?: "white" | "black";
};

export default function SectionTitle({
  sectionId,
  header,
  subheader,
  marginTop = 60,
  animationDelay = 2.3,
  variant = "black",
}: Props) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const introTimeline = gsap.timeline({ defaults: { duration: 10 } });
      ScrollTrigger.create({
        animation: introTimeline,
        trigger: `#${sectionId}_title_root`,
        start: "top 40%",
        end: "bottom top",
        scrub: 1.5,
        pin: `#${sectionId}_title_container`,
      });

      introTimeline.to(
        `.${sectionId}_header_letter`,
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 2,
          delay: animationDelay,
        },
        0
      );

      introTimeline.to(
        `#${sectionId}_subheader`,
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        ">-55%"
      );
    });

    return () => ctx.revert();
  }, [animationDelay, sectionId]);

  return (
    <div
      className={`h-[100vh] relative mt-[${marginTop}rem]`}
      id={`${sectionId}_title_root`}
    >
      <div
        className={`z-30 ${variant === "white" ? "text-foreground" : ""}`}
        id={`${sectionId}_title_container`}
      >
        <h1
          className={`font-montserrat text-[2.8rem] 
            md:text-[3.4rem] xl:text-[5rem]
            `}
          id={`${sectionId}_header`}
        >
          {header.split(" ").map((word) => (
            <span key={word} className="inline-block mr-3">
              {word.split("").map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block ${sectionId}_header_letter opacity-0 scale-0`}
                >
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p
          className="xl:text-[1.4rem] opacity-0 translate-y-4"
          id={`${sectionId}_subheader`}
        >
          {subheader}
        </p>
      </div>
    </div>
  );
}
