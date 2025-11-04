"use client";

import { Typography } from "@mui/material";
import classNames from "classnames";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

type Props = {
  sectionId: string;
  header: string;
  subheader: string;
  animationDelay?: number;
  variant?: "white" | "black";
  direction?: "left-to-right" | "right-to-left";
  className?: string;
  useScroll?: boolean;
};

export default function SectionTitle({
  sectionId,
  header,
  subheader,
  animationDelay = 2.3,
  variant = "black",
  direction = "left-to-right",
  className,
  useScroll = true,
}: Props) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const introTimeline = gsap.timeline({ defaults: { duration: 10 } });
      if (useScroll) {
        ScrollTrigger.create({
          animation: introTimeline,
          trigger: `#${sectionId}_title_root`,
          start: "top 40%",
          end: "bottom top",
          scrub: 1.5,
          pin: `#${sectionId}_title_container`,
        });
      }

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
  }, [animationDelay, sectionId, useScroll]);

  return (
    <div
      className={classNames(`h-screen relative`, className)}
      id={`${sectionId}_title_root`}
    >
      <div
        className={classNames(
          "z-30 flex flex-col gap-2",
          variant === "white" ? "text-foreground" : "text-background",
          direction === "right-to-left" ? "items-end" : "items-start"
        )}
        id={`${sectionId}_title_container`}
      >
        <Typography
          variant="h4"
          className={`font-montserrat text-[2.8rem] !m-0 !ml-0
            md:text-[3.4rem] xl:text-[5rem]
            `}
          id={`${sectionId}_header`}
        >
          {header.split(" ").map((word, index, arr) => (
            <span
              key={word}
              className={classNames("inline-block", {
                "mr-3": index !== arr.length - 1,
              })}
            >
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
        </Typography>
        <Typography
          className="text-[1.1rem] xl:text-[1.4rem] opacity-0 translate-y-4 text-primary"
          id={`${sectionId}_subheader`}
        >
          {subheader}
        </Typography>
      </div>
    </div>
  );
}
