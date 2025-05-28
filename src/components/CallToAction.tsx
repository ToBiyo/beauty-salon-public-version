import React from "react";
import { CtaButtons } from "./CtaButtons";

export const CallToAction = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center gap-10 text-center lg:max-w-[1440px] w-[80vw]">
      {children}
      <CtaButtons />
    </div>
  );
};
