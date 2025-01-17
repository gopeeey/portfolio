"use client";

import Section from "@/components/ui/Section";
import { useAnimationReadyStore } from "@/hooks/useAnimationReadyStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeroScene from "./Scene";

export default function HeroSection() {
  const ready = useAnimationReadyStore((store) => store.heroReady);

  useGSAP(() => {
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
  }, [ready]);

  return (
    <Section
      id="hero-section"
      className="bg-background text-foreground flex flex-col justify-center white-selection"
    >
      <HeroScene />
      <h1 className="font-montserrat font-bold -mt-28 lg:-mt-0 text-6xl relative z-19 tracking-tighter">
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
      <p className="relative text-lg md:text-xl mt-5 z-30 paragraph opacity-0 translate-y-4">
        Full Stack Developer
      </p>

      <p className="relative text-xs sm:text-sm xl:text-md mt-10 z-30 paragraph opacity-0 translate-y-4">
        I enjoy building efficient and scalable software solutions using clean
        architecture
      </p>
    </Section>
  );
}
