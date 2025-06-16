import React from "react";
import { WhatsAppButton } from "./WhatsappButton";
import { CallButton } from "./CallButton";
import { CTAheading } from "./CTAheading";
export const CallToAction = ({
  children,
  textColor,
  buttonBgColor,
  buttonTextColor,
}: {
  children: React.ReactNode;
  textColor: string;
  buttonBgColor: string;
  buttonTextColor: string;
}) => {
  return (
    <div className="flex w-[60vw] flex-col items-center gap-28 text-center relative">
      <CTAheading textColor={textColor}>{children}</CTAheading>
      <div className="flex gap-8">
        <WhatsAppButton bgColor={buttonBgColor} textColor={buttonTextColor}>
          Contattaci subito
        </WhatsAppButton>
        <CallButton bgColor={buttonBgColor} textColor={buttonTextColor}>
          Chiama subito
        </CallButton>
      </div>
    </div>
  );
};
