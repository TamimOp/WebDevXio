import React from "react";
import Logo from "@/public/assets/Logo.webp";
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
    <footer className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-16 lg:px-40 py-10 text-gray-600 text-sm bg-white border-t border-gray-200">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image src={Logo} alt="Logo" width={140} height={20.64} />
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-6 text-center">
        {FooterItems.map((item, index) => (
          <a key={index} href="#" className="hover:text-black">
            {item}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} WebDevXio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
