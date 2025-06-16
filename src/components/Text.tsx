import React from "react";

export const Text = ({
  children,
  textColor,
}: {
  children: React.ReactNode;
  textColor: string;
}) => {
  return (
    <p
      className={`text-sm ${textColor} sm:text-base md:text-lg lg:text-xl xl:text-2xl font-quicksand leading-relaxed md:leading-loose`}
    >
      {children}
    </p>
  );
};
