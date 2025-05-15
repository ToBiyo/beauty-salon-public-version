import React from "react";
import Image from "next/image";
import contatti from "../../public/assets/images/contatti.jpg";
import alternative from "../../public/assets/images/alternative-no-bg.png";

export const Contatti = () => {
  return (
    <div className="flex flex-col w-[1440px] mx-auto my-[300px]  justify-between rounded-2xl">
      <div className="flex  my-[100px] justify-between p-5 items-center">
        <div className="flex flex-col  w-[50%]  justify-center m-12 rounded-2xl">
          <h2 className="font-playfair text-tortora italic text-5xl">
            Some Text
          </h2>
          <h3 className="font-quicksand text-2xl mt-16">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus voluptatem optio at rerum est
          </h3>
          <div className="flex flex-col border-b-[1px] border-tortora py-3">
            <h3 className="font-playfair italic text-4xl text-cyan-700 mt-20 mb-7">
              Orari
            </h3>

            <span className="font-quicksand text-xl my-3">
              Lunedì/Venerdì : 09:00 - 19:00
            </span>
            <span className="font-quicksand text-xl my-3">
              Sabato : 09:00 - 13:00
            </span>
            <span className="font-quicksand text-xl my-3">
              Domenica : Chiuso
            </span>
          </div>
          <div className="flex flex-col border-b-[1px] border-tortora py-3">
            <h3 className="font-playfair italic text-4xl text-cyan-700 mt-20 mb-7">
              Contatti
            </h3>
            <span className="font-quicksand text-xl my-3">
              Via Nazionale, 41b, Perdaxius, (SU), Sardegna
            </span>
            <span className="font-quicksand text-xl my-3">+39 3473976763</span>
            <span className="font-quicksand text-xl my-3">+39 3473976763</span>
          </div>
        </div>
        <div className="w-[40%] relative h-full flex justify-end">
          <div className="bg-cream h-[105%]   absolute w-3/5 bottom-0 -z-20 rounded-e-xl"></div>
          <Image
            src={alternative}
            alt="something"
            width={200}
            className="w-[90%] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
