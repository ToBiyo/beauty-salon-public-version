import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "./Menu";
import logo from "../../public/assets/images/logo-black.png";
import { Wrapper } from "./Wrapper";

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-40 bg-white h-[80px]   flex justify-center items-center border-b-[1px] border-gray-300">
      <Wrapper>
        <div className="w-full flex flex-row items-center justify-between  relative ">
          <Link href={"/"} className="outline-none">
            <Image
              src={logo}
              alt="f beautyque logo"
              width={250}
              className="md:w-[250px] w-[180px]"
            />
          </Link>
          <Menu />
        </div>
      </Wrapper>
    </header>
  );
}
