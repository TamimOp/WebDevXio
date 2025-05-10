"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./Button";

const navItems = ["Home", "Services", "Work", "About Us"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 pointer-events-auto"
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

              {item === "Home" && (
                <>
                  <div className="absolute inset-0 -z-10 blur-sm rounded-full bg-[#2E44FF] opacity-40" />
                  <span className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-1 h-1 bg-[#2E44FF] rounded-full" />
                </>
              )}
              {item !== "Home" && (
                <span className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-1 h-1 bg-[#C2C2FF] rounded-full" />
              )}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:block">
        <Button />
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-start gap-4 px-6 py-4 z-50">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href="#"
              className={`w-full text-[15px] ${
                item === "Home" ? "font-semibold text-black" : "text-gray-700"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Button />
        </div>
      )}
    </motion.nav>
  );
}
