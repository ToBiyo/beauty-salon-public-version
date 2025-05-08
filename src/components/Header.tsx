import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col ">
      <Link href={"/"}>
        <Image src={""} />
      </Link>
    </header>
  );
}
