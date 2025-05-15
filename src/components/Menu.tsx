"use client";
import React from "react";
import { ActiveLink } from "./ActiveLink";
import { usePathname } from "next/navigation";
import { useState } from "react";
export const Menu = () => {
  const path = usePathname();

  return (
    <nav className="flex flex-row  gap-6 justify-center h-14 items-center font-quicksand font-medium">
      <ActiveLink href="/" path={path} text={"Home"}></ActiveLink>
      <ActiveLink href="/chi_siamo" path={path} text={"Chi siamo"}></ActiveLink>
      <ActiveLink href="/servizi" path={path} text={"Servizi"}></ActiveLink>
      <ActiveLink href="/contatti" path={path} text={"Contatti"}></ActiveLink>
    </nav>
  );
};
