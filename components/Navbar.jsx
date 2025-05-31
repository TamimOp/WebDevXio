"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { SlPencil } from "react-icons/sl";
import Logo from "@/public/assets/Logo.png";
import Button from "@/components/Button";

const navItems = ["Home", "Services", "Work", "About Us"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-6 pointer-events-auto"
      >
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src={Logo}
            alt="Logo"
            width={221}
            height={32.28}
            className="w-[140px] lg:w-[221px] h-auto"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
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
        <div className="hidden lg:block">
          <Button label="Contact Us" Icon={SlPencil} />
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2 z-50">
          <Button
            label="Contact Us"
            Icon={SlPencil}
            className="text-xs px-2 py-1"
          />

          {/* Menu toggle icon with solid color background */}
          <div className="relative w-[38px] h-[38px] bg-[#274AFF] rounded-bl-[70%] flex items-center justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 pt-[96px] px-4 flex justify-center items-start">
          <div
            ref={menuRef}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6"
          >
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
                      <span className="bg-gradient-to-br from-black to-[#828282] text-white rounded-full p-2">
                        <FiArrowUpRight />
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
