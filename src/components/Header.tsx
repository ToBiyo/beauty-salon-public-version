import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "./Menu";
import logo from "../../public/assets/images/logo-black.png";

export default function Header() {
  return (
    <header className="bg-avorio w-full h-[100px] relative">
      <div className="fixed z-30 bg-avorio w-full h-[100px]">
        <div className="flex flex-row items-center justify-between m-auto w-[1440px] h-full">
          <Link href={"/"} className="outline-none">
            <Image src={logo} alt="f beautyque logo" width={250} />
          </Link>
          <Menu />
        </div>
      </div>
    </header>
  );
}
