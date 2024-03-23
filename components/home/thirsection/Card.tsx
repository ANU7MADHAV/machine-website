import Image, { StaticImageData } from "next/image";

type Props = {
  heading: string;
  image: StaticImageData | string;
};

const Card = ({ heading, image }: Props) => {
  return (
    <div className="mx-2 my-3 w-[400px] justify-center rounded-md border p-2 text-center md:flex">
      <section className="items-center ">
        <Image
          src={image}
          alt="conveyor"
          className="w-[300px] justify-center overflow-hidden rounded-md md:flex lg:h-[200px]"
        />
        <h2 className="pt-2 font-semibold">{heading}</h2>
        <button className="text-blue-black my-1 rounded-md border border-blue-300 px-2 py-1 outline-none transition-colors duration-300 ease-in-out hover:bg-blue-400 hover:text-white">
          SEE PRODUCTS
        </button>
      </section>
    </div>
  );
};

export default Card;
