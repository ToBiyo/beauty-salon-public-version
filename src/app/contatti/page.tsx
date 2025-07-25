import MapEmbed from "@/components/Contatti/MapEmbed";
import { Wrapper } from "@/components/Wrapper";
import { ContactInfos } from "@/components/Contatti/ContactInfos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contattaci – F Beautyque, Centro Estetico a Perdaxius",
  description:
    "Prenota il tuo trattamento da F Beautyque. Trova i nostri contatti, orari, indirizzo e scrivici per qualsiasi informazione o consulenza personalizzata.",
  keywords: [
    "contatti F Beautyque",
    "centro estetico Perdaxius contatti",
    "prenota estetista Perdaxius",
    "numero estetista Perdaxius",
    "come arrivare F Beautyque",
    "orari centro benessere",
    "scrivici F Beautyque",
  ],
};

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center mt-[80px] bg-mainBg">
      <section className="w-full  flex justify-center py-10 bg-secondaryBg">
        <Wrapper>
          <MapEmbed />
        </Wrapper>
      </section>
      <ContactInfos />
    </main>
  );
}
