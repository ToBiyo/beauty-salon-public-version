import { Hero } from "@/components/Hero";
import { Presentation } from "@/components/Presentation";
import { Services } from "@/components/Services";
import { Contatti } from "@/components/Contatti";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <main className=" flex flex-col items-center ">
      <Hero />
      <div className="relative z-20 bg-avorio flex flex-col items-center gap-[300px]">
        <Services />
        <Presentation />
        <Contatti />
        <Reviews />
      </div>
    </main>
  );
}
