"use client";

import Section from "@/components/ui/Section";
import { useAnimationReadyStore } from "@/hooks/useAnimationReadyStore";
import gsap from "gsap";
import { useEffect } from "react";
import HeroScene from "./Scene";

export default function Hero() {
  const ready = useAnimationReadyStore((store) => store.heroReady);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!ready) return;
      const tl = gsap.timeline({ defaults: { duration: 1, delay: 3 } });

      tl.to(".nameLetter", {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        ease: "back.out(3)",
      });

      tl.to(
        ".paragraph",
        {
          opacity: 1,
          y: 0,
          stagger: 0.4,
        },
        1
      );
    });

    return () => ctx.revert();
  }, [ready]);

  return (
    <Section
      id="hero"
      className="bg-background text-foreground flex flex-col justify-center white-selection"
    >
      <div className="absolute w-screen top-0 left-0 overflow-x-hidden">
        <HeroScene />
      </div>

      <h1 className=" -mt-[4.2rem] lg:-mt-0 text-7xl xl:text-8xl relative z-19 tracking-[-0.07em]">
        {"Samuel Gopeh".split(" ").map((word) => (
          <span key={word} className="inline-block mr-4">
            {word.split("").map((letter, index) => (
              <span
                key={index}
                className={`nameLetter inline-block opacity-0 scale-0`}
              >
                {letter}
              </span>
            ))}
          </span>
        ))}
      </h1>
      <p className="relative text-lg md:text-2xl mt-5 z-30 paragraph opacity-0 translate-y-4">
        Full Stack Developer
      </p>

      <p className="relative text-lighter_grey text-md xl:text-md mt-10 z-30 w-[90%] md:w-[60%] xl:w-[37%] paragraph opacity-0 translate-y-4">
        I build efficient software solutions with clean architecture.
      </p>
    </Section>
  );
}
