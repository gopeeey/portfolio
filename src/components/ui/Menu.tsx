import { sections } from "@/constants";
import { gotoSection } from "@/lib/utils";
import { Color, SectionName } from "@/types";
import gsap from "gsap";
import { useEffect, useMemo, useState } from "react";

type Props = {
  color?: Color;
};

export default function Menu({ color }: Props) {
  const [open, setOpen] = useState(false);
  const { bgStyle, oppBgStyle } = useMemo(() => {
    const bgStyle = color === "dark" ? "background" : "foreground";
    const oppBgStyle = color !== "dark" ? "background" : "foreground";

    return { bgStyle, oppBgStyle };
  }, [color]);

  useEffect(() => {
    const duration = 0.4;
    const ctx = gsap.context(() => {
      if (open) {
        const openTl = gsap.timeline({ defaults: { duration } });

        openTl.to("#menu_line_1", {
          rotate: "45deg",
          y: 9.5,
          x: 1,
          width: "1.7rem",
        });

        openTl.to(
          "#menu_line_2",
          {
            rotate: "-45deg",
            width: "1.7rem",
          },
          0
        );

        openTl.to(
          "#menu_pane",
          {
            scale: 1,
            opacity: 1,
            ease: "back.out(1)",
          },
          0
        );

        openTl.to(
          ".menu_item",
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.2,
            ease: "power2.inOut",
          },
          0
        );
      } else {
        const closeTl = gsap.timeline({ defaults: { duration } });
        closeTl.to(".menu_item", {
          opacity: 0,
          y: "2.5rem",
          stagger: {
            each: 0.1,
          },
          ease: "power2.inOut",
          duration: 0.2,
        });

        closeTl.to(
          "#menu_pane",
          {
            scale: 0,
            opacity: 0,
            ease: "back.in(1)",
          },
          0.6
        );

        closeTl.to(
          "#menu_line_1",
          {
            rotate: "0deg",
            y: 0,
            x: 0,
            width: "2.25rem",
          },
          0
        );

        closeTl.to(
          "#menu_line_2",
          {
            rotate: "0deg",
            width: "1.5rem",
          },
          0
        );
      }
    });

    return () => ctx.kill();
  }, [open, bgStyle, oppBgStyle]);

  const handleClick = (section: SectionName) => {
    gotoSection(section, "instant");
    setOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="flex flex-col items-end cursor-pointer relative z-40"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div
          className={`line1 w-9 menu_line bg-${open ? oppBgStyle : bgStyle}`}
          id="menu_line_1"
        ></div>
        <div
          className={`line2 w-6 menu_line mt-2 bg-${
            open ? oppBgStyle : bgStyle
          }`}
          id="menu_line_2"
        ></div>
      </div>

      <div
        className={`absolute bg-transparent border-[1px] z-30
            border-solid border-${bgStyle} 
            -top-[220%] -right-7 rounded-xl
            p-2 text-${oppBgStyle} scale-0 opacity-0 origin-top-right`}
        id="menu_pane"
      >
        <div className={`w-64 px-0`}>
          <ul>
            <li
              className={`h-20 bg-${bgStyle} rounded-t-lg menu_item translate-y-10 opacity-0`}
            ></li>
            {sections.map((section) => (
              <li
                key={section}
                onClick={() => handleClick(section)}
                className={`capitalize bg-transparent 
                    hover:pl-5 transition-all duration-300 
                    cursor-pointer
                    menu_item opacity-0
                    translate-y-10
                    `}
              >
                <span className={`inline-block px-5 py-3 bg-${bgStyle} w-full`}>
                  {section === "hero" ? "home" : section}
                </span>
              </li>
            ))}
            <li
              className={`h-10 bg-${bgStyle} rounded-b-lg menu_item translate-y-10 opacity-0`}
            ></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
