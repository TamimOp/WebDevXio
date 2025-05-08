"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navItems = ["Home", "Services", "Work", "About Us"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-10 backdrop-blur-sm"
    >
      <div className="flex items-center space-x-3">
        <Image src="/assets/logo.png" alt="Logo" width={221} height={32.28} />
      </div>

      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item, i) => (
          <li key={i} className="relative group text-sm font-medium text-black">
            <Link
              href="#"
              className="transition-colors duration-300 text-[15px]"
            >
              {item}
            </Link>
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-[#2E44FF] opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="w-auto p-2 active:scale-95 transition text-sm rounded-full hover:bg-black flex items-center justify-center gap-1"
      >
        <div className="bg-[#06197D] rounded-full p-2">
          <Image
            src="/assets/NEW BUTTON/pencil.png"
            width={19}
            height={19}
            alt="pencil"
          />
        </div>

        <p className="text-[#06197D] hover:text-white text-2xl mb-0.5">
          Contact Us
        </p>
      </button>
    </motion.nav>
  );
}
