"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // added useRouter
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { SlPencil } from "react-icons/sl";
import Logo from "@/public/assets/Logo.png";
import Button from "@/components/Button";

const navItems = [
  { label: "Home", target: "#home" },
  { label: "About Us", target: "#about" },
  { label: "Services", target: "#services" },
  { label: "Work", target: "#work" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");
  const menuRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const elements = navItems.map((item) =>
      document.querySelector(item.target)
    );
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    if (pathname === "/") {
      const visible = elements.find(
        (el) => el && el.getBoundingClientRect().top >= 0
      );
      if (visible) setActiveId(visible.id);
      else if (elements[0]) setActiveId(elements[0].id);
    }

    return () => observer.disconnect();
  }, [pathname]);

  const handleScroll = (e, target) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/" + target);
      setIsOpen(false);
    } else {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      {/* Initial Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-6 md:px-12 xl:px-20 py-5 bg-transparent"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              const home = document.querySelector("#home");
              if (home) home.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="flex-shrink-0"
        >
          <Image
            src={Logo}
            alt="Logo"
            width={221}
            height={32.28}
            className="w-[140px] md:w-[180px] lg:w-[221px] h-auto cursor-pointer"
          />
        </Link>

        {/* Navigation */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="relative group text-sm font-medium text-black flex items-center gap-1"
            >
              <Link
                href={item.target}
                scroll={false}
                className={`relative px-2 xl:px-4 py-2 text-[17px] whitespace-nowrap ${
                  activeId === item.target.slice(1)
                    ? "text-[#274AFF]"
                    : "text-black"
                }`}
                onClick={(e) => handleScroll(e, item.target)}
              >
                {item.label}
              </Link>
              {activeId === item.target.slice(1) && (
                <span className="w-2 h-2 bg-[#274AFF] rounded-full" />
              )}
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="hidden lg:block ml-4">
          <Button
            label="Contact Us"
            Icon={SlPencil}
            onClick={() => {
              if (pathname !== "/") {
                router.push("/#contact");
              } else {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </div>

        {/* Hamburger for mobile */}
        <div className="lg:hidden flex items-center gap-2 z-50">
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

      {/* Sticky Scrolled Navbar */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-[60] backdrop-blur-lg bg-white/60 rounded-full shadow-xl px-4 py-3 hidden lg:flex items-center gap-6 w-full max-w-3xl justify-between"
          >
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  const home = document.querySelector("#home");
                  if (home) home.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex items-center py-1 pl-2"
            >
              <Image
                src={Logo}
                alt="Logo"
                width={160}
                height={42}
                className="w-[160px] h-auto object-contain"
              />
            </Link>

            <ul className="flex items-center gap-5">
              {navItems.map((item, i) => (
                <li key={i} className="flex items-center gap-1">
                  <Link
                    href={item.target}
                    scroll={false}
                    className={`text-[18px] font-medium whitespace-nowrap ${
                      activeId === item.target.slice(1)
                        ? "text-[#274AFF]"
                        : "text-black"
                    }`}
                    onClick={(e) => handleScroll(e, item.target)}
                  >
                    {item.label}
                  </Link>
                  {activeId === item.target.slice(1) && (
                    <span className="w-2 h-2 bg-[#274AFF] rounded-full" />
                  )}
                </li>
              ))}
            </ul>

            <Button
              label="Contact Us"
              Icon={SlPencil}
              className="text-sm px-4 py-2.5 flex items-center gap-2"
              onClick={() => {
                if (pathname !== "/") {
                  router.push("/#contact");
                } else {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
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
                    href={item.target}
                    scroll={false}
                    className="flex items-center justify-between text-lg font-medium text-black"
                    onClick={(e) => handleScroll(e, item.target)}
                  >
                    {item.label}
                    {item.label === "Home" && (
                      <span className="bg-gradient-to-br from-black to-[#828282] text-white rounded-full p-2">
                        <FiArrowUpRight />
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button
                label="Contact Us"
                Icon={SlPencil}
                className="w-full justify-center text-sm py-2"
                fullWidth
                onClick={() => {
                  if (pathname !== "/") {
                    router.push("/#contact");
                  } else {
                    const el = document.querySelector("#contact");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                      setIsOpen(false);
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
