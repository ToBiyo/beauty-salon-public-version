"use client";
import { ImWhatsapp } from "react-icons/im";

// Componente Bottone WhatsApp
export const WhatsAppButton = ({
  children,
  bgColor,
  textColor,
}: {
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
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

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`${bgColor} ${textColor} px-4 py-2 xl:px-6 xl:py-3 rounded-full font-quicksand text-sm lg:text-base flex items-center gap-2 hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
    >
      <ImWhatsapp size={20} />
      {children}
    </button>
  );
};
