"use client";
import React from "react";
import { ActiveLink } from "./ActiveLink";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";
export const Menu = () => {
  const path = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  const visibility = isVisible ? "flex" : "hidden";

  return (
    <nav className="flex flex-row">
      <div
        className={`lg:flex  lg:flex-row lg:relative lg:top-0 lg:py-0 gap-6 justify-center  items-center font-quicksand font-medium ${visibility} flex-col fixed top-[100px] bg-avorio  py-5 left-0  w-full`}
        onClick={() => setIsVisible(!isVisible)}
      >
        <ActiveLink href="/" path={path} text={"Home"}></ActiveLink>
        <ActiveLink
          href="/chi_siamo"
          path={path}
          text={"Chi siamo"}
        ></ActiveLink>
        <ActiveLink href="/servizi" path={path} text={"Servizi"}></ActiveLink>
        <ActiveLink href="/contatti" path={path} text={"Contatti"}></ActiveLink>
      </div>
      {!isVisible ? (
        <button onClick={() => setIsVisible(!isVisible)} className="lg:hidden">
          <FiMenu className="lg:hidden text-4xl tetx-gray-800 "></FiMenu>
        </button>
      ) : (
        <button onClick={() => setIsVisible(!isVisible)} className="lg:hidden">
          <FiX className="lg:hidden text-4xl tetx-gray-800 "></FiX>
        </button>
      )}
    </nav>
  );
};
