import Image, { StaticImageData } from "next/image";

type Props = {
  heading: string;
  image: StaticImageData | string;
};

const Card = ({ heading, image }: Props) => {
  return (
    <div className="mx-2 my-3 rounded-md border px-2 text-center">
      <section className="p-2">
        <Image
          src={image}
          alt="conveyor"
          className="overflow-hidden rounded-md"
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
