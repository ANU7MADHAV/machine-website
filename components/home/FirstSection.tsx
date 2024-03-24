import Link from "next/link";
import Button from "../Button";

const FirstSection = () => {
  return (
    <div className="h-screen  bg-opacity-50 bg-[url('/home.jpg')] bg-cover bg-fixed bg-center bg-no-repeat text-center">
      <div className="flex h-full w-full flex-col justify-center rounded-lg bg-black bg-opacity-50 p-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Complete Packaging and Coding Solution Provider.
        </h1>
        <h3 className="mb-6 text-xl font-bold text-white">
          Carton Sealing Machine | Packing Machine| Coding Machine| Strapping
          Machine
        </h3>
        <div className="space-x-4">
          <Link href="/about-us">
            <Button>About us</Button>
          </Link>
          <Link href="/contact-us">
            <Button>Contact us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
