import React from "react";
import Logo from "@/public/assets/Logo.png";
import Image from "next/image";

const FooterItems = [
  "Contact",
  "Work",
  "About Us",
  "Privacy & Policy",
  "Terms & Condition",
];

const Footer = () => {
  return (
    <footer className="flex items-center justify-between flex-wrap gap-6 px-40 py-10 text-gray-600 text-sm bg-white border-t border-gray-200">
      <div className="flex items-center space-x-2">
        <Image src={Logo} alt="Logo" width={140} height={20.64} />
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {FooterItems.map((item, index) => (
          <a key={index} href="#" className="hover:text-black">
            {item}
          </a>
        ))}
      </div>

      <div>
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} WebDevXio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
