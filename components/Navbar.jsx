"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { SlPencil } from "react-icons/sl";
import Logo from "@/public/assets/Logo.png";
import Button from "@/components/Button";

const navItems = ["Home", "Services", "Work", "About Us"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 pointer-events-auto"
      >
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src={Logo}
            alt="Logo"
            width={221}
            height={32.28}
            className="w-[140px] md:w-[221px] h-auto"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="relative group text-sm font-medium text-black"
            >
              <Link
                href="#"
                className={`relative px-4 py-2 text-[15px] ${
                  item === "Home" ? "font-semibold text-black" : ""
                }`}
              >
                {item}
                {item === "Home" && (
                  <div className="absolute inset-0 -z-10 blur-lg rounded-full bg-[#2E44FF] opacity-40" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Button label="Contact Us" Icon={SlPencil} />
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center gap-2 z-50">
          {/* Contact button - only visible when menu is open */}
          {isOpen && <Button label="Contact Us" Icon={SlPencil} />}
          {/* Hamburger / Cross icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 pt-[96px] px-4 flex justify-center items-start">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
            <ul className="space-y-4 mt-2">
              {navItems.map((item, i) => (
                <li key={i} className="border-b pb-2 last:border-none">
                  <Link
                    href="#"
                    className="flex items-center justify-between text-lg font-medium text-black"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                    {item === "Home" && (
                      <span className="bg-black text-white rounded-full p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
