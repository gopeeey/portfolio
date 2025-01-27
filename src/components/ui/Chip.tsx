import React from "react";

type Props = {
  variant?: "outlined" | "normal";
  children: React.ReactNode;
};

const stylesMap: { [key in Exclude<Props["variant"], undefined>]: string } = {
  outlined: "bg-transparent border-[1px] border-gray-300 text-gray-300",
  normal: "bg-light_grey text-white",
};

export default function Chip({ children, variant = "normal" }: Props) {
  return (
    <span
      className={`mr-2 mb-[0.6rem] inline-block text-xs 
         text-white px-2 
        py-1 text-center rounded-md
        ${stylesMap[variant]}
        `}
    >
      {children}
    </span>
  );
}
