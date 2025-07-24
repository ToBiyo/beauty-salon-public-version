"use client";
import { ImPhone } from "react-icons/im";

export const CallButton = ({
  children,
  bgColor,
  textColor,
  animate,
}: {
  children: React.ReactNode;
  bgColor?: string;
  textColor: string;
  animate?: boolean;
}) => {
  const handleCallClick = () => {
    // Sostituisci con il tuo numero di telefono
    const phoneNumber = "+393123456789";
    window.location.href = `tel:${phoneNumber}`;
  };

  const animation = animate
    ? "hover:opacity-90 transition-all transform hover:scale-105 hover:shadow-lg shadow-gray-600 px-4 py-3 xl:px-4 xl:py-4 "
    : "hover:scale-105";

  const iconColor = animate ? "" : "text-secondaryAccent";

  return (
    <button
      onClick={handleCallClick}
      className={`${bgColor} ${textColor}  rounded-sm  text-base font-quicksand leading-loose xl:text-lg italic flex items-center gap-2 ${animation} duration-300`}
    >
      <ImPhone size={20} className={`${iconColor}`} />
      {children}
    </button>
  );
};
