import React from "react";

export const Contatti = () => {
  return (
    <div className="flex flex-col relative w-full mx-auto my-[300px]  bg-[url(../../public/assets/images/new.jpg)] bg-cover bg-bottom bg-fixed">
      <div className="absolute w-full h-full bg-tortora opacity-100"></div>
      <div
        className={
          "flex  my-[100px] w-[1440px]  justify-between items-centermb-6 relative  mx-auto "
        }
      >
        <div className="flex flex-col  w-[40%]  justify-center  rounded-s-2xl ">
          <div className="mb-12">
            <h2 className="font-playfair  italic text-5xl text-cyan-700">
              Some Text
            </h2>
            <h3 className="font-quicksand text-2xl mt-16 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus voluptatem optio at rerum est
            </h3>
          </div>
          <div className="flex flex-col border-b-[1px] border-cream ">
            <h3 className="font-playfair italic text-4xl text-cyan-700">
              Orari
            </h3>

            <div className="flex flex-col mt-6 ">
              <span className="font-quicksand text-xl my-3 ">
                Lunedì/Venerdì : 09:00 - 19:00
              </span>
              <span className="font-quicksand text-xl my-3">
                Sabato : 09:00 - 13:00
              </span>
              <span className="font-quicksand text-xl my-3">
                Domenica : Chiuso
              </span>
            </div>
          </div>
          <div className="flex flex-col border-b-[1px] border-cream mt-6 ">
            <h3 className="font-playfair italic text-4xl text-cyan-700">
              Contatti
            </h3>
            <div className="flex flex-col mt-6 ">
              <span className="font-quicksand text-xl my-3">
                Via Nazionale, 41b, Perdaxius, (SU), Sardegna
              </span>
              <span className="font-quicksand text-xl my-3">
                +39 3473976763
              </span>
              <span className="font-quicksand text-xl my-3">
                +39 3473976763
              </span>
            </div>
          </div>
        </div>
        {/* <div className="w-[60%] relative h-full flex justify-end self-center">
          <Image
            src={alternative}
            alt="something"
            width={200}
            className="w-[90%] rounded-e-xl mr-10 drop-shadow-xl shadow-black mt-[10%]"
          />
        </div> */}
      </div>
    </div>
  );
};
