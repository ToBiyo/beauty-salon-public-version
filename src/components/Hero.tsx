import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";

export const Hero = () => {
  return (
    <section className="flex flex-row h-[70vh]  w-[80vw]  relative bg-[url(../../public/assets/images/new.png)] bg-contain bg-fixed  overflow-hidden rounded-t-3xl">
      {/* <Image src={image} alt="image" className="w-[100%] h-[auto] " /> */}
      <div className="absolute inset-0 bg-gray-600 bg-opacity-60 px-10">
        <div className="h-full w-[40%] flex flex-col justify-center gap-12">
          <Heading textColor="text-accent" main={true}>
            Dove la bellezza incontra il benessere
          </Heading>
          <SubHeading textColor="text-gray-200">
            Rigenera corpo e mente con trattamenti estetici su misura.
          </SubHeading>
          <button className="bg-accent text-gray-50  max-w-32 py-3 rounded-3xl text-lg">
            Scopri di più
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] ">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-[100px]"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="fill-sectionBg"
          />
        </svg>
      </div>
    </section>
  );
};

{
  /* <div className="absolute w-[100%]  h-[100%] flex items-center bg-tortora bg-opacity-40">
  <div className="max-w-[40%] ml-[10%] flex flex-col gap-12 opacity-100">
    <Heading main={true} textColor="text-cyan-700">
      Lorem ipsum dolor sit amet
    </Heading>
    <SubHeading textColor="text-gray-100">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio voluptatem
      ipsum esse sed beatae hic veniam, libero totam commodi repellat.
    </SubHeading>
    <button className="text-gray-50 block max-w-36 bg-cyan-700 p-3 rounded-lg">
      Something
    </button>
  </div>
</div>;
 */
}

("");
