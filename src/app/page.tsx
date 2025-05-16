import { Hero } from "@/components/Hero";
import { Presentation } from "@/components/Presentation";
import { Services } from "@/components/Services";
import { Contatti } from "@/components/Contatti";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Presentation />
      <Contatti />
      <Reviews />
    </main>
  );
}
