"use client";
import { ImWhatsapp } from "react-icons/im";

// Componente Bottone WhatsApp
export const WhatsAppButton = ({
  children,
  bgColor,
  textColor,
  animate,
}: {
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
  animate?: boolean;
}) => {
  const handleWhatsAppClick = () => {
    // Sostituisci con il tuo numero di telefono (formato internazionale senza +)
    const phoneNumber = "393123456789";
    const message = encodeURIComponent(
      "Ciao! Vorrei prenotare un trattamento."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const animation = animate
    ? "hover:opacity-90 transition-all transform hover:scale-105 hover:shadow-lg shadow-gray-600  px-4 py-3 xl:px-4 xl:py-4"
    : "hover:scale-105";
  const iconColor = animate ? "" : "text-secondaryAccent";
  return (
    <button
      onClick={handleWhatsAppClick}
      className={`${bgColor} ${textColor}  rounded-sm text-base font-quicksand leading-loose xl:text-lg italic flex items-center gap-2 ${animation} duration-300`}
    >
      <ImWhatsapp size={20} className={`${iconColor}`} />
      {children}
    </button>
  );
};
