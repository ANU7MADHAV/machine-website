import { BsBuildings } from "react-icons/bs";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

const Information = () => {
  return (
    <main className="justify-center  md:flex">
      <div className="space-y-5 px-4 text-left lg:flex lg:flex-col lg:gap-y-12 ">
        <div className="flex items-center gap-x-3 pl-2">
          <BsBuildings className="text-6xl" />
          <section>
            <h3 className="text-xl">Address</h3>
            <p>10/248/A, Vengoor, Angamaly, Ernakulam 683572</p>
          </section>
        </div>
        <div className="flex items-center gap-x-3 ">
          <MdOutlineMail className="text-6xl" />
          <section>
            <h3 className="text-xl">Email Address</h3>
            <p>info@mapack.in</p>
          </section>
        </div>
        <div className="flex items-center gap-x-3">
          <CiPhone className="text-6xl" />
          <section>
            <h3 className="text-xl">Phone Numbers</h3>
            <p>+91 484 245 87 54 | +91 79077 91814</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Information;
