import Image from "next/image";
import Link from "next/link";
import corpo from "../../public/assets/images/corpo.jpg";
import estetica from "../../public/assets/images/estetica-base.jpg";
import consulenza from "../../public/assets/images/consulenza.jpg";
import viso from "../../public/assets/images/viso.jpg";

export const Services = () => {
  return (
    <div className="flex flex-col mx-auto w-[1440px] my-[400px] gap-28">
      <div className="flex flex-col gap-12 h-full w-[50%]">
        <h2 className="font-playfair text-5xl text-cyan-700 italic">
          I Nostri Servizi
        </h2>
        <h3 className="font-quicksand text-2xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </h3>
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        <div className="flex flex-col w-[24%] gap-y-8 ">
          <Image
            src={consulenza}
            width={200}
            alt="servizio 4"
            className="w-full  shadow-gray-800 drop-shadow-xl rounded-xl overflow-hidden"
          />
          <h2 className="font-playfair text-2xl text-tortora italic">
            Consulenza
          </h2>
          <p className="font-quicksand text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ad
            inventore tempore. Porro, similique veniam aspernatur recusandae
            ipsa aperiam amet.
          </p>
          <Link
            href={"/servizi"}
            className="bg-cyan-700 text-gray-50  max-w-32 py-3 flex items-center justify-center rounded-lg"
          >
            See more
          </Link>
        </div>
        <div className="flex flex-col w-[24%] gap-y-8">
          <Image
            src={viso}
            width={200}
            alt="servizio 4"
            className="w-full  shadow-gray-800 drop-shadow-xl rounded-xl overflow-hidden"
          />
          <h2 className="font-playfair text-2xl text-tortora italic">
            Consulenza
          </h2>
          <p className="font-quicksand text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ad
            inventore tempore. Porro, similique veniam aspernatur recusandae
            ipsa aperiam amet.
          </p>
          <Link
            href={"/servizi"}
            className="bg-cyan-700 text-gray-50  max-w-32 py-3 flex items-center justify-center rounded-lg"
          >
            See more
          </Link>
        </div>
        <div className="flex flex-col w-[24%] gap-y-8">
          <Image
            src={corpo}
            width={200}
            alt="servizio 4"
            className="w-full  shadow-gray-800 drop-shadow-xl rounded-xl overflow-hidden"
          />
          <h2 className="font-playfair text-2xl text-tortora italic">
            Consulenza
          </h2>
          <p className="font-quicksand text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ad
            inventore tempore. Porro, similique veniam aspernatur recusandae
            ipsa aperiam amet.
          </p>
          <Link
            href={"/servizi"}
            className="bg-cyan-700 text-gray-50  max-w-32 py-3 flex items-center justify-center rounded-lg"
          >
            See more
          </Link>
        </div>
        <div className="flex flex-col w-[24%] gap-y-8">
          <Image
            src={estetica}
            width={200}
            alt="servizio 4"
            className="w-full  shadow-gray-800 drop-shadow-xl rounded-xl overflow-hidden"
          />
          <h2 className="font-playfair text-2xl text-tortora italic">
            Consulenza
          </h2>
          <p className="font-quicksand text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ad
            inventore tempore. Porro, similique veniam aspernatur recusandae
            ipsa aperiam amet.
          </p>
          <Link
            href={"/servizi"}
            className="bg-cyan-700 text-gray-50  max-w-32 py-3 flex items-center justify-center rounded-lg"
          >
            See more
          </Link>
        </div>
      </div>
      {/*  */}
    </div>
  );
};
