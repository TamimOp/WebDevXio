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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6 backdrop-blur-md "
    >
      <div className="flex items-center space-x-3">
        <Image src="/assets/logo.png" alt="Logo" width={221} height={32.28} />
      </div>

      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item, i) => (
          <li key={i} className="relative group text-sm font-medium text-black">
            <Link
              href="#"
              className={`relative px-4 py-2 text-[15px] ${
                item === "Home" ? "font-semibold text-black" : ""
              }`}
            >
              {item}
              {/* Active glow for Home */}
              {item === "Home" && (
                <>
                  <div className="absolute inset-0 -z-10 blur-sm rounded-full bg-[#2E44FF] opacity-40" />
                  <span className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-1 h-1 bg-[#2E44FF] rounded-full" />
                </>
              )}
              {/* Small dot for others */}
              {item !== "Home" && (
                <span className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-1 h-1 bg-[#C2C2FF] rounded-full" />
              )}
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="group relative flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-500"
      >
        {/* Left Pencil Icon (default state only) */}
        <div className="group-hover:opacity-0 transition-all duration-300 bg-[#06197D] rounded-full p-2 flex items-center justify-center">
          <Image
            src="/assets/NEW BUTTON/pencil.png"
            width={19}
            height={19}
            alt="pencil"
          />
        </div>

        {/* Contact Us Text */}
        <p className="text-[#06197D] text-xl font-semibold transition-all duration-500 group-hover:text-white group-hover:translate-x-[-10px]">
          Contact Us
        </p>

        {/* Right Pencil Icon (visible only on hover) */}
        <div className="absolute right-6 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 border border-white rounded-full p-2">
          <Image
            src="/assets/NEW BUTTON/pencil.png"
            width={19}
            height={19}
            alt="pencil"
            className="invert"
          />
        </div>

        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </button>
    </motion.nav>
  );
}
