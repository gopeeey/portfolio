import React from "react";

type Props = {
  children: React.ReactNode;
  id: string;
  className?: string;
};

export default function Section({ children, className, id }: Props) {
  return (
    <section
      className={`relative m-0 px-xs sm:px-sm lg:px-lg 2xl:px-2xl py-10 min-h-screen ${className}`}
      id={id}
    >
      {children}
    </section>
  );
}
