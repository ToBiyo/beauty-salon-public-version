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
      className={`text-base md:text:lg xl:text-2xl font-quicksand  leading-loose ${textColor}`}
    >
      {children}
    </p>
  );
};
