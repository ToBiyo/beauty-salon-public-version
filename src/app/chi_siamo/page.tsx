import Image from "next/image";
import logo from "../../../public/assets/images/logo-gold.png";
import me from "../../../public/assets/images/me.png";
import { ImFacebook } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import hero from "../../../public/assets/images/hero-about.jpg";
import alternative from "../../../public/assets/images/alternative.jpg";
export default function page() {
  return (
    <main className="flex flex-col items-center gap-[300px]">
      <section
        className={`w-full h-[900px] bg-[url(../../public/assets/images/hero-about.jpg)] bg-fixed bg-center bg-cover flex justify-center items-center flex-col `}
      >
        <div className="absolute w-full h-[900px] bg-cyan-900 opacity-85"></div>
        <div className="w-[1440px] flex flex-col  justify-center gap-28 relative z-20 items-center">
          <Image
            src={logo}
            alt="logo"
            width={300}
            className="min-w-[500px] "
          ></Image>
          <p className="font-quicksand leading-[2.7] text-lg  text-gray-100 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            obcaecati magni necessitatibus sequi, expedita odit ullam mollitia
            architecto rerum fugit neque perspiciatis quam quis distinctio odio
            nulla repellendus? Corporis, minima? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Dolore obcaecati magni necessitatibus
            sequi, expedita odit ullam mollitia architecto rerum fugit neque
            perspiciatis quam quis distinctio odio nulla repellendus? Corporis,
            minima? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dolore obcaecati magni necessitatibus sequi, expedita odit ullam
            mollitia architecto rerum fugit neque perspiciatis quam quis
            distinctio odio nulla repellendus? Corporis, minima? minima? Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati
            magni necessitatibus sequi, expedita odit ullam mollitia architecto
            rerum fugit neque perspiciatis quam quis distinctio odio nulla
            repellendus? Corporis, minima?
          </p>
          <div className="flex flwx-row gap-5">
            <button className="min-w-32 py-3 bg-avorio rounded-xl  text-lg font-quicksand">
              Call
            </button>
            <button className="min-w-32 py-3 bg-avorio rounded-xl text-lg font-quicksand">
              Whatsapp
            </button>
          </div>
        </div>
      </section>
      <section className="flex items-center min-h-[700px]  justify-between max-w-[1440px] mx-auto relative">
        <div className="w-[45%] h-full relative rounded-xl ">
          <div className="absolute h-full w-3/6 bg-cream -z-20 rounded-s-2xl" />
          <Image
            src={me}
            alt={"titolare F Beautique"}
            width={0}
            className="h-[100%] w-[auto] "
          />
        </div>

        <div className="flex flex-col w-[50%]  justify-center h-full  py-20">
          <h2 className="font-playfair text-6xl italic text-cyan-700">
            Titolo
          </h2>
          <p className="font-quicksand text-lg mt-16 mb-8 leading-[2]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            dicta fugit corrupti laborum earum laboriosam non nam sunt, iste
            natus nisi rem. Officia impedit magni consequatur repellat labore
            laudantium id. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Possimus dicta fugit corrupti laborum earum laboriosam non nam
            sunt, iste natus nisi rem. Officia impedit magni consequatur
            repellat labore laudantium id. id. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Possimus dicta fugit corrupti laborum
            earum laboriosam non nam sunt, iste natus nisi rem. Officia impedit
            magni consequatur repellat labore laudantium id.
          </p>
          <p className="font-quicksand text-lg mb-8 leading-[2]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            dicta fugit corrupti laborum earum laboriosam non nam sunt, iste
            natus nisi rem. Officia impedit magni consequatur repellat labore
            laudantium id. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Possimus dicta fugit corrupti laborum earum laboriosam non nam
            sunt, iste natus nisi rem. Officia impedit magni consequatur
            repellat labore laudantium id. id. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Possimus dicta fugit corrupti laborum
            earum laboriosam non nam sunt, iste natus nisi rem. Officia impedit
            magni consequatur repellat labore laudantium id.
          </p>
          <div className="flex  gap-5 text-3xl text-cyan-700">
            <ImFacebook></ImFacebook>
            <ImInstagram></ImInstagram>
          </div>
        </div>
      </section>
      <section className="h-[900px] w-[1440px] flex items-center justify-between">
        <div className="flex flex-col w-[50%] gap-[60px]">
          <h2 className="font-playfair italic text-5xl text-tortora">
            Lorem ipsum
          </h2>
          <p className="font-quicksand leading-[2]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, quos, voluptates, quia quisquam voluptatibus, quos,
            voluptates, quia quisquam voluptatibus, quos, voluptates, quia
            quisquam voluptatibus, quos, voluptates, quia Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quisquam voluptatibus, quos,
            voluptates, quia quisquam voluptatibus, quos, voluptates, quia
            quisquam voluptatibus, quos, voluptates, quia quisquam voluptatibus,
            quos, voluptates, quia Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam voluptatibus, quos, voluptates, quia
            quisquam voluptatibus, quos, voluptates, quia quisquam voluptatibus,
            quos, voluptates, quia quisquam voluptatibus, quos, voluptates, quia
          </p>
          <p className="font-quicksand leading-[2]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, quos, voluptates, quia quisquam voluptatibus, quos,
            voluptates, quia quisquam voluptatibus, quos, voluptates, quia
            quisquam voluptatibus, quos, voluptates, quia Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quisquam voluptatibus, quos,
            voluptates, quia quisquam voluptatibus, quos, voluptates, quia
            quisquam voluptatibus, quos, voluptates, quia quisquam voluptatibus,
            quos, voluptates, quia Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam voluptatibus, quos, voluptates, quia
            quisquam voluptatibus, quos, voluptates, quia quisquam voluptatibus,
            quos, voluptates, quia quisquam voluptatibus, quos, voluptates, quia
          </p>
          <div className="flex gap-10">
            <button className="min-w-32 py-3 bg-tortora text-gray-100 rounded-xl text-lg font-quicksand">
              Call
            </button>
            <button className="min-w-32 py-3 bg-tortora text-gray-100 rounded-xl text-lg font-quicksand">
              Whatsapp
            </button>
          </div>
        </div>

        <div className="flex flex-col  w-[40%]">
          <div className="w-full">
            <Image
              src={hero}
              alt="about hero"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-row mt-8 justify-between">
            <div className="flex justify-start">
              <Image
                src={hero}
                alt="about hero"
                className="w-[90%] h-auto object-cover rounded-xl"
              />
            </div>
            <div className="flex justify-end ">
              <Image
                src={hero}
                alt="about hero"
                className="w-[90%] h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="h-[900px] w-[1440px] flex items-center justify-between">
        <div className="flex flex-col  w-[40%]">
          <div className="w-full">
            <Image
              src={hero}
              alt="about hero"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-row mt-8 justify-between">
            <div className="flex justify-start">
              <Image
                src={hero}
                alt="about hero"
                className="w-[90%] h-auto object-cover rounded-xl"
              />
            </div>
            <div className="flex justify-end ">
              <Image
                src={hero}
                alt="about hero"
                className="w-[90%] h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[50%] gap-[60px]">
          <h2 className="font-playfair italic text-5xl text-cyan-700">
            Lorem ipsum
          </h2>
          <p className="font-quicksand leading-[2]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, quos, voluptates, quia quisquam voluptatibus, quos,
            voluptates, quia quisquam voluptatibus, quos, voluptates, quia
            quisquam voluptatibus, quos, voluptates, quia Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quisquam voluptatibus, quos,
            voluptates, quia quisquam voluptatibus, quos, voluptates, quia
            quisquam voluptatibus, quos, voluptates, quia quisquam voluptatibus,
            quos, voluptates, quia Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam voluptatibus, quos, voluptates, quia
            quisquam voluptatibus, quos, voluptates, quia quisquam voluptatibus,
            quos, voluptates, quia quisquam voluptatibus, quos, voluptates, quia
          </p>
          <p className="font-quicksand leading-[2]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, quos, voluptates, quia quisquam voluptatibus, quos,
            voluptates, quia quisquam voluptatibus, quos, voluptates, quia
            quisquam voluptatibus, quos, voluptates, quia Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quisquam voluptatibus, quos,
            voluptates, quia quisquam voluptatibus, quos, voluptates, quia
            quisquam voluptatibus, quos, voluptates, quia quisquam voluptatibus,
            quos, voluptates, quia Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam voluptatibus, quos, voluptates, quia
            quisquam voluptatibus, quos, voluptates, quia quisquam voluptatibus,
            quos, voluptates, quia quisquam voluptatibus, quos, voluptates, quia
          </p>
          <div className="flex gap-10">
            <button className="min-w-32 py-3 bg-cyan-700 text-gray-100 rounded-xl text-lg font-quicksand">
              Call
            </button>
            <button className="min-w-32 py-3 bg-cyan-700 text-gray-100 rounded-xl text-lg font-quicksand">
              Whatsapp
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
