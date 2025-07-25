import Image from "next/image";
import logo from "../../public/assets/images/logo-gold.png";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImPhone, ImWhatsapp, ImLocation } from "react-icons/im";
import { Wrapper } from "./Wrapper";
import { FooterContactsContainer } from "./FooterContactsContainer";

export const Footer = () => {
  return (
    <footer className="h-auto bg-gray-800 flex flex-col justify-center items-center py-10">
      <Wrapper>
        <>
          <div className="mx-auto max-w-full flex lg:flex-row flex-col w-full lg:items-start items-center justify-between   gap-16">
            <div className="flex flex-col max-w-full gap-8 items-center lg:w-[35%] lg:items-start">
              <Image
                src={logo}
                alt="Logo"
                width={200}
                height={60}
                className={"xl:w-[300px] w-[250px]"}
              />
              <h3 className="font-quicksand text-md text-gray-100 text-center lg:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                hic voluptas enim magni animi architecto, amet alias ratione,
                libero a, et incidunt. Commodi voluptate, eos totam qui fugit
                quaerat esse.
              </h3>
            </div>
            <div className="flex flex-col gap-8 items-center xl:items-start">
              <h3 className="text-3xl font-playfair italic text-secondaryAccent">
                Socials
              </h3>

              <div className="w- full flex flex-row gap-8 xl:items-start items-center duration-300">
                <a
                  href="https://www.facebook.com/people/F-Beautyque-di-Francesca-Lai/61575575922189/#"
                  target="_blank"
                  className="flex flex-row items-center gap-2 font-quicksand text-lg"
                >
                  <ImFacebook2 className="text-gray-100 text-3xl hover:text-yellow-500 duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/fbeautyque/"
                  target="_blank"
                  className="flex flex-row items-center gap-2 font-quicksand text-lg"
                >
                  <ImInstagram className="text-gray-100 text-3xl hover:text-yellow-500 duration-300" />
                </a>
              </div>
            </div>
            <FooterContactsContainer />
          </div>
          <div className="max-w-[1440px]  mt-10  border-secondaryAccent border-t-[1px]  justify-center">
            <h2 className="text-gray-100 mt-3 text-center">
              Policy Copyright and business informations
            </h2>
          </div>
        </>
      </Wrapper>
    </footer>
  );
};
