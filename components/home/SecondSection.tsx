import Image from "next/image";
import material from "@/public/material.jpeg";
import packaging from "@/public/packaging.jpeg";
import tools from "@/public/tools.jpeg";

const SecondSection = () => {
  return (
    <div className="r flex h-screen flex-col justify-center text-center">
      <div className="mb-[80px] text-3xl font-bold">
        <h2>Products</h2>
      </div>
      <div className="flex justify-center gap-8">
        <section>
          <Image
            src={packaging}
            alt="packaging machines "
            className="h-[250px] w-[250px] overflow-hidden rounded-lg"
          />
          <h3 className="my-2 text-lg font-semibold">Packing Machines</h3>
        </section>
        <section>
          <Image
            src={tools}
            alt=" packaging tools"
            className="h-[250px] w-[250px] overflow-hidden rounded-lg"
          />
          <h3 className="my-2 text-lg font-semibold">Packing Tools</h3>
        </section>
        <section>
          <Image
            src={material}
            alt="packaging material"
            className="h-[250px] w-[250px] overflow-hidden rounded-lg"
          />
          <h3 className="my-2 text-lg font-semibold">Packing Materials</h3>
        </section>
      </div>
    </div>
  );
};

export default SecondSection;
