import React from "react";

export const Text = ({
  children,
  textColor,
}: {
  children: React.ReactNode;
  textColor: string;
}) => {
  return (
    <p className={`text-base  leading-loose xl:text-md ${textColor}`}>
      {children}
    </p>
  );
};
