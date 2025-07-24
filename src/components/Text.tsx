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
      className={`text-base font-quicksand leading-loose xl:text-lg italic ${textColor}`}
    >
      {children}
    </p>
  );
};
