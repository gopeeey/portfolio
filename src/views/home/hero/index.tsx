"use client";

import Section from "@/components/ui/Section";
import gsap from "gsap";
import { useEffect } from "react";

export default function Hero() {
  const ready = true;

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!ready) return;
      const tl = gsap.timeline({ defaults: { duration: 1, delay: 1 } });

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
    <Section id="hero" className="pt-32 flex flex-col justify-center">
      <h1 className=" -mt-[4.2rem] lg:-mt-[5.9rem] text-6xl sm:text-6xl xl:text-8xl relative z-19 tracking-[-0.07em]">
        {"Samuel Gopeh.".split(" ").map((word) => (
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

      <p className="relative text-md sm:text-lg md:text-3xl mt-5 z-19 paragraph opacity-0 translate-y-4 text-primary">
        FULL STACK DEVELOPER
      </p>

      <p className="relative text-sm sm:text-md xl:text-md mt-4 sm:mt-10 z-19 w-[70%] sm:w-[90%] md:w-[60%] xl:w-[37%] paragraph opacity-0 translate-y-4">
        Building digital experiences that just…click.
      </p>
    </Section>
  );
}
