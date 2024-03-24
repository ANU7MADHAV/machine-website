import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const AboutOne = () => {
  return (
    <div className="flex flex-col items-center bg-slate-200 px-4 py-3">
      <section className="flex flex-col items-center">
        <span className="text-xs">Phoenix Packaging Solutions</span>
        <h2 className="text-5xl font-semibold">ABOUT US</h2>
      </section>
      <section className="flex items-center">
        <Link href="/">
          <h5 className="font-semibold">Home</h5>
        </Link>
        <FaAngleRight />
        <h5 className="font-light">ABOUT US</h5>
      </section>
    </div>
  );
};

export default AboutOne;
