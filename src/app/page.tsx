import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Presentation } from "@/components/Presentation";
import { Services } from "@/components/Services";
import { Contatti } from "@/components/Contatti";
export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Presentation />
      <Contatti />
    </div>
  );
}
