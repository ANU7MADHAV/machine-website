import Image from "next/image";
import band from "@/public/band-sealer.jpg";
import box from "@/public/box-strapping.jpg";
import dry from "@/public/dry-ink1.jpg";
import hand from "@/public/hand-sealers.jpg";

const FourthSection = () => {
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-center text-2xl font-bold">TOP RATED PRODUCTS</h2>
      <div className="mx-2 my-2 h-1 bg-slate-300"></div>
      <section className="flex flex-col gap-y-6 px-2 py-3">
        <Image
          src={band}
          alt="band-sealer"
          className="overflow-hidden rounded-md"
        />
        <Image
          src={box}
          alt="box-strapping"
          className="overflow-hidden rounded-md"
        />
        <Image
          src={dry}
          alt="band-sealer"
          className="overflow-hidden rounded-md"
        />
        <Image
          src={hand}
          alt="band-sealer"
          className="overflow-hidden rounded-md"
        />
      </section>
    </div>
  );
};

export default FourthSection;
