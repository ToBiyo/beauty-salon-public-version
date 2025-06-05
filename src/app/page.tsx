import { Hero } from "@/components/Hero";
import { Presentation } from "@/components/Presentation";
import { Services } from "@/components/Services";
import { Contatti } from "@/components/Contatti";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-background">
      <Hero />
      <div className="relative z-20 bg-beige flex flex-col items-center xl:py-[300px] xl:gap-[400px] md:gap-[200px] md:py-[300px] gap-[150px] py-[150px]">
        <Services />
        <Presentation />
        <Contatti />
        <Reviews />
      </div>
    </main>
  );
}
