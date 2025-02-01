"use client";

import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/ui/Section";
import { sendEmail } from "@/lib/data/sendEmail";
import { CurrentContactAnimation } from "@/types";
import { FormEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import ContactScene from "./Scene";
import TextInput from "./TextInput";
import { CurrentAnimationContext } from "./contexts";

const sectionId = "contact";
export default function Contact() {
  const [currentAnimation, setCurrentAnimation] =
    useState<CurrentContactAnimation>("rest");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const flightTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const postFlyDelay = 5;

    const onMouseOver = () => {
      if (flightTimer.current) clearTimeout(flightTimer.current);
      if (currentAnimation === "fly") {
        flightTimer.current = setTimeout(() => {
          setCurrentAnimation("hover");
        }, postFlyDelay * 1000);
      } else {
        setCurrentAnimation("hover");
      }
    };

    const onMouseOut = () => {
      if (flightTimer.current) clearTimeout(flightTimer.current);
      if (currentAnimation === "fly") {
        flightTimer.current = setTimeout(() => {
          setCurrentAnimation("rest");
        }, postFlyDelay * 1000);
      } else {
        setCurrentAnimation("rest");
      }
    };

    btn.addEventListener("mouseover", onMouseOver);
    btn.addEventListener("mouseout", onMouseOut);

    return () => {
      btn.removeEventListener("mouseover", onMouseOver);
      btn.removeEventListener("mouseout", onMouseOut);
    };
  }, [currentAnimation]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendEmail({ name, email, message });
      toast.success("Message sent successfully!");
      setCurrentAnimation("fly");

      if (flightTimer.current) clearTimeout(flightTimer.current);

      flightTimer.current = setTimeout(() => {
        setCurrentAnimation("rest");
      }, 7000);
    } catch (e) {
      if (e instanceof Error) toast.error(e.message);
    }
    setLoading(false);
  };

  return (
    <Section id={sectionId} className="pb-36 2xl:pb-[16rem] min-h-[220vh] z-30">
      <div className="absolute w-full top-0 left-0 overflow-x-hidden">
        <CurrentAnimationContext.Provider value={currentAnimation}>
          <ContactScene />
        </CurrentAnimationContext.Provider>
      </div>

      <SectionTitle
        sectionId={sectionId}
        header="Say hello!"
        subheader="Let's make some magic"
        marginTop={0}
        animationDelay={0}
      />

      <form
        className={`
          mt-[34rem] sm:mt-[35rem] md:mt-[40rem] 
          lg:mt-[28rem] xl:mt-[37rem]  grid gap-6 grid-cols-1 md:grid-cols-2
          lg:w-[70%] xl:w-[60%] 2xl:w-[50%]
        `}
        onSubmit={handleSubmit}
      >
        <TextInput
          label="Name"
          className="col-span-2 md:col-span-1"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextInput
          label="Email"
          type="email"
          className="col-span-2 md:col-span-1"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextInput
          label="Your message"
          textArea
          className="col-span-2"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          className={`
            bg-background text-foreground py-3 rounded-lg 
            col-span-2 md:col-span-1 hover:bg-gray-800
            transition-all relative submit
            ${loading ? "italic" : ""}
          `}
          ref={buttonRef}
          type="submit"
        >
          {loading ? (
            "Transmitting..."
          ) : (
            <>
              Send payload!{" "}
              <span
                className={`
              absolute left-[70%]
              transition-all duration-700
            `}
              >
                {">"}
              </span>
            </>
          )}
        </button>
      </form>
    </Section>
  );
}
