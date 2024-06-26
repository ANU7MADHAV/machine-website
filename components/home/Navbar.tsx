import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { FiPhone } from "react-icons/fi";

const Navbar = () => {
  const navLinks = [
    {
      path: "/products",
      value: "Products",
    },
    {
      path: "/about-us",
      value: "About Us",
    },
    {
      path: "/contact-us",
      value: "Contact Us",
    },
    {
      path: "/",
      value: <FiPhone />,
    },
  ];
  return (
    <div className="flex items-center justify-between p-4 text-white">
      <Image src={logo} alt="logo" width={120} />
      <ul className="flex items-center  gap-x-8 pr-[200px]">
        {navLinks.map((link, key) => (
          <Link key={key} href={link.path}>
            <li>{link.value}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
