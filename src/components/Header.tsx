import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "./Menu";
import logo from "../../public/assets/images/logo-black.png";

export default function Header() {
  return (
    <header className="w-full relative flex ">
      <div className="fixed z-30 bg-background  w-full h-[100px]">
        <div className="flex flex-row items-center justify-between mx-auto  h-full  w-[80vw]">
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
