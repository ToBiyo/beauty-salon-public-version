import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "./Menu";
import logo from "../../public/assets/images/logo-black.png";

export default function Header() {
  return (
    <header className="w-full fixed  top-0 left-0 h-[80px]  z-50 bg-white">
      <div className=" max-w-[1440px] m-auto h-full   relative px-4">
        <div className="flex flex-row items-center justify-between  w-full  h-full">
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
      </div>
    </header>
  );
}
