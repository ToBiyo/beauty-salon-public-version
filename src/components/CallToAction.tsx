import React from "react";
import { CtaButtons } from "./CtaButtons";

export const CallToAction = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center gap-10 text-center mx-auto  max-w-[60vw]">
      {children}
      <CtaButtons callMessage="Text Now" callPhone="Call now" />
    </div>
  );
};
