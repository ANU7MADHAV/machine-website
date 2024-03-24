import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const ContactOne = () => {
  return (
    <div className="flex flex-col items-center bg-slate-200 px-4 py-3">
      <section className="flex flex-col items-center">
        <span className="text-xs">Phoenix Packaging Solutions</span>
        <h2 className="text-4xl font-semibold">CONTACT US</h2>
      </section>
      <section className="flex items-center">
        <Link href="/">
          <h5 className="font-semibold">Home</h5>
        </Link>
        <FaAngleRight />
        <h5 className="font-light">CONTACT US</h5>
      </section>
    </div>
  );
};

export default ContactOne;
