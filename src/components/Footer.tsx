import Image from "next/image";
import logo from "../../public/assets/images/logo-black.png";
import { ImFacebook } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";
import { ImLocation } from "react-icons/im";

export const Footer = () => {
  return (
    <footer className="mt-56 min-h-[700px] bg-cyan-700 flex flex-col justify-center items-center relative bottom-0">
      <div className="mx-auto flex flex-row w-[1440px] items-start justify-between border-y-2 border-tortora py-40">
        <Image src={logo} alt="Logo" width={400} height={60} />

        <div className="flex flex-col gap-10 items-center">
          <h3 className="text-3xl font-playfair italic text-gray-50">
            Socials
          </h3>
          <div>
            <div className="flex gap-8 mt-7">
              <a href="https://www.facebook.com" target="_blank">
                <ImFacebook className="text-cream text-4xl" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <ImInstagram className="text-cream text-4xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex- flex-col">
          <h3 className="text-3xl font-playfair italic text-gray-50">
            Contact
          </h3>
          <div className="flex flex-col gap-4 mt-7">
            <div className="flex gap-2 items-center">
              <ImPhone className="text-cream text-3xl" />
              <p className="text-lg font-quicksand text-gray-50">
                +1 234 567 890
              </p>
            </div>
            <div className="flex gap-2 items-center ">
              <ImWhatsapp className="text-cream text-3xl" />
              <p className="text-lg font-quicksand text-gray-50">
                +1 234 567 890
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <ImLocation className="text-cream  text-3xl" />
              <p className="text-xl font-quicksand text-gray-50">
                123 Main St, City, Country
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-gray-50">
          Policy Copyright and business informations
        </h2>
      </div>
    </footer>
  );
};
