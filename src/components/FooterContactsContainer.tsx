import { ImLocation, ImPhone, ImWhatsapp } from "react-icons/im";

export const FooterContactsContainer = () => {
  return (
    <div className="flex flex-col items-center text-center gap-8">
      <h3 className="text-3xl font-playfair italic text-secondaryAccent text-center">
        Contact
      </h3>
      <div className="flex flex-col gap-5  items-center ">
        <div className="flex gap-2 items-center duration-300 text-gray-100 ">
          <ImLocation className="text-xl" />
          <p className="text-md font-quicksand text-gray-100">
            Via Nazionale, 41b, Perdaxius, (SU), Sardegna
          </p>
        </div>
        <div className="flex gap-2 items-center duration-300 text-gray-100 ">
          <ImPhone className="text-xl" />
          <p className="text-md font-quicksand text-gray-100">
            +39 346 336 0553
          </p>
        </div>
        <div className="flex gap-2 items-center duration-300 text-gray-100 ">
          <ImWhatsapp className="text-xl" />
          <p className="text-md font-quicksand text-gray-100">
            +39 346 336 0553
          </p>
        </div>
      </div>
    </div>
  );
};
