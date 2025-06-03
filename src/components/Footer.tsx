import Image from "next/image";
import logo from "../../public/assets/images/logo-black.png";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImPhone, ImWhatsapp, ImLocation } from "react-icons/im";

export const Footer = () => {
  return (
    <footer className=" min-h-[auto] bg-tortora bg-opacity-25 flex flex-col justify-center items-center relative bottom-0 z-20 py-20">
      <div className="mx-auto flex lg:flex-row flex-col w-[80vw] lg:items-start items-center justify-between   gap-20">
        <div className="flex flex-col max-w-[50%] gap-10">
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={60}
            className={"w-[60%]"}
          />
          <h3 className="font-quicksand text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore hic
            voluptas enim magni animi architecto, amet alias ratione, libero a,
            et incidunt. Commodi voluptate, eos totam qui fugit quaerat esse.
          </h3>
        </div>
        <div className="flex flex-col gap-10 items-center xl:items-start">
          <h3 className="text-4xl font-playfair italic text-cyan-700">
            Socials
          </h3>
          <div>
            <div className="w- full flex flex-row gap-8 xl:items-start items-center duration-300">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="flex flex-row items-center gap-2 font-quicksand text-lg"
              >
                <ImFacebook2 className="text-gray-700 text-4xl hover:text-cyan-700 duration-300" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="flex flex-row items-center gap-2 font-quicksand text-lg"
              >
                <ImInstagram className="text-gray-700 text-4xl hover:text-cyan-700 duration-300" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center xl:items-start">
          <h3 className="text-4xl font-playfair italic text-cyan-700">
            Contact
          </h3>
          <div className="flex flex-col gap-4 mt-7 items-center xl:items-start">
            <div className="flex gap-2 items-center duration-300 text-gray-700 cursor-pointer hover:text-cyan-700">
              <ImPhone className=" text-3xl" />
              <p className="text-lg font-quicksand text-gray-700">
                +1 234 567 890
              </p>
            </div>
            <div className="flex gap-2 items-center duration-300 text-gray-700 cursor-pointer hover:text-cyan-700">
              <ImWhatsapp className="text-3xl" />
              <p className="text-lg font-quicksand text-gray-700">
                +1 234 567 890
              </p>
            </div>
            <div className="flex gap-2 items-center duration-300 text-gray-700 cursor-pointer hover:text-cyan-700">
              <ImLocation className="text-3xl" />
              <p className="text-xl font-quicksand text-gray-700">
                123 Main St, City, Country
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[80vw] mt-20 border-t-2 border-tortora border-dotted flex justify-center">
        <h2 className="text-gray-800 mt-3">
          Policy Copyright and business informations
        </h2>
      </div>
    </footer>
  );
};
