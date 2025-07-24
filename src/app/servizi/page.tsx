import { Hero } from "@/components/Hero";
import hero from "../../../public/assets/images/servizi/hero.jpg";
import { HeroDescription } from "@/components/HeroDescription";
import { ServiceSection } from "@/components/ServiceSection";
import consulenza from "../../../public/assets/images/servizi/consulenza1.jpg";
import consulenza1 from "../../../public/assets/images/servizi/consulenza2.jpg";
import consulenza2 from "../../../public/assets/images/servizi/consulenza3.jpg";
import estetica from "../../../public/assets/images/servizi/estetica.jpg";
import estetica1 from "../../../public/assets/images/servizi/estetica1.jpg";
import estetica2 from "../../../public/assets/images/servizi/estetica2.jpg";
import corpo from "../../../public/assets/images/servizi/corpo.jpg";
import corpo1 from "../../../public/assets/images/servizi/corpo1.jpg";
import corpo2 from "../../../public/assets/images/servizi/corpo2.jpg";
import viso from "../../../public/assets/images/servizi/viso.jpg";
import viso1 from "../../../public/assets/images/servizi/viso2.jpg";
import viso2 from "../../../public/assets/images/servizi/viso3.jpg";

export default function page() {
  const services = [
    {
      title: "Consulenza Personalizzata",
      description: `Il primo passo verso la tua bellezza inizia con un'analisi approfondita. Studiamo insieme la tua pelle, le tue esigenze e i tuoi obiettivi per creare un percorso su misura. Ogni consulenza include l'analisi del tipo di pelle, la valutazione delle problematiche specifiche e la pianificazione di un protocollo personalizzato che rispetti i tuoi tempi e le tue aspettative.`,
      imageUrl: [consulenza, consulenza1, consulenza2],
      id: "first",
      alt: [
        "Analisi professionale della pelle - consulenza estetica personalizzata centro Perdaxius",
        "Estetista qualificata durante consulenza - ascolto e professionalità",
        "Pianificazione trattamenti personalizzati - approccio su misura per ogni cliente",
      ],
    },
    {
      title: "Tattamenti Viso",
      description: `Il tuo viso merita le cure più raffinate. Dai trattamenti purificanti per pelli giovani alle soluzioni anti-età per pelli mature, ogni protocollo è studiato per restituire luminosità e tonicità. Utilizziamo tecniche manuali tradizionali abbinate a prodotti professionali di ultima generazione: pulizie profonde, peeling delicati, maschere nutrienti e trattamenti specifici per ogni stagione della vita.`,
      imageUrl: [viso, viso1, viso2],
      alt: [
        "Pulizia viso professionale - trattamento purificante centro estetico",
        "Applicazione maschera viso idratante - cura della pelle con prodotti professionali",
        "Trattamento anti-età viso - risultati naturali e duraturi",
      ],
    },
    {
      title: "Trattamenti Corpo",
      description: `Riscopri l'armonia del tuo corpo attraverso trattamenti mirati che combinano benessere e risultati visibili. Massaggi rilassanti per sciogliere le tensioni, trattamenti drenanti per riattivare la circolazione e protocolli rassodanti per ritrovare tonicità. Ogni seduta è un momento di puro relax che dona nuova energia al corpo e alla mente, utilizzando manualità esperte e prodotti specifici per ogni esigenza."`,
      imageUrl: [corpo, corpo1, corpo2],
      alt: [
        "Massaggio rilassante corpo - trattamento benessere centro estetico Perdaxius",
        "Trattamento drenante gambe - riattivazione circolazione e benessere",
        "Applicazione prodotti corpo professionali - cura e nutrimento della pelle",
      ],
    },
    {
      title: "Estetica Base Plus",
      description: `I dettagli che fanno la differenza nella tua routine di bellezza quotidiana. Servizi essenziali eseguiti con la massima precisione: epilazione con cere di qualità, manicure e pedicure estetici, definizione sopracciglia e tinting ciglia per uno sguardo sempre espressivo. Ogni servizio base è arricchito dalla nostra attenzione al dettaglio e dall'utilizzo di prodotti professionali che rispettano la delicatezza della tua pelle.`,
      imageUrl: [estetica, estetica1, estetica2],
      alt: [
        "Definizione sopracciglia professionale - precisione e risultati naturali",
        "Manicure estetica con prodotti professionali - cura delle mani",
        "Servizi estetica di base - epilazione delicata centro Perdaxius",
      ],
    },
  ];

  return (
    <main className="w-[full] flex flex-col items-center bg-background justify-center mt-[80px]">
      <Hero
        bgColor="bg-secondaryBg"
        image={hero}
        order="order-first"
        alt="Centro estetico professionale Perdaxius - ambiente moderno per trattamenti personalizzati"
      >
        <HeroDescription
          title="I Nostri Servizi Estetici a Perdaxius"
          subTitle="Ogni trattamento nasce dall'ascolto. Ogni percorso è modellato su di te per offrirti risultati naturali e duraturi che rispettano la tua bellezza unica."
          order="order-2 lg:order-1"
          link={true}
        />
      </Hero>
      {services.map((service, index) => (
        <ServiceSection
          serviceData={service}
          index={index}
          key={service.title}
        />
      ))}
    </main>
  );
}
