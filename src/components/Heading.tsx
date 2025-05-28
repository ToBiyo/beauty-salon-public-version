import React from "react";

export const Heading = ({
  children,
  color,
  main,
}: {
  children: React.ReactNode;
  color: string;
  main: boolean;
}) => {
  return main ? (
    <h1
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug sm:leading-snug md:leading-tight lg:leading-tight xl:leading-none font-playfair text-${color} italic`}
    >
      {children}
    </h1>
  ) : (
    <h2
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug sm:leading-snug md:leading-tight lg:leading-tight xl:leading-none font-playfair text-${color} italic`}
    >
      {children}
    </h2>
  );
};
