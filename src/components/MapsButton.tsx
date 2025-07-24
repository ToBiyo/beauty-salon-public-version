import React from "react";
import { ImLocation } from "react-icons/im";

export const MapsButton = () => {
  const indirizzo = "Via Nazionale, 41b, Perdaxius, (SU), Sardegna";
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    indirizzo
  )}`;

  const handleClick = () => {
    window.open(mapsUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="text-base font-quicksand leading-loose xl:text-lg italic flex items-center gap-2 ${animation} duration-300"
    >
      <ImLocation size={20} className="text-secondaryAccent" />
      {indirizzo}
    </button>
  );
};
