import React from "react";
import Link from "next/link";

export const Menu = () => {
  return (
    <nav className=" w-screen flex flex-row  gap-2  justify-center h-14 items-center">
      <Link href={"/"}>Home</Link>
      <Link href={"/chi_siamo"}>Fbeutyque</Link>
      <Link href={"/servizi"}>Servizi</Link>
      <Link href={"/contatti"}>Contatti</Link>
    </nav>
  );
};
