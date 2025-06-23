import React from "react";

export const CardTitle = ({
  children,
  textColor,
}: {
  children: React.ReactNode;
  textColor: string;
}) => {
  return (
    <h3 className={`font-playfair ${textColor} text-xl xl:text-2xl  ]`}>
      {children}
    </h3>
  );
};
