"use client";
import { ImPhone } from "react-icons/im";

export const CallButton = ({
  children,
  bgColor,
  textColor,
}: {
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
}) => {
  const handleCallClick = () => {
    // Sostituisci con il tuo numero di telefono
    const phoneNumber = "+393123456789";
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleCallClick}
      className={`${bgColor} ${textColor} px-6 py-3 rounded-3xl font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
    >
      <ImPhone size={20} />
      {children}
    </button>
  );
};
